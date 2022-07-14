/**
 * fetch 時のレスポンスでリダイレクトが帰ってきたときのための関数
 * @param {Response} response fetch レスポンス
 */
function redirectChecker(response: Response): void {
	// http の location ヘッダーでリダイレクト指示があった場合
	if (response.type === "opaqueredirect" && response.url !== "") {
		location.href = response.url; // リダイレクトが返ってきたのだから、再度ブラウザの移動で同じことをしてもリダイレクトする
	}
	// http の refresh ヘッダーでリダイレクト指示があった場合
	if (!response.headers.has("refresh")) {
		return; // 持ってなければここで終了
	}
	// location ヘッダーでのリダイレクト指示の場合と同様に処理すれば簡単だが、
	// ネットワークリクエストが一つ余分に発生してしまう。
	// RegExp による比較が発生するが、url を取り出して直接リダイレクト先にアクセスする
	const refresh: string | null = response.headers.get("refresh");
	if (refresh === null) {
		return;
	}
	const reRedirect: RegExp = /url=(.+)$/;
	if (reRedirect.test(refresh)) {
		const result: RegExpMatchArray | null = refresh.match(reRedirect);
		if (result === null) {
			return;
		}
		location.href = result[1];
	}
}

/**
 * json レスポンス用のオブジェクトインターフェース
 * data の中身は型引数で指定する
 */
export interface IJsonObj<T> {
	status: string;
	data: T;
	message: string;
}

/**
 * fetchJsonObjAsync 用の引数インターフェース
 */
export interface ISimpleFetchOption {
	url: string;
	body?: BodyInit;
	method?: "GET" | "POST";
}

/**
 * JsonObj を fetch する関数
 * @param fetchOption fetch オプション
 * @returns {Promise<IJsonObj<T>>}
 */
export async function fetchJsonObjAsync<T>(
	fetchOption: ISimpleFetchOption
): Promise<IJsonObj<T>> {
	const reqOption: RequestInit = {
		credentials: "include",
		method: fetchOption.method || "GET",
		redirect: "manual",
	};
	if ("body" in fetchOption) {
		reqOption.body = fetchOption.body;
	}
	const req: Request = new Request(fetchOption.url, reqOption);
	const response: Response = await fetch(req);
	redirectChecker(response);
	if (!response.ok) {
		throw response;
	}
	const json: IJsonObj<T> = await response.json();
	if (json.status !== "ok") {
		throw json;
	}
	return json;
}
