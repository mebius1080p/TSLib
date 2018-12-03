"use strict";
import { StringUtil } from "../src/ts/StringUtil";

describe("StringUtil test", () => {
	it("should keep 半角", () => {
		const str: string = "muscle@-.";
		const result: string = StringUtil.Zen2Han(str);
		expect(result).toBe("muscle@-.");
	});
	it("should convert to 半角", () => {
		const str: string = "musc＿leＡＢＣ-－０３４＠dd．";
		const result: string = StringUtil.Zen2Han(str);
		expect(result).toBe("musc_leABC--034@dd.");
	});
	it("should remove すべての半角スペース", () => {
		const str: string = "abc def g  hi全角　スペース";
		const result: string = StringUtil.wipeoutAllSpace(str);
		expect(result).toBe("abcdefghi全角　スペース");
	});
	it("should remove 重複スペース", () => {
		const str: string = "abc def g  hi全角　スペース";
		const result: string = StringUtil.wipeoutDuplicateSpace(str);
		expect(result).toBe("abc def g hi全角　スペース");
	});
});
