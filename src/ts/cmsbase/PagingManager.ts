import { fireEventById } from "../common";

/**
 * PagingManager
 */
export class PagingManager {
	/**
	 * calcPagingNumber ページング表示で、表示すべき最初の数値と最後の数値を計算するメソッド
	 * @param {number} page 現在のページ数
	 * @param {number} totalpage 全ページ数
	 * @returns {pagingNumber} pagingNumber インターフェースに準じたオブジェクト
	 */
	public static calcPagingNumber(page: number, totalpage: number): pagingNumber {
		const result: pagingNumber = {
			"close": 1,
			"hasNext": false,
			"hasPrev": false,
			"open": 1,
		};
		const rest: number = page % 10;
		// open を求める
		if (rest === 0) {
			result.open = page - 9;
		} else {
			result.open = page - rest + 1;
		}

		// close を求める
		if (rest === 0) {
			result.close = page;
		} else {
			result.close = page + (10 - rest);
			if (result.close > totalpage) {
				result.close = totalpage;
			}
		}

		// hasPrev 判定
		if (result.open >= 11) {
			result.hasPrev = true;
		}

		// hasNext 判定
		const closeRest: number = result.close % 10;
		if (closeRest === 0) {// 10n のとき
			if (result.close + 1 <= totalpage) {
				result.hasNext = true;
			}
		} else {// 10n+1 - 10n+9 まで
			if (result.close + 1 < totalpage) {
				result.hasNext = true;
			}
		}
		return result;
	}
	/**
	 * calcPrevNextPage ページング部の数値でないところをクリックしてページ移動するとき、
	 * 次に行くべきページ数を計算するメソッド
	 * @param {number} page 現在のページ数
	 * @param {number} totalpage 全ページ数
	 * @param {number} addNumber 現在のページ数に加算する数 (-10, -1, 1, 10 のどれか)
	 */
	public static calcPrevNextPage(page: number, totalpage: number, addNumber: number): number {
		let requestPage: number = 1;
		requestPage = page + addNumber; // とりあえず加算
		if (requestPage <= 0) {// 0 以下は 1 に修正
			requestPage = 1;
		}
		if (requestPage > totalpage) {// total をオーバーしていたら total に修正
			requestPage = totalpage;
		}
		return requestPage;
	}
	private current: number = 1; // 現在のページ
	private totalPage: number = 1; // 全ページ数(最大値)
	private pagingBase: HTMLUListElement;
	private pagingFragment: HTMLLIElement;
	private pagingOpen: NodeListOf<HTMLElement>;
	private pagingClose: NodeListOf<HTMLElement>;
	private idObj: id_paging;
	private pagingNumberObj: pagingNumber;
	constructor(idObj: id_paging) {
		this.idObj = idObj;

		const pageBase: DocumentFragment = (<HTMLTemplateElement>document.getElementById(this.idObj.pagingTemplate)).content;
		const importedElm: DocumentFragment = document.importNode(pageBase, true);
		this.pagingBase = importedElm.querySelector("ul");

		const pagingOpen: DocumentFragment = (<HTMLTemplateElement>document.getElementById(this.idObj.pagingTemplateOpen)).content;
		const importedOpen: DocumentFragment = document.importNode(pagingOpen, true);
		this.pagingOpen = importedOpen.querySelectorAll("li");

		const pagingClose: DocumentFragment = (<HTMLTemplateElement>document.getElementById(this.idObj.pagingTemplateClose)).content;
		const importedClose: DocumentFragment = document.importNode(pagingClose, true);
		this.pagingClose = importedClose.querySelectorAll("li");

		const pageFrag: DocumentFragment = (<HTMLTemplateElement>document.getElementById(this.idObj.pagingFragmentTemplate)).content;
		const importedFrag: DocumentFragment = document.importNode(pageFrag, true);
		this.pagingFragment = importedFrag.querySelector("li");

		this.setEvent();
	}
	private setEvent(): void {
		document.getElementById(this.idObj.paging).addEventListener("onsearch", e => {
			const data: paring_search_result = <paring_search_result>(<CustomEvent>e).detail;
			console.dir(data);
			this.current = data.page;
			this.totalPage = data.totalpage;
			this.buildPaging(data);
			this.buildMisc(data);
		}, false);

		document.getElementById(this.idObj.paging).addEventListener("click", e => {
			const clickedElm: HTMLElement = <HTMLElement>e.target;
			if (!clickedElm.classList.contains("page-link")) {
				return;
			}
			const sendObj: pagingRequest = {
				"page": 1,
			};
			if (clickedElm.classList.contains("isnum")) {
				sendObj.page = Number(clickedElm.textContent);
			} else {
				const addpage: number = Number(clickedElm.getAttribute("data-add"));
				sendObj.page = PagingManager.calcPrevNextPage(this.current, this.totalPage, addpage);
			}
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

		// ページング部分に追加する li を準備
		const frag: DocumentFragment = document.createDocumentFragment();

		// ページング計算
		this.pagingNumberObj = PagingManager.calcPagingNumber(data.page, data.totalpage);

		// open を足す
		Array.prototype.forEach.call(this.pagingOpen, li => {
			const clone: HTMLElement = <HTMLElement>li.cloneNode(true);
			if (!this.pagingNumberObj.hasPrev) {
				clone.classList.add("disabled");
			}
			frag.appendChild(clone);
		});

		// 中間を足す (少なくとも一つは足される)
		for (let pageIndex = this.pagingNumberObj.open; pageIndex <= this.pagingNumberObj.close; pageIndex++) {
			const clone: HTMLElement = <HTMLElement>this.pagingFragment.cloneNode(true);
			clone.querySelector("a").textContent = pageIndex.toString();
			if (pageIndex === data.page) {
				clone.classList.add("active");
			}
			frag.appendChild(clone.cloneNode(true));
		}

		// close を足す
		Array.prototype.forEach.call(this.pagingClose, li => {
			const clone: HTMLElement = <HTMLElement>li.cloneNode(true);
			if (!this.pagingNumberObj.hasNext) {
				clone.classList.add("disabled");
			}
			frag.appendChild(clone);
		});

		const pagingBaseClone: HTMLUListElement = <HTMLUListElement>this.pagingBase.cloneNode(true);
		pagingBaseClone.appendChild(frag);
		wrapPage.appendChild(pagingBaseClone);
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
