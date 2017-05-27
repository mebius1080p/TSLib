"use strict";
/**
 * 引数の単純配列を、重複を排除してソートして返す関数
 * @param {string[]} aArray 単純配列
 * @return {string[]} 重複が排除され、ソートされた配列
 */
export function summarize(aArray: string): string[] {
	const tempObj = {};
	for (let i = 0, len = aArray.length; i < len; i++) {
		tempObj[aArray[i]] = true;
	}
	return Object.keys(tempObj).sort();
}

export enum summarizeType {
	Ascending = 1,
	Descending = 2,
	SortByStr = 3,
}
/**
 * 単純配列をソートして、その出現回数を len プロパティとして保持するオブジェクトを返す関数
 * 返すのは [{len:5,str:xx},{len:7,str:bb},{len:8,str:ww}] のような配列
 * @param {string[]} aArray 単純配列
 * @param {summarizeType} aMode ソートモード 上の summarizeType を参照
 * @return {{"len":number, "str":string}[]} オブジェクト配列
 */
export function summarize2(aArray: string[], aMode: summarizeType): Array<{ "len": number, "str": string }> {
	const tempObj = {};
	for (let i = 0, len = aArray.length; i < len; i++) {
		if (tempObj[aArray[i]] === undefined) {
			tempObj[aArray[i]] = 1;
		} else {
			tempObj[aArray[i]]++;
		}
	}
	const nar = [];
	const tempAr = Object.keys(tempObj);
	let ret = [];
	for (let i = 0, len = tempAr.length; i < len; i++) {
		nar[nar.length] = { "str": tempAr[i], "len": tempObj[tempAr[i]] };
	}
	switch (aMode) {
		case 1:
			ret = nar.sort((a, b) => a.len - b.len);
			break;
		case 2:
			ret = nar.sort((a, b) => b.len - a.len);
			break;
		case 3:
			ret = nar.sort((a, b) => {
				return (a.str.toLowerCase() > b.str.toLowerCase()) ? 1 : -1;
			});
			break;
	}
	return ret;
}
