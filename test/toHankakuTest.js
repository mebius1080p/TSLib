"use strict";
const assert = require("assert");
const toHankaku = require("../dist/toHankaku");

describe("toHankaku test", () => {
	it("半角は無変換です", () => {
		const str = "muscle@-.";
		const result = toHankaku.toHankaku(str);
		assert.equal("muscle@-.", result);
	});
	it("全角英数字と一部の記号は半角になる", () => {
		const str = "musc＿leＡＢＣ-－０３４＠dd．";
		const result = toHankaku.toHankaku(str);
		assert.equal("musc_leABC--034@dd.", result);
	});
});