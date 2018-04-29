"use strict";
/**
 * 全角文字があったらそれを半角文字に変換する関数
 * @param {string} str 半角文字に変換する文字列
 * @returns {string} 半角文字に変換された文字列
 */
export function toHankaku(str: string): string {
	return str.replace(/[０-９ａ-ｚＡ-Ｚ]/g, ss => {
		return String.fromCharCode(ss.charCodeAt(0) - 65248);
	}).replace(/[－]/g, "-").replace(/[＠]/g, "@").replace(/[＿]/g, "_").replace(/[．]/g, ".");
}
