"use strict";
import { disableButtonByClassName, enableButtonByClassName } from "../common";

document.addEventListener("DOMContentLoaded", () => {
	// const idObj = {};
	// const urlObj = {};
	const d1 = document.getElementById("d1");
	if (d1 !== null) {
		d1.addEventListener("click", () => {
			disableButtonByClassName("abc");
		}, false);
	}
	const e1 = document.getElementById("e1");
	if (e1 !== null) {
		e1.addEventListener("click", () => {
			enableButtonByClassName("abc");
		}, false);
	}
}, false);
