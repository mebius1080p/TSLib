/**
 * InputValidator
 * バリデートしたい要素に特定の属性やクラスを付与することで自動バリデートを行うクラス
 */
class InputValidator {
	private vObj: validatorObj[];
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
	/**
	 * 個人情報第二グループのような、必須ではないが一つに値が入っていればほかのすべても入れておかないといけない場合のためのメソッド
	 */
	public ValidateOptional(): void {
		const inputs: NodeListOf<Element> = document.querySelectorAll(".validate_option");
		const optional = [];
		let filledCount: number = 0; // 一つでも埋まっているかどうかをチェックするカウンター
		// データ収集　オブジェクトの配列を作る
		for (let i = 0; i < inputs.length; i++) {
			const element: Element = inputs[i];
			optional.push({
				"id": element.id,
				"method": element.getAttribute("data-validate-method"),
				"value": (<HTMLInputElement>element).value,
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
					const isValid = this[elm.method](elm.value);
					if (!isValid) {
						this.errorIds.push(elm.id); // バリデートエラーでも追加
					}
				}
			}
		}
	}
	/**
	 * バリデートする input の要素から情報を集めるメソッド
	 */
	private gatherElements(): void {
		const inputs: NodeListOf<Element> = document.querySelectorAll(".validate_text");
		for (let i = 0; i < inputs.length; i++) {
			const element: Element = inputs[i];
			this.vObj.push({
				"id": element.id, // バリデートエラー時にクラスを付与するために使用
				"method": element.getAttribute("data-validate-method"),
				"required": element.classList.contains("required"), // このフラグを別に用意することで、必須ではないがバリデートはしたいという要望に応えられる
				"value": (<HTMLInputElement>element).value,
			});
		}
		// ラジオボタン、チェックボックスは未実装
	}
	/**
	 * バリデートを行うメソッド
	 */
	private validate(): void {
		for (let i = 0; i < this.vObj.length; i++) {
			const element = this.vObj[i];
			if (element.required) {
				const isValid = this[element.method](element.value);
				if (!isValid) {
					this.errorIds.push(element.id);
				}
			} else {
				if (element.value !== "") {// 必須でなくとも何か入っていればバリデートする
					const isValid = this[element.method](element.value);
					if (!isValid) {
						this.errorIds.push(element.id);
					}
				}
			}
		}
	}
	/**
	 * 値が空文字でないかチェックするメソッド
	 * @param {string} value バリデートする文字列
	 * @return {boolean} 値が空文字だったら false
	 */
	private basic(value: string): boolean {
		return value !== "";
	}
	/**
	 * 値が 7 桁の数値か否かをチェックする ハイフン未対応
	 * @param {string} value バリデートする文字列
	 * @returns {boolean} 半角 7 桁の数値かどうかのフラグ
	 */
	private postal(value: string): boolean {
		return this.rePostal.test(value);
	}
	/**
	 * 半角数字で始まり、半角数値かハイフンがあり、半角数値で終わる文字かどうかをチェック
	 * @param {string} value バリデートする文字列
	 * @returns {boolean} 値が電話番号らしきものかどうかのフラグ
	 */
	private tel(value: string): boolean {
		return this.rePhone.test(value);
	}
	/**
	 * 文字列がメールアドレスかどうかをチェックするメソッド 非常に簡易的
	 * @param {string} value バリデートする文字列
	 * @returns {boolean} 文字列がメールアドレスかどうかのフラグ
	 */
	private mail(value: string): boolean {
		return this.reMail.test(value);
	}
}
