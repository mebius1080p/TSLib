"use strict";
import { assert } from "chai";
import { describe, it } from "mocha";
import { StringUtil } from "../src/ts/StringUtil";

describe("StringUtil test", () => {
	it("should keep 半角", () => {
		const str: string = "muscle@-.";
		const result: string = StringUtil.Zen2Han(str);
		assert.equal(result, "muscle@-.");
	});
	it("should convert to 半角", () => {
		const str: string = "musc＿leＡＢＣ-－０３４＠dd．";
		const result: string = StringUtil.Zen2Han(str);
		assert.equal(result, "musc_leABC--034@dd.");
	});
	it("should remove すべての半角スペース", () => {
		const str: string = "abc def g  hi全角　スペース";
		const result: string = StringUtil.wipeoutAllSpace(str);
		assert.equal(result, "abcdefghi全角　スペース");
	});
	it("should remove 重複スペース", () => {
		const str: string = "abc def g  hi全角　スペース";
		const result: string = StringUtil.wipeoutDuplicateSpace(str);
		assert.equal(result, "abc def g hi全角　スペース");
	});
});
