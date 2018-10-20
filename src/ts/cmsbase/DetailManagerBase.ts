import { id_detail, json_obj, url_detail } from "../../typings/base";
import { ajaxFormAsync } from "../common";

/**
 * DetailManagerBase 詳細・新規作成ページを管理するクラス
 * その他イベントが必要な場合は継承してイベント設定する
 */
export class DetailManagerBase {
	private idObj: id_detail;
	private urlObj: url_detail;
	constructor(idObj: id_detail, urlObj: url_detail) {
		this.idObj = idObj;
		this.urlObj = urlObj;
		this.setEvent();
	}
	private setEvent(): void {
		// コミット
		const commitBtn = document.getElementById(this.idObj.commit);
		if (commitBtn !== null) {
			commitBtn.addEventListener("click", async () => {
				try {
					const formElm: HTMLFormElement = <HTMLFormElement>document.getElementById(this.idObj.form);
					const json: json_obj = await ajaxFormAsync(formElm, this.urlObj.commit, "switchable");
					alert("登録しました");
				} catch (error) {
					console.dir(error);
					if ("message" in error) {
						alert(error.message);
					}
				}
			}, false);
		}

		// 削除
		const deleteBtn: HTMLElement | null = document.getElementById(this.idObj.delete);
		if (deleteBtn !== null) {
			deleteBtn.addEventListener("click", async () => {
				try {
					const formElm: HTMLFormElement = <HTMLFormElement>document.getElementById(this.idObj.form);
					const json: json_obj = await ajaxFormAsync(formElm, this.urlObj.commit, "switchable");
					alert("削除しました");
					location.href = this.urlObj.cancel;
				} catch (error) {
					console.dir(error);
					if ("message" in error) {
						alert(error.message);
					}
				}
			}, false);
		}

		// キャンセル
		const cancelBtn: HTMLElement | null = document.getElementById(this.idObj.cancel);
		if (cancelBtn !== null) {
			cancelBtn.addEventListener("click", () => {
				location.href = this.urlObj.cancel;
			}, false);
		}
	}
}
