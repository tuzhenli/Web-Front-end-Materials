//1、原生js封装AJAX
var ajax = function(method, path, data, callback) {
	var r = new XMLHttpRequest();
	r.open(method, path, true);
	r.setRequestHeader("Content-Type", "application/json");
	r.onreadstatechange = function() {
		if (r.readyState == 4 && r.status == 200 ) {
			callback(r.response);
		};
	};
	r.send(data);
};


//2、http和https有什么区别?
	在URL前加https://前缀表明是用SSL加密的。 你的电脑与服务器之间收发的信息传输将更加安全。
Web服务器启用SSL需要获得一个服务器证书并将该证书与要使用SSL的服务器绑定。
http和https使用的是完全不同的连接方式,用的端口也不一样,前者是80,后者是443。http的连接很简单,是无状态的... 
HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，要比http协议安全。

//3、回调函数是什么时候调用的？
	你到一个商店买东西，刚好你要的东西没有货，于是你在店员那里留下了你的电话，过了几天店里有货了，店员就打了你的电话，
然后你接到电话后就到店里去取了货。在这个例子里，你的电话号码就叫回调函数，你把电话留给店员就叫登记回调函数，店里
后来有货了叫做触发了回调关联的事件，店员给你打电话叫做调用回调函数，你到店里去取货叫做响应回调事件。回答完毕。

//4、jQuery版本对IE浏览器支持度
	jQuery 版本 2 以上不支持 IE6，7，8 浏览器。如果需要支持 IE6/7/8，那么请选择1.9；
	你还可以通过条件注释在使用 IE6/7/8 时只包含进1.9
	<!--[if lt IE 9]>
	    <script src="jquery-1.9.0.js"></script>
	<![endif]-->
	<!--[if gte IE 9]><!-->
	    <script src="jquery-2.0.0.js"></script>
	<!--<![endif]-->
	
//5、jq选择器
	$("p:first")  选取第一个 <p> 元素
	$("ul li:first-child")	选取每个 <ul> 元素的第一个 <li> 元素
	$("[href]")		选取带有 href 属性的元素
	$("a[target='_blank']")		选取所有 target 属性值等于 "_blank" 的 <a> 元素
	$("a[target!='_blank']")	选取所有 target 属性值不等于 "_blank" 的 <a> 元素
	$(":button")		选取所有 type="button" 的 <input> 元素 和 <button> 元素	
	$("tr:even")		选取奇数位置的 <tr> 元素
	$("tr:odd")			选取偶数位置的 <tr> 元素
	
//6、常见 DOM 事件：
	鼠标事件			键盘事件			表单事件		文档/窗口事件
	click			keypress		submit			load
	dblclick		keydown			change			resize
	mouseenter		keyup			focus			scroll
	mouseleave	 					blur			unload	
	
	PS:	当鼠标指针穿过元素时，会发生 mouseenter 事件。
	   	当鼠标指针离开元素时，会发生 mouseleave 事件。
	   	当鼠标指针移动到元素上方，并按下鼠标按键时，会发生 mousedown 事件。
	   	当在元素上松开鼠标按钮时，会发生 mouseup 事件。
	  	hover()方法用于模拟光标悬停事件。
	   	当鼠标移动到元素上时，会触发指定的第一个函数(mouseenter);当鼠标移出这个元素时，会触发指定的第二个函数(mouseleave)。
			$("#p1").hover(
			    function(){
			        alert("你进入了 p1!");
			    },
			    function(){
			        alert("拜拜! 现在你离开了 p1!");
			    }
			);
		
		focus()方法：当元素获得焦点时，发生 focus事件。当通过鼠标点击选中元素或通过 tab 键定位到元素时，该元素就会获得焦点。
		blur()方法：当元素失去焦点时，发生 blur 事件。
		$(document).ready(function(){
		  	$("input").focus(function(){
		    	$(this).css("background-color","#cccccc");
		  	});
		  	$("input").blur(function(){
		    	$(this).css("background-color","#ffffff");
		  	});
		});

7、jquery parent() parents() closest()区别
	parent()是找当前元素的第一个父节点，不管匹不匹配都不继续往下找（仅仅找当前元素的直接父节点。）
	parents()是找当前元素的所有父节点 	（找出所有匹配的当前元素的父节点）
	closest() 是找当前元素的所有父节点 ，直到找到第一个匹配的父节点
	
//8、语法:$(selector).toggle(speed,callback);
	对于可选的 callback 参数，有以下两点说明：
	1.$(selector)选中的元素的个数为n个，则callback函数会执行n次；
	2.callback函数名后加括号，会立刻执行函数体，而不是等到显示/隐藏完成后才执行；
	3.callback既可以是函数名，也可以是匿名函数；
	
//9、jQuery animate() - 操作多个属性
	$("button").click(function(){
	  	$("div").animate({
	    	left:'250px',
	    	opacity:'0.5',
	    	height:'150px',
	    	width:'150px'
	  	});
	});
	问：可以用 animate() 方法来操作所有 CSS 属性吗？
	答：是的，几乎可以！不过，需要记住一件重要的事情：当使用 animate() 时，必须使用 Camel 标记法书写所有的属性名，
	比如，必须使用 paddingLeft 而不是 padding-left，使用 marginRight 而不是 margin-right，等等。
	同时，色彩动画并不包含在核心 jQuery 库中。	如果需要生成颜色动画，您需要从 jquery.com 下载 颜色动画 插件。

//10、jQuery stop() 方法用于停止动画或效果，在它们完成之前。
	stop() 方法适用于所有 jQuery 效果函数，包括滑动、淡入淡出和自定义动画。
	语法:	$(selector).stop(stopAll,goToEnd);
	可选的 stopAll 参数规定是否应该清除动画队列。默认是 false，即仅停止活动的动画，允许任何排入队列的动画向后执行。
	可选的 goToEnd 参数规定是否立即完成当前动画。默认是 false。
	因此，默认地，stop() 会清除在被选元素上指定的当前动画。

//11、获得内容 - text()、html() 以及 val()
	三个简单实用的用于 DOM 操作的 jQuery 方法：
		text() - 设置或返回所选元素的文本内容
		html() - 设置或返回所选元素的内容（包括 HTML 标记）
		如：<p id="test">这是段落中的 <b>粗体</b> 文本。</p>
		JS：
		   alert("HTML: " + $("#test").html())  → （结果）HTML: 这是段落中的 <b>粗体</b> 文本。
		val() - 设置或返回表单字段的值

//12、获取属性 - attr()
	HTML：<p><a href="http://www.runoob.com" id="runoob">菜鸟教程</a></p>
	JS: alert($("#runoob").attr("href"));   → （结果）http://www.runoob.com
	
//13、jQuery - 添加元素
	添加新的 HTML 内容
	我们将学习用于添加新内容的四个 jQuery 方法：
		append() - 在被选元素的结尾插入内容
		prepend() - 在被选元素的开头插入内容
		after() - 在被选元素之后插入内容
		before() - 在被选元素之前插入内容
	另外：append() 和 prepend() 方法能够通过参数接收无限数量的新元素，after() 和 before() 方法添加若干新元素同理。
	function appendText()
	{
	    var txt1="<p>文本。</p>";              // 使用 HTML 标签创建文本
	    var txt2=$("<p></p>").text("文本。");  // 使用 jQuery 创建文本
	    var txt3=document.createElement("p");
	    txt3.innerHTML="文本。";               // 使用 DOM 创建文本 text with DOM
	    $("body").append(txt1,txt2,txt3);        // 追加新元素
	}

//14、jQuery - 删除元素
	如需删除元素和内容，一般可使用以下两个 jQuery 方法：
		remove() - 删除被选元素（及其子元素）
		empty() - 从被选元素中删除子元素
	过滤被删除的元素
		jQuery remove() 方法也可接受一个参数，允许您对被删元素进行过滤。
	下面的例子删除 class="italic" 的所有 <p> 元素：
		$("p").remove(".italic");
15、jQuery - 获取并设置 CSS 类
	jQuery 拥有若干进行 CSS 操作的方法。我们将学习下面这些：
		addClass() - 向被选元素添加一个或多个类
		removeClass() - 从被选元素删除一个或多个类
		toggleClass() - 对被选元素进行添加/删除类的切换操作
		css() - 设置或返回样式属性
	可以在 addClass() 方法中规定多个类：
	$("button").click(function(){
	  	$("body div:first").addClass("important blue");
	});

//16、jQuery 尺寸
	jQuery 提供多个处理尺寸的重要方法：
		width()
		height()
		innerWidth()
		innerHeight()
		outerWidth()
		outerHeight()
	其中：
		width() 方法设置或返回元素的宽度（不包括内边距、边框或外边距）。
		height() 方法设置或返回元素的高度（不包括内边距、边框或外边距）。
		innerWidth() 方法返回元素的宽度（包括内边距）。
		innerHeight() 方法返回元素的高度（包括内边距）。
		outerWidth() 方法返回元素的宽度（包括内边距和边框）。
		outerHeight() 方法返回元素的高度（包括内边距和边框）。

//17、jQuery 遍历
	祖先是父、祖父、曾祖父等等。后代是子、孙、曾孙等等。同胞拥有相同的父。
	jQuery 遍历 - 祖先
		向上遍历 DOM 树，这些 jQuery 方法很有用，它们用于向上遍历 DOM 树：
		parent()
		parents()
		parentsUntil()
	其中：
		parent() 方法返回被选元素的直接父元素。该方法只会向上一级对 DOM 树进行遍历。
		parents() 方法返回被选元素的所有祖先元素，它一路向上直到文档的根元素 (<html>)。
		parentsUntil() 方法返回介于两个给定元素之间的所有祖先元素。
		
	后代是子、孙、曾孙等等。
	jQuery 遍历 - 后代
		下面是两个用于向下遍历 DOM 树的 jQuery 方法：
			children()
			find()
	其中：
		children() 方法返回被选元素的所有直接子元素。该方法只会向下一级对 DOM 树进行遍历。
		可选参数来过滤对子元素的搜索。下面的例子返回类名为 "1" 的所有 <p> 元素，并且它们是 <div> 的直接子元素：
		$(document).ready(function(){
		  	$("div").children("p.1");
		});
		find() 方法返回被选元素的后代元素，一路向下直到最后一个后代。
		下面的例子返回属于 <div> 后代的所有 <span> 元素：
		$(document).ready(function(){
		  	$("div").find("span");
		});
		下面的例子返回 <div> 的所有后代：
		$(document).ready(function(){
		  	$("div").find("*");
		});
	jQuery 遍历 - 同胞(siblings)
		有许多有用的方法让我们在 DOM 树进行水平遍历：
		siblings()
		next()
		nextAll()
		nextUntil()
		prev()
		prevAll()
		prevUntil()
	其中：
		siblings() 方法返回被选元素的所有同胞元素。
		可以使用可选参数来过滤对同胞元素的搜索。下面的例子返回属于 <h2> 的同胞元素的所有 <p> 元素：
		$(document).ready(function(){
		  	$("h2").siblings("p");
		});
		next() 方法返回被选元素的下一个同胞元素。该方法只返回一个元素。
		nextAll() 方法返回被选元素的所有跟随的同胞元素。
		nextUntil() 方法返回介于两个给定参数之间的所有跟随的同胞元素。
		下面的例子返回介于 <h2> 与 <h6> （不含<h2>与 <h6>）元素之间的所有同胞元素：
		$(document).ready(function(){
		  	$("h2").nextUntil("h6");
		});
		jQuery prev(), prevAll() & prevUntil() 方法
		prev(), prevAll() 以及 prevUntil() 方法的工作方式与上面的方法类似，只不过方向相反而已：
		它们返回的是前面的同胞元素（在 DOM 树中沿着同胞之前元素遍历，而不是之后元素遍历）。
//18、jQuery 遍历- 过滤		
		三个最基本的过滤方法是：first(), last() 和 eq()，它们允许您基于其在一组元素中的位置来选择一个特定的元素。
			其他过滤方法，比如 filter() 和 not() 允许您选取匹配或不匹配某项指定标准的元素。
		first() 方法返回被选元素的首个元素。
		last() 方法返回被选元素的最后一个元素。
		eq() 方法返回被选元素中带有指定索引号的元素。索引号从 0 开始，因此首个元素的索引号是 0 而不是 1。
		filter() 方法允许您规定一个标准。不匹配这个标准的元素会被从集合中删除，匹配的元素会被返回。
			下面的例子返回带有类名 "url" 的所有 <p> 元素：
			$(document).ready(function(){
			  	$("p").filter(".url");
			});
		not() 方法返回不匹配标准的所有元素。
		提示：not() 方法与 filter() 相反。
			下面的例子返回不带有类名 "url" 的所有 <p> 元素：
			$(document).ready(function(){
			  	$("p").not(".url");
			});

//19、Ajax
$.ajax({
    url: "/api/ObjectBasicData/GetVehicleObjectInfo",
    dataType: 'json',
    data: { objectId: objectId},
    success: function (data) {
        if (data.error != 0)
            return;
        var ids = [];
        $.map(data.result, function (item) {
            ids.push(item.objectID);
        });
      
$.ajax({
                    url: "/api/ActiveTrack/GetObjectLocation",
                    dataType: 'json',
                    data: { objectIDS: ids.join(','), mapType: tempStore.mapType },
                    success: function (rs) {
                        if (rs === null || rs === undefined || rs.error!=0) {
                            return;
                        }
                        $.map(rs.result,function (data) {
                            if (data.lon > 0) {
                                var directSrc = getDirectSrc(data.direct);
                                var addrHtml = pgAddrCoord(data.id, data.lon, data.lat, data.rlon, data.rlat);
                                realTracksList.addGridRows({
                                    "objectId": data.id,
                                    "transType": data.transType,
                                    "icon": "<img src='" + data.icon + "' width='16' height='16' />",
                                    "posmode": data.posmode,
                                    "objectName": data.name, // tranfont(data.name, 90),
                                    "objectNameFluid": data.name,
                                    "sim": data.sim,
                                    "imei": data.imei,
                                    "speed": data.speed,
                                    "mileage": data.mile,
                                    "oil": 0.0,
                                    "direct": directSrc,
                                    "status": data.status,
                                    "statusFluid": data.status,
                                    "address": addrHtml,
                                    "addressText": "",
                                    "lon": data.lon,
                                    "lat": data.lat,
                                    "gpsTime": data.gpsTime,
                                    "rcvTime": data.rcvTime,
                                    "alarm": data.alarm,
                                    "tracksRowClass": getTracksRowClass(data.transType, data.alarm, data.speed)
                                }, tempStore.currentObjectId);
                                RequestAddrByCoord(data.lon, data.lat, data.id);
                                if (data.id == objectId) {
                                    $("#dg").datagrid("selectRecord", objectId);
                                }
                                filterByMainVehicle();
                            }
                        });
                    },
                    timeout: 3000
                });//--ajax
            }
        });
    }
}
		

//20、AJAX load() 方法
	jQuery load() 方法是简单但强大的 AJAX 方法。load() 方法从服务器加载数据，并把返回的数据放入被选元素中。
	语法:$(selector).load(URL,data,callback);
		必需的 URL 参数规定您希望加载的 URL。
		可选的 data 参数规定与请求一同发送的查询字符串键/值对集合。
		可选的 callback 参数是 load() 方法完成后所执行的函数名称。
		
	下面的例子会把文件 "demo_test.txt" 的  内容  加载到指定的 <div> 元素中：
	实例：	$("#div1").load("demo_test.txt");
	
	也可以把 jQuery 选择器添加到 URL 参数。
	下面的例子把 "demo_test.txt" 文件中 id="p1" 的元素的内容，加载到指定的 <div> 元素中：
	实例：	$("#div1").load("demo_test.txt #p1");
		
	可选的 callback 参数规定当 load() 方法完成后所要允许的回调函数。回调函数可以设置不同的参数：
		responseTxt - 包含调用成功时的结果内容
		statusTXT - 包含调用的状态
		xhr - 包含 XMLHttpRequest 对象
	下面的例子会在 load() 方法完成后显示一个提示框。如果 load() 方法已成功，则显示"外部内容加载成功！"，而如果失败，则显示错误消息：
	实例
		$("button").click(function(){
			  $("#div1").load("demo_test.txt",function(responseTxt,statusTxt,xhr){
				    if(statusTxt=="success")
				      	alert("外部内容加载成功!");
				    if(statusTxt=="error")
				      	alert("Error: "+xhr.status+": "+xhr.statusText);
			  });
		});
//21、jQuery - AJAX get() 和 post() 方法	
		jQuery $.get() 方法
		$.get() 方法通过 HTTP GET 请求从服务器上请求数据。
			语法：$.get(URL,callback);
				必需的 URL 参数规定您希望请求的 URL。
				可选的 callback 参数是请求成功后所执行的函数名。
				下面的例子使用 $.get() 方法从服务器上的一个文件中取回数据：
		实例：
			$("button").click(function(){
				  $.get("demo_test.php",function(data,status){
				    	alert("数据: " + data + "\n状态: " + status);
				  });
			});	
		$.get() 的第一个参数是我们希望请求的 URL（"demo_test.php"）。
		第二个参数是回调函数。第一个回调参数存有被请求页面的内容，第二个回调参数存有请求的状态。
		
		jQuery $.post() 方法
		$.post() 方法通过 HTTP POST 请求从服务器上请求数据。
			语法: $.post(URL,data,callback);
				必需的 URL 参数规定您希望请求的 URL。
				可选的 data 参数规定连同请求发送的数据。
				可选的 callback 参数是请求成功后所执行的函数名。
		下面的例子使用 $.post() 连同请求一起发送数据：
		实例
			$("button").click(function(){
			    $.post("/try/ajax/demo_test_post.php",
				    {
				        name:"菜鸟教程",
				        url:"http://www.runoob.com"
				    },
				        function(data,status){
				        alert("数据: \n" + data + "\n状态: " + status);
			    	});
			});

//22、jQuery - noConflict() 方法
	正如您已经了解到的，jQuery 使用 $ 符号作为 jQuery 的简写。
	如果其他 JavaScript 框架也使用 $ 符号作为简写怎么办？
	jQuery noConflict() 方法
		noConflict() 方法会释放对 $ 标识符的控制，这样其他脚本就可以使用它了。
		当然，您仍然可以通过全名替代简写的方式来使用 jQuery：
		实例
		$.noConflict();
		jQuery(document).ready(function(){
			  jQuery("button").click(function(){
			    	jQuery("p").text("jQuery 仍然在工作!");
			  });
		});
	
	
	您也可以创建自己的简写。noConflict() 可返回对 jQuery 的引用，您可以把它存入变量，以供稍后使用。请看这个例子：
	实例
		var jq = $.noConflict();
			jq(document).ready(function(){
				  jq("button").click(function(){
				    	jq("p").text("jQuery 仍然在工作!");
				  });
		});
	
	
	如果你的 jQuery 代码块使用 $ 简写，并且您不愿意改变这个快捷方式，那么您可以把 $ 符号作为变量传递给 ready 方法。这样就可以在函数内使用 $ 符号了 - 而在函数外，依旧不得不使用 "jQuery"：
	实例
		$.noConflict();
		jQuery(document).ready(function($){
			  $("button").click(function(){
			    	$("p").text("jQuery 仍然在工作!");
			  });
		});
		
		
		

