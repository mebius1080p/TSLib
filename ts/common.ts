/**
 * イベントを発生させる関数
 * @param targetid イベントを発生させる要素の id
 * @param eventname イベント名
 * @param data イベントで転送するデータ
 */
export function fireEventById(targetid: string, eventname: string, data: object) {
	const evt = document.createEvent("CustomEvent");
	evt.initCustomEvent(eventname, false, false, data);
	document.getElementById(targetid).dispatchEvent(evt);
}
/**
 * いつもの json を受け取る便利関数
 * @param request Request オブジェクト
 * @return promise を返す
 */
export function fetchUtilJson(request: Request): Promise<object> {
	return fetch(request).then(response => {
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
 * @param request リクエスト
 * @return Promise<any> プロミス。return で返した値が Promise にくるまれて返される
 * @throws any 通信エラー、ステータス bad などで例外
 */
export async function asyncFetchUtilJson(request: Request): Promise<any> {
	const response: Response = await fetch(request);
	if (!response.ok) {
		throw response;
	}
	const json: any = await response.json();
	if (json.status !== "ok") {
		throw json;
	}
	return json;
}

/**
 * クラスにつけた名前で要素を無効にする関数
 * @param className 無効にする要素につけたクラス名
 */
export function disableButtonByClassName(className: string) {
	const buttons: NodeListOf<Element> = document.querySelectorAll("." + className);
	Array.prototype.forEach.call(buttons, btn => {
		btn.disabled = true;
	});
}

/**
 * クラスにつけた名前で要素を有効にする関数
 * @param className 有効にする要素につけたクラス名
 */
export function enableButtonByClassName(className: string) {
	const buttons: NodeListOf<Element> = document.querySelectorAll("." + className);
	Array.prototype.forEach.call(buttons, btn => {
		btn.disabled = false;
	});
}
