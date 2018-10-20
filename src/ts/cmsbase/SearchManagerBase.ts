import { id_search, json_obj_search, pagingRequest, url_search } from "../../typings/base";
import { ajaxFormAsync, fireEventById } from "../common";

/**
 * SearchManagerBase 検索部を担当する基本クラス
 */
export class SearchManagerBase {
	private idObj: id_search;
	private urlObj: url_search;
	constructor(idObj: id_search, urlObj: url_search) {
		this.idObj = idObj;
		this.urlObj = urlObj;
		this.setEvent();
	}
	private setEvent(): void {
		// 検索ボタン
		const searchElm = document.getElementById(this.idObj.search);
		const formElm = <HTMLFormElement>document.getElementById(this.idObj.form);
		if (searchElm === null) {
			throw new Error("mandatory element not found");
		}
		if (formElm === null) {
			throw new Error("mandatory element not found");
		}
		searchElm.addEventListener("click", async () => {
			try {
				const json: json_obj_search = await ajaxFormAsync(formElm, this.urlObj.search, "switchable");
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
		formElm.addEventListener("searchrequest", e => {
			const data: pagingRequest = <pagingRequest>(<CustomEvent>e).detail;
			(<HTMLInputElement>formElm.querySelector("input[name=page]")).value = data.page.toString();
			searchElm.click();
		}, false);
	}
}
