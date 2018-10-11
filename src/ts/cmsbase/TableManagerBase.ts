import { id_search_base, paring_search_result } from "../../typings/base";

/**
 * TableManagerBase 検索結果テーブルを担当する基礎クラス
 * 必ず継承して使用する
 */
export abstract class TableManagerBase {
	protected template: DocumentFragment;
	private idObj: id_search_base;
	constructor(idObj: id_search_base) {
		this.idObj = idObj;
		const content: DocumentFragment = (<HTMLTemplateElement>document.getElementById(this.idObj.template)).content;
		this.template = document.importNode(content, true);
		this.setEvent();
	}
	/**
	 * 検索結果をテーブルに反映するメソッド。継承クラスで中身を実装すること
	 * @param data 検索結果の入った配列
	 */
	protected abstract applyToTable(data): void;
	/**
	 * 検索結果受け取りイベントを設定するメソッド
	 */
	private setEvent(): void {
		document.getElementById(this.idObj.table).addEventListener("onsearch", e => {
			const data: paring_search_result = <paring_search_result>(<CustomEvent>e).detail;
			this.clearTable();
			this.applyToTable(data.data);
		}, false);
	}
	/**
	 * 結果テーブルの中身をクリアするメソッド
	 */
	private clearTable(): void {
		const tableElm: HTMLElement = document.getElementById(this.idObj.table);
		while (tableElm.lastChild) {
			tableElm.removeChild(tableElm.lastChild);
		}
	}
}
