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
	const refresh: string = response.headers.get("refresh");
	const reRedirect: RegExp = /url=(.+)$/;
	if (reRedirect.test(refresh)) {
		const result: RegExpMatchArray = refresh.match(reRedirect);
		location.href = result[1];
	}
}

/**
 * カスタムイベントを発生させて DOM 間でデータ転送するための関数
 * @param {string} targetid イベントを発生させる要素の id
 * @param {string} eventname イベント名
 * @param {object} data イベントで転送するデータ
 */
export function fireEventById(targetid: string, eventname: string, data: object): void {
	const evt = document.createEvent("CustomEvent");
	evt.initCustomEvent(eventname, false, false, data);
	document.getElementById(targetid).dispatchEvent(evt);
}
/**
 * いつもの json を受け取る便利関数 旧バージョン
 * @deprecated
 * @param {Request} request Request オブジェクト
 * @return {Promise<object>} promise object
 */
export function fetchUtilJson(request: Request): Promise<object> {
	return fetch(request).then(response => {
		redirectChecker(response);
		return new Promise((resolve, reject) => {
			if (response.ok) {
				resolve(response.json());
			} else {
				reject(response.statusText);
			}
		});
	}).then(json => {
		return new Promise((resolve, reject) => {
			if ((<any>json).status === "ok") {
				resolve(json);
			} else {
				reject(json);
			}
		});
	});
}

/**
 * fetchUtilJson の async/await バージョン。行数は短い
 * @param {Request} request リクエスト
 * @return {Promise<json_obj>} プロミスオブジェクト
 * @throws {*} 通信エラー、ステータス bad などで例外
 */
export async function fetchUtilJsonAsync(request: Request): Promise<json_obj> {
	const response: Response = await fetch(request);
	redirectChecker(response);
	if (!response.ok) {
		throw response;
	}
	const json: json_obj = await response.json();
	if (json.status !== "ok") {
		throw json;
	}
	return json;
}

/**
 * form 要素を ajax 通信で投げる関数
 * @param {HTMLFormElement} formElm ajax で送りつける form 要素
 * @param {string} url ajax で通信する url
 * @param {string} classString ajax 通信中に無効にする要素につけたクラス名
 * @return {Promise<json_obj>} promise object
 * @throws {*} 通信エラー、ステータス bad などで例外
 */
export async function ajaxFormAsync(formElm: HTMLFormElement, url: string, classString: string): Promise<json_obj> {
	try {
		const form: FormData = new FormData(formElm);
		const req: Request = new Request(url, {
			body: form,
			credentials: "include",
			method: "POST",
			redirect: "manual",
		});
		disableButtonByClassName(classString);
		const json = await fetchUtilJsonAsync(req);
		enableButtonByClassName(classString);
		return json;
	} catch (error) {
		enableButtonByClassName(classString);
		throw error;
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
export async function fetchJsonObjAsync<T>(fetchOption: ISimpleFetchOption): Promise<IJsonObj<T>> {
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

/**
 * クラスにつけた名前で要素を無効にする関数
 * @param {string} className 無効にする要素につけたクラス名
 */
export function disableButtonByClassName(className: string): void {
	const buttons: NodeListOf<Element> = document.querySelectorAll("." + className);
	Array.prototype.forEach.call(buttons, btn => {
		btn.disabled = true;
	});
}

/**
 * クラスにつけた名前で要素を有効にする関数
 * @param {string} className 有効にする要素につけたクラス名
 */
export function enableButtonByClassName(className: string): void {
	const buttons: NodeListOf<Element> = document.querySelectorAll("." + className);
	Array.prototype.forEach.call(buttons, btn => {
		btn.disabled = false;
	});
}
