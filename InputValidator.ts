/**
 * InputValidator
 */
class InputValidator {
	private vObj: { "id": string, "value": string, "method": string, "required": boolean }[];
	private errorIds: string[] = [];
	private reMail = /.+@.+/; // 簡易メアドチェック
	private rePostal = /^[0-9]{7}$/;
	private rePhone = /^[0-9][0-9\-]+[0-9]$/;

	public get ErrorIds(): string[] {
		return this.errorIds;
	}

	constructor() {
		this.vObj = [];
		this.gatherElements();
		this.validate();
	}
	private gatherElements() {
		let inputs = document.querySelectorAll(".validate_text");
		for (let i = 0; i < inputs.length; i++) {
			const element = inputs[i];
			this.vObj.push({
				"id": element.id, // バリデートエラー時にクラスを付与するために使用
				"value": (<HTMLInputElement>element).value,
				"method": element.getAttribute("data-validate-method"),
				"required": element.classList.contains("required")// このフラグを別に用意することで、必須ではないがバリデートはしたいという要望に応えられる
			});
		}
		// ラジオボタン、チェックボックスは未実装
	}
	private validate() {
		for (let i = 0; i < this.vObj.length; i++) {
			const element = this.vObj[i];
			if (element.required) {
				let isValid = this[element.method](element.value);
				if (!isValid) {
					this.errorIds.push(element.id);
				}
			} else {
				if (element.value !== "") {// 必須でなくとも何か入っていればバリデートする
					let isValid = this[element.method](element.value);
					if (!isValid) {
						this.errorIds.push(element.id);
					}
				}
			}
		}
	}
	/**
	 *個人情報第二グループのような、必須ではないが一つに値が入っていればほかのすべても入れておかないといけない場合のためのメソッド
	 */
	public ValidateOptional() {
		let inputs = document.querySelectorAll(".validate_option");
		let optional = [];
		let filledCount = 0; // 一つでも埋まっているかどうかをチェックするフラグ
		// データ収集　オブジェクトの配列を作る
		for (let i = 0; i < inputs.length; i++) {
			const element = inputs[i];
			optional.push({
				"id": element.id,
				"value": (<HTMLInputElement>element).value,
				"method": element.getAttribute("data-validate-method")
			});
			if ((<HTMLInputElement>element).value !== "") {
				filledCount++;
			}
		}
		if (filledCount > 0) {
			// 何か一つでも入っていればチェックする
			for (let i = 0; i < optional.length; i++) {
				const elm = optional[i];
				if (elm.value === "") {
					this.errorIds.push(elm.id); // 空なら追加
				} else {
					let isValid = this[elm.method](elm.value);
					if (!isValid) {
						this.errorIds.push(elm.id); // バリデートエラーでも追加
					}
				}
			}
		}
	}
	private basic(value: string) {
		return value !== "";
	}
	private postal(value: string) {
		return this.rePostal.test(value);
	}
	private tel(value: string) {
		return this.rePhone.test(value);
	}
	private mail(value: string) {
		return this.reMail.test(value);
	}
}