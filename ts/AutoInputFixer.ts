import { StringUtil } from "./StringUtil";
/**
 * AutoInputFixer
 * auto_fix のついた input 要素の内容を半角に直すイベントを設定するクラス
 */
class AutoInputFixer {
	constructor() {
		this.setEvent();
	}
	private setEvent(): void {
		const inputs: NodeListOf<HTMLElement> = document.querySelectorAll(".auto_fix");
		for (let i = 0; i < inputs.length; i++) {
			const element: HTMLElement = inputs[i];
			element.addEventListener("blur", e => {
				const thisElm: HTMLInputElement = <HTMLInputElement>e.target;
				const hankakuString: string = StringUtil.Zen2Han(thisElm.value);
				const isPreserveSpace: boolean = thisElm.classList.contains("preserve_space");
				let spaceProcessed: string = "";
				if (isPreserveSpace) {// 名前などの間にある連続するスペースはそのままにする
					spaceProcessed = StringUtil.wipeoutDuplicateSpace(hankakuString);
				} else {// スペース全削除
					spaceProcessed = StringUtil.wipeoutAllSpace(hankakuString);
				}
				thisElm.value = spaceProcessed; // 書き戻し
			}, false);
		}
	}
}
