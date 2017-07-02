/*
fe23 预习

自己摘录部分：
 'mouseover' 是鼠标移入元素发生的事件
 'mouseout' 是鼠标移出元素发生的事件
 上面两者相当于:hover

注意, 这里面的内容没学过的就忽略
学过的自己整理一下答案
不懂就问

后续会有完整版本的面试大全
所以不用纠结这里没有的东西或者是没有答案的内容
*/

HTML 部分
localStorage 和 cookies
// localStorage、 sessionStorage 与 cookies 的区别
// localStorage 用于多页面通信
//localStorage 是本地存储，在浏览器关闭后再打开还会存在

// localStorage 是浏览器自带的功能
// localStorage 可以用来存储字符串数据, 在浏览器关闭后依然存在
// 但是不同页面拥有各自独立的 localStorage
// 存储方法如下
localStorage.name = 'gua'
// 关闭浏览器, 再次打开, 仍然能获取到这个值

FormData
// 上传文件需要用到这个对象（浏览器内置的对象）

File API
// 预览图片使用（HTML5 新增的API），这个API很有用，这个API可以在用户上传图片到服务器之前，
//在浏览器里预览图片
HTML5 语义化
//自己补充完整
语义化标签如 article、footer、header、nav、section
视频和音频标签 video 和 audio
本地离线存储 localStorage 和 sessionStorage
新增表单特性如新控件 calendar email color 等
用于绘图的 canvas 标签(用于游戏等)
用于高性能图形的 WebGL(用于游戏等, 这个是专用领域的知识, 我们不会直接接触)



CSS 部分
float
position
display
    flex (用 flexbox froggy 或者阮一峰的博客去学)
水平居中
    inline 的水平居中
//设置父节点 text-align:center
    block 的水平居中
//设置宽度，margin: 0 auto
垂直居中
    有完整的套路
    父节点为 position: relative
    自己为   position: absolute
            top: 50%
            transform: translateY(-50%)

//height = line-height
响应式设计
//针对不同的屏幕宽度，使用不同的CSS
移动开发
    //主要是微信网页开发



JS 部分
值类型与引用类型
//
var a = {
    v: 1
}
var b = a
console.log(b.v)
// 1

a.v = 2
console.log(b.v)
// 2

a = {
    v: 3
}
console.log(b.v)
// 2
//比如两个变量分别是校长和主任，都被对象李四赋值，即校长 = 张三， 主任 = 张三，但现在是李四做校长，即校长 = 李四，
//但主任 = 张三



// 变量声明提升(这是一个特性)
// 这段代码
console.log(a)
var a = 1
// 相当于
var a
console.log(a)
a = 1


// 所有以 function 函数名() {} 方式定义的函数都相当于提前定义了一遍
// 这段代码
console.log(b())
function b() {
    return 2
}
// 相当于
var b = function() {
    return 2
}
console.log(b())


// 这段代码
console.log(c())
var c = function() {
    return 3
}
// 相当于
var c
console.log(c())
c = function() {
    return 3
}
// 所以 console.log 会报错, 因为 c 在那个时候还不是一个函数, 只是 undefined


// 注意，let 或者 const 声明的变量不具备 变量声明提升 的特性
console.log(d)
let d = 4




// this
//
var x = 0
function test() {
    console.log(this.x)
}
var o = {}
o.x = 1
o.m = test
o.m()
o['m']() //一样是1，和o.m()等价，是对象的常规用法和对象点语法的区别而已
o.m.apply()
// apply 请看 apply bind call this 那节课
//apply的this对象是window，var x = 0 也就是window.x ,test()即 window.test()，在外面声明的变量或函数（全局）的对象是window




// this + arguments
var gua = 'name 001'
var foo = function(){
    // arguments 并不是数组, 只是行为恰好和数组一样, 一般称为奇异数组
    // 这个函数的 this 是 arguments
    //console.log(arguments['0']())
    console.log("arguments是什么",typeof arguments, arguments)
    //值为  arguments是什么 object [function, callee: function, Symbol(Symbol.iterator): function]
    console.log("值是什么", arguments[0]())
    //值为   值是什么 undefined
}
var o = {}
o.gua = 'name 000'
o.func = foo
o.func(function(){
    return this.gua
})




o.func2 = function(){
    arguments.gua = 'gua'
    // 这个函数的 this 是 arguments, 所以输出是 'gua'
    console.log(arguments[0]())
}
o.func2(function(){
    return this.gua
})
//值为gua


// prototype
// 原型链
//
function Foo() {
    this.name = 'a'
}

var f1 = new Foo()
f1.name = 'b'
console.log(f1.name)
//b
var f2 = new Foo()
console.log(f2.name)
//a

//如 Foo.prototype.gua = 169
f1.gua      //169

//一个属性如果在自己对象里面找不到，就会往上找prototype（原型），直至找不到为止


arguments
//
(function() {
    return typeof arguments
})()

//这种arguments用法在nodejs用的比较多
(function() {
    console.log(arguments)
})(1, 2, 3)

//这种arguments用法在js用的比较多
(function(...args) {
    console.log(args)
})(1, 2, 3)



call, apply, bind
// call, apply 和 bind 的区别

setTimeout 和 setInterval
// 两者的区别

setTimeout 与循环结合
// 下面的输出全是 5, 因为引用的是 i 这个变量
// 注意超时时间是 1000
// 引用的 i 可以在函数内部访问到这件事称之为 闭包
for(var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(new Date(), i)
    }, 1000)
}
console.log(new Date(), i)
//Thu Jun 22 2017 17:50:05 GMT+0800 (中国标准时间) 5
//undefined
// Thu Jun 22 2017 17:50:06 GMT+0800 (中国标准时间) 5
// Thu Jun 22 2017 17:50:06 GMT+0800 (中国标准时间) 5
// Thu Jun 22 2017 17:50:06 GMT+0800 (中国标准时间) 5
// Thu Jun 22 2017 17:50:06 GMT+0800 (中国标准时间) 5
// Thu Jun 22 2017 17:50:06 GMT+0800 (中国标准时间) 5

// 皇帝的闭包问题
// 这根本不是闭包的问题
// 因为 setTimeout 即便第二个参数是 0 也会在循环结束之后才执行函数
// 所以 5 个输出都是 5
for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(new Date(), i)
    }, 0)
}
//Thu Jun 22 2017 18:02:15 GMT+0800 (中国标准时间) 5
//Thu Jun 22 2017 18:02:15 GMT+0800 (中国标准时间) 5
//Thu Jun 22 2017 18:02:15 GMT+0800 (中国标准时间) 5
//Thu Jun 22 2017 18:02:15 GMT+0800 (中国标准时间) 5
//Thu Jun 22 2017 18:02:15 GMT+0800 (中国标准时间) 5

//循环完之后，才会执行 setTimeout，这是js的机制
//let在for循环中也是个bug，在for循环中，js做了特殊处理，let是防止重复定义，让每一次的let都是全新的变量、
//但又能继承上一次的值
for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(new Date(), i)
    }, 0)
}
//Thu Jun 22 2017 18:02:15 GMT+0800 (中国标准时间) 0
//Thu Jun 22 2017 18:02:15 GMT+0800 (中国标准时间) 1
//Thu Jun 22 2017 18:02:15 GMT+0800 (中国标准时间) 2
//Thu Jun 22 2017 18:02:15 GMT+0800 (中国标准时间) 3
//Thu Jun 22 2017 18:02:15 GMT+0800 (中国标准时间) 4
let i = 0
for (; i < 5; i++) {
    setTimeout(function() {
        console.log(new Date(), i)
    }, 0)
}
//Thu Jun 22 2017 18:02:15 GMT+0800 (中国标准时间) 5
//Thu Jun 22 2017 18:02:15 GMT+0800 (中国标准时间) 5
//Thu Jun 22 2017 18:02:15 GMT+0800 (中国标准时间) 5
//Thu Jun 22 2017 18:02:15 GMT+0800 (中国标准时间) 5
//Thu Jun 22 2017 18:02:15 GMT+0800 (中国标准时间) 5



事件冒泡, 事件捕获, 事件委托   //事件冒泡、事件捕获见面试大全
// 讲清楚这三个概念
/ 事件委托相关概念
// ===
//
// 问题在于, todo 都是运行的时候才添加的元素
// 对于这样的元素, 我们没办法实现绑定事件
// 我们可以把 click 事件绑定在事先存在的父元素上
// 然后在运行的时候检查被点击的对象(通过 event.target 属性)
// 是否是我们需要的对象, 这个概念就是事件委托

闭包
// 所谓经典的闭包面试题(上面讲过的皇帝的闭包)
// 使用闭包实现如下程序
// 函数每调用一次，该函数的返回值加 1
var foo = function(){
    var i = 0
    return function(){
        i++
        return i
    }
}
var a = foo()
a() //1
a() //2
a() //3

clone 和 deepClone
// 实现 clone 和 deepClone 函数
// 用 JSON.stringify 和 JSON.parse 实现 deepClone 是一个很有新意的方式
// 具体实现会在 面试大全 里


ajax（可能需要手写原生的 ajax）
// 实现原生的 ajax 函数
// readyState 0 1 2 3 4 各代表什么含义



HTTP 请求方法, 常见状态码, 头部常见字段
// HTTP 有哪些常见请求方法 GET POST PUT PATCH DELETE
// HTTP 常见状态码有哪些 200 301 302 403 404 500 502
// HTTP 头部常见字段有哪些
    Content-Type
    Content-Length


跨域 （jsonp, postMessage, cors, 用服务器(比如 node)转发请求和响应）
// 跨域有哪些常见的解决方式

网络安全: xss, csrf
// xss 和 csrf 的原理是什么

DOM 操作（查找, 添加, 删除, 修改）
// DOM 查找/添加/删除/修改对应的 API 是什么

jQuery 常见 API
// jQuery 常见 API




数据结构
数组
对象
队列
栈
数组、对象、字符串的想换转化
比如 a=1&b=2&c=3 怎样转成对象, 复习基础课程的作业就可以
// 有这样一个 url： http://vip.qq.com/a.java?a=1&b=2&c=3&d=xxx&e
// 写一段 JS 程序将 url 的参数转成对象的形式
{
    a: 1,
    b: 2,
    c: 3,
    d: 'xxx',
    e: '',
}




ES6
ES6 的面试题一般是概念性质的, 所以清楚下面的概念就可以了
let 和 const, 有一个 TDZ （暂时性死区的概念，了解下即可）
箭头函数
解构 //把对象作为参数传进函数里面
剩余参数(扩展符号)
Promise, 可能会附带 async await
class
Set

// 用解构来简化参数列表
//下面方法虽然扭曲，但现在都这样做
var gua = function({name, height}){
    console.log(name, height)
}
//如果不用上面方法做，下面的方法里面还要定义info.name, info.height
var gua2 = function(info){
    console.log(info.name, info.height)
}

var info = {
    name: 'gua',
    height: 169,
}

gua(info)


React
// React 也是概念性质的题目为主, 基本上不会考察写代码
React Angular 这 2 个一般只会一个就可以的, 所以这里只说 React 的情况
react 的广告   React是声明式、组件化、高效、灵活的前端框架
// 如果面试问, 记住语录: React 是声明式, 组件化, 高效, 灵活 的前端框架
virtual dom
diff 算法的原理
state 和 props
组件生命周期
组件通信：父组件 -> 子组件, 子组件 -> 父组件, A 组件 -> B 组件
React Router（react 路由）
Redux/MobX
react ui 有两套很流行: Material UI 和 Ant Design, 国内流行的是 Ant Design
