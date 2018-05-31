(function gy() {
  const snowman = '\u2603'; // ☃
  const gclefOld = '\uD834\uDD1E'; // 𝄞
  const gclef = '\u{1D11E}'; // 𝄞
  console.log(snowman, gclefOld, gclef);
  console.log(snowman.length, gclefOld.length, gclef.length); // 1 2 2

  console.log('a\u0300', 'a\u0301', 'a\u0302', 'a\u0303', 'a\u0304'); // à á â ã ā

  const dec = 42;
  const oct = 0o52; // 42
  const hex = 0x2a; // 42
  const bin = 0b101010; // 42
  console.log(dec, oct, hex, bin);

  // function foo(strings, ...values) {
  //   console.log(strings);
  //   console.log(values);
  // }
  // const desc = 'awesome & ';
  // const magic = 42;
  // foo`Everything is ${desc}${magic}!`;

  // ["Everything is", "!"]
  // ["awesome", 42]

  //   console.log(`a
  //   b
  //    c

  //     d

  //    e

  //  f`);

  // const o = {
  //   aid: 9,
  //   get id() {
  //     this.aid += 1;
  //     return this.aid;
  //   },
  //   set id(v) {
  //     this.aid = v;
  //   },
  // };
  // console.log(o.id); // 10
  // console.log(o.id); // 1
  // o.id = 20;
  // console.log(o.id); // 21
  // console.log(o.aid); // 21
  // console.log(o.aid); // 21

  // function runSomething(o) {
  //   const x = Math.random();
  //   const y = Math.random();
  //   return o.something(x, y);
  // }
  // const ans = runSomething({
  //   something: function something(x, y) {
  //     if (x > y) {
  //       return something(y, x);
  //     }
  //     return y - x;
  //   },
  // });
  // console.log(ans);

  // const defaults = {
  //   options: {
  //     remove: true,
  //     enable: false,
  //     instance: {},
  //   },
  //   log: {
  //     warn: true,
  //     error: true,
  //   },
  // };
  // let config = {
  //   options: {
  //     remove: false,
  //     instance: null,
  //   },
  //   log: {
  //     warn: true,
  //     error: true,
  //   },
  // };
  // {
  //   const {
  //     options: {
  //       remove = defaults.options.remove,
  //       enable = defaults.options.enable,
  //       instance = defaults.options.instance,
  //     } = {},
  //     log: { warn = defaults.log.warn, error = defaults.log.error } = {},
  //   } = config;
  //   config = {
  //     options: { remove, enable, instance },
  //     log: { warn, error },
  //   };
  // }
  // console.log(config.options);
  // console.log(config.log);

  // function foo([x, y]) {
  //   console.log(x, y);
  // }
  // foo([42]);
  // foo([4, 2]);
  // foo([]);

  // // ES6 实现
  // function foo(...args) {
  //   // args 已经是一个真正的数组
  //   // 丢弃 args 中第一个元素
  //   args.shift();
  //   console.log(...args);
  // }
  // // ES6 以前的实现
  // function bar() {
  //   // 把 arguments 转化为一个真正的数组
  //   let args = Array.prototype.slice.call(arguments);
  //   args.push(4, 5);
  //   args = args.filter(v => v % 2 === 0);
  //   foo.apply(null, args);
  // }
  // bar(0, 1, 2, 3); // 2 4

  // const aa = -0;
  // const bb = NaN;
  // let cc = 0; // 只对你有意表明不会改变的变量使用 const, 让它成为表明意图的工具
  // console.log(aa);
  // console.log(aa === bb);
  // console.log(aa === cc);
  // function User() {
  //   function doLogin(user, pw) {
  //     const username = user;
  //     const password = pw;
  //     console.log(username, password, 'success');
  //   }
  //   const publicAPI = {
  //     login: doLogin,
  //   };
  //   return publicAPI;
  // }
  // const fred = User();
  // fred.login('mianlang', '12321');
  // const david = User();
  // david.login('d', 'v');

  // const makeAdder = x => {
  //   const add = y => console.log(y + x);
  //   return add;
  // };
  // const plusOne = makeAdder(1);
  // const plusTen = makeAdder(10);
  // plusOne(3);
  // plusTen(3);

  // foo();
  // function foo() {
  //   console.log('hoisting!');
  // }

  // const $ = 1;
  // console.log($);
  // const _ = 12;
  // console.log(_);
  // const 好的 = 123;
  // console.log(好的);

  // const a = 42;
  // const b = 'foo';
  // console.log(a < b); // false
  // console.log(a > b); // false
  // console.log(a == b); // false

  // const obj = {};
  // obj.a = 123;
  // obj['hello w'] = 2;
  // console.log(obj);
  console.log('--------------YDKJS3 activated--------------');
})();
