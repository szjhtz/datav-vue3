<!-- 加载 demo 组件 start -->
<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 轮播表

轮播表

## 基础用法
<Preview comp-name="ScrollBoard" demo-name="demo1">
  <demo1 />
</Preview>

## 往config.data里面push更新数据
使用push更新数据因config watch到更新之后需要重新计算数据，故轮播表会先重置到第一行然后再继续按照刚才的进度轮播，介意的话可以用`updateRows`更新数据。

<Preview comp-name="ScrollBoard" demo-name="demo2">
  <demo2 />
</Preview>

## 利用updateRows更新数据
`updateRows`更新数据需要替换掉整个config里的data数据，详情见下方demo代码

<Preview comp-name="ScrollBoard" demo-name="demo3">
  <demo3 />
</Preview>

- 更多实例见<a href="http://datav.jiaminghi.com/guide/scrollBoard.html" target="_blank">DataV ScrollBoard</a>

## 属性
参数 | 说明 | 类型 | 可选值 | 默认值 
:-: | :-: | :-: | :-: | :-: 
header |	表头数据 |	`Array<String>` |	--- |	`[]`
data |	表数据 |	`Array<Array>` |	--- |	`[]`
rowNum |	表行数 |	Number |	--- |	5
headerBGC |	表头背景色 |	String |	--- |	'#00BAFF'
oddRowBGC |	奇数行背景色 |	String |	--- |	'#003B51'
evenRowBGC |	偶数行背景色 |	String |	--- |	#0A2732
waitTime |	`轮播时间间隔(ms)` |	Number |	--- |	2000
headerHeight |	表头高度 |	Number |	--- |	35
columnWidth |	列宽度 |	`Array<Number>` |	`[1]` |	`[]`
align |	列对齐方式 |	`Array<String>` |	`[2]` |	`[]`
index |	显示行号 |	Boolean |	true/false |	false
indexHeader |	行号表头 |	String |	- |	'#'
carousel |	轮播方式 |	String |	`'single'/'page'` |	'single'
hoverPause |	悬浮暂停轮播 |	Boolean |	--- |	true

### config相关注释
- [1] columnWidth可以配置每一列的宽度，默认情况下每一列宽度相等。

- [2] align可以配置每一列的对齐方式，可选值有`'left'|'center'|'right'`，默认值为'left'。

## 事件
事件名 | 说明 | 参数列表 | 参数说明
:-: | :-: | :-: | :-:
`click` | 点击事件 | $event | 原生的 dom event
`customEvent` | 自定义事件 | [a, b, c] | a：参数一；b：参数二；c：参数三