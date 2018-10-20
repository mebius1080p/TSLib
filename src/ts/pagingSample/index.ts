"use strict";
import { pagingRequest } from "../../typings/base";
import { idObj_sample } from "../../typings/forPaging";
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
	const idObj2: idObj_sample = {
		"base": {
			"form": "searchform",
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
	const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll(".buttons button");
	buttons.forEach(button => {
		button.addEventListener("click", e => {
			const thisElm: HTMLElement = <HTMLElement>e.target;
			const page: string = thisElm.getAttribute("data-page") || "";
			const total: string = thisElm.getAttribute("data-total") || "";
			baseEventData.totalpage = Number(total);
			baseEventData.page = Number(page);
			fireEventById("paging", "onsearch", baseEventData);
		}, false);
	});
	const searchFormElm = document.getElementById("searchform");
	if (searchFormElm === null) {
		throw new Error("mandatory element not found");
	}
	searchFormElm.addEventListener("searchrequest", e => {
		const data: pagingRequest = <pagingRequest>(<CustomEvent>e).detail;
		const inputElm = (<HTMLElement>e.target).querySelector("input");
		if (inputElm !== null) {
			inputElm.value = data.page.toString();
		}
	}, false);

	const pm = new PagingManager(idObj2.base);
}, false);
