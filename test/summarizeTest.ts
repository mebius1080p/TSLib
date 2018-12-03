"use strict";
// import { assert } from "chai";
// import { describe, it } from "mocha";
import { summarize, summarize2, summarizeType } from "../src/ts/summarize";

describe("summarize test1", () => {
	it("シンプルソート", () => {
		const array = ["abc", "xyz", "hoge"];
		const result = summarize(array);
		expect("abc").toBe(result[0]);
		expect("hoge").toBe(result[1]);
		expect("xyz").toBe(result[2]);
	});
	it("数量ソート昇順", () => {
		const array = ["abc", "xyz", "hoge", "abc", "fuga", "xyz", "abc"];
		const result = summarize2(array, summarizeType.Ascending);
		const expectArray = [
			{ "str": "hoge", "len": 1 },
			{ "str": "fuga", "len": 1 },
			{ "str": "xyz", "len": 2 },
			{ "str": "abc", "len": 3 },
		];
		expect(expectArray[0].str).toBe(result[0].str);
		expect(expectArray[0].len).toBe(result[0].len);
		expect(expectArray[1].str).toBe(result[1].str);
		expect(expectArray[1].len).toBe(result[1].len);
		expect(expectArray[2].str).toBe(result[2].str);
		expect(expectArray[2].len).toBe(result[2].len);
		expect(expectArray[3].str).toBe(result[3].str);
		expect(expectArray[3].len).toBe(result[3].len);
	});
	it("数量ソート降順", () => {
		const array = ["abc", "xyz", "hoge", "abc", "fuga", "xyz", "abc"];
		const result = summarize2(array, summarizeType.Descending);
		const expectArray = [
			{ "str": "abc", "len": 3 },
			{ "str": "xyz", "len": 2 },
			{ "str": "hoge", "len": 1 },
			{ "str": "fuga", "len": 1 },
		];
		expect(expectArray[0].str).toBe(result[0].str);
		expect(expectArray[0].len).toBe(result[0].len);
		expect(expectArray[1].str).toBe(result[1].str);
		expect(expectArray[1].len).toBe(result[1].len);
		expect(expectArray[2].str).toBe(result[2].str);
		expect(expectArray[2].len).toBe(result[2].len);
		expect(expectArray[3].str).toBe(result[3].str);
		expect(expectArray[3].len).toBe(result[3].len);
	});
	it("文字列ソート昇順", () => {
		const array = ["abc", "xyz", "hoge", "abc", "fuga", "xyz", "abc", "ABC"];
		const result = summarize2(array, summarizeType.SortByStr);
		const expectArray = [
			{ "str": "ABC", "len": 1 },
			{ "str": "abc", "len": 3 },
			{ "str": "fuga", "len": 1 },
			{ "str": "hoge", "len": 1 },
			{ "str": "xyz", "len": 2 },
		];
		expect(expectArray[0].str).toBe(result[0].str);
		expect(expectArray[0].len).toBe(result[0].len);
		expect(expectArray[1].str).toBe(result[1].str);
		expect(expectArray[1].len).toBe(result[1].len);
		expect(expectArray[2].str).toBe(result[2].str);
		expect(expectArray[2].len).toBe(result[2].len);
		expect(expectArray[3].str).toBe(result[3].str);
		expect(expectArray[3].len).toBe(result[3].len);
		expect(expectArray[4].str).toBe(result[4].str);
		expect(expectArray[4].len).toBe(result[4].len);
	});
});
