/**
 * ValidateErrorHandler
 */
class ValidateErrorHandler {
	private target: string;
	/**
	 *@param {string} eventTarget イベントをセットするターゲット要素の id
	 */
	constructor(eventTarget: string) {
		this.target = eventTarget;
		this.setEvent();
	}
	private setEvent() {
		document.getElementById(this.target).addEventListener("onerror", e => {
			let errorList = e.detail;
			for (var i = 0; i < errorList.length; i++) {
				var element = errorList[i];
				document.getElementById(element).classList.add("lack_inp");
			}
		}, false);
		document.getElementById(this.target).addEventListener("onreset", e => {
			//必須のほう
			let inputs = document.querySelectorAll(".validate_text");
			for (var i = 0; i < inputs.length; i++) {
				var elm = inputs[i];
				elm.classList.remove("lack_inp");
			}
			//オプションのほう
			let inputs2 = document.querySelectorAll(".validate_option");
			for (var i = 0; i < inputs2.length; i++) {
				var elm = inputs2[i];
				elm.classList.remove("lack_inp");
			}
		}, false);
	}
}