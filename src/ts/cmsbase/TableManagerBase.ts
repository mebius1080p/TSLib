/**
 * TableManagerBase 検索結果テーブルを担当する基礎クラス
 * 必ず継承して使用する
 */
export abstract class TableManagerBase {
	private idObj: id_search;
	constructor(idObj: id_search) {
		this.idObj = idObj;
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
			this.applyToTable(data.data);
		}, false);
	}
}
