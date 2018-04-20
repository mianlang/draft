(function () {


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

    console.log('--------------YDKJS2-2 activated--------------');
    console.log('squash1');
    console.log('squash2');
    console.log('squash3');
    console.log('master change');
    console.log('123456777 master change');

    // console.log('sq1');
    // console.log('sq2');
    // console.log('sq3');

    console.log('cmyt');

    console.log('999');

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