/*
fe23 预习

自己摘录部分：
 'mouseover' 是鼠标移入元素发生的事件
 'mouseout' 是鼠标移出元素发生的事件
 上面两者相当于:hover

webpack可以看作是模块打包机，主要是分析你的项目结构，找到javascript模块以及一些浏览器不能直接运行
的扩展语言，如Scss、TypeScript，并将其打包为合适的格式供浏览器使用。

 * 技术问题：
 * 1.闭包，2.post和get的区别，3.HTML js CSS 新特性。 4. AJAX。5.元素居中的写法。6.跨域。
 * 7.localstorage、sessionstorage与cookie的区别。 8.前端兼容问题。9.项目优化。
 * GET:从指定的资源请求数据。
 * POST:像指定的资源提交要被处理的数据。
 * ------------------------------------------------8.前端兼容问题-------------------------------------------------------
 * 1、不同浏览器的标签默认的外补丁和内补丁不同
    问题症状：随便写几个标签，不加样式控制的情况下，各自的margin 和padding差异较大。
    解决方案：CSS里加 *{margin:0;padding:0;}
    备注：几乎所有的CSS文件开头都会用通配符*来设置各个标签的内外补丁是0。
 *2、块属性标签float后，又有横行的margin情况下，在IE6显示margin比设置的大（即双倍边距bug）
     问题症状：常见症状是IE6中后面的一块被顶到下一行
     解决方案：在float的标签样式控制中加入 display:inline;将其转化为行内属性
 *3、设置较小高度标签（一般小于10px），在IE6，IE7，遨游中高度超出自己设置高度
     问题症状：IE6、7和遨游里这个标签的高度不受控制，超出自己设置的高度
     解决方案：给超出高度的标签设置overflow:hidden;或者设置行高line-height 小于你设置的高度。
     备注：这种情况一般出现在我们设置小圆角背景的标签里。出现这个问题的原因是IE8之前的浏览器都会给标签一个最小默认
     的行高的高度。即使你的标签是空的，这个标签的高度还是会达到默认的行高。
 *4、图片默认有间距
     问题症状：几个img标签放在一起的时候，有些浏览器会有默认的间距，加了通配符也不起作用。
     解决方案：使用float属性为img布局备注：因为img标签是行内属性标签，所以只要不超出容器宽度，
     img标签都会排在一行里，但是部分浏览器的img标签之间会有个间距。使用float是正道。
 *5、行内属性标签，设置display:block后采用float布局，又有横行的margin的情况，IE6间距bug
     问题症状：IE6里的间距比超过设置的间距
     解决方案：在display:block;后面加入display:inline;display:table;
     备注：行内属性标签，为了设置宽高，我们需要设置display:block;(除了input标签比较特殊)。在用float布局并有横向的margin后，
     在IE6下，他就具有了块属性float后的横向margin的bug。不过因为它本身就是行内属性标签，所以我们再加上display:inline的话，
     它的高宽就不可设了。这时候我们还需要在display:inline后面加入display:table。
 *6、标签最低高度设置min-height不兼容
     问题症状：因为min-height本身就是一个不兼容的CSS属性，所以设置min-height时不能很好的被各个浏览器兼容
     解决方案：如果我们要设置一个标签的最小高度200px，需要进行的设置为：
     {min-height:200px; height:auto !important; height:200px; overflow:visible;}
     备注：在B/S系统前端开时，有很多情况下我们又这种需求。当内容小于一个值（如300px）时。容器的高度为300px；当内容高度大于
     这个值时，容器高度被撑高，而不是出现滚动条。这时候我们就会面临这个兼容性问题。
 7、附：IE6中的常见BUG与相应的解决办法
 ##一、IE6双倍边距bug例如“margin-left:10px” 在IE6中，该值就会被解析为20px。
    解决方案：需要在该元素中加入display:inline 或 display:block 明确其元素类型
 ##二、IE6中3像素问题解决办法
     当元素使用float浮动后，元素与相邻的元素之间会产生3px的间隙。诡异的是如果右侧的容器没设置高度时3px的间隙在相邻容器的内部，
     当设定高度后又跑到容器的相反侧了。解决方案：需要使布局在同一行的元素都加上float浮动。
 ##三、IE6中奇数宽高的BUGIE6中奇数的高宽显示大小与偶数高宽显示大小存在一定的不同。其中要问题是出在奇数高宽上。
    解决方案：需要尽量将外部定位的div高宽写成偶数即可。
 ##四、IE6中图片链接的下方有间隙IE6中图片的下方会存在一定的间隙，尤其在图片垂直挨着图片的时候，即可看到这样的间隙。
    解决方案：需要将img标签定义为display:block 或定义vertical-align对应的属性。也可以为img对应的样式写入font-size:0
 ##五、IE6下空元素的高度BUG如果一个元素中没有任何内容，当在样式中为这个元素设置了0-19px之间的高度时。此元素的高度始终为19px。
     解决的方法如下:
     1.在元素的css中加入：overflow:hidden
     2.在元素中插入html注释：<!– >
     3.在元素中插入html的空白符：&nbsp;
     4.在元素的css中加入：font-size:0
 ##六、重复文字的BUG在某些比较复杂的排版中，有时候浮动元素的最后一些字符会出现在clear清除元素的下面。
     解决方法如下：
     1.确保元素都带有display:inline
     2.在最后一个元素上使用“margin-right:-3px
     3.为浮动元素的最后一个条目加上条件注释，<!–[if !IE]>xxx<![endif]–>
     4.在容器的最后元素使用一个空白的div，为这个div指定不超过容器的宽度。
 ##七、IE6中 z-index失效具体BUG为，元素的父级元素设置的z-index为1，那么其子级元素再设置z-index时会失效，其层级会继承父级
    元素的设置，造成某些层级调整上的BUG原因：z-index起作用有个小小前提，就是元素的position属性要 是relative，absolute或是fixed。
     解决方案：
     1.position:relative改为position:absolute；
     2.去除浮动；
     3.浮动元素添加position属性（如relative，absolute等）。
 **IE6结语：实际上中，很多BUG的解决方法都可以使用display:inline、font-size:0、float解决。
     * 因此我们在书写代码时要记住，一旦使用了float浮动，就为元素增加一个display:inline样式，
     * 可以有效的避免浮动造成的样式错乱问题。使用空DIV时，为了避免其高度影响布局美观，
     * 也可以为其加上font-size:0 这样就很容易避免一些兼容上的问题。
     * **##子元素不会继承透明效果``` css.opacity{    background-color: #000000;	filter: alpha(opacity=50);
     * background-color: rgba(0, 0, 0, 0.5);}```
     * ##避免使用负的margin和padding
 *--------------------------------------------------9.项目优化----------------------------------------------------------
 *优化1、压缩文件
 *  对js、css文件进行压缩。
 *优化2：异步加载
 *  异步加载图片、js、数据等，减少IO的阻塞。
 *优化3：使用缓存
 *  将数据存储在本地，减少数据的请求。
 *优化4：合并请求
 *  减少浏览器对服务器发起的请求数，从而减少在发起请求过程中花费的时间。
 *优化5：域名拆分
 *  主要是增加浏览器下载的并行度，让浏览器能同时发起更多的请求。
 *----------------------------------------------------------------------------------------------------------------------
 *
 * 这几个问题，基本上都会问到，所以每个都要确保自己能扯上几分钟，碰到会的就多说，详细说。
 * 不会的，就讲一下自己的理解，然后扯到自己熟悉的领域。比如，问你离线应用，你可能不知道是manifest，
 * 但你懂localstorage，那你就可以说。离线应用，以前看过相关的知识，由于我在项目当中没有遇到，
 * 就没有深入的学习，但我用过localstorage，他的具体含义是。。。。，和sessionstorage与cookie的区别是。。。，
 * 而且这是HTML5的新特性，很好用，我在自己的项目上已经实现了这种功能，你看，这是我的项目，他有。。。优点。
 * 诸如此类。就是不要说自己不懂，可以说自己看过，但是自己的项目中没有用到，所以就没有着重了解。

 * 非技术问题：
 * 为什么转行。工作的可以说：我毕业之后，在某某行业，干了一段时间，跟我们公司的前端比较熟悉，
 * 有时候他有一些问题会跟我讨论，我就自己了解了一下，最后发现我很喜欢做前端，就自学了一段时间，所以现在想找一份前端的工作。。
 * 怎么学的前端。自己先在网上浏览了一遍W3school和MDN上面关于HTML、JS、CSS的知识点，了解了前端的基本知识之后，
 * 看了些书和网上的教程，看的书有。。。而且我有一个搞前端很多年的朋友，他会告诉我学习的重点和要避免的坑。
 * 自学的时间。看面试官的是不是傻逼，我一般说半年左右。
 * 遇到的坑。三大问题：函数命名、框架太多、UI的设计。这几个是前端都会碰到的问题，可以展开讲一下，要是能引起面试官的同感，岂不美哉。
 * 工作强度。互联网公司会问你能不能适应公司的加班。可以说，我自学前端的时候都是，下班之后学的。
 * 每天都干到十二点，而且坚持了半年。我相信公司的工作强度不会比我自学的时候还要大。
 * 当然，拿到offer以后，一定要跟公司确认好加班的问题，例如：加班的时间长度和补贴等。

*/

HTML 部分
localStorage 和 cookies
// localStorage、 sessionStorage 与 cookies 的区别
//----------------------------------------------------------------------------------------------------------------------
//localStorage（本地存储）和sessionStorage（会话存储）数据完全存储在客户端，功能上是一样的，只是存储持久时间不一样。
//LocalStorage：浏览器关闭了数据仍然可以保存下来，并可用于所有同源（相同的域名、协议和端口）窗口（或标签页）永久存储，永不失效，除非手动删除
//sessionStorage：数据存储在窗口对象中，窗口关闭后对应的窗口对象消失，存储的数据也会丢失。就是浏览器窗口关闭就失效了。
session和cookie是否存在关系？
//1、首先http是无状态协议，是不会保存数据的。
//2、session和cookie弥补了http的不足，cookie的数据保存在客户端，session的数据保存在服务器端。
//3、cookie和session存在关系，session的id保存在cookie，每次发送请求都会通过cookie的sessionid传递到服务器。
//----------------------------------------------------------------------------------------------------------------------
// localStorage 用于同网站的不同页面间的通信。
// 结合 storage 事件使用, 不懂这个事件可以看看 MDN 的文档 ？？？
//localStorage 是本地存储，在浏览器关闭后再打开还会存在
// localStorage 是浏览器自带的功能
// localStorage 可以用来存储字符串数据, 在浏览器关闭后依然存在
// 但是不同页面拥有各自独立的 localStorage
// 存储方法如下
localStorage.name = 'gua'
// 关闭浏览器, 再次打开, 仍然能获取到这个值
//Web Storage有两种形式：
//localStorage（本地存储）和sessionStorage（会话存储）
//这两种方式都允许开发者使用js设置的键值对进行操作，在重新加载不同的页面的时候读出它们。这一点与cookie类似。
//（1）与cookie不同的是：Web Storage数据完全存储在客户端，不需要通过浏览器的请求将数据传给服务器，因此相比cookie来说
//能够存储更多的数据，大概5M左右。单个cookie在客户端的限制是3K，就是说一个站点在客户端存放的COOKIE不能3K。
//（2）LocalStorage和sessionStorage功能上是一样的，但是存储持久时间不一样。
//LocalStorage：浏览器关闭了数据仍然可以保存下来，并可用于所有同源（相同的域名、协议和端口）窗口（或标签页）永久存储，永不失效，除非手动删除
//sessionStorage：数据存储在窗口对象中，窗口关闭后对应的窗口对象消失，存储的数据也会丢失。就是浏览器窗口关闭就失效了。
//注意：sessionStorage 都可以用localStorage 来代替，但需要记住的是，在窗口或者标签页关闭时，使用sessionStorage 存储的数据会丢失。
//（3）使用 local storage和session storage主要通过在js中操作这两个对象来实现，分别为window.localStorage和window.sessionStorage.
//    这两个对象均是Storage类的两个实例，自然也具有Storage类的属性和方法。
//但是cookie需要前端开发者自己封装setCookie，getCookie。但是Cookie也是不可以或缺的：Cookie的作用是与服务器进行交互，
//作为HTTP规范的一部分而存在 ，而Web Storage仅仅是为了在本地“存储”数据而生。
//sessionStorage与页面 js 数据对象的区别:sessionStorage只要是同源的同窗口（Tab）中，刷新页面或者进入不同的页面数据对象仍然被保存，
//也就是说只要浏览器窗口不关闭，加载页面（同源）或刷新页面，数据仍存在。

//2.cookie与session的区别于联系
//（1）cookie与session的区别：cookie数据保存在客户端，session数据保存在服务器端
//如果web服务器端使用的是session，那么所有的数据都保存在服务器上，客户端每次请求服务器的时候会发送当前会话的sessionid，
//服务器根据当前sessionid判断相应的用户数据标志，以确定用户是否登录或具有某种权限。由于数据是存储在服务器上面，所以你不能伪造，
//但是如果你能够获取某个登录用户的 sessionid，用特殊的浏览器伪造该用户的请求也是能够成功的。sessionid是服务器和客户端链接时候
//随机分配的，一般来说是不会有重复，但如果有大量的并发请求，也不是没有重复的可能性。如果浏览器使用的是cookie，那么所有的数据都
//保存在浏览器端，比如你登录以后，服务器设置了cookie用户名，那么当你再次请求服务器的时候，浏览器会将用户名一块发送给服务器，
//这些变量有一定的特殊标记。服务器会解释为cookie变量，所以只要不关闭浏览器，那么cookie变量一直是有效的，所以能够保证长时间不掉线。
//如果你能够截获某个用户的 cookie变量，然后伪造一个数据包发送过去，那么服务器还是认为你是合法的。所以，使用 cookie被攻击的可能性比较大。
//如果设置了的有效时间，那么它会将 cookie保存在客户端的硬盘上，下次再访问该网站的时候，浏览器先检查有没有 cookie，如果有的话，
//就读取该 cookie，然后发送给服务器。如果你在机器上面保存了某个论坛 cookie，有效期是一年，如果有人入侵你的机器，将你的cookie拷走，
//然后放在他的浏览器的目录下面，那么他登录该网站的时候就是用你的的身份登录的。所以 cookie是可以伪造的。当然，伪造的时候需要主意，
//直接copy    cookie文件到 cookie目录，浏览器是不认的，他有一个index.dat文件，存储了 cookie文件的建立时间，以及是否有修改，
//所以你必须先要有该网站的 cookie文件，并且要从保证时间上骗过浏览器。
//（2）cookie和session的共同之处：cookie和session都是用来跟踪浏览器用户身份的会话方式。

FormData
// 上传文件需要用到这个对象（浏览器内置的对象）
//假如页面有一个<input type="file" id="inputFile">
//上传之后可以通过下面的方式获取上传的文件
var file = e("#inputFile").files[0]
//新建一个formdate对象
var fd = new FormDate()
//将上传的file添加到fd对象中
//其中avatar字段是和后端约定好的
fd.append("avatar",file)
//往fd里面添加file之后，就可以在下面使用了

//上传文件的套路
//url是上传的api路径
var upload = function(url,fd){
    var request = {
        url:url,
        method:"post",
        data:fd,
        //注意，下面两行是上传文件的套路
        contentType:false,
        processData:false,
        success:function(r){
            log("上传成功",r)
        }
        error:function(e) {
            log("上传失败",e)
        }
    }
    $.ajax(request)
}

File API
// 预览图片使用（HTML5 新增的API），这个API很有用，这个API可以在用户上传图片到服务器之前，
//在浏览器里预览图片
// File 和 createObjectURL 结合使用可以用来预览图片 ???

HTML5 语义化
//语义化标签如 article、footer、header、nav、section
//视频和音频标签 video 和 audio
//本地离线存储 localStorage 和 sessionStorage
//新增表单特性如新控件 calendar email color 等
//用于绘图的 canvas 标签(用于游戏等)
//用于高性能图形的 WebGL(用于游戏等, 这个是专用领域的知识, 我们不会直接接触)

//CSS 部分
//CSS3新特性：
//border-radius 边框圆角
//box text shadow 盒子阴影
//transform   2D 变形
//columns 属性 将文本分隔成多列
//transition 动画
//keyframes关键帧动画

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
<meta name="viewport" content="width=device-width,initial-scale=1.0, maximum-scale=1.0, user-scalable=no"



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

// 复杂的 this 题目(新增的)
var foo = {
    bar: function() {
        return this.baz
    },
    baz: 1,
}
(function() {
    return typeof arguments[0]()
})(foo.bar)

//
function Foo() {
    this.name = 'a'
}

var f1 = new Foo()
f1.name = 'b'
console.log(f1.name)

var f2 = new Foo()
console.log(f2.name)

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

//新增的
function Foo() {
    this.name = 'a'
}

Foo.prototype.logName = function() {
    console.log('name is', this.name)
}

var f1 = new Foo()
f1.logName()

var f2 = new Foo()
f2.logName = function() {
    console.log('name')
}
f2.logName()

var f3 = new Foo()
f3.name = 'c'
f3.logName()

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
//----------------------------------------------------------------------------------------------------------------------
//apply call bind 是用来给函数指定 this 用的
//js 中的函数是一个对象，所以函数可以有方法 ，apply, call, bind 都是函数的方法, 用来指定 this
//1、 apply 接受两个参数，第一个参数是函数里面的 this, 这里指定了是 console, 这样就相当于 console.log
// 第二个参数是要传给函数的参数列表, 类型是 数组，apply 会把数组拆成一个个的参数传给函数
// 假设你调用 log(1, 2, 3, 4)，那么 arguments 是 [1, 2, 3, 4] 这样的一个数组
// (实际上 arguments 不是数组, 但是表现和数组一模一样, 你就暂时当它是一个数组)
// 下面这句就相当于调用 console.log(1, 2, 3, 4)
// console.log.apply(console, [1, 2, 3, 4])
//console.log.apply(console, arguments)
//2.  call 和 apply 类似, 但是小有区别, 如下
// 第一个参数和 apply 一样, 第 2, 3, 4, 5, ... 个参数会依次作为参数传给函数
//console.log.call(console, 1, 2, 3, 4)
// 相当于调用下面的函数, 区别在于参数的类型
// console.log.apply(console, [1, 2, 3, 4])
// 相当于调用 console.log(1, 2, 3, 4)
// var print = console.log
// print.call(console, 1, 2, 3)
//3、bind 函数不直接调用, 而是返回一个函数让你来调用
// 第一个参数是用来指定函数里面的 this, 和 apply call 一样
// 用法就是这样, 返回一个指定了 this 的函数
// 下面的例子中, bind 函数把 console 参数指定为 log 函数的 this
var log = console.log.bind(console)
log('hello', 1, 2, 3)
// hello 1 2 3

// bind 还可以有额外的参数, 效果如下
// 给返回的函数加上部分参数
var error = console.log.bind(console, '*** ERROR')
// 下面的调用相当于 console.log('*** ERROR', '错误')
error('错误')
// *** ERROR 错误
//----------------------------------------------------------------------------------------------------------------------
setTimeout 和 setInterval
// 两者的区别
//----------------------------------------------------------------------------------------------------------------------
//setTimeout:计时器，在指定频率下调用js表达式或方法，只执行一次。
//setInterval:计时器，在指定频率下调用js表达式或方法，间隔执行。
//----------------------------------------------------------------------------------------------------------------------
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
//----------------------------------------------------------------------------------------------------------------------
//IE的事件流叫做事件冒泡（event bubbling），即事件开始时由最具体的元素接收，然后逐级向上传播到较为不具体的节点。
//事件捕获（event capturing）的思想就是不太具体的节点先接收到事件，而最具体的节点最后接收到事件。其用意在于事件到达预定目标元素之前先捕获它。
//差别：所有现代浏览器都支持事件冒泡，而由于老版本浏览器不支持事件捕获，因此很少人使用。建议放心使用事件冒泡，特殊情况才使用事件捕获。
//事件委托：利用了事件冒泡，只指定一个事件处理程序，就可以管理某一类型的所有事件。即“事件处理程序过多”问题的解决方案就是事件委托。
//例如：一个元素有三个子元素点击事件，我们只需要指定该元素的一个点击事件即可，因为三个子元素的事件都会冒泡，所以单击事件最终都会被这个函数处理，
//与未使用事件委托相比，本代码的事前消耗更低，因为只取得一个DOM元素，只添加一个事件处理程序，占用内存更少。所有按钮事件（多数鼠标事件和键盘事件）
//都适合采用事件委托
//----------------------------------------------------------------------------------------------------------------------
// 事件委托相关概念
// 问题在于, todo 都是运行的时候才添加的元素
// 对于这样的元素, 我们没办法实现绑定事件
// 我们可以把 click 事件绑定在事先存在的父元素上
// 然后在运行的时候检查被点击的对象(通过 event.target 属性)
// 是否是我们需要的对象, 这个概念就是事件委托

闭包
//----------------------------------------------------------------------------------------------------------------------
//定义：有权访问另一个函数作用域中的变量的函数。
//创建闭包的常见方式，就是在一个函数内部创建另一个函数。

//----------------------------------------------------------------------------------------------------------------------
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
//----------------------------------------------------------------------------------------------------------------------
const deepClone = obj => {
    var cloneObj = {};
    for(let i = 0; i < obj.length; i++) {
        cloneObj[i] = obj[i]
    }
    return cloneObj
}
//个人理解，深复制和浅复制最根本的区别在于**是否是真正获取了一个对象的复制实体而不是一个引用**，从深层次上讲深复制在计算机
//中开辟了一块内存地址用于存放复制的对象，而浅复制仅仅是指向被复制的内存地址，如果原地址中对象被改变了，那么浅复制出来的对象
//也会相应改变，废话不多，上码！
var deepCopy = function(obj){
    var str, newobj = obj.constructor === Array ? [] : {};
    if(typeof obj !== 'object'){
        return;
    }else if(window.JSON){
        str = JSON.stringify(obj), //系列化对象
            newobj = JSON.parse(str); //还原
    } else {
        for(var i in obj){
            newobj[i] = typeof obj[i] === 'object' ?
                cloneObj(obj[i]) : obj[i];
        }
    }
    return newobj;
}
var obj = { a:1, arr: [1,2] };
var obj1 = obj;
var obj2 = deepCopy(obj);
obj.a = 2
console.log(obj1.a, obj2.a)
//输出 2 1
//以上代码可以看出，浅复制后，因为是原对象的引用，所以在原对象属性a的值改变后，其对象也发生了改变，但是深复制后的对象却
//没有发生变化，可用于防止嵌套复制自身而变成死循环
//----------------------------------------------------------------------------------------------------------------------

ajax（可能需要手写原生的 ajax）
// 实现原生的 ajax 函数
// readyState 0 1 2 3 4 各代表什么含义
//答：0：请求未初始化
//    1：服务器连接已建立
//    2：请求已接收
//    3：请求处理中
//    4：请求已完成，且响应已就绪
//status  200：“OK”   404:未找到页面
//----------------------------------------------------------------------------------------------------------------------
功能：
//1、用js动态抓取内容构建页面
//2、动态评论、加载数据
//3、壁纸图片库

//                 一、GET方法：获取登录页面
//创建AJAX对象
var r = new XMLHttpRequest()
//设置请求方法和请求地址
r.open("GET", "url", true)
//注册响应函数
r.onreadystatechange = function() {
    if (r.readyState == 4 && r.status == 200) {
        console.log(r)
    }
}
//发送请求
r.send()
//                 二、POST方法：发送登录数据
//创建AJAX对象
var r = new XMLHttpRequest()
//设置请求方法和请求地址
r.open("POST", url, true)
//设置发送数据的格式
r.setRequestHeader("Content-Type", "application/json")
//注册响应函数
r.onreadystatechange = function() {
    if(r.readyState == 4 && r.status == 200) {
        var response = JSON.parse(r.response)
        console.log(response)
    }
}
var data = {
    username:"gua",
    password:"123"
}
data = JSON.stringify(data)
r.send(data)
//                   三、封装AJAX函数
var ajax = function(method, url, data, callback) {
    var r = new XMLHttpRequest()
    r.open(method, url ,true)
    r.setRequestHeader("Content-Type", "application/json")
    r.onreadystatechange = function() {
        if(r.readyState == 4 && r.status ==200 ) {
            callback(r.response)
        }
    }
    r.send(data)
}
//----------------------------------------------------------------------------------------------------------------------
HTTP 请求方法, 常见状态码, 头部常见字段
// HTTP 有哪些常见请求方法 GET POST PUT PATCH DELETE
// HTTP 常见状态码有哪些 200 301 302 403 404 500 502
//注：成功（2字头），重定向（3字头），请求错误（4字头），服务器错误（5、6字头）
//----------------------------------------------------------------------------------------------------------------------
//200: 请求已成功√
//301：请求的资源已永久移动到新位置（301 重定向）√
//302：请求的资源临时从不同的URI响应请求
//304：客户端已经执行了GET，但文件未变化
//403：服务器已经理解请求，但拒绝执行它。
//404：请求的资源不存它√
//500：服务器内部错误√
//502：作为网关或者代理工作的服务器尝试执行请求时，从上游服务器接收到无效的响应。
//----------------------------------------------------------------------------------------------------------------------
// HTTP 头部常见字段有哪些
//----------------------------------------------------------------------------------------------------------------------
//Content-Type
//Content-Length
//----------------------------------------------------------------------------------------------------------------------
跨域 （jsonp, postMessage, cors, 用服务器(比如 node)转发请求和响应）-----------比较重要
// 跨域有哪些常见的解决方式
//跨域是服务器解决的
//----------------------------------------------------------------------------------------------------------------------
//1、强烈推荐JSONP。
//Jsonp(JSON with Padding) 是 json 的一种"使用模式"，可以让网页从别的域名（网站）那获取资料，即跨域读取数据。
//利用script获取不同源的json
//既然它叫jsonp，很明显目的还是json，而且是跨域获取。根据上面的分析，很容易想到：利用js构造一个script标签，把json的url
//赋给script的scr属性，把这个script插入到dom里，让浏览器去获取。
//总结
//一句话就是利用script标签绕过同源策略，获得一个类似这样的数据，jsonpcallback是页面存在的回调方法，参数就是想得到的json。
//原生js编写利用jsonp进行跨域：
//<button id="btn">click</button>
//<script type="text/javascript">
//        var createScript = function(src) {
//                var scrip = document.createElement("script");
//                scrip.src = src;
//                document.body.appendChild(scrip);
//            }
//        var jsonCallBack = function(json) {
//                console.log(json);Object { email="中国", email2="中国222"}
//            }
//        document.querySelector("#btn").addEventListener("click", function(){
//            createScript("http://localhost:51335/somejson?callback=jsonpcallback")
//        })
//</script>
//2、使用 window.postMessage方法
//这个东西是HTML5引入的，可以在不同的window下传递数据，不受域的影响。目前IE8+、FireFox、Chrome、Opera等浏览器都已经支持该方法。
//window.postMessage(message,targetOrigin)
//调用postMessage方法的window对象是指要接收消息的那一个window对象，该方法的第一个参数message为要发送的消息，类型只能为字符串；
//第二个参数targetOrigin用来限定接收消息的那个window对象所在的域，如果不想限定域，可以使用通配符 *  。
//需要接收消息的window对象，可是通过监听自身的message事件来获取传过来的消息，消息内容储存在该事件对象的data属性中。
//还是举个栗子：（假设现在是远程提供数据，本地获取数据）
//远程b.html
//<body>
//<!--  一个 iframe 作为中间件  -->
//<iframe id="myIframe" src="http://localhost:8080/demoff/a.html" style="display:none;" onload="setData()"></iframe>
//    <script type="text/javascript">
//        // 初始iframe加载后即执行
//    function setData(){
//        var myIframe = document.getElementById('myIframe');
//        var win = myIframe.contentWindow;
//        //win.postMessage('My name is null','*');
//        win.postMessage('My name is null','http://localhost:8080/');
//    }
//    </script>
//    </body>
//本地b.html
//<body>
//<script type="text/javascript">
//window.onmessage = function(e){
//    e = e || window.event;
//    alert(e.data);
//};
//</script>
//</body>

//结果
//本地即可获取到数据
//----------------------------------------------------------------------------------------------------------------------

//网络安全: xss, csrf
// xss 和 csrf 的原理是什么
//----------------------------------------------------------------------------------------------------------------------
//xss （跨站脚本攻击）:为不和层叠样式表(Cascading Style Sheets, CSS)的缩写混淆，故将跨站脚本攻击缩写为XSS。
//恶意攻击者往Web页面里插入恶意Script代码，当用户浏览该页之时，嵌入其中Web里面的Script代码会被执行，从而达到恶意攻击用户的目的。
//CSRF（Cross-site request forgery）跨站请求伪造，也被称为“One Click Attack”或者Session Riding，通常缩写为CSRF或者XSRF，
//是一种对网站的恶意利用。尽管听起来像跨站脚本（XSS），但它与XSS非常不同，XSS利用站点内的信任用户，而CSRF则通过伪装来自受
//信任用户的请求来利用受信任的网站。与XSS攻击相比，CSRF攻击往往不大流行（因此对其进行防范的资源也相当稀少）和难以防范，所以
//被认为比XSS更具危险性。
//----------------------------------------------------------------------------------------------------------------------

DOM 操作（查找, 添加, 删除, 修改）
// DOM 查找/添加/删除/修改对应的 API 是什么
//----------------------------------------------------------------------------------------------------------------------

//另：原生js创建节点、添加节点，删除节点，替换节点
//createElement/appendChild/removeChild/replaceChild
//----------------------------------------------------------------------------------------------------------------------

jQuery 常见 API
// jQuery 常见 API
//----------------------------------------------------------------------------------------------------------------------
//a. 选择器:1. 普通选择器 2. find 3. siblings 4. closest, parent
//b. dom 操作:1. append 2. remove 3. empty 4. show, hide, toggle
//c. class 操作: 1. addClass removeClass 2. toggleClass；
//d. 属性、特性操作: 1. attr, prop, data prop 用于 true false 这样的布尔值属性 2. removeAttr
//e. 取值: 1. val 2. text 3. html
//f. 事件: 1. on 2. event.target
//g. 数组方法: 1. each 2. map
//h. ajax 1. contentType, dataType
//+++++写出jQuery绑定事件方法：
1、bind("click", function(e){})
2、on("click", function(e){})
3、live("click", function(e){})
4、delegate("button","click", function(e){})
//----------------------------------------------------------------------------------------------------------------------
数据结构
//----------------------------------------------------------------------------------------------------------------------
//数据结构就是存储数据的方式
//算法分析是对一个算法的时间的大略估计
/*
 四大数据结构
 1，数组
 连续的一块内存
 读取元素时间是 O(1)
 插入、删除是 O(n)
 2，链表
 手拉手的盒子，一个盒子只能访问左右手的盒子
 以下标方式读取元素的时间是 O(n)
 插入、删除是 O(1)
 栈和队列是链表的特定场景应用(当然, 不用链表也能实现栈和队列)
 3，字典(Hash Table 哈希表)
 把字符串转为数字作为下标存储到数组中
 字符串转化为数字的算法是 O(1)
 所以字典的存取操作都是 O(1)
 除非对数据有顺序要求，否则字典永远是最佳选择
 字符串转化为数字的算法
 1，确定数据规模，这样可以确定容器数组的大小 Size
 2，把字符当作 N 进制数字得到结果
 'gua' 被视为 g * 1 + u * 10 + a * 100 得到结果 n
 n % Size 作为字符串在数组中的下标
 通常 Size 会选一个 素数
 4，搜索树(平衡二叉搜索树)（我们只用，不写，甚至只是隐含在用，你并不知道你用的是树）
 AVL 树
 红黑树

五种常见时间复杂度
复杂度用 大 O 记法 来描述(大 O 记法是描述算法复杂度的符号)
O(1)
常数复杂度，最快速的算法。
求数组前 10000 个元素的和
字典和集合的存取都是 O(1)
数组的存取是 O(1)
O(lgN)
对数复杂度
假设有一个有序数组，以二分法查找
O(n)
线性复杂度
假设有一个数组，以遍历的方式在其中查找元素
O(NlogN)
求两个数组交集，其中一个是有序数组
假设 A 数组的长度是 M, 无序
假设 B 数组的长度是 N, 有序
A 数组每一个元素都要在 B 数组中进行查找操作
每次查找如果使用二分法则复杂度是 lgN
加起来就是 M * lgN
所以时间复杂度是 NlogN
O(N²)
平方复杂度
求两个无序数组的交集
假设 A 数组的长度是 M, 无序
假设 B 数组的长度是 N, 无序
A 数组每一个元素都要在 B 数组中进行查找操作
每次查找只能使用遍历操作, 所以每次查找都是 N
加起来就是 M * N
所以时间复杂度是 N²
*/

//----------------------------------------------------------------------------------------------------------------------

数组
对象
队列
栈
//----------------------------------------------------------------------------------------------------------------------
// 队列结构(先进先出)
// 主要有 2 个操作
// enqueue dequeue
//
var Queue = function() {
    // data 是存储元素的数组
    this.data = []
}
// 入队
Queue.prototype.enqueue = function (element) {
    this.data.push(element)
}
// 出队
Queue.prototype.dequeue = function () {
    return this.data.splice(0, 1)
}
// 队列长度
Queue.prototype.length = function () {
    return this.data.length
}
// 清空队列
Queue.prototype.empty = function() {
    this.data = []
}
// var q = new Queue()
// q.enqueue(1)
// q.enqueue(2)
// q.enqueue(3)
// log('length', q.length())
// log(q.dequeue())
// q.enqueue(4)
// log(q.dequeue())
// log(q.dequeue())
// log(q.dequeue())

// Stack 栈(先进后出)
// 常见的 3 个操作
// push pop top
//
var Stack = function() {
    this.data = []
}
// push 添加一个元素
Stack.prototype.push = function(e) {
    this.data.push(e)
}
// pop 删除并返回最新添加的元素
Stack.prototype.pop = function() {
    var index = this.data.length - 1
    return this.data.splice(index, 1)
}
// top 仅返回最新添加的元素
Stack.prototype.top = function() {
    var index = this.data.length - 1
    return this.data[index]
}
var s = new Stack()
s.push('hello')
s.push('world')
log(s.pop())
log(s.pop())
var str = 'hello'
for (var i = 0; i < str.length; i++) {
    s.push(str[i])
}
var str1 = ''
for (var i = 0; i < str.length; i++) {
    str1 += s.pop(str[i])
}
log(str1)
//----------------------------------------------------------------------------------------------------------------------

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
//----------------------------------------------------------------------------------------------------------------------
var transform = url => {
    var index = 1;
    for(var i = 0; i < url.length; i++) {
        if ( url[i] == "?") {
            index = i;
        }
    }
    var s = url.slice(index).split("&");
    var a = [];
    var b = [];
    var ss = {};
    for(var i = 0; i < s.length; i++) {
        for(var j = 0; j < s[i].length; j++) {
            if (s[i][j] == "=") {
                var aa = s[i].slice(0,j);
                var bb = s[i].slice(j+1);
                a.push(aa);
                b.push(bb);
            }
        }
    }
    for(var i = 0; i < a.length; i++) {
        ss[a[i]]
        ss[a[i]] = b[i]
    }
    return ss
}


//----------------------------------------------------------------------------------------------------------------------

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
//react 的广告   React是声明式、组件化、高效、灵活的前端框架
// 如果面试问, 记住语录: React 是声明式, 组件化, 高效, 灵活 的前端框架
virtual dom
diff 算法的原理
state 和 props
组件生命周期
组件通信：父组件 -> 子组件, 子组件 -> 父组件, A 组件 -> B 组件
React Router（react 路由）
Redux/MobX
react ui 有两套很流行: Material UI 和 Ant Design, 国内流行的是 Ant Design


vue.js
//Vue.js（读音 /vjuː/, 类似于 view） 是一套构建用户界面的渐进式框架。
//Vue 只关注视图层， 采用自底向上增量开发的设计。
//Vue 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件。
//Vue 学习起来非常简单，本教程基于 Vue 2.1.8 版本测试。