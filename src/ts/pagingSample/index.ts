"use strict";
import { PagingManager } from "../cmsbase/PagingManager";
import { fireEventById } from "../common";

document.addEventListener("DOMContentLoaded", () => {
	const baseEventData = {
		"data": [],
		"page": 1,
		"perpage": 10,
		"total": 3,
		"totalpage": 1,
	};
	const idObj = {
		"pageFragmentTemplate": "paging_fragment",
		"pageTemplate": "paging_template",
		"pageWrap": "paging_wrap",
		"searchForm": "searchform",
	};
	const idObj2: idObj_sample = {
		"base": {
			"form": "form",
			"paging": "paging",
			"pagingFragmentTemplate": "paging_fragment",
			"pagingMisc": "paging_misc",
			"pagingTemplate": "paging_template",
			"pagingTemplateClose": "paging_template_close",
			"pagingTemplateOpen": "paging_template_open",
			"pagingWrap": "paging_wrap",
			"reset": "xxxxxxxxx",
			"search": "xxxxxxxxx",
			"table": "xxxxxxxxx",
			"template": "xxxxx",
		},
	};
	const urlObj = {
		"a": "b",
	};
	const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll(".buttons button");
	Array.prototype.forEach.call(buttons, btn => {
		btn.addEventListener("click", e => {
			const thisElm: HTMLElement = <HTMLElement>e.target;
			const page: string = thisElm.getAttribute("data-page");
			const total: string = thisElm.getAttribute("data-total");
			baseEventData.totalpage = Number(total);
			baseEventData.page = Number(page);
			fireEventById("paging_wrap", "onsearch", baseEventData);
		}, false);
	});
	document.getElementById("searchform").addEventListener("searchrequest", e => {
		(<HTMLElement>e.target).textContent = (<CustomEvent>e).detail.page;
	}, false);

	const pm = new PagingManager(idObj2.base);
}, false);
