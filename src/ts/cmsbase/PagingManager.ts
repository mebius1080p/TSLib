import { fireEventById } from "../common";

/**
 * PagingManager
 */
export class PagingManager {
	private current: number = 1; // 現在のページ
	private totalPage: number = 1; // 全ページ数(最大値)
	private pagingBase: HTMLUListElement;
	private pagingFragment: HTMLLIElement;
	private idObj: id_paging;
	constructor(idObj: id_paging) {
		this.idObj = idObj;

		const pageBase: DocumentFragment = (<HTMLTemplateElement>document.getElementById(this.idObj.pagingTemplate)).content;
		const importedElm: DocumentFragment = document.importNode(pageBase, true);
		this.pagingBase = importedElm.querySelector("ul");
		const pageFrag: DocumentFragment = (<HTMLTemplateElement>document.getElementById(this.idObj.pagingFragmentTemplate)).content;
		const importedFrag: DocumentFragment = document.importNode(pageFrag, true);
		this.pagingFragment = importedFrag.querySelector("li");

		this.setEvent();
	}
	private setEvent(): void {
		document.getElementById(this.idObj.pagingWrap).addEventListener("onsearch", e => {
			const data: paring_search_result = <paring_search_result>(<CustomEvent>e).detail;
			console.dir(data);
			this.current = data.page;
			this.totalPage = data.totalpage;
			this.buildPaging(data);
			this.buildMisc(data);
		}, false);

		document.getElementById(this.idObj.pagingWrap).addEventListener("click", e => {
			const clickedElm: HTMLElement = <HTMLElement>e.target;
			if (!clickedElm.classList.contains("page-link")) {
				return;
			}
			const sendObj = {
				"page": 1,
			};
			if (clickedElm.classList.contains("isnum")) {
				sendObj.page = Number(clickedElm.textContent);
			} else {
				const addpage: number = Number(clickedElm.getAttribute("data-add"));
				sendObj.page = this.current + addpage;
				if (sendObj.page <= 0 || sendObj.page > this.totalPage) {
					// 一応制限は掛ける
					return;
				}
			}
			this.current = sendObj.page;
			// active クラスの付け替えはしない 検索動作で再びページング部分が描画されるため
			fireEventById(this.idObj.form, "searchrequest", sendObj);
		}, false);
	}
	/**
	 * ページング部分を作って DOM に追加するメソッド
	 * @param data イベントで送られてきたデータ
	 */
	private buildPaging(data: paring_search_result): void {
		const wrapPage: HTMLElement = document.getElementById(this.idObj.pagingWrap);
		while (wrapPage.lastChild) {
			wrapPage.removeChild(wrapPage.lastChild);
		}
		const pagingClone: Node = this.pagingBase.cloneNode(true);

		for (let pageIndex = 1; pageIndex <= data.totalpage; pageIndex++) {
			const clone: Node = this.pagingFragment.cloneNode(true);
			(<HTMLElement>clone).querySelector("a").textContent = pageIndex.toString();
			if (pageIndex === data.page) {
				(<HTMLElement>clone).classList.add("active");
			}
			pagingClone.insertBefore(clone, (<HTMLElement>pagingClone).querySelector("li:last-child"));
		}
		wrapPage.appendChild(pagingClone);
	}
	/**
	 * ページング部のうち補助情報表示部を作るメソッド
	 * @param data イベントで送られてきたデータ
	 */
	private buildMisc(data: paring_search_result): void {
		const str: string = `全 ${data.total} 件 (${data.page} / ${data.totalpage} ページ) ${data.perpage} 件ずつ表示`;
		document.getElementById(this.idObj.pagingMisc).textContent = str;
	}
}
