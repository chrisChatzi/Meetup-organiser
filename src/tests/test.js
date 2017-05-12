import { getCategoryIdx, getUndefined, getTags, sortArray } from '../general/logic.js'

describe('Check logic', () => {
	it('should get idx from path', () => {
		expect(getCategoryIdx("trousers","jeans")).toBe(10);
	});
	it('should get number of undefined elements in array, should be 2', () => {
		expect(getUndefined(["", "123", "", "234"])).toBe(2);
	});
	it('should get number of undefined elements in array, should be 0', () => {
		expect(getUndefined(["123", "234"])).toBe(0);
	});
	it('should be able to get array of tag indexes, should return true', () => {
		expect(getTags("trousers", "jeans")).toEqual([ 'skinny', 'slim', 'regular', 'classic', 'loose', 'ripped']);
	});
	it('should be able to sort array', () => {
		let array = [
			{
				price : 1,
				name : "a"
			},
			{
				price : 3,
				name : "b"
			},
			{
				price : 2,
				name : "c"
			}
		]
		let array2 = [
			{
				price : 1,
				name : "a"
			},
			{
				price : 2,
				name : "c"
			},
			{
				price : 3,
				name : "b"
			},
		]
		expect(sortArray(array, "price")).toEqual(array2);
	});
});