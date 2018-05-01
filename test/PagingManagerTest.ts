"use strict";
import { assert } from "../node_modules/chai/lib/chai.js";
import { describe, it } from "../node_modules/mocha/index.js";
import { PagingManager } from "../src/ts/cmsbase/PagingManager";

describe("PagingManager テスト", () => {
	it("10 未満 中間", () => {
		const page: number = 2;
		const totalpage: number = 3;
		const result = PagingManager.calcPagingNumber(page, totalpage);
		assert.equal(result.open, 1);
		assert.equal(result.close, 3);
		assert.equal(result.hasPrev, false);
		assert.equal(result.hasNext, false);
	});
	it("10 未満 エッジ1", () => {
		const page: number = 1;
		const totalpage: number = 3;
		const result = PagingManager.calcPagingNumber(page, totalpage);
		assert.equal(result.open, 1);
		assert.equal(result.close, 3);
		assert.equal(result.hasPrev, false);
		assert.equal(result.hasNext, false);
	});
	it("10 未満 エッジ2", () => {
		const page: number = 3;
		const totalpage: number = 3;
		const result = PagingManager.calcPagingNumber(page, totalpage);
		assert.equal(result.open, 1);
		assert.equal(result.close, 3);
		assert.equal(result.hasPrev, false);
		assert.equal(result.hasNext, false);
	});
	it("ちょうど 10 中間", () => {
		const page: number = 3;
		const totalpage: number = 10;
		const result = PagingManager.calcPagingNumber(page, totalpage);
		assert.equal(result.open, 1);
		assert.equal(result.close, 10);
		assert.equal(result.hasPrev, false);
		assert.equal(result.hasNext, false);
	});
	it("ちょうど 10 エッジ1", () => {
		const page: number = 1;
		const totalpage: number = 10;
		const result = PagingManager.calcPagingNumber(page, totalpage);
		assert.equal(result.open, 1);
		assert.equal(result.close, 10);
		assert.equal(result.hasPrev, false);
		assert.equal(result.hasNext, false);
	});
	it("ちょうど 10 エッジ2", () => {
		const page: number = 10;
		const totalpage: number = 10;
		const result = PagingManager.calcPagingNumber(page, totalpage);
		assert.equal(result.open, 1);
		assert.equal(result.close, 10);
		assert.equal(result.hasPrev, false);
		assert.equal(result.hasNext, false);
	});
	it("10 以上 中間1", () => {
		const page: number = 2;
		const totalpage: number = 15;
		const result = PagingManager.calcPagingNumber(page, totalpage);
		assert.equal(result.open, 1);
		assert.equal(result.close, 10);
		assert.equal(result.hasPrev, false);
		assert.equal(result.hasNext, true);
	});
	it("10 以上 中間2", () => {
		const page: number = 12;
		const totalpage: number = 15;
		const result = PagingManager.calcPagingNumber(page, totalpage);
		assert.equal(result.open, 11);
		assert.equal(result.close, 15);
		assert.equal(result.hasPrev, true);
		assert.equal(result.hasNext, false);
	});
	it("10 以上 エッジ1", () => {
		const page: number = 1;
		const totalpage: number = 15;
		const result = PagingManager.calcPagingNumber(page, totalpage);
		assert.equal(result.open, 1);
		assert.equal(result.close, 10);
		assert.equal(result.hasPrev, false);
		assert.equal(result.hasNext, true);
	});
	it("10 以上 エッジ2", () => {
		const page: number = 10;
		const totalpage: number = 15;
		const result = PagingManager.calcPagingNumber(page, totalpage);
		assert.equal(result.open, 1);
		assert.equal(result.close, 10);
		assert.equal(result.hasPrev, false);
		assert.equal(result.hasNext, true);
	});
	it("10 以上 エッジ3", () => {
		const page: number = 11;
		const totalpage: number = 15;
		const result = PagingManager.calcPagingNumber(page, totalpage);
		assert.equal(result.open, 11);
		assert.equal(result.close, 15);
		assert.equal(result.hasPrev, true);
		assert.equal(result.hasNext, false);
	});
	it("10 以上 エッジ4", () => {
		const page: number = 15;
		const totalpage: number = 15;
		const result = PagingManager.calcPagingNumber(page, totalpage);
		assert.equal(result.open, 11);
		assert.equal(result.close, 15);
		assert.equal(result.hasPrev, true);
		assert.equal(result.hasNext, false);
	});
	it("10 以上 エッジ5", () => {
		const page: number = 10;
		const totalpage: number = 11;
		const result = PagingManager.calcPagingNumber(page, totalpage);
		assert.equal(result.open, 1);
		assert.equal(result.close, 10);
		assert.equal(result.hasPrev, false);
		assert.equal(result.hasNext, true);
	});
	it("10 以上 エッジ5", () => {
		const page: number = 11;
		const totalpage: number = 11;
		const result = PagingManager.calcPagingNumber(page, totalpage);
		assert.equal(result.open, 11);
		assert.equal(result.close, 11);
		assert.equal(result.hasPrev, true);
		assert.equal(result.hasNext, false);
	});
	it("ちょうど 20 中間1", () => {
		const page: number = 5;
		const totalpage: number = 20;
		const result = PagingManager.calcPagingNumber(page, totalpage);
		assert.equal(result.open, 1);
		assert.equal(result.close, 10);
		assert.equal(result.hasPrev, false);
		assert.equal(result.hasNext, true);
	});
	it("ちょうど 20 中間2", () => {
		const page: number = 15;
		const totalpage: number = 20;
		const result = PagingManager.calcPagingNumber(page, totalpage);
		assert.equal(result.open, 11);
		assert.equal(result.close, 20);
		assert.equal(result.hasPrev, true);
		assert.equal(result.hasNext, false);
	});
	it("ちょうど 20 エッジ1", () => {
		const page: number = 1;
		const totalpage: number = 20;
		const result = PagingManager.calcPagingNumber(page, totalpage);
		assert.equal(result.open, 1);
		assert.equal(result.close, 10);
		assert.equal(result.hasPrev, false);
		assert.equal(result.hasNext, true);
	});
	it("ちょうど 20 エッジ2", () => {
		const page: number = 10;
		const totalpage: number = 20;
		const result = PagingManager.calcPagingNumber(page, totalpage);
		assert.equal(result.open, 1);
		assert.equal(result.close, 10);
		assert.equal(result.hasPrev, false);
		assert.equal(result.hasNext, true);
	});
	it("ちょうど 20 エッジ3", () => {
		const page: number = 11;
		const totalpage: number = 20;
		const result = PagingManager.calcPagingNumber(page, totalpage);
		assert.equal(result.open, 11);
		assert.equal(result.close, 20);
		assert.equal(result.hasPrev, true);
		assert.equal(result.hasNext, false);
	});
	it("ちょうど 20 エッジ4", () => {
		const page: number = 20;
		const totalpage: number = 20;
		const result = PagingManager.calcPagingNumber(page, totalpage);
		assert.equal(result.open, 11);
		assert.equal(result.close, 20);
		assert.equal(result.hasPrev, true);
		assert.equal(result.hasNext, false);
	});
	// prev, next 用テスト
	it("[prev/next] 10 未満 中間", () => {
		const page: number = 2;
		const totalpage: number = 5;
		const result1: number = PagingManager.calcPrevNextPage(page, totalpage, 1);
		const result2: number = PagingManager.calcPrevNextPage(page, totalpage, 10);
		const result3: number = PagingManager.calcPrevNextPage(page, totalpage, -1);
		const result4: number = PagingManager.calcPrevNextPage(page, totalpage, -10);
		assert.equal(result1, 3);
		assert.equal(result2, 5);
		assert.equal(result3, 1);
		assert.equal(result4, 1);
	});
	it("[prev/next] 10 未満 エッジ1", () => {
		const page: number = 1;
		const totalpage: number = 5;
		const result1: number = PagingManager.calcPrevNextPage(page, totalpage, 1);
		const result2: number = PagingManager.calcPrevNextPage(page, totalpage, 10);
		const result3: number = PagingManager.calcPrevNextPage(page, totalpage, -1);
		const result4: number = PagingManager.calcPrevNextPage(page, totalpage, -10);
		assert.equal(result1, 2);
		assert.equal(result2, 5);
		assert.equal(result3, 1);
		assert.equal(result4, 1);
	});
	it("[prev/next] 10 未満 エッジ2", () => {
		const page: number = 5;
		const totalpage: number = 5;
		const result1: number = PagingManager.calcPrevNextPage(page, totalpage, 1);
		const result2: number = PagingManager.calcPrevNextPage(page, totalpage, 10);
		const result3: number = PagingManager.calcPrevNextPage(page, totalpage, -1);
		const result4: number = PagingManager.calcPrevNextPage(page, totalpage, -10);
		assert.equal(result1, 5);
		assert.equal(result2, 5);
		assert.equal(result3, 4);
		assert.equal(result4, 1);
	});
	it("[prev/next] just 10 中間", () => {
		const page: number = 5;
		const totalpage: number = 10;
		const result1: number = PagingManager.calcPrevNextPage(page, totalpage, 1);
		const result2: number = PagingManager.calcPrevNextPage(page, totalpage, 10);
		const result3: number = PagingManager.calcPrevNextPage(page, totalpage, -1);
		const result4: number = PagingManager.calcPrevNextPage(page, totalpage, -10);
		assert.equal(result1, 6);
		assert.equal(result2, 10);
		assert.equal(result3, 4);
		assert.equal(result4, 1);
	});
	it("[prev/next] just 10 エッジ1", () => {
		const page: number = 1;
		const totalpage: number = 10;
		const result1: number = PagingManager.calcPrevNextPage(page, totalpage, 1);
		const result2: number = PagingManager.calcPrevNextPage(page, totalpage, 10);
		const result3: number = PagingManager.calcPrevNextPage(page, totalpage, -1);
		const result4: number = PagingManager.calcPrevNextPage(page, totalpage, -10);
		assert.equal(result1, 2);
		assert.equal(result2, 10);
		assert.equal(result3, 1);
		assert.equal(result4, 1);
	});
	it("[prev/next] just 10 エッジ2", () => {
		const page: number = 10;
		const totalpage: number = 10;
		const result1: number = PagingManager.calcPrevNextPage(page, totalpage, 1);
		const result2: number = PagingManager.calcPrevNextPage(page, totalpage, 10);
		const result3: number = PagingManager.calcPrevNextPage(page, totalpage, -1);
		const result4: number = PagingManager.calcPrevNextPage(page, totalpage, -10);
		assert.equal(result1, 10);
		assert.equal(result2, 10);
		assert.equal(result3, 9);
		assert.equal(result4, 1);
	});
	it("[prev/next] 10 以上 中間1", () => {
		const page: number = 4;
		const totalpage: number = 15;
		const result1: number = PagingManager.calcPrevNextPage(page, totalpage, 1);
		const result2: number = PagingManager.calcPrevNextPage(page, totalpage, 10);
		const result3: number = PagingManager.calcPrevNextPage(page, totalpage, -1);
		const result4: number = PagingManager.calcPrevNextPage(page, totalpage, -10);
		assert.equal(result1, 5);
		assert.equal(result2, 14);
		assert.equal(result3, 3);
		assert.equal(result4, 1);
	});
	it("[prev/next] 10 以上 中間2", () => {
		const page: number = 6;
		const totalpage: number = 15;
		const result1: number = PagingManager.calcPrevNextPage(page, totalpage, 1);
		const result2: number = PagingManager.calcPrevNextPage(page, totalpage, 10);
		const result3: number = PagingManager.calcPrevNextPage(page, totalpage, -1);
		const result4: number = PagingManager.calcPrevNextPage(page, totalpage, -10);
		assert.equal(result1, 7);
		assert.equal(result2, 15);
		assert.equal(result3, 5);
		assert.equal(result4, 1);
	});
	it("[prev/next] 10 以上 中間3", () => {
		const page: number = 12;
		const totalpage: number = 15;
		const result1: number = PagingManager.calcPrevNextPage(page, totalpage, 1);
		const result2: number = PagingManager.calcPrevNextPage(page, totalpage, 10);
		const result3: number = PagingManager.calcPrevNextPage(page, totalpage, -1);
		const result4: number = PagingManager.calcPrevNextPage(page, totalpage, -10);
		assert.equal(result1, 13);
		assert.equal(result2, 15);
		assert.equal(result3, 11);
		assert.equal(result4, 2);
	});
	it("[prev/next] 10 以上 エッジ1", () => {
		const page: number = 5;
		const totalpage: number = 15;
		const result1: number = PagingManager.calcPrevNextPage(page, totalpage, 1);
		const result2: number = PagingManager.calcPrevNextPage(page, totalpage, 10);
		const result3: number = PagingManager.calcPrevNextPage(page, totalpage, -1);
		const result4: number = PagingManager.calcPrevNextPage(page, totalpage, -10);
		assert.equal(result1, 6);
		assert.equal(result2, 15);
		assert.equal(result3, 4);
		assert.equal(result4, 1);
	});
	it("[prev/next] 10 以上 エッジ2", () => {
		const page: number = 1;
		const totalpage: number = 15;
		const result1: number = PagingManager.calcPrevNextPage(page, totalpage, 1);
		const result2: number = PagingManager.calcPrevNextPage(page, totalpage, 10);
		const result3: number = PagingManager.calcPrevNextPage(page, totalpage, -1);
		const result4: number = PagingManager.calcPrevNextPage(page, totalpage, -10);
		assert.equal(result1, 2);
		assert.equal(result2, 11);
		assert.equal(result3, 1);
		assert.equal(result4, 1);
	});
	it("[prev/next] 10 以上 エッジ3", () => {
		const page: number = 15;
		const totalpage: number = 15;
		const result1: number = PagingManager.calcPrevNextPage(page, totalpage, 1);
		const result2: number = PagingManager.calcPrevNextPage(page, totalpage, 10);
		const result3: number = PagingManager.calcPrevNextPage(page, totalpage, -1);
		const result4: number = PagingManager.calcPrevNextPage(page, totalpage, -10);
		assert.equal(result1, 15);
		assert.equal(result2, 15);
		assert.equal(result3, 14);
		assert.equal(result4, 5);
	});
});
