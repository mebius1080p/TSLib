"use strict";
export function toHankaku(str) {
	return str.replace(/[０-９ａ-ｚＡ-Ｚ]/g, ss => {
		return String.fromCharCode(ss.charCodeAt(0) - 65248);
	}).replace(/[－]/g, "-").replace(/[＠]/g, "@").replace(/[＿]/g, "_").replace(/[．]/g, ".");
}
