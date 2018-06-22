模板引擎：
	artTemplate：https://github.com/aui/art-template
	https://aui.github.io/art-template/zh-cn/index.html
	使用：
		1. 下载js文件
		2. 编写模板
			<script type="text/html" id="">
				<div>
					<a href="">
						<span>{{id}}</span>
						<h1>{{title}}</h1>
					</a>
				</div>
			</script>
		3. 在 JS 代码中，找到模板，渲染
			var html = template("id", {id:5, title:"abc"});
			document.getElementById("xxx").innerHTML = html;

	模板语法：
		{{each array elem i}}
			-- array 数组名
			-- elem 当前遍历到元素变量名
			-- i 当前遍历到元素下标

抛物线插件(jQuery插件)：
	https://github.com/amibug/fly
	下载：
	使用：
		a. 引入jQuery库
		b. 引入插件库
		c. 抛物线：
			// 抛物线终点在文档中的坐标
			const end = $(".bag_left").offset();
			// 动态创建运动图片
			const flyer = $("<img src='/images/m1.jpg' style='width:40px;'>");
			// 运动
			flyer.fly({
				start : {
					left : e.pageX - $(window).scrollLeft(),
					top : e.pageY - $(window).scrollTop()
				},
				end : {
					left : end.left - $(window).scrollLeft(),
					top : end.top - $(window).scrollTop()
				}
			});

放大镜插件：
	http://www.elevateweb.co.uk/image-zoom/examples

cookie 插件：
	https://github.com/carhartl/jquery-cookie
	配置：$.cookie.json = true;
		自动将JS值转换为JSON文本保存到 cookie 中，在读取 cookie 时能够自动将文本转换为 JS 值
	保存/修改：$.cookie(key, value, {expires, path})
	读取: var value = $.cookie(key)
	删除 $.removeCookie(key, {path})

运动动画：
	animate()
		-- 使用队列来保存运动动画效果
	stop()
		-- 停止当前正在执行的动画效果

自定义生成插件
	$.fn.extend(obj) <==> jQuery.prototype.extend()
		将 obj 作为原型的扩展，即扩展使用 jQuery 对象实例来调用的方法
	$.extend(obj) <==> jQuery.extend()
		将 obj 作为 jQuery 本身(函数)的扩展，即扩展使用 jQuery 直接调用的方法