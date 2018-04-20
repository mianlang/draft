;
(function () {

    // // 自省
    // function Foo() {
    //     // ...
    // }
    // Foo.prototype.something = function () {
    //     alert(233);
    // }
    // var a1 = new Foo();
    // if (a1 instanceof Foo) {
    //     a1.something();
    // }


    // // controller

    // // 类设计模式
    // // 父类
    // function Controller() {
    //     this.errors = [];
    // }
    // Controller.prototype.showDialog = function (title, msg) {
    //     // 给用户显示标题和消息
    // };
    // Controller.prototype.success = function (msg) {
    //     this.showDialog("Success", msg);
    // };
    // Controller.prototype.failure = function (err) {
    //     this.errors.push(err);
    //     this.showDialog("Error", err);
    // };
    // // 子类
    // function LoginController() {
    //     Controller.call(this);
    // }
    // // 把子类关联到父类
    // LoginController.prototype = Object.create(Controller.prototype);
    // LoginController.prototype.getUser = function () {
    //     return document.getElementById("login_username").value;
    // };
    // LoginController.prototype.getPassword = function () {
    //     return document.getElementById("login_password").value;
    // };
    // LoginController.prototype.validateEntry = function (user, pw) {
    //     user = user || this.getUser();
    //     pw = pw || this.getPassword();
    //     if (!(user && pw)) {
    //         return this.failure(
    //             "Please enter a username & password!"
    //         );
    //     } else if (pw.length < 5) {
    //         return this.failure(
    //             "Password must be 5+ characters!"
    //         );
    //     }
    //     // 如果执行到这里说明通过验证
    //     return true;
    // };
    // // 重写基础的 failure()
    // LoginController.prototype.failure = function (err) {
    //     // “super”调用
    //     Controller.prototype.failure.call(
    //         this,
    //         "Login invalid: " + err
    //     );
    // };
    // // 子类
    // function AuthController(login) {
    //     Controller.call(this);
    //     // 合成
    //     this.login = login;
    // }
    // // 把子类关联到父类
    // AuthController.prototype = Object.create(Controller.prototype);
    // AuthController.prototype.server = function (url, data) {
    //     return $.ajax({
    //         url: url,
    //         data: data
    //     });
    // };
    // AuthController.prototype.checkAuth = function () {
    //     var user = this.login.getUser();
    //     var pw = this.login.getPassword();
    //     if (this.login.validateEntry(user, pw)) {
    //         this.server("/check-auth", {
    //             user: user,
    //             pw: pw
    //         })
    //             .then(this.success.bind(this))
    //             .fail(this.failure.bind(this));
    //     }
    // };
    // // 重写基础的 success()
    // AuthController.prototype.success = function () {
    //     // “super”调用
    //     Controller.prototype.success.call(this, "Authenticated!");
    // }
    // // 重写基础的 failure()
    // AuthController.prototype.failure = function (err) {
    //     // “super”调用
    //     Controller.prototype.failure.call(
    //         this,
    //         "Auth Failed: " + err
    //     );
    // };
    // var auth = new AuthController(
    //     // 除了继承，我们还需要合成
    //     new LoginController()
    // );
    // auth.checkAuth();

    // // 行为委托设计模式
    // // 使用对象关联风格的行为委托来实现更简单的设计
    // var LoginController = {
    //     errors: [],
    //     getUser: function () {
    //         return document.getElementById(
    //             "login_username"
    //         ).value;
    //     },
    //     getPassword: function () {
    //         return document.getElementById(
    //             "login_password"
    //         ).value;
    //     },
    //     validateEntry: function (user, pw) {
    //         user = user || this.getUser();
    //         pw = pw || this.getPassword();
    //         if (!(user && pw)) {
    //             return this.failure(
    //                 "Please enter a username & password!"
    //             );
    //         } else if (pw.length < 5) {
    //             return this.failure(
    //                 "Password must be 5+ characters!"
    //             );
    //         }
    //         // 如果执行到这里说明通过验证
    //         return true;
    //     },
    //     showDialog: function (title, msg) {
    //         // 给用户显示标题和消息
    //     },
    //     failure: function (err) {
    //         this.errors.push(err);
    //         this.showDialog("Error", "Login Invalid: " + err);
    //     }
    // };
    // // 让 AuthController 委托 LoginController
    // var AuthController = Object.create(LoginController);
    // AuthController.errors = [];
    // AuthController.checkAuth = function () {
    //     var user = this.getUser();
    //     var pw = this.getPassword();
    //     if (this.validateEntry(user, pw)) {
    //         this.server("/check-auth", {
    //             user: user,
    //             pw: pw
    //         })
    //             .then(this.accepted.bind(this))
    //             .fail(this.rejected.bind(this));
    //     }
    // };
    // AuthController.server = function (url, data) {
    //     return $.ajax({
    //         url: url,
    //         data: data
    //     });
    // };
    // AuthController.accepted = function () {
    //     this.showDialog("Success", "Authenticated!");
    // };
    // AuthController.rejected = function (err) {
    //     this.errors.push(err);
    //     this.showDialog("Error", "Auth Failed: " + err);
    // };
    // AuthController.checkAuth();
    // var controller1 = Object.create(AuthController);
    // var controller2 = Object.create(AuthController);


    // // 创建 UI 控件

    // // 控件“类”
    // // 父类
    // function Widget(width, height) {
    //     this.width = width || 50;
    //     this.height = height || 50;
    //     this.$elem = null;
    // }
    // Widget.prototype.render = function ($where) {
    //     if (this.$elem) {
    //         this.$elem.css({
    //             width: this.width + "px",
    //             height: this.height + "px"
    //         }).appendTo($where);
    //     }
    // };
    // // 子类
    // function Button(width, height, label) {
    //     // 调用“super”构造函数
    //     Widget.call(this, width, height);
    //     this.label = label || "Default";
    //     this.$elem = $("<button>").text(this.label);
    // }
    // // 让 Button“继承”Widget
    // Button.prototype = Object.create(Widget.prototype);
    // // 重写 render(..)
    // Button.prototype.render = function ($where) {
    //     // “super”调用
    //     Widget.prototype.render.call(this, $where);
    //     this.$elem.click(this.onClick.bind(this));
    // };
    // Button.prototype.onClick = function (evt) {
    //     console.log("Button '" + this.label + "' clicked!");
    // };
    // $(document).ready(function () {
    //     var $body = $(document.body);
    //     var btn1 = new Button(125, 30, "Hello");
    //     var btn2 = new Button(150, 40, "World");
    //     btn1.render($body);
    //     btn2.render($body);
    // });

    // // ES6 的 class 语法糖
    // class Widget {
    //     constructor(width, height) {
    //         this.width = width || 50;
    //         this.height = height || 50;
    //         this.$elem = null;
    //     }
    //     render($where) {
    //         if (this.$elem) {
    //             this.$elem.css({
    //                 width: this.width + "px",
    //                 height: this.height + "px"
    //             }).appendTo($where);
    //         }
    //     }
    // }
    // class Button extends Widget {
    //     constructor(width, height, label) {
    //         super(width, height);
    //         this.label = label || "Default";
    //         this.$elem = $("<button>").text(this.label);
    //     }
    //     render($where) {
    //         super.render($where);
    //         this.$elem.click(this.onClick.bind(this));
    //     }
    //     onClick(evt) {
    //         console.log("Button '" + this.label + "' clicked!");
    //     }
    // }
    // $(document).ready(function () {
    //     var $body = $(document.body);
    //     var btn1 = new Button(125, 30, "Hello");
    //     var btn2 = new Button(150, 40, "World");
    //     btn1.render($body);
    //     btn2.render($body);
    // })

    // // 委托控件对象
    // var Widget = {
    //     init: function (width, height) {
    //         this.width = width || 50;
    //         this.height = height || 50;
    //         this.$elem = null;
    //     },
    //     insert: function ($where) {
    //         if (this.$elem) {
    //             this.$elem.css({
    //                 width: this.width + "px",
    //                 height: this.height + "px"
    //             }).appendTo($where);
    //         }
    //     }
    // };
    // var Button = Object.create(Widget);
    // Button.setup = function (width, height, label) {
    //     // 委托调用
    //     this.init(width, height);
    //     this.label = label || "Default";
    //     this.$elem = $("<button>").text(this.label);
    // };
    // Button.build = function ($where) {
    //     // 委托调用
    //     this.insert($where);
    //     this.$elem.click(this.onClick.bind(this));
    // };
    // Button.onClick = function (evt) {
    //     console.log("Button '" + this.label + "' clicked!");
    // };
    // $(document).ready(function () {
    //     var $body = $(document.body);
    //     var btn1 = Object.create(Button);
    //     var btn2 = Object.create(Button);
    //     btn1.setup(125, 30, "Hello");
    //     btn2.setup(150, 40, "World");
    //     btn1.build($body);
    //     btn2.build($body);
    // });


    // // 第六章 行为委托

    // function Foo() {
    //     this.a = 23;
    //     this.b = "999";
    // }
    // a = new Foo();
    // for (var idx in a) {
    //     console.log(idx, a[idx]);
    // }
    // console.log(a);
    // console.log(a.__proto__);

    // // 委托理论
    // Task = {
    //     setID: function (ID) { this.id = ID; },
    //     outputID: function () { console.log(this.ID); }
    // };
    // XYZ = Object.create(Task);
    // XYZ.prepareTask = function (ID, Label) {
    //     this.setID(ID);
    //     this.label = Label;
    // };
    // XYZ.outputTaskDetails = function () {
    //     this.outputID;
    //     console.log(this.label);
    // };
    // // 对象关联 OLOO objects linked to other objects

    // function Foo() { }
    // var a1 = new Foo();
    // console.log(a1); // Foo {}
    // console.log(a1.constructor); // Foo() { }
    // console.log(a1.constructor.name); // "Foo"

    // Foo.prototype.constructor = function Gotcha() { };
    // console.log(a1.constructor); // Gotcha() { }
    // console.log(a1.constructor.name); // "Gotcha"
    // console.log(a1); // Foo {}

    // var Foo = {};
    // var a1 = Object.create(Foo);
    // console.log(a1); // {}
    // Object.defineProperty(Foo, "constructor", {
    //     enumerable: false,
    //     value: function Gotcha() { }
    // });
    // console.log(a1); // Gotcha {}


    // // 面向对象风格
    // function Foo(who) {
    //     this.me = who;
    // }
    // Foo.prototype.identify = function () {
    //     return "I am " + this.me;
    // };
    // function Bar(who) {
    //     Foo.call(this, who);
    // }
    // Bar.prototype = Object.create(Foo.prototype);
    // Bar.prototype.speak = function () {
    //     alert("Hello, " + this.identify() + ".");
    // };
    // var b1 = new Bar("b1");
    // var b2 = new Bar("b2");
    // b1.speak();
    // b2.speak();
    // console.log(b1.constructor); // function Foo(who) { this.me = who; }


    // // 对象关联风格
    // Foo = {
    //     init: function (who) {
    //         this.me = who;
    //     },
    //     identify: function () {
    //         return "I am " + this.me;
    //     }
    // };
    // Bar = Object.create(Foo);
    // Bar.speak = function () {
    //     alert("Hello, " + this.identify() + ".");
    // };
    // var b1 = Object.create(Bar);
    // b1.init("b1");
    // var b2 = Object.create(Bar);
    // b2.init("b2");
    // b1.speak();
    // b2.speak();


    // // 第四章 混合对象 “类”
    // // 第五章 原型

    // function NothingSpecial() {
    //     console.log("Don't mind me!");
    // }
    // console.log(NothingSpecial);
    // var a = new NothingSpecial();
    // console.log(a);

    // function Foo(name) {
    //     this.name = name;
    // }
    // Foo.prototype.myName = function () {
    //     return this.name;
    // }
    // var a = new Foo("a");
    // var b = new Foo("b");
    // console.log(a.myName());
    // console.log(b.myName());
    // console.log("Foo: ", Foo);
    // console.log("a: ", a);
    // function Foo2(name) {
    //     return {
    //         name: name,
    //         myName: function () {
    //             return (this.name + " 666");
    //         }
    //     };
    // }
    // var a = new Foo2("a");
    // var b = new Foo2("b");
    // console.log(a.myName());
    // console.log(b.myName());
    // console.log("Foo2: ", Foo2);
    // console.log("a: ", a);
    // function Foo3(name) {
    //     this.name = name;
    //     this.myName = function () {
    //         return (this.name + " 888");
    //     };
    // }
    // var a = new Foo3("a");
    // var b = new Foo3("b");
    // console.log(a.myName());
    // console.log(b.myName());
    // console.log("Foo3: ", Foo3);
    // console.log("a: ", a);

    // console.log(a.constructor); // Foo3
    // Foo3.prototype = {};
    // a = new Foo3();
    // console.log(a.constructor); // Object

    // // 原型继承
    // function Foo(name) {
    //     this.name = name;
    // }
    // Foo.prototype.myName = function () {
    //     return this.name;
    // };
    // function Bar(name, label) {
    //     Foo.call(this, name);
    //     this.label = label;
    // }
    // Bar.prototype = Object.create(Foo.prototype);
    // Bar.prototype.constructor = Bar;
    // // Object.defineProperty(Bar.prototype, "constructor", {
    // //     enumerable: false,
    // //     writable: true,
    // //     configurable: true,
    // //     value: Bar
    // // });
    // Bar.prototype.myLabel = function () {
    //     return this.label;
    // }
    // var a = new Bar("a", "obj a");
    // console.log(a.myName()); // "a"
    // console.log(a.myLabel()); // "obj a"

    // // __proto__ "dunder proto"

    // var foo = {
    //     a: 123,
    //     something: function () {
    //         console.log("Tell me something good...");
    //     }
    // };
    // var bar = Object.create(foo);
    // bar.something();
    // console.log(foo.a);
    // console.log(bar.a);
    // bar.a = 999;
    // console.log(foo.a);
    // console.log(bar.a);


    // // 第三章 对象

    // // JS 中六种主要类型(语言类型)
    // // string number boolean
    // // null undefined object? symbol?

    // // 对象子类型
    // // String Number Boolean
    // // Object Function Array
    // //Date RegExp Error

    // var strPrimitive = "I am a string";
    // console.log(typeof strPrimitive); // "string"
    // console.log(strPrimitive instanceof String); // false
    // var strObject = new String("I am a string");
    // console.log(typeof strObject); // "object"
    // console.log(strObject instanceof String); // true
    // console.log(Object.prototype.toString.call(strObject));

    // // 对象属性名会被转换为一个字符串
    // var myObject = {};
    // myObject[true] = "foo";
    // myObject[3] = "bar";
    // console.log(myObject);
    // myObject[myObject] = "baz";
    // console.log(myObject);
    // console.log(myObject["true"]); // "foo"
    // console.log(myObject["3"]); // "foo"
    // console.log(myObject["[object Object]"]); // "foo"

    // var myObject = {
    //     a: 2
    // };
    // console.log(Object.getOwnPropertyDescriptor(myObject, "a"));
    // // {
    // //     value: 2,
    // //     writable: true,
    // //     configurable: true,
    // //     enumerable: true
    // // }

    // // getter
    // var myObject = {
    //     a: 3,
    //     get a() {
    //         return 2;
    //     }
    // };
    // console.log(myObject.a); // 2
    // myObject.a = 3;
    // console.log(myObject.a); // 2
    // //setter
    // var myObject = {
    //     // _a_: 9,
    //     get a() {
    //         return this._a_;
    //     },
    //     set a(val) {
    //         this._a_ = val * 2;
    //     }
    // };
    // // console.log(myObject.a); // 9
    // myObject.a = 7;
    // console.log(myObject.a); // 14

    // // @@iterator
    // var myObject = {
    //     a: 2,
    //     b: 3
    // };
    // Object.defineProperty(myObject, Symbol.iterator, {
    //     enumerable: false,
    //     writable: false,
    //     configurable: true,
    //     value: function () {
    //         var o = this;
    //         var idx = 0;
    //         var ks = Object.keys(o);
    //         return {
    //             next: function () {
    //                 return {
    //                     value: o[ks[idx++]],
    //                     done: (idx > ks.length)
    //                 };
    //             }
    //         };
    //     }
    // });
    // // 手动遍历 myObject
    // var it = myObject[Symbol.iterator]();
    // console.log(it.next()); // {value: 2, done: false}
    // console.log(it.next()); // {value: 3, done: false}
    // console.log(it.next()); // {value: undefined, done: true}
    // // 用 for..of 遍历 myObject
    // for (var v of myObject) {
    //     console.log(v);
    // }

    // var randoms = {
    //     [Symbol.iterator]: function () {
    //         return {
    //             next: function () {
    //                 return {
    //                     value: Math.random(),
    //                     done: randoms_pool.length === 10
    //                 };
    //             }
    //         };
    //     }
    // };
    // var randoms_pool = [];
    // for (var n of randoms) {
    //     randoms_pool.push(n);
    // }
    // console.log(randoms_pool);


    // // 间接引用。容易发生在赋值时
    // function foo() {
    //     console.log(this.a);
    // }
    // var a = 2;
    // var o = { a: 3, foo: foo };
    // var p = { a: 4 };
    // o.foo(); // 3
    // (p.foo = o.foo)(); // 2 或 undefined

    // // 硬绑定
    // // 硬绑定包裹函数，接收参数并返回值
    // function foo(something, something2, something3) {
    //     console.log(this.a, something, something3);
    //     return this.a + something + something2;
    // }
    // var obj = {
    //     a: 2
    // };
    // var bar = function () {
    //     return foo.apply(obj, arguments);
    // };
    // var b = bar(3, 4, 7);

    // console.log(b);
    // // 硬绑定辅助函数
    // function bind(fn, obj) {
    //     return function () {
    //         return fn.apply(obj, arguments);
    //     };
    // }
    // var bar2 = bind(foo, obj);
    // b = bar2(9, 11, 6);
    // console.log(b);
    // // 内置 bind
    // var bar3 = foo.bind(obj);
    // b = bar3(0, 0, 1);
    // console.log(b);
    // // API 调用的「上下文」
    // function foo2(el) {
    //     console.log(el, this.id);        
    // }
    // var obj = {
    //     id: "awesome"
    // }
    // var a = [1, 2, 3];
    // a.forEach(foo2, obj);

    // // 软绑定
    // console.log(Function.prototype.softBind);
    // if (!Function.prototype.softBind) {
    //     Function.prototype.softBind = function (obj) {
    //         var fn = this;
    //         // 捕获所有 curried 参数
    //         var curried = [].slice.call(arguments, 1);
    //         var bound = function () {
    //             return fn.apply(
    //                 (!this || this === (window || global)) ?
    //                     obj : this,
    //                 curried.concat.apply(curried, arguments)
    //             );
    //         };
    //         bound.prototype = Object.create(fn.prototype);
    //         return bound;
    //     };
    // }
    // function foo() {
    //     console.log("name:" + this.name);
    // }
    // var obj = { name: "obj" },
    //     obj2 = { name: "obj2" },
    //     obj3 = { name: "obj3" };
    // var fooOBJ = foo.softBind(obj);
    // fooOBJ(); // name: obj
    // obj2.foo = fooOBJ;
    // obj2.foo(); // name: obj2
    // fooOBJ.call(obj3); // name: obj3
    // setTimeout(obj2.foo, 10); // name: obj

    // // this 在箭头函数中
    // function foo() {
    //     return (a) => {
    //         // this 继承自 foo()
    //         console.log(this.a);
    //     };
    // }
    // var obj1 = {
    //     a: 1
    // };
    // var obj2 = {
    //     a: 2
    // };
    // var bar = foo.call(obj1);
    // bar();
    // bar.call(obj2); // 1, 不是 2

    // function foo() {
    //     setTimeout(() => {
    //         console.log(this.a);
    //     }, 0);
    // }
    // function foo1() {
    //     setTimeout(function () {
    //         console.log(this.a);
    //     }, 100);
    // }
    // function foo2() {
    //     var self = this;
    //     setTimeout(function () {
    //         console.log(self.a);
    //     }, 200);
    // }
    // var obj = {
    //     a: 2
    // };
    // foo.call(obj); // 2
    // foo1.call(obj); // undefined
    // foo2.call(obj); // 2


    // // ø 安全的空this
    // function foo(a, b) {
    //     console.log("a:" + a + ", b:" + b);
    // }
    // var ø = Object.create(null);
    // foo.apply(ø, [2, 3]); // a:2, b:3
    // // 使用 bind(..) 进行柯里化
    // var bar = foo.bind(ø, 2);
    // bar(3); // a:2, b:3

    // function foo(p1, p2) {
    //     this.val = p1 + p2;
    // }
    // var bar = foo.bind(null, "p1");
    // var baz = new bar("p2");
    // console.log(baz.val); // p1p2

    // var fooz = new foo('dd', 'ff');
    // console.log(fooz.val);
    // var fooz = new foo(...['ll', 'pp']);
    // console.log(fooz.val);


    // // DK this绑定规则优先级
    // function foo() {
    //     console.log(this.a);
    // }
    // var obj1 = {
    //     a: 1,
    //     foo: foo
    // }
    // var obj2 = {
    //     a: 2,
    //     foo: foo
    // }
    // obj1.foo(); // 1
    // obj1.foo.call(obj2); // 2 显示绑定优先级高于隐式绑定

    // function foo(something) {
    //     this.a = something;
    // }
    // var obj1 = {};
    // var bar = foo.bind(obj1);
    // bar(2);
    // console.log(obj1.a); // 2
    // var baz = new bar(3);
    // console.log(obj1.a); // 2
    // console.log(baz.a); // 3    

    // function Car() { }
    // car1 = new Car()
    // console.log(car1.color)           // undefined
    // Car.prototype.color = null
    // console.log(car1.color)           // null
    // car1.color = "black"
    // console.log(car1.color)           // black

    // // bind
    // this.x = 9;
    // var module = {
    //     x: 81,
    //     getX: function () { console.log(this.x) }
    // }
    // module.getX(); // 81
    // var retrieveX = module.getX;
    // retrieveX(); // 9
    // var boundGetX = retrieveX.bind(module);
    // boundGetX(); // 81
    // // Partial Functions
    // function list() {
    //     return Array.prototype.slice.call(arguments);
    // }
    // var list1 = list(1, 2, 3);
    // console.log(list1); // [1, 2, 3]
    // var leadingFiveList = list.bind(undefined, 5);
    // var list2 = leadingFiveList(1, 2, 3);
    // console.log(list2); // [5, 1, 2, 3]
    // var list3 = leadingFiveList();
    // console.log(list3); // [5]
    // // 配合 setTimeout
    // function LateBloomer() {
    //     this.petalCount = Math.ceil(Math.random() * 12) + 1;
    // }
    // LateBloomer.prototype.bloom = function () {
    //     window.setTimeout(this.declare.bind(this), 1000);
    // };
    // LateBloomer.prototype.declare = function () {
    //     console.log('I am a beautiful flower with ' + this.petalCount + ' petals!');
    // };
    // var flower = new LateBloomer();
    // flower.bloom();
    // // 作为构造函数使用
    // function Point(x, y) {
    //     this.x = x;
    //     this.y = y;
    // }
    // Point.prototype.toString = function () {
    //     return this.x + ',' + this.y;
    // };
    // var p = new Point(1, 2);
    // console.log(p.toString()); // '1,2'
    // var emptyObj = {};
    // // console.log(emptyObj);
    // // var emptyObj2 = Object.create({});
    // // console.log(emptyObj2);
    // // var emptyObj3 = Object.create(null);
    // // console.log(emptyObj3);
    // var YAxisPoint = Point.bind(emptyObj, 0/*x*/);
    // // 下一行代码在 polyfill 不支持,
    // // 在原生的 bind 方法运行没问题:
    // // var YAxisPoint = Point.bind(null, 0);
    // var axisPoint = new YAxisPoint(5);
    // console.log(axisPoint.toString()); // '0,5'
    // console.log(axisPoint instanceof Point); // true
    // console.log(axisPoint instanceof YAxisPoint); // true
    // console.log(new Point(17, 42) instanceof YAxisPoint); // true
    // YAxisPoint(15);
    // console.log(emptyObj.x + ',' + emptyObj.y);
    // // 快捷调用
    // var slice = Array.prototype.slice;
    // slice.apply(arguments);
    // // same as "slice" in the previous example
    // var unboundSlice = Array.prototype.slice;
    // var slice2 = Function.prototype.apply.bind(unboundSlice);
    // slice2(arguments);


    // // 创建一个以另一个空对象为原型,且拥有一个属性p的对象
    // // 省略了的属性特性默认为false,
    // // 所以属性p是不可写,不可枚举,不可配置的:
    // o = Object.create({}, { p: { value: 42 } });
    // o.p = 24;
    // console.log(o.p); // 42
    // o.q = 12;
    // for (var prop in o) {
    //     console.log(prop);
    // } // "q"
    // delete o.p; // false
    // o2 = Object.create({});
    // console.log(o2); // 此时 o2 的 prototype 已经改变？
    // Object.setPrototypeOf(o2, o);
    // console.log(o2);
    // console.log(o2.p);



    // // 表严肃 JS 精讲
    // // 动物 》哺乳动物 》人类 》lsd
    // function Animal(color, weight) {
    //     this.color = color;
    //     this.weight = weight;
    // }
    // Animal.prototype.eat = function () {
    //     console.log('mia mia mia...');
    // }
    // Animal.prototype.sleep = function () {
    //     console.log('zzz...');
    // }
    // function Manmmal(color, weight) {
    //     Animal.call(this, color, weight);
    // }
    // // Manmmal.prototype = {__proto__: Animal.prototype};
    // Manmmal.prototype = Object.create(Animal.prototype);
    // Manmmal.prototype.constructor = Manmmal;
    // Manmmal.prototype.suckle = function() {
    //     console.log('mia! 好奶！');        
    // }
    // function Person(color, weight) {
    //     Manmmal.call(this, color, weight);
    // }
    // Person.prototype = Object.create(Manmmal.prototype);
    // Person.prototype.constructor = Person;
    // Person.prototype.lie = function() {
    //     console.log('你不帅');
    // }     
    // var lsd = new Person('brown', 100);
    // console.log(lsd);
    // lsd.eat();
    // lsd.suckle();
    // lsd.lie();



    // // constructor
    // function User(name, age, gender) {
    //     var person = {};
    //     person.name = name;
    //     person.age = age;
    //     person.gender = gender;
    //     return person;
    // }
    // var whh = User("sdfaf", 23, "male");
    // function cUser(name, age, gender) {
    //     this.name = name;
    //     this.age = age;
    //     this.gender = gender;
    // }
    // var lsd = new cUser("lsd", 20, "female");
    // console.log(whh);
    // console.log(lsd);


    // // git username test


    // // this
    // function foo() {
    //     "use strict";
    //     console.log(this.a);        
    // }
    // var a = 2; // 严格模式报错，非严格模式输出 undefined
    // foo();

    // function foo() {
    //     console.log(this.a);
    // }
    // var a = 2;
    // (function () {
    //     "use strict"; // 有没有严格模式均输出 undefined
    //     foo();
    // })();


    // // modern module
    // var MyModules = (function Manager() {
    //     var modules = {};
    //     function define(name, deps, impl) {
    //         for (var i = 0; i < deps.length; i++) {
    //             deps[i] = modules[deps[i]];
    //         }
    //         modules[name] = impl.apply(impl, deps);
    //     }
    //     function get(name) {
    //         return modules[name];
    //     }
    //     return {
    //         define: define,
    //         get: get
    //     };
    // })();

    // MyModules.define("bar", [], function () {
    //     function hello(who) {
    //         return "Let me introduce: " + who;
    //     }
    //     return {
    //         hello: hello
    //     };
    // });

    // MyModules.define("foo", ["bar"], function (bar) {
    //     function awesome(who) {
    //         console.log(bar.hello(who).toUpperCase());
    //     }
    //     return {
    //         awesome: awesome
    //     };
    // });

    // var bar = MyModules.get("bar");
    // var foo = MyModules.get("foo");

    // console.log(
    //     bar.hello("hippo")
    // );

    // foo.awesome("hippo");


    // // module
    // let a = [['a', 'b', 1], 2, 3];
    // console.log(a);
    // console.log(a.length);
    // console.log(a[0]);

    // console.log(a.join());
    // console.log(a.join(" "));
    // console.log(a.join(", "));

    // function CoolModule() {
    //     var something = "cool";
    //     var another = [1, 2, 3];

    //     console.log("module created");


    //     function doSomething() {
    //         console.log(something);
    //     }

    //     function doAnother() {
    //         console.log(another.join("!"));
    //     }

    //     function changeSomething(str) {
    //         something = str;
    //     }

    //     function changeAnother(arr) {
    //         another = arr;
    //     }

    //     return {
    //         doSomething: doSomething,
    //         doAnother: doAnother,
    //         changeSomething: changeSomething,
    //         changeAnother: changeAnother
    //     };
    // }

    // var foo = CoolModule();

    // foo.doSomething();
    // foo.doAnother();

    // foo.changeSomething("awesome");
    // foo.changeAnother([9, 1, 1]);

    // foo.doSomething(); // awesome
    // foo.doAnother(); // 9!1!1

    // var foo = (function CoolModule() {
    //     var something = "cool";
    //     var another = [1, 2, 3];

    //     function doSomething() {
    //         console.log(something);
    //     }

    //     function doAnother() {
    //         console.log(another.join("!"));
    //     }

    //     return {
    //         doSomething: doSomething,
    //         doAnother: doAnother
    //     };
    // })();

    // foo.doSomething();
    // foo.doAnother();

    // var foo = (function CoolModule(id) {
    //     function change(n) {
    //         switch (n) {
    //             case 1:
    //                 publicAPI.identify = identify1;
    //                 break;
    //             case 2:
    //                 publicAPI.identify = identify2;
    //                 break;
    //             default:
    //         }
    //     }

    //     function identify1() {
    //         console.log(id);
    //     }

    //     function identify2() {
    //         console.log(id.toUpperCase());
    //     }

    //     var publicAPI = {
    //         change: change,
    //         identify: identify1
    //     };

    //     return publicAPI;
    // })("foo module");

    // foo.identify();
    // foo.change(2);
    // foo.identify();
    // foo.change(1);
    // foo.identify();
    // foo.change(3);
    // foo.identify();
    // foo.change(2);
    // foo.identify();
    // foo.change(3);
    // foo.identify();

    // function foo(num) {
    //     debugger;
    //     console.log("foo:" + num);
    //     this.count++;
    //     console.log(this.count);
    // }
    // foo.count = 0;
    // var i;
    // for (i = 0; i < 10; i++) {
    //     if (i > 5) {
    //         debugger;
    //         foo(i);
    //     }
    // }
    // console.log(foo.count);

    // var obj = {
    //     count: 0,
    //     cool: function coolFn() {
    //         var self = this;
    //         if (self.count < 1) {
    //             setTimeout(function timer() {
    //                 self.count++;
    //                 console.log("self.count:", self.count, "this.count:", this.count, "\nawesome?");
    //             }, 100);
    //         }
    //     }
    // }
    // obj.cool();

    // var obj = {
    //     count: 0,
    //     cool: function coolFn() {
    //         if (this.count < 1) {
    //             setTimeout(function timer() {
    //                 this.count++;
    //                 console.log("this.count:", this.count, "\nawesome?");
    //             }, 100);
    //         }
    //     }
    // }
    // obj.cool();

    // // closure
    // function wait(message) {
    //     setTimeout(() => {
    //         console.log(message);
    //     }, 1000);
    // }
    // wait("Hello, closure1!");
    // wait("Hello, closure2!");
    // wait("Hello, closure3!");

    // for (var i = 1; i <= 5; i++) {
    //     (function (j) {
    //         setTimeout(function timer() {
    //             console.log(j, 1111);
    //         }, j * 1000);
    //     })(i);
    // }

    // for (let i = 1; i <= 5; i++) {
    //     setTimeout(function timer() {
    //         console.log(i, 2222);
    //     }, i * 1000)
    // }

    // // git init
    // console.log('Yo~~~~');

    // // const let
    // if (true)
    //     let a = 'name';
    // console.log(a);

    // const MYNAME = { foo: 'mianlang' };
    // console.log(MYNAME.foo);
    // MYNAME.foo = 'newml';
    // console.log(MYNAME.foo);

    // //箭头函数
    // let add = (a, b) => { return a + b; }
    // console.log(add(2, 3));

    // let numbers = [1, 2, 4];
    // let doubleNumbles = numbers.map((number) => { return number * 2; });
    // console.log(doubleNumbles);

    // //this 与箭头函数
    // var age = 5;
    // let kitty = {
    //     age: 3,
    //     grow: function () {
    //         setTimeout(() => {
    //             console.log(++this.age);
    //         }, 100);
    //     }
    // };
    // kitty.grow();

    // //函数默认参数
    // function desc(name = 'Peter', age = 5) {
    //     console.log(name + ' is ' + age + ' years old');
    // }
    // desc('wang', 99);

    // //Rest 参数
    // function test(name, ...args) {
    //     console.log(args);
    // }
    // test('Peter', 3, 5);

    // //... 展开操作符
    // //1. 函数调用
    // //2. 数组字面量
    // //3. 对象的展开运算符（ES7）

    // let mike = { name: 'Mike', age: 50 };
    // mike = { ...mike, sex: 'male' };
    // console.log(mike);

    // 模板字符串

    // 解构赋值

})();