// 217. 存在重复元素
var containsDuplicate = function (nums) {
	return nums.length !== new Set(nums).size
}
