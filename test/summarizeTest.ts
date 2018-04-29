"use strict";
import { assert } from "../node_modules/chai/lib/chai.js";
import { describe, it } from "../node_modules/mocha/index.js";
import { summarize, summarize2, summarizeType } from "../ts/summarize";

describe("summarize test1", () => {
	it("シンプルソート", () => {
		const array = ["abc", "xyz", "hoge"];
		const result = summarize(array);
		assert.equal("abc", result[0]);
		assert.equal("hoge", result[1]);
		assert.equal("xyz", result[2]);
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
		assert.equal(expectArray[0].str, result[0].str);
		assert.equal(expectArray[0].len, result[0].len);
		assert.equal(expectArray[1].str, result[1].str);
		assert.equal(expectArray[1].len, result[1].len);
		assert.equal(expectArray[2].str, result[2].str);
		assert.equal(expectArray[2].len, result[2].len);
		assert.equal(expectArray[3].str, result[3].str);
		assert.equal(expectArray[3].len, result[3].len);
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
		assert.equal(expectArray[0].str, result[0].str);
		assert.equal(expectArray[0].len, result[0].len);
		assert.equal(expectArray[1].str, result[1].str);
		assert.equal(expectArray[1].len, result[1].len);
		assert.equal(expectArray[2].str, result[2].str);
		assert.equal(expectArray[2].len, result[2].len);
		assert.equal(expectArray[3].str, result[3].str);
		assert.equal(expectArray[3].len, result[3].len);
	});
	it("文字列ソート昇順", () => {
		const array = ["abc", "xyz", "hoge", "abc", "fuga", "xyz", "abc", "ABC"];
		const result = summarize2(array, summarizeType.SortByStr);
		const expectArray = [
			{ "str": "abc", "len": 3 },
			{ "str": "ABC", "len": 1 },
			{ "str": "fuga", "len": 1 },
			{ "str": "hoge", "len": 1 },
			{ "str": "xyz", "len": 2 },
		];
		assert.equal(expectArray[0].str, result[0].str);
		assert.equal(expectArray[0].len, result[0].len);
		assert.equal(expectArray[1].str, result[1].str);
		assert.equal(expectArray[1].len, result[1].len);
		assert.equal(expectArray[2].str, result[2].str);
		assert.equal(expectArray[2].len, result[2].len);
		assert.equal(expectArray[3].str, result[3].str);
		assert.equal(expectArray[3].len, result[3].len);
		assert.equal(expectArray[4].str, result[4].str);
		assert.equal(expectArray[4].len, result[4].len);
	});
});
