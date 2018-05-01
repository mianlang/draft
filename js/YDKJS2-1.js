(function gy() {
  // // switch 中，a 和 case 的匹配算法与 === 相同，故若想利用强制类型转换比较:
  // var a = "42";
  // switch (true) {
  //     case a == 10:
  //         console.log("10 or '10'");
  //         break;
  //     case a == 42:
  //         console.log("42 or '42'");
  //     default:
  //         // 永远执行不到
  // }
  // // "42 or '42'"
  // var a = "elllo";
  // var b = 10;
  // console.log(a || b == 10); // "ello"
  // console.log((a == 10) || (b == 10)); // true
  // console.log((a || b) == 10); // false
  // console.log(a || b == 50); // "ello"
  // console.log((a == 50) || (b == 50)); // false
  // console.log((a || b) == 50); // false
  // console.log(testHTML); // "<div id="global">id</div>"
  // var el = document.createElement("script");
  // el.text = `
  // var greeting = "Hello World";
  // function foo() {
  //     console.log(greeting);
  // }
  // setTimeout(foo, 1000);
  // `;
  // document.body.appendChild(el);
  // function addAll() {
  //     var sum = 0;
  //     for (var i = 0; i < arguments.length; i++) {
  //         sum += arguments[i];
  //     }
  //     return sum;
  // }
  // var nums = [];
  // for (var i = 1; i < 100000; i++) {
  //     nums.push(i);
  // }
  // console.log(addAll()); // 0
  // console.log(addAll(2, 4, 6)); // 12
  // console.log(addAll(2, 4, 5, 6, 7)); // 24
  // console.log(addAll.apply(null, nums)); // 4999950000
  // function foo() {
  //     try {
  //         return 42;
  //     } finally {
  //         // 没有返回，所以不覆盖
  //     }
  // }
  // function bar() {
  //     try {
  //         return 42;
  //     } finally {
  //         return; // 覆盖，返回 undefined
  //     }
  // }
  // function baz() {
  //     try {
  //         return 42;
  //     } finally {
  //         // 覆盖前面的 return 42
  //         return "ello";
  //     }
  // }
  // console.log(foo()); // 42
  // console.log(bar()); // undefined
  // console.log(baz()); // "ello"
  // function foo(a) {
  //     try {
  //         if (a == "") throw "为空";
  //         if (isNaN(a)) throw "不是合法数字";
  //         if (a > 9999) throw "过大";
  //         console.log("suc");
  //     }
  //     catch (err) {
  //         console.log(err);
  //     }
  //     finally {
  //         console.log("always me!");
  //     }
  // }
  // foo(9);
  // foo("");
  // foo(232322);
  // foo("ads");
  // function fooUncaught() {
  //     try {
  //         throw 42;
  //     }
  //     finally {
  //         console.log("ello");
  //     }
  // }
  // console.log(fooUncaught());
  // // "ello"
  // // Uncaught 42
  // // ES6 中，如果参数被省略或值为 undefined，则取该参数的默认值
  // function foo(a = 42, b = a + 1) {
  //     console.log(a, b);
  // }
  // foo(); // 42 43
  // foo(undefined); // 42 43
  // foo(5); // 5 6
  // foo(void 0, 7); // 42 7
  // foo(undefined, 7); // 42 7
  // foo(null, 7); // null 7
  // foo(null); // null 1
  // // 不要同时访问命名参数和其对应的 arguments 数组单元
  // // 非严格模式下，arguments 数组单元会和命名参数建立关联 (linkage):
  // function foo2(a) {
  //     a = 111;
  //     console.log(arguments[0]);
  // }
  // foo2(2); // 111
  // foo2(); // undefined (not linked)
  // 执行顺序从左向右，关联顺序从左向右或从右向左
  // && 和 || 是左关联
  // ? : 和 = 是右关联，如 a = b = c = 42 执行 a = (b = (c = 42))
  // operator precedence
  // var a, b;
  // a = eval("if (true) { b = 42; }");
  // console.log(a); // 42
  // a = 42;
  // b = a++;
  // console.log(a, b); // 43 42
  // a = 42;
  // b = ++a;
  // console.log(a, b); // 43 43
  // a = 42;
  // b = (a++);
  // console.log(a, b); // 43 42
  // var obj = {
  //     a: 42
  // };
  // console.log(obj.a); // 42
  // delete obj.a;
  // console.log(obj.a); // undefined
  // function vowels(str) {
  //     var matches;
  //     if (str) {
  //         // 提取所有元音字母
  //         matches = str.match(/[aeiou]/g);
  //         if (matches) {
  //             console.log(matches);
  //         }
  //     }
  // }
  // vowels("Hello World"); // ["e", "o", "o"]
  // function vowels2(str) {
  //     var matches;
  //     console.log(233);
  //     if (str && (matches = str.match(/[aeiou]/g))) {
  //         console.log(matches);
  //     }
  //     return 101;
  // }
  // vowels2("Hello World"); // ["e", "o", "o"]
  // var a = {
  //     bar: vowels2("aaaaasd")
  // };
  // console.log(a.bar);
  // // 标签
  // foo: for (var i = 1; i < 4; i++) {
  //     for (var j = 1; j < 4; j++) {
  //         if ((i * j) >= 3) {
  //             console.log("stopping!", i, j);
  //             break foo; // 一步跳出外层循环
  //         }
  //         console.log(i, j);
  //     }
  // }
  // // 1 1
  // // 1 2
  // // "stopping!" 1 3
  // var a = {} + [];
  // console.log(a); // [object Object]
  // var a = [] + {};
  // console.log(a); // [object Object]
  // // 对象解构
  // function getData() {
  //     return {
  //         a: 42,
  //         b: "abc"
  //     };
  // }
  // var {
  //     a, // a: a 的简化版本
  //     b
  // } = getData();
  // console.log(a, b); // 42 "abc"
  // // 相当于:
  // var res = getData();
  // var a = res.a;
  // var b = res.b;
  // console.log(a, b); // 42 "abc"
  // // else if 只是习惯简便用法, 非 JS 语法
  // var a = {
  //     b: 42
  // }
  // var b = {
  //     b: 43
  // }
  // console.log(a < b); // false a 与 b 均为 [object Object]
  // console.log(a > b); // false
  // console.log(a == b); // false 此时适用对象的相等比较
  // console.log(a <= b); // true 相当于 !(a > b)
  // console.log(a >= b); // true 相当于 !(a < b)
  // // 如果两边的值中有 true 或者 false, 不要使用 ==
  // // 如果两边的值中有 [] "" 0, 尽量不要使用 ==
  // console.log("1" == 1); // true
  // console.log("1" === 1); // false
  // console.log(NaN == NaN); // false
  // console.log(42 == true); // false !
  // console.log(42 == false); // false !!!
  // // 此处布尔类型被强制类型转换为数字 0 或 1
  // // 在 == 中 null 和 undefined 是一回事
  // var a = null;
  // var b = undefined;
  // console.log(a == b); // true
  // console.log(a == false); // false
  // console.log(b == false); // false
  // console.log(a == ""); // false
  // console.log(b == ""); // false
  // console.log(a == 0); // false
  // console.log(b == 0); // false
  // var a = "abc";
  // var b = Object(a);
  // console.log(b);
  // // String {
  // //     0: "a"
  // //     1: "b"
  // //     2: "c"
  // //     length: 3
  // //     __proto__: String
  // //     [[PrimitiveValue]]: "abc"
  // // }
  // var i = 1;
  // Number.prototype.valueOf = function () {
  //     return i++;
  // };
  // var a = new Number(42);
  // console.log(a);
  // var b = +a;
  // console.log(b); // 1
  // if (a == 2 && a == 3) {
  //     console.log("Yep, this happened.");
  // }
  // console.log(0 == false); // true
  // console.log("0" == false); // true
  // console.log("" == false); // true
  // console.log([] == false); // true
  // console.log("" == 0); // true
  // console.log("" == []); // true
  // console.log([] == 0); // true
  // console.log(0 == "\n"); // true
  // console.log(true == "true", 233); // false 233
  // // 左边的布尔值先被强制类型转换为数字 1，与右边比较。此时左数字右字符串，右边被强制类型转换为数字 NaN，1 与 NaN 不相等
  // console.log(false == "false", 233); // false 233
  // // 以下情况源于 ToPrimitive 强制类型转换
  // console.log([] == ![]); // true
  // console.log(2 == [2]); // true
  // console.log("" == [null]); // true
  // var a = [1];
  // var b = [3];
  // console.log(b - a); // 2
  // var c = "abc";
  // if (c || false) {
  //     console.log(c);
  // }
  // // || 和 && 为操作数选择器运算符而非其他语言中的逻辑运算符
  // // 他们返回两个操作数之一
  // var n = null;
  // var y = "abc";
  // console.log(y || n); // "abc"
  // console.log(n || y); // "abc"
  // console.log(y || y); // "abc"
  // console.log(n || n); // null
  // console.log(y && n); // null
  // console.log(n && y); // null
  // console.log(y && y); // "abc"
  // console.log(n && n); // null
  // function foo(a, b) {
  //     a = a || "hello";
  //     b = b || "world";
  //     console.log(a + " " + b);
  // }
  // foo(); // "hello world"
  // foo("yeah", "yeah!"); // "yeah yeah!"
  // foo("", "you"); // "hello you"
  // foo("yo"); // "yo world"
  // // && 又称守护运算符(guard operator)
  // // a && foo() 相当于 if (a) { foo(); }
  // function foo() {
  //     console.log(a);
  // }
  // var a = 42;
  // a && foo(); // 42
  // a = 0;
  // a && foo(); // nothing happened
  // var a = [1, 2];
  // var b = [3, 4];
  // var c = a + b;
  // console.log(c); // "1, 23, 4"
  // console.log(typeof (c)); // "string"
  // console.log([] + {}); // [object Object]
  // console.log({} + []); // [object Object]
  // var a = {
  //     valueOf: function () {
  //         return 7;
  //     },
  //     toString: function () {
  //         return 11;
  //     }
  // }
  // console.log(a + ""); // "7"
  // console.log(String(a)); // "11"
  // console.log(!!Infinity); // true
  // function onlyOne() {
  //     var sum = 0;
  //     for (var i = 0; i < arguments.length; i++) {
  //         if (arguments[i]) {
  //             sum += arguments[i]; // 为什么不用 sum++ 可能因为：用了就体现不出 arguments[i] 被隐式强制类型转换为布尔值 0/1 累加
  //         }
  //     }
  //     return sum == 1;
  // }
  // var a = true;
  // var b = false;
  // console.log(onlyOne(b, a)); // true
  // console.log(onlyOne(b, a, b, b, b)); // true
  // console.log(onlyOne(b, b)); // false
  // console.log(onlyOne(b, a, a, b)); // false
  // // parseInt(..) 先将参数强制类型转换为字符串再解析
  // // 应避免向其传入非字符串参数
  // var a = {
  //     num: 21,
  //     toString: function () {
  //         return String(this.num * 2)
  //     }
  // };
  // console.log(parseInt(a)); // 42
  // console.log(parseInt(0.000008)); // 0, 0 来自 "0.000008"
  // console.log(parseInt(0.0000008)); // 8, 8 来自 "8e-7"
  // console.log(parseInt(false, 16)); // 250, fa 来自 "false"
  // console.log(parseInt(parseInt, 16)); // 15, f 来自 "function.."
  // console.log(parseInt("0x10")); // 16
  // console.log(parseInt("103", 2)); // 2
  // console.log(~32); // -33
  // console.log(~0); // -1
  // console.log(~1); // -2
  // console.log(~-1); // 0
  // console.log(~NaN); // -1
  // console.log(~undefined); // -1
  // console.log(~null); // -1
  // console.log(~Infinity); // -1
  // console.log(~-Infinity); // -1
  // // 当且仅当 a 的值为 -1 时，~a 等于 0
  // // ~ 运算符可用于条件判断，优于 >= 0 和 == -1
  // var a = "Hello World";
  // var target = "lo";
  // if (~a.indexOf(target)) {
  //     console.log('"' + target + '", find it!');
  // }
  // target = "you";
  // if (!~a.indexOf(target)) {
  //     console.log("Didn't find " + '"' + target + '".');
  // }
  // // ~~ 字位截除
  // console.log(Math.floor(-49.6)); // -50
  // console.log(~~-49.6); // -49
  // console.log(~~1E20 / 10); // 166199296
  // console.log(1E20 | 0 / 10); // 1661992960
  // console.log((1E20 | 0) / 10); // 166199296
  // var a = "42px";
  // console.log(Number(a)); // NaN
  // console.log(parseInt(a)); // 42
  // // 解析允许字符串中含有非数字字符，而转换不允许，失败并返回 NaN
  // var a = 1,
  //     b = 2;
  // console.log(a++ + b); // 3
  // var a = 1,
  //     b = 2;
  // console.log(a + ++b); // 4
  // var a = 1,
  //     b = 2;
  // console.log(a + + +b); // 3
  // var timestamp = +new Date();
  // console.log(timestamp);
  // var timestamp = +new Date; // JS 中，构造函数无参数时可以不带 ()。仅用于 new fn()，对一般函数 fn() 不适用
  // console.log(timestamp);
  // // ES5 建议用 Date.now() 获取当前时间戳，new Date(..).getTime() 获取指定时间的时间戳
  // var a = new Boolean(false);
  // var b = new Number(0);
  // var c = new String("");
  // var d = Boolean(a && b && c);
  // console.log(d); // true
  // d = Object.create(null);
  // console.log(Boolean(d));
  // d = {};
  // console.log(Boolean(d));
  // // 常见假值对象 document.all。非标准用法，用来判断浏览器是否老版本 IE
  // // toJSON() 返回一个能够被字符串化的安全的 JSON 值
  // // 而非返回一个 JSON 字符串，例如：
  // var a = {
  //     val: [1, 2, 3],
  //     // 可能是我们想要的结果！
  //     toJSON: function () {
  //         return this.val.slice(1);
  //     }
  // };
  // var b = {
  //     val: [1, 2, 3],
  //     toJSON: function () {
  //         return "[" + this.val.slice(1).join() + "]";
  //     }
  // };
  // j1 = JSON.stringify(a);
  // j2 = JSON.stringify(b);
  // console.log(j1); // "[2,3]"
  // console.log(j2); // ""[2,3]""
  // var a = {
  //     b: 42,
  //     c: "44",
  //     d: [1, 2, 3]
  // };
  // j1 = JSON.stringify(a, ["b", "d"]);
  // j2 = JSON.stringify(a, function (k, v) {
  //     if (k !== "c") {
  //         console.log("k: ", k); // 递归字符串化，012 是 [1, 2, 3] 的索引值
  //         return v;
  //     }
  // });
  // console.log(j1); // "{"b":42,"d":[1,2,3]}"
  // console.log(j2); // "{"b":42,"d":[1,2,3]}"
  // j1 = JSON.stringify(a, null, "---");
  // console.log(j1);
  // // {
  // // ---"b": 42,
  // // ---"c": "44",
  // // ---"d": [
  // // ------1,
  // // ------2,
  // // ------3
  // // ---]
  // // }
  // j1 = JSON.stringify(a, null, 3);
  // console.log(j1);
  // // {
  // //     "b": 42,
  // //     "c": "44",
  // //     "d": [
  // //         1,
  // //         2,
  // //         3
  // //     ]
  // // }
  // var o = {};
  // var a = {
  //     b: 42,
  //     c: o,
  //     d: function () {}
  // };
  // o.e = a;
  // // let j = JSON.stringify(a);
  // // console.log(j); // Uncaught TypeError: Converting circular structure to JSON
  // a.toJSON = function () {
  //     // 序列化仅包含 b
  //     return {
  //         b: this.b
  //     };
  // };
  // let j = JSON.stringify(a);
  // console.log(j); // "{"b":42}"
  // let a = JSON.stringify({
  //     a: 12,
  //     b: "good",
  //     c: () => {},
  //     d: [2, 3]
  // });
  // console.log(a); // "{"a":12,"b":"good","d":[2,3]}"
  // // Uncaught TypeError: Method RegExp.prototype.exec called on incompatible receiver[object Object]
  // function isThisCool(vals, fn, rx) {
  //     vals = vals || Array.prototype;
  //     fn = fn || Function.prototype;
  //     rx = rx || RegExp.prototype;
  //     return rx.test(
  //         vals.map(fn).join("")
  //     );
  // }
  // isThisCool(); // true
  // isThisCool(
  //     ["a", "b", "c"],
  //     function (v) {
  //         return v.toUpperCase();
  //     },
  //     /a/
  // ); // false
  // var a = " abc ";
  // console.log(a.indexOf("c")); // 3 注意开头空格，否则是 2
  // console.log(a.toUpperCase()); // " ABC "
  // console.log(a.trim()); // "abc"
  // console.log(typeof Function.prototype); // "function"
  // console.log(Function.prototype()); // undefined 空函数！
  // console.log(RegExp.prototype.toString()); // "/(?:)/" 空正则表达式！
  // // "abc".match(RegExp.prototype); // Uncaught TypeError
  // // Symbol
  // var mysym = Symbol("my own symbol");
  // var mysym2 = Symbol("my y y y y");
  // console.log(mysym); // Symbol(my own symbol)
  // console.log(mysym.toString()); // "Symbol(my own symbol)"
  // console.log(typeof mysym); // "symbol"
  // var a = {};
  // a[mysym] = "foobar";
  // a[mysym2] = "123bar";
  // console.log(Object.getOwnPropertySymbols(a));
  // // [Symbol(my own symbol), Symbol(my y y y y)]
  // console.log(a);
  // var a = new String("hello");
  // console.log(a); // 字符串对象
  // console.log(a.toString()); // "hello"
  // console.log(a); // 字符串对象
  // console.log({
  //     a: 113,
  //     b: "hah"
  // }.toString()); // [object Object]
  // console.log(Date.now()); // 1520428097006
  // console.log((new Date()).getTime()); // 1520428097006
  // console.log(Date()); // Wed Mar 07 2018 21:08:17 GMT+0800 (CST)
  // function fakeJoin(arr, connector) {
  //     var str = "";
  //     for (let i = 0; i < arr.length; i++) {
  //         if (i > 0) {
  //             str += connector;
  //         }
  //         if (arr[i] !== undefined) {
  //             str += arr[i];
  //         }
  //     }
  //     return str;
  // }
  // var a = new Array(3);
  // console.log(fakeJoin(a, "-")); // "--"
  // var c = [1, 2, 4];
  // var d = c;
  // d.push(8);
  // console.log(c);
  // console.log(d);
  // c[1.1] = 16;
  // c[1.2] = 32;
  // console.log(c);
  // console.log(c[1.1]);
  // console.log(c[1.2]);
  // var a = new String("abs");
  // console.log(a);
  // console.log(0 / -5); // -0
  // console.log(-0 / -5); // 0
  // console.log(0 / 0); // NaN
  // console.log(-0 / 0); // NaN
  // console.log(0 / -0); // NaN
  // console.log(1 / 0); // Infinity
  // console.log(-1 / 0); // -Infinity
  // console.log(NaN === NaN); // false 非自反
  // console.log(NaN !== NaN); // true
  // console.log(typeof NaN === "number"); // true
  // var a = 2 / "foo";
  // var b = "foo";
  // console.log(window.isNaN(a)); // true
  // console.log(window.isNaN(b)); // true
  // console.log(Number.isNaN(a)); // true
  // console.log(Number.isNaN(b)); // false
  // if (!Number.isNaN) {
  //     Number.isNaN = function (n) {
  //         return n !== n;
  //     };
  // }
  // alert("hot")
  // var a = [];
  // a["13a"] = 3;
  // console.log(a.length); // 0
  // console.log(a["13a"]); // 3
  // a[7] = 4;
  // console.log(a.length); // 8
  // a["20"] = 9;
  // console.log(a.length); // 21
  // a["60.34"] = 17;
  // console.log(a.length); // 21
  // console.log(a);
  // var a = [1, 2, 3];
  // document.write(a.concat(4, 5));
  // var a = "foo";
  // var b = ["f", "o", "o"];
  // // console.log(a.reverse); // undefined
  // // console.log(Array.prototype.reverse.call(a)); // error
  // console.log(b.reverse()); // ["o", "o", "f"]
  // var c = a
  //     .split("")
  //     .reverse()
  //     .join("");
  // console.log(c); // "oof"
  // a = 11;
  // b = 11.0;
  // console.log(a === b); // true
  // // 42.toFixed(3); // SyntaxError
  // console.log((42).toFixed(3)); // "42.000"
  // console.log((42).toPrecision(3)); // "42.0"
  // console.log((42).toExponential()); // "4.2e+1"
  // var onethousand = 1E3;
  // var milli = 1E-3;
  // console.log(onethousand); // "1000"
  // console.log(milli); // "0.001"
  // console.log(243); // "243"
  // console.log(0363); // "243" 八进制旧写法，ES6 严格模式不支持
  // console.log(0O363); // "243" 不推荐
  // console.log(0o363); // "243"
  // console.log(0xf3); // "243"
  // console.log(0b11110011); // "243"
  // console.log(Number.MAX_SAFE_INTEGER); // "9007199254740991" 2^53-1
  // console.log(Number.MIN_SAFE_INTEGER); // "-9007199254740991"
  // console.log(2 ** 53 === 2 ** 53 + 1); // true 不安全
  // // console.log(2**53+2);
  // // console.log(2**53+3);
  // // console.log(2**53+4);
  // // console.log(2**53+5);
  // // console.log(2**53+6);
  // // console.log(2**53+7);
  // // console.log(2**53+8);
  // // console.log(2**53+9);
  // console.log(2147483647.43 | 0); // "2147483647"
  // console.log(2147483648.43 | 0); // "-2147483648"
  // console.log(2147483649.43 | 0); // "-2147483647"
  // console.log(NaN | 0); // 0
  // console.log(Infinity | 0); // 0
  // console.log(undefined); // "undefined"
  // var undefined = 1; // "1" 全局，非严格模式
  // console.log(undefined); // "1"
  // function foo() {
  //     "use strict";
  //     var undefined = 3;
  //     console.log(undefined); // "3" 局部
  // }
  // foo();
})();
