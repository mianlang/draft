(function gy() {
  console.log('--------------YDKJS2-2 activated--------------');

  // function factorial(n) {
  //   function fact(v, res) {
  //     if (v < 2) return res;
  //     return fact(v - 1, v * res);
  //   }
  //   return fact(n, 1);
  // }
  // console.log(factorial(5));

  // function* foo() {
  //   console.log('* foo() starting');
  //   yield 3;
  //   yield 4;
  //   console.log('* foo() finished');
  // }
  // function* bar() {
  //   yield 1;
  //   yield 2;
  //   yield* foo();
  //   yield 5;
  // }
  // const it = bar();
  // console.log(it.next().value); // 1
  // console.log(it.next().value); // 2
  // console.log(it.next().value); // '* foo() starting' 3
  // console.log(it.next().value); // 4
  // console.log(it.next().value); // '* foo() finished' 5

  // function* main() {
  //   const x = yield 'ello world';
  //   console.log(x);
  // }
  // const it = main();
  // it.next();
  // try {
  //   it.throw('Oops');
  // } catch (err) {
  //   console.log(err);
  // }

  // function* main() {
  //   const x = yield 'Hello World';
  //   yield console.log(x.toLowerCase());
  // }
  // const it = main();
  // console.log(it.next().value);
  // try {
  //   it.next('dDD');
  // } catch (err) {
  //   console.log(err);
  // }

  // function* something() {
  //   let nextVal;
  //   nextVal = nextVal || 1;
  //   while (true) {
  //     console.log(nextVal);
  //     nextVal = 3 * nextVal + 6;
  //     yield nextVal;
  //   }
  // }
  // const it = something();
  // it.next();
  // it.next();
  // it.next();
  // it.next();

  // for (let i = 0; i < 10; i += 1) {
  //   if (i === 7) {
  //     break;
  //   }
  //   console.log(i);
  // }

  // const something = (() => {
  //   let nextVal;
  //   return {
  //     [Symbol.iterator]: () => this,
  //     next: () => {
  //       if (nextVal === undefined) {
  //         nextVal = 1;
  //       } else {
  //         nextVal = 3 * nextVal + 6;
  //       }
  //       return {
  //         done: false,
  //         value: nextVal,
  //       };
  //     },
  //   };
  // })();
  // console.log(something.next().value);
  // console.log(something.next().value);
  // console.log(something.next().value);
  // console.log(something.next().value);

  // let a = 1;
  // let b = 2;
  // function* foo() {
  //   a += 1;
  //   yield;
  //   b *= a;
  //   a = (yield b) + 3;
  //   console.log(a, b, '123');
  // }
  // function* bar() {
  //   b -= 1;
  //   yield;
  //   a = (yield 8) + b;
  //   b = a * (yield 2);
  //   // 此处效果等价于 yield(a * 2)
  // }
  // function step(gen) {
  //   const it = gen();
  //   let last;
  //   return function s123() {
  //     last = it.next(last).value;
  //   };
  // }
  // const s1 = step(foo);
  // const s2 = step(bar);
  // s2();
  // console.log(a, b);
  // s2();
  // console.log(a, b);
  // s1();
  // console.log(a, b);
  // s2();
  // console.log(a, b);
  // s1();
  // console.log(a, b);
  // s1();
  // console.log(a, b);
  // s2();
  // console.log(a, b);

  // let a = 1;
  // let b = 2;
  // function* foo() {
  //   a += 1;
  //   yield;
  //   b *= a;
  //   a = (yield b) + 3;
  //   console.log(a, b, '123');
  // }
  // function* bar() {
  //   b -= 1;
  //   yield;
  //   a = (yield 8) + b;
  //   b = a * (yield 2);
  // }
  // const it = foo();
  // let last;
  // last = it.next(last).value;
  // last = it.next(last).value;
  // it.next(last);
  // // 辅助函数完成上述功能
  // function step(gen) {
  //   const itt = gen();
  //   let lastt;
  //   return function s123() {
  //     lastt = itt.next(lastt).value;
  //   };
  // }
  // const s2 = step(bar);
  // s2();
  // s2();
  // s2();
  // s2();
  // console.log(a, b);

  // function* foo(x) {
  //   const y = x * (yield);
  //   return y;
  // }
  // const it = foo(6);
  // it.next();
  // const res = it.next(7);
  // console.log(res.value);

  // let x = 1;
  // function bar() {
  //   x += 1;
  // }
  // function* foo() {
  //   x += 1;
  //   bar();
  //   yield;
  //   console.log('x:', x);
  // }
  // foo();

  // 保证本地 master 与远程同步, 使用 pull, push, merge --squash
  // 每次需要工作时, checkout -b xxxxx
  // 小更改 commit -a -m 'xx'
  // 工作完成
  // git checkout master
  // pull
  // git checkout xxxxx
  // rebase master
  // git checkout master
  // merge xxxxx --squash
  // push
  // git branch -D xxxxx

  // function asyncify(fn) {
  //     var orig_fn = fn,
  //         intv = setTimeout(function () {
  //             intv = null;
  //             if (fn) fn();
  //         }, 0);
  //     fn = null;
  //     return function () {
  //         if (intv) {
  //             fn = orig_fn.bind.apply(
  //                 orig_fn, [this].concat([].slice.call(arguments))
  //             );
  //         } else {
  //             orig_fn.apply(this, arguments);
  //         }
  //     };
  // }
  // function result(data) {
  //     concole.log(a);
  // }
  // var a = 0;
  // ajax("..pre-cached-url..", asyncify(result));
  // a++;

  // // https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
  // // Let's get hold of those elements
  // var outer = document.querySelector('.outer');
  // var inner = document.querySelector('.inner');
  // // Let's listen for attribute changes on the
  // // outer element
  // new MutationObserver(function () {
  //     console.log('mutate');
  // }).observe(outer, {
  //     attributes: true
  // });
  // // Here's a click listener…
  // function onClick() {
  //     console.log('click');
  //     setTimeout(function () {
  //         console.log('timeout');
  //     }, 0);
  //     Promise.resolve().then(function () {
  //         console.log('promise1');
  //     }).then(function () {
  //         console.log('promise2');
  //     });
  //     outer.setAttribute('data-random', Math.random());
  // }
  // // …which we'll attach to both elements
  // inner.addEventListener('click', onClick);
  // outer.addEventListener('click', onClick);
  // inner.click();

  // process.nextTick(function () {
  //     console.log(17);
  // });

  // new Promise(function (resolve) {
  //     console.log(13);
  //     resolve();
  //     console.log(14);
  // }).then(function () {
  //     console.log(15);
  // });

  // process.nextTick(function () {
  //     console.log(18);
  // });
  // // 13, 14, 15, 17, 18

  // setTimeout(function () {
  //     console.log(4)
  // }, 0);
  // new Promise(function (resolve) {
  //     console.log(1)
  //     for (var i = 0; i < 10000; i++) {
  //         i == 9999 && resolve()
  //     }
  //     console.log(2)
  // }).then(function () {
  //     console.log(5)
  // });
  // console.log(3);
  // // 1, 2, 3, 5, 4

  // function timeoutify(fn, delay) {
  //     var intv = setTimeout(() => {
  //         intv = null;
  //         fn(new Error("Timeout!"));
  //     }, delay);
  //     return function () {
  //         // 还没有超时？
  //         if (intv) {
  //             clearTimeout(intv);
  //             fn.apply(this, arguments);
  //         }
  //     };
  // }
  // // 使用 error-first 风格回调设计
  // function foo(err, data) {
  //     if (err) {
  //         console.error(err);
  //     } else {
  //         console.log(data);
  //     }
  // }
  // ajax("http://some.url.1", timeoutify(foo, 500));

  // var tracked = false;
  // analytics.trackPurchase(purchaseData, function () {
  //     if (!tracked) {
  //         tracked = true;
  //         chargeCreditCard();
  //         displayThankyouPage();
  //     }
  // });

  // var intv = setTimeout(() => {
  //     console.log(123);
  // }, 100);
  // console.log(intv, 23);
  // // setTimeout(() => {
  // //     console.log(intv, 2333);
  // // }, 200);
  // console.log(intv, 233);

  // // 第一章 异步：现在与将来

  // // 事件循环每一轮称为一个 tick，用户交互、IO 和定时器向事件队列加入事件

  // // race condition 竞态条件 latch

  // // "进程" 把自身分割为更小的块，以便其他 "进程" 加入

  // // job queue 任务队列，ES6 概念，每个 tick 后挂起任务队列，可在当前 tick 任务队列末尾添加一个项目(任务)

  // function now() {
  //     return 21;
  // }
  // function later() {
  //     answer = answer * 2;
  //     console.log("Meaning of life:", answer);
  // }
  // setTimeout(later, 1000);
  // var answer = now();

  // var a = {
  //     index: 3
  // };
  // console.log(a);
  // a.index++;

  // console.log("Hello, Async");
  // 第二部分 异步和性能

  // ## 第一章 异步：现在与将来
  // ## 第二章 回调
  // ## 第三章 Promise
  // ## 第四章 生成器
  // ## 第五章 程序性能
  // ## 第六章 性能测试与调优
})();
