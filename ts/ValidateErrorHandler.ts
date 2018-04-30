/**
 * ValidateErrorHandler
 * input にイベント設定することで、バリデート時のクラス付与などを設定するクラス
 */
class ValidateErrorHandler {
	private target: string;
	/**
	 * @param {string} eventTarget イベントをセットするターゲット要素の id
	 */
	constructor(eventTarget: string) {
		this.target = eventTarget;
		this.setEvent();
	}
	/**
	 * イベントセットするメソッド
	 */
	private setEvent(): void {
		document.getElementById(this.target).addEventListener("onerror", e => {
			const errorList = (<CustomEvent>e).detail;
			for (let i = 0; i < errorList.length; i++) {
				const element = errorList[i];
				document.getElementById(element).classList.add("lack_inp");
			}
		}, false);
		document.getElementById(this.target).addEventListener("onreset", e => {
			// 必須のほう
			const inputs = document.querySelectorAll(".validate_text");
			for (let i = 0; i < inputs.length; i++) {
				const elm = inputs[i];
				elm.classList.remove("lack_inp");
			}
			// オプションのほう
			const inputs2 = document.querySelectorAll(".validate_option");
			for (let i = 0; i < inputs2.length; i++) {
				const elm = inputs2[i];
				elm.classList.remove("lack_inp");
			}
		}, false);
	}
}
