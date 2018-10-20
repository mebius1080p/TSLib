"use strict";
import { fetchUtilJsonAsync } from "../common";
document.addEventListener("DOMContentLoaded", () => {
	const sucBtn = document.getElementById("suc_btn");
	if (sucBtn !== null) {
		sucBtn.addEventListener("click", async () => {
			try {
				const req: Request = new Request("./success.json");
				const result: object = await fetchUtilJsonAsync(req);
				console.log("success!");
				console.dir(result);
			} catch (error) {
				console.log("error");
				console.dir(error);
			}
		}, false);
	}
	const fail404 = document.getElementById("fail_btn_404");
	if (fail404 !== null) {
		fail404.addEventListener("click", async () => {
			try {
				const req: Request = new Request("./404.json");
				const result: object = await fetchUtilJsonAsync(req);
				console.log("success!");
				console.dir(result);
			} catch (error) {
				console.log("error");
				console.dir(error);
			}
		}, false);
	}
	const failBad = document.getElementById("fail_btn_bad");
	if (failBad !== null) {
		failBad.addEventListener("click", async () => {
			try {
				const req: Request = new Request("./bad.json");
				const result: object = await fetchUtilJsonAsync(req);
				console.log("success!");
				console.dir(result);
			} catch (error) {
				console.log("error");
				console.dir(error);
			}
		}, false);
	}
}, false);
