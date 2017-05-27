"use strict";
/**
 * コンストラクタに指定した id の要素以下で、resetable というクラスを持つ要素をリセットさせるクラス
 * form 要素で囲んで reset メソッドを呼ぶのが一番だが、一部だけ選択的にリセットしたい場合などに便利
 */
class FormResetter {
	private id: string;
	constructor(id) {
		this.id = id;
	}
	/**
	 * リセットメソッド
	 */
	public Reset() {
		const resetElm = document.getElementById(this.id).querySelectorAll(".resetable");
		for (let i = 0; i < resetElm.length; i++) {
			const element = resetElm[i];
			if (element.tagName === "INPUT") {
				switch ((<HTMLInputElement>element).type) {
					case "checkbox":
						(<HTMLInputElement>element).checked = false;
						break;
					case "radio":
						// do nothing...
						break;
					case "file":
						// do nothing...
						break;
					default: // text, number, email...
						(<HTMLInputElement>element).value = "";
						break;
				}
			} else if (element.tagName === "TEXTAREA") {
				(<HTMLInputElement>element).value = "";
			} else if (element.tagName === "SELECT") {
				(<HTMLSelectElement>element).selectedIndex = 0;
			} else {// div など
				element.textContent = "";
			}
		}
	}
}
