"use strict";

import { fetchJsonObjAsync, ISimpleFetchOption } from "../common";

document.addEventListener(
	"DOMContentLoaded",
	() => {
		const sucBtn = document.getElementById("suc_btn");
		if (sucBtn !== null) {
			sucBtn.addEventListener(
				"click",
				async () => {
					try {
						const req: ISimpleFetchOption = {
							url: "./success.json",
						};
						const result: object = await fetchJsonObjAsync<object>(
							req
						);
						console.log("success!");
						console.dir(result);
					} catch (error) {
						console.log("error");
						console.dir(error);
					}
				},
				false
			);
		}
		const fail404 = document.getElementById("fail_btn_404");
		if (fail404 !== null) {
			fail404.addEventListener(
				"click",
				async () => {
					try {
						const req: ISimpleFetchOption = {
							url: "./404.json",
						};
						const result: object = await fetchJsonObjAsync<object>(
							req
						);
						console.log("success!");
						console.dir(result);
					} catch (error) {
						console.log("error");
						console.dir(error);
					}
				},
				false
			);
		}
		const failBad = document.getElementById("fail_btn_bad");
		if (failBad !== null) {
			failBad.addEventListener(
				"click",
				async () => {
					try {
						const req: ISimpleFetchOption = {
							url: "./bad.json",
						};
						const result: object = await fetchJsonObjAsync<object>(
							req
						);
						console.log("success!");
						console.dir(result);
					} catch (error) {
						console.log("error");
						console.dir(error);
					}
				},
				false
			);
		}
	},
	false
);
