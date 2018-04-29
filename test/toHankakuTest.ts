"use strict";
import { assert } from "../node_modules/chai/lib/chai.js";
import { describe, it } from "../node_modules/mocha/index.js";
import { toHankaku } from "../ts/toHankaku";

describe("toHankaku test", () => {
	it("半角は無変換です", () => {
		const str = "muscle@-.";
		const result = toHankaku(str);
		assert.equal("muscle@-.", result);
	});
	it("全角英数字と一部の記号は半角になる", () => {
		const str = "musc＿leＡＢＣ-－０３４＠dd．";
		const result = toHankaku(str);
		assert.equal("musc_leABC--034@dd.", result);
	});
});
