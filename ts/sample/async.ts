"use strict";
import { asyncFetchUtilJson } from "../common";
document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("suc_btn").addEventListener("click", async () => {
		try {
			const req: Request = new Request("./success.json");
			const result: object = await asyncFetchUtilJson(req);
			console.log("success!");
			console.dir(result);
		} catch (error) {
			console.log("error");
			console.dir(error);
		}
	}, false);
	document.getElementById("fail_btn_404").addEventListener("click", async () => {
		try {
			const req: Request = new Request("./404.json");
			const result: object = await asyncFetchUtilJson(req);
			console.log("success!");
			console.dir(result);
		} catch (error) {
			console.log("error");
			console.dir(error);
		}
	}, false);
	document.getElementById("fail_btn_bad").addEventListener("click", async () => {
		try {
			const req: Request = new Request("./bad.json");
			const result: object = await asyncFetchUtilJson(req);
			console.log("success!");
			console.dir(result);
		} catch (error) {
			console.log("error");
			console.dir(error);
		}
	}, false);
}, false);
