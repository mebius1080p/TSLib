/**
 * AutoInputFixer
 * auto_fix のついた input 要素の内容を半角に直すイベントを設定するクラス
 */
class AutoInputFixer {
	private reZenkaku = /[！＃＄％（）＊＋，－．／０-９：；＝？＠Ａ-Ｚ［］＾＿｀ａ-ｚ｛｜｝]/g;
	constructor() {
		this.setEvent();
	}
	private setEvent(): void {
		const inputs = document.querySelectorAll(".auto_fix");
		for (let i = 0; i < inputs.length; i++) {
			const element = inputs[i];
			element.addEventListener("blur", e => {
				let val = (<HTMLInputElement>e.target).value;
				val = this.toHankaku(val);
				const isPreserveSpace = (<HTMLInputElement>e.target).classList.contains("preserve_space");
				if (isPreserveSpace) {// 名前などの間にある連続するスペースはそのままにする
					val = val.replace(/\s{2,}/g, " ");
				} else {// スペース全削除
					val = val.replace(/ /g, "");
				}
				(<HTMLInputElement>e.target).value = val; // 書き戻し
			}, false);
		}
	}
	/**
	 * 全角文字をすべて半角にする ついでにカンマも _ に変換 トリムもする
	 * @param {string} str 文字列
	 * @return {string} すべて半角になった文字列
	 */
	private toHankaku(str: string): string {
		str = str.replace(this.reZenkaku, ss => {
			return String.fromCharCode(ss.charCodeAt(0) - 65248);
		}).replace(/[　]/g, " ").replace(/,/g, "_").trim();
		return str;
	}
}
