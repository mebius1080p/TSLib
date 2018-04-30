import { ajaxFormAsync, fireEventById } from "../common";

/**
 * SearchManagerBase 検索部を担当する基本クラス
 */
export class SearchManagerBase {
	private idObj: idObj_base;
	private urlObj: urlObj_base;
	constructor(idObj: idObj_base, urlObj: urlObj_base) {
		this.idObj = idObj;
		this.urlObj = urlObj;
		this.setEvent();
	}
	private setEvent(): void {
		// 検索ボタン
		document.getElementById(this.idObj.search).addEventListener("click", async () => {
			try {
				const formElm: HTMLFormElement = <HTMLFormElement>document.getElementById(this.idObj.form);
				const json = await ajaxFormAsync(formElm, this.urlObj.search, "switchable");
				console.dir(json);

				// イベントで転送
				fireEventById(this.idObj.paging, "onsearch", json.data);
				fireEventById(this.idObj.table, "onsearch", json.data);
			} catch (error) {
				console.dir(error);
				if ("message" in error) {
					alert(error.message);
				}
			}
		}, false);
		// ページングクリックでの検索リクエスト
		document.getElementById(this.idObj.form).addEventListener("searchrequest", e => {
			const data = (<CustomEvent>e).detail;
			(<HTMLInputElement>document.getElementById(this.idObj.form).querySelector("input[name=page]")).value = data.page;
			document.getElementById(this.idObj.search).click();
		}, false);
	}
}
