// 0_JS常见位操作

/* 
& 与,以特定的方式组合操作二进制数中对应的位，
  如果对应的位都为1，那么结果就是1， 如果任意一个位是0 则结果就是0。
  console.log(1 & 3)     // 1
    if (n & 1) {
        console.log("n是奇数");
    } else {
        console.log("n是偶数");
    }

| 运算符，对应的位中任一个操作数为1 那么结果就是1。 console.log(1 | 3)     // 3

^ 异或,如果对应两个操作位有且仅有一个1时结果为1，其他都是0。

~ 运算符是对位求反，1变0, 0变1，也就是求二进制的反码。
   一个数与自身的取反值相加等于-1。




1的二进制表示为: 00000000 00000000 00000000 00000001
1反码二进制表示: 11111111 11111111 11111111 11111110
由于第一位（符号位）是1，所以这个数是一个负数。JavaScript 内部采用补码形式表示负数，即需要将这个数减去1，再取一次反，然后加上负号，才能得到这个负数对应的10进制值。
-----------------------------
1的反码减1：     11111111 11111111 11111111 11111101
反码取反：       00000000 00000000 00000000 00000010
表示为10进制加负号：-2

  console.log(~ 1)     // -2



有符号左移（Left shift）<<    丢弃高位，低位补0

有符号右移>>    向右被移出的位被丢弃，拷贝最左侧的位以填充左侧。



无符号右移>>>   对于非负数，有符号右移和无符号右移总是返回相同的结果。例如， 9 >>> 2 得到 2 和 9 >> 2 相同。
 

*/

/* 
位运算只对整数起作用，如果一个运算数不是整数，会自动转为整数后再运行。
判断奇偶     奇数  a & 1       偶数!(a & 1)
判断n是否是2的正整数幂；

*/

// 1.判断奇偶
console.log(2 & 1) // 0
console.log(3 & 1) // 1

// 2.求2的n次方
// 有符号左移和有符号右移  不会影响正负
function power(n) {
	return 1 << n
}

// 3. 向下取整(必须是非负数)
//按位或操作， 正负数都是向下取整数   -6.83 | 0  => -6
console.log(6.83 | 0) // 6

console.log(6.83 >> 0) // 6
console.log(6.83 << 0) // 6

// 4.使用^来完成值交换
var a = 5
var b = 8
a ^= b
b ^= a
a ^= b
console.log(a) // 8
console.log(b) // 5

// 5. 一个数的1/2(并且向下取整)
var num = 64 >> 1 // 32
var num = 5 >> 1 // 2 小数同样会向下取整
// 非负整数  无符号除以2 就是
var num = 9 >>> 1 //4 向下取整

// 6. 判断正负
function isPos(n) {
	return n === n >>> 0 ? true : false
}
isPos(-1) // false
isPos(1) // true

// -1>>>0虽然没有向右移动位数，但-1的二进制码已经变成了正数的二进制码：
