---
title: HTML&CSS
date: "2023"
tags:
  - HTML
categories: Note
---
## HTML

### `<head>`
    
`<base>`  标签描述了基本的链接地址/链接目标，该标签作为HTML文档中所有的链接标签的默认链接:

`<meta>`元素通常用于指定网页的描述，关键词，文件的最后修改时间，作者，和其他元数据。charset 指定网页的字符集

- name 指定的数据的名称

- content 指定的数据的内容

    - keywords 表示网站的关键字，可以同时指定多个关键字，关键字间使用,隔开        
        ```HTML
    <meta name="Keywords" content="网上购物,网上商城,手机,笔记本,电脑,MP3,CD,数码,配件,手表,存储卡,京东"/>
    ```

    - description 用于指定网站的描述,网站的描述会显示在搜索引擎的搜索的结果中   
    ```HTML
    <meta name="description" content="京东JD.COM-专业的综合网上购物商城,销售家电!"/>
    ```
    
    - author 定义页面作者
        
    
    ```HTML
    <meta name="author" content="Runoob">
    ```
    
- http-equiv 每30秒刷新页面
    

```HTML
<meta http-equiv="refresh" content="30">
<meta http-equiv="refresh" content="3;url=https://www.mozilla.org"> 
<!--将页面重定向到另一个网站-->
```

- charset 定义文档的字符编码。**H5**
    

```HTML
<meta charset="utf-8">
```

2. ### html标签的类型（head， body，！Doctype） 他们的作用是什么？
    
      !DOCTYPE 标签：
    
    - 它是指示 web 浏览器关于页面使用哪个 HTML 版本进行编写的指令.
        
    
      head：
    
    - 是所有头部元素的容器, 绝大多数头部标签的内容不会显示给读者
        
    - 该标签下所包含的部分可加入的标签有`<base>, <link>, <meta>, <script>, <style>和<title>`
        
    
      body :
    
    - 用于定义文档的主体, 包含了文档的所有内容
        
    - 该标签支持 html 的全局属性和事件属性.
        
    

3. ### h5新特性
    
    - 新增选择器 document.querySelector、document.querySelectorAll
        
    - 拖拽释放(Drag and drop) API
        
    - **媒体播放的 video 和 audio**
        
    - 本地存储 localStorage 和 sessionStorage
        
    - 离线应用 manifest
        
    - 桌面通知 Notifications
        
    - **语意化标签 article、footer、header、nav、section**
        
    - 增强表单控件 calendar、date、time、email、url、search
        
    - 地理位置 Geolocation
        
    - 多任务 webworker
        
    - 全双工通信协议 websocket
        
    - 历史管理 history
        
    - 跨域资源共享(CORS) Access-Control-Allow-Origin
        
    - 页面可见性改变事件 visibilitychange
        
    - 跨窗口通信 PostMessage
        
    - Form Data 对象
        
    - 绘画 canvas
        
    
      H5移除的元素：
    
    - 纯表现的元素：basefont、big、center、font、s、strike、tt、u
        
    - 对可用性产生负面影响的元素：frame、frameset、noframes
        
    

4. ### 伪类和伪元素
    

- 伪类：用于已有元素处于某种状态时为其添加对应的样式，这个状态是根据用户行为而动态变化的
    

例如：当用户悬停在指定元素时，可以通过:hover来描述这个元素的状态，虽然它和一般css相似，可以为 已有元素添加样式，但是它只有处于DOM树无法描述的状态下才能为元素添加样式，所以称为伪类。

- 伪元素：用于创建一些不在DOM树中的元素，并为其添加样式。
    

例如，我们可以通过:before来在一个元素之前添加一些文本，并为这些文本添加样式，虽然用户可以看见 这些文本，但是它实际上并不在DOM文档中。

5. ### html5语义化
    

在HTML5出来之前，我们习惯于用`div`来表示页面的章节或者不同模块，但是`div`本身是没有语义的。但是现在，HTML5中加入了一些语义化标签，来更清晰的表达文档结构。

语义化优点：

- 易于用户阅读，样式丢失的时候能让页面呈现清晰的结构。
    
- 有利于SEO，搜索引擎根据标签来确定上下文和各个关键字的权重。
    
- 方便屏幕阅读器解析，如盲人阅读器根据语义渲染网页
    
- 有利于开发和维护，语义化更具可读性，代码更好维护，与CSS3关系更和谐。
    

```HTML
<title>      <!--：页面主体内容。-->
<hn>         <!--：h1~h6，分级标题，<h1> 与 <title> 协调有利于搜索引擎优化。-->
<ul>         <!--：无序列表。-->
<li>         <!--：有序列表。-->
<header>     <!--：页眉通常包括网站标志、主导航、全站链接以及搜索框。-->
<nav>         <!--：标记导航，仅对文档中重要的链接群使用。-->
<main>         <!--：页面主要内容，一个页面只能使用一次。如果是web应用，则包围其主要功能。-->
<article>    <!--：定义外部的内容，其中的内容独立于文档的其余部分。-->
<section>    <!--：定义文档中的节（section、区段）。比如章节、页眉、页脚或文档中的其他部分。-->
<aside>         <!--：定义其所处内容之外的内容。如侧栏、文章的一组链接、广告、友情链接、相关产品列表等。-->
<footer>     <!--：页脚，只有当父级是body时，才是整个页面的页脚。-->
<small>      <!--：呈现小号字体效果，指定细则，输入免责声明、注解、署名、版权。-->
<strong>     <!--：和 em 标签一样，用于强调文本，但它强调的程度更强一些。-->
<em>         <!--：将其中的文本表示为强调的内容，表现为斜体。-->
<mark>       <!--：使用黄色突出显示部分文本。-->
<figure>     <!--：规定独立的流内容（图像、图表、照片、代码等等）（默认有40px左右margin）。-->
<figcaption><!--：定义 figure 元素的标题，应该被置于 figure 元素的第一个或最后一个子元素的位置。-->
<cite>       <!--：表示所包含的文本对某个参考文献的引用，比如书籍或者杂志的标题。-->
<blockquoto><!--：定义块引用，块引用拥有它们自己的空间。-->
<q>          <!--：短的引述（跨浏览器问题，尽量避免使用）。-->
<time>       <!--：datetime属性遵循特定格式，如果忽略此属性，文本内容必须是合法的日期或者时间格式。-->
<abbr>       <!--：简称或缩写。-->
<dfn>       <!--：定义术语元素，与定义必须紧挨着，可以在描述列表dl元素中使用。-->
<address>    <!--：作者、相关人士或组织的联系信息（电子邮件地址、指向联系信息页的链接）。-->
<del>        <!--：移除的内容。-->
<ins>        <!--：添加的内容。-->
<code>       <!--：标记代码。-->
<meter>      <!--：定义已知范围或分数值内的标量测量。（Internet Explorer 不支持 meter 标签）-->
<progress>    <!--：定义运行中的进度（进程）。-->
```

6. ### audio 标签的api
    

- **H5** 用来向页面中引入一个外部的音频文件的音视频文件引入时，默认情况下不允许用户自己控制播放停止
    
    - controls 是否允许用户控制播放
        
    - autoplay 音频文件是否自动播放
        
        - 如果设置了autoplay 则音乐在打开页面时会自动播放.但是目前来讲大部分浏览器都不会自动对音乐进行播放
            
    - loop 音乐是否循环播放
        

```HTML
<audio src="./source/audio.mp3" controls autoplay loop></audio>

<!-- 除了通过src来指定外部文件的路径以外，还可以通过source来指定文件的路径 -->
<audio controls>
    <!-- 对不起，您的浏览器不支持播放音频！请升级浏览器！ -->
    <source src="./source/audio.mp3">
    <source src="./source/audio.ogg">
    <!--<embed> 标签定义了一个容器，用来嵌入外部应用或者互动程序（插件）。-->
    <embed src="./source/audio.mp3" type="audio/mp3" width="300" height="100">
</audio>

<!--  使用video标签来向网页中引入一个视频 使用方式和audio基本上是一样的  -->
<video controls onerror="myFunction()">
    <source src="./source/flower.webm">
    <source src="./source/flower.mp4">
    <embed src="./source/flower.mp4" type="video/mp4">
</video>
```

  

|   |   |   |
|---|---|---|
|属性|属性值|注释|
|src|url|播放的音乐的url地址（火狐只支持ogg的音乐，而IE9只支持MP3格式的音乐。 chrome貌似全支持）|
|preload|preload|预加载（在页面被加载时进行加载或者说缓冲音频）， 如果使用了autoplay的话那么该属性失效。|
|loop|loop|循环播放|
|controls|controls|是否显示默认控制条（控制按钮）|
|autoplay|autoplay|自动播放|

audio音乐格式的支持

|   |   |   |   |   |   |
|---|---|---|---|---|---|
|音频格式|Chrome|Firefox|IE9|Opera|Safari|
|**OGG**|支持|支持|支持|不支持|不支持|
|**MP3**|支持|不支持|支持|不支持|支持|
|**WAV**|不支持|支持|不支持|支持|不支|

audio属性

|   |   |
|---|---|
|属性|注释|
|duration|获取媒体文件的总时长，以s为单位，如果无法获取，返回NaN|
|paused|如果媒体文件被暂停，那么paused属性返回true，反之则返回false|
|ended|如果媒体文件播放完毕返回true|
|muted|用来获取或设置静音状态。值为boolean|
|volume|控制音量的属性值为0-1;0为音量最小，1为音量最大|
|startTime|返回起始播放时间|
|error|返回错误代码，为uull的时候为正常。 否则可以通过Music.error.code来获取具体的错误代码： 1.用户终止 2.网络错误 3.解码错误 4.URL无效|
|currentTime|用来获取或控制当前播放的时间，单位为s。|
|currentSrc|以字符串形式返回正在播放或已加载的文件|

常用的控制用的函数：

|   |   |
|---|---|
|函数|作用|
|load()|加载音频、视频软件|
|play()|加载并播放音频、视频文件或重新播放暂停的的音频、视频|
|pause()|暂停出于播放状态的音频、视频文件|
|canPlayType(obj)|测试是否支持给定的Mini类型的文件|

常用audio的事件：

|   |   |
|---|---|
|事件名称|事件作用|
|loadstart|客户端开始请求数据|
|progress|客户端正在请求数据（或者说正在缓冲）|
|play|play()和autoplay播放时|
|pause|pause()方法促发时|
|ended|当前播放结束|
|timeupdate|当前播放时间发生改变的时候。播放中常用的时间处理哦|
|canplaythrough|歌曲已经载入完全完成|
|canplay|缓冲至目前可播放状态。|

7. ### img标签
    

- alt 属性用来为图像定义一串预备的可替换的文本。
    
- title：hover会出现
    

```TypeScript
<img src="pulpit.jpg" alt="Pulpit rock" width="304" height="228">
```

8. ### table
    

|   |   |   |
|---|---|---|
|元素/是否支持|margin|padding|
|table|有效|视情况而定|
|tr|无效|有padding区但无效|
|td|无效|有效|

- table的padding使用外层div的padding代替。
    
- tr不要设置任何的margin和padding，只是起到换行作用的元素，没其他任何作用。
    
- 没必要设置td的margin
    

  

## CSS

1. ### 选择器
    

**选择器类型**

- ID　　#id
    
- class　　.class
    
- 标签　　p
    
- 通用　　*
    
- 属性　　[type="text"]
    
- 伪类　　:hover
    
- 伪元素　　::first-line
    
- 子选择器、相邻选择器
    

**权重计算规则**

- 第一等：内联样式，权值为1000。
    
- 第二等：ID选择器，权值为0100。
    
- 第三等：类，伪类和属性选择器，权值为0010。
    
- 第四等：代表类型选择器和伪元素选择器,权值为0001。
    
- 通配符、子选择器、相邻选择器等的。如*、>、+,权值为0000。
    
- 继承的样式没有权值。
    

**比较规则**

- 选择器都有一个权值，权值越大越优先；
    
- 当权值相等时，**后出现**的样式表设置要优于先出现的样式表设置；
    
- 创作者的规则高于浏览者：即网页编写者设置的 CSS 样式的优先权高于浏览器所设置的样式；
    
- 继承的 CSS 样式不如后来指定的 CSS 样式；
    
- 在同一组属性设置中标有!important规则的优先级最大
    
- 通配符、子选择器、相邻选择器等的。虽然权值为0000，但是也比继承的样式优先。
    

2. ### display & **`visibility`**
    

**`display`** **用来设置元素显示的类型**

- inline 将元素设置为行内元素
    
- block 将元素设置为块元素
    
- inline-block 将元素设置为行内块元素 ，行内块，既可以设置宽度和高度又不会独占一行
    
- table 将元素设置为一个表格
    
- none 元素不在页面中显示
    

**`visibility`** **用来设置元素的显示状态**

- visible 默认值，元素在页面中正常显示
    
- hidden 元素在页面中隐藏 不显示，但是依然占据页面的位置
    

  

3. ### float
    

文档流（normal flow）

网页是一个多层的结构，一层摞着一层，通过CSS可以分别为每一层来设置样式，作为用户来讲只能看到最顶上一层 这些层中，**最底下的一层称为文档流**，文档流是网页的基础。

我们所创建的元素默认都是在文档流中进行排列，对于我们来元素主要有两个状态：在文档流中，不在文档流中

> 元素在文档流中的特点

**块元素**

- 块元素会在页面中独占一行(自上向下垂直排列)
    
- 默认宽度是父元素的全部（会把父元素撑满)
    
- 默认高度是被内容撑开（子元素）
    

**行内元素**

- 行内元素不会独占页面的一行，只占自身的大小
    
- 行内元素在页面中左向右水平排列，如果一行之中不能容纳下所有的行内元素，则元素会换到第二行继续自左向右排列（书写习惯一致）
    
- 内元素的默认宽度和高度都是被内容撑开
    

> 脱离文档流的特点

脱离文档流以后，不需要再区分块和行内了

**块元素**

- 块元素不在独占页面的一行
    
- 脱离文档流以后，块元素的宽度和高度默认都被内容撑开
    

**行内元素**

- 行内元素脱离文档流以后会变成块元素，特点和块元素一样
    

  

简介

使用 `float` 属性来设置于元素的浮动

- none 默认值 ，元素不浮动
    
- left 元素向左浮动
    
- right 元素向右浮动
    

**注意**：元素设置浮动以后，水平布局的等式便不需要强制成立， 元素设置浮动以后，会完全从文档流中脱离，不再占用文档流的位置，所以**元素下边的还在文档流中的元素会自动向上移动**

> 浮动的特点

1. 浮动元素会完全脱离文档流，不再占据文档流中的位置
    
2. 设置浮动以后元素会向父元素的左侧或右侧移动
    
3. 浮动元素默认不会从父元素中移出
    
4. 浮动元素向左或向右移动时，不会超过它前边的其他浮动元素
    
5. 如果浮动元素的上边是一个没有浮动的块元素，则浮动元素无法上移
    
6. 浮动元素不会超过它上边的浮动的兄弟元素，最多最多就是和它一样高
    

简单总结： **浮动目前来讲它的主要作用就是让页面中的元素可以水平排列，通过浮动可以制作一些水平方向的布局**

  

#### clear

如果我们不希望某个元素因为其他元素浮动的影响而改变位置，可以通过clear属性来清除浮动元素对当前元素所产生的影响

**作用**：清除浮动元素对当前元素所产生的影响

**可选值**：

left 清除左侧浮动元素对当前元素的影响

right 清除右侧浮动元素对当前元素的影响

both 清除两侧中最大影响的那侧

**原理**：

设置清除浮动以后，浏览器会自动为元素添加一个上外边距， 以使其位置不受其他元素的影响

4. ### BFC 块级格式化环境
    

BFC(Block Formatting Context) 是一个CSS中的一个隐含的属性，可以为一个元素开启BFC，开启BFC该元素会变成一个独立的布局区域

BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。

**元素开启BFC后的特点**

7. 开启BFC的元素不会被浮动元素所覆盖
    
8. 开启BFC的元素子元素和父元素外边距不会重叠
    
9. 开启BFC的元素可以包含浮动的子元素
    

**触发BFC**

10. 浮动元素：float 除 none 以外的值。（不推荐）
    
11. 绝对定位元素：position (absolute、fixed)。
    
12. display 为 inline-block、table-cells、flex。（不推荐）
    
13. overflow 除了 visible 以外的值 (hidden、auto、scroll)。
    

**[遇到哪些问题需要用到BFC](https://security.feishu.cn/link/safety?target=https%3A%2F%2Fblog.csdn.net%2Fsinat_36422236%2Farticle%2Fdetails%2F88763187%3Fops_request_misc%3D%25257B%252522request%25255Fid%252522%25253A%252522164482927316780261938625%252522%25252C%252522scm%252522%25253A%25252220140713.130102334..%252522%25257D%26request_id%3D164482927316780261938625%26biz_id%3D0%26utm_medium%3Ddistribute.pc_search_result.none-task-blog-2~all~top_positive~default-2-88763187.first_rank_v2_pc_rank_v29%26utm_term%3Dbfc%26spm%3D1018.2226.3001.4187&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)**

1.利用BFC避免margin重叠。

2.自适应两栏布局

3.高度塌陷（BFC、clear、clearfix）

  

5. ### position
    

- static 默认值，元素是静止的没有开启定位
    
- relative 相对定位
    
- absolute 开启元素的绝对定位
    
- fixed 开启元素的固定定位
    
- sticky 开启元素的粘滞定位 （相对scrollcontainer）
    

**偏移量（offset）** 当元素开启了定位以后，可以通过偏移量来设置元素的位置

- top：定位元素和定位位置上边的距离
    
- bottom：定位元素和定位位置下边的距离
    
- left：定位元素和定位位置的左侧距离
    
- right：定位元素和定位位置的右侧距离
    

**relative**

- 元素开启相对定位以后，如果不设置偏移量元素不会发生任何的变化
    
- 相对定位是参照于元素在文档流中的位置进行定位的
    
- 相对定位会提升元素的层级
    
- 相对定位不会使元素脱离文档流
    
- 相对定位不会改变元素的性质块还是块，行内还是行内
    

**absolute**

- 开启绝对定位后，如果不设置偏移量元素的位置不会发生变化
    
- 开启绝对定位后，元素会从文档流中脱离
    
- 绝对定位会改变元素的性质，行内变成块，块的宽高被内容撑开
    
- 绝对定位会使元素提升一个层级
    
- 绝对定位元素是相对于其包含块进行定位的
    

包含块( containing block )，正常情况下：包含块就是离当前元素最近的祖先块元素

绝对定位的包含块，就是离它最近的开启了定位的祖先元素，如果所有的祖先元素都没有开启定位则根元素就是它的包含块 **相对定位一般配合绝对定位使用（将父元素设置相对定位，使其相对于父元素偏移**）

**fixed**

1. 固定定位也是一种**绝对定位**，所以固定定位的大部分特点都和绝对定位一样
    
2. 唯一不同的是固定定位永远参照于**浏览器的视口**进行定位
    
3. 固定定位的元素不会随网页的滚动条滚动
    

**sticky**

粘滞定位和相对定位的特点基本一致，不同的是粘滞定位可以在元素到达某个位置时将其固定

6. ### z-index
    

对于开启了定位元素，可以通过`z-index`属性来指定元素的层级，z-index需要一个整数作为参数，

- 值越大元素的层级越高
    
- 元素的层级越高越优先显示
    
- 如果元素的层级一样，则优先显示靠下的元素
    
- 祖先的元素的层级再高也不会盖住后代元素
    

7. ### font
    

- **font-face**可以将服务器中的字体直接提供给用户去使用
    
    ```CSS
    @font-face {
        /* 指定字体的名字 */
        font-family:'myfont' ;
        /* 服务器中字体的路径 */
        src: url('./font/ZCOOLKuaiLe-Regular.ttf') format("truetype");
    }
    ```
    
- **color** 用来设置字体颜色
    
- **font-size** 字体的大小
    
    - em 相当于**当前**元素的一个font-size
        
    - rem 相对于**根**元素的一个font-size
        
- **font-family** 字体族（字体的格式）以同时指定多个字体，多个字体间使用逗号隔开字体生效时优先使用第一个，第一个无法使用则使用第二个 以此类推
    
    - serif 衬线字体
        
    - sans-serif 非衬线字体
        
    - monospace 等宽字体
        
    - Eg. Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,"\5B8B\4F53",sans-serif
        
- **font-weight** 字重 字体的加粗
    
    - normal 默认值 不加粗
        
    - bold 加粗，100-900 九个级别（没什么用）
        
- **font-style** 字体的风格
    
    - normal 正常的
        
    - italic 斜体
        
- **line height** 行高：文字占有的实际高度
    
    - 可以直接指定一个大小（px em）
        
    - 也可以直接为行高设置一个整数，行高将会是字体的指定的倍数
        
    - 行间距 = 行高 - 字体大小
        
    - 可以将行高设置为和高度一样的值，使单行文字在一个元素中垂直居中
        
    - 字体框就是字体存在的格子，设置font-size实际上就是在设置字体框的高度，行高会在字体框的上下平均分配
        
- **text-align** 文本的水平对齐（left、right、center、justify）
    
- **vertical-align** **行内****元素**垂直对齐的方式（baseline、top、 bottom、middle）
    
- **text-decoration** 设置文本修饰
    
    - none 什么都没有
        
    - underline 下划线
        
    - line-through 删除线
        
    - overline 上划线
        
- **white-space** 设置网页如何处理空白
    
    - normal 正常
        
    - nowrap 不换行
        
    - pre 保留空白
        

8. ### background
    

- **background-color** 设置背景颜色
    
- **background-image** 设置背景图片
    
    - 可以同时设置背景图片和背景颜色，这样背景颜色将会成为图片的背景色
        
    - 如果背景的图片小于元素，则背景图片会自动在元素中平铺将元素铺满
        
    - 如果背景的图片大于元素，将会一个部分背景无法完全显示
        
    - 如果背景图片和元素一样大，则会直接正常显示
        
- **background-repeat** 用来设置背景的重复方式
    
    - repeat 默认值 ， 背景会沿着x轴 y轴双方向重复
        
    - repeat-x 沿着x轴方向重复
        
    - repeat-y 沿着y轴方向重复
        
    - no-repeat 背景图片不重复
        
- **background-position** （精灵图）
    
    - 用来设置背景图片的位置 通过 top left right bottom center
        
    - 指定的是图片左上角相对于元素左上角的位置。
        
- **background-clip** 设置背景的范围
    
    - border-box 默认值，背景会出现在边框的下边
        
    - padding-box 背景不会出现在边框，只出现在内容区和内边距
        
    - content-box 背景只会出现在内容区
        
    - **background-origin** 背景图片的偏移量计算的原点
        
    - padding-box 默认值，background-position从内边距处开始计算
        
    - content-box 背景图片的偏移量从内容区处计算
        
    - border-box 背景图片的变量从边框处开始计算
        
- **background-size** 设置背景图片的大小
    
    - （宽度，高度）
        
    - cover 图片的比例不变，将元素铺满
        
    - contain 图片比例不变，将图片在元素中完整显示
        

9. ### 渐变
    

**！！渐变是图片，需要通过background-image来设置**

- linear-gradient(线性渐变，颜色沿着一条直线发生变化
    

linear-gradient(red,yellow) 红色在开头，黄色在结尾，中间是过渡区域

- 线性渐变的开头，我们可以指定一个渐变的方向
    
- to left、to right、to bottom、 to top、deg deg表示度数、turn 表示圈
    

渐变可以同时指定多个颜色，多个颜色默认情况下平均分布， 也可以手动指定渐变的分布情况

```CSS
background-image: linear-gradient(red,yellow,#bfa,orange); 
background-image: linear-gradient(red 50px,yellow 100px, green 120px, orange 200px); 
background-image: repeating-linear-gradient(to right ,red, yellow 50px);
/*repeating-linear-gradient() 可以平铺的线性渐变*/
```

**radial-gradient()** 径向渐变(放射性的效果)

radial-gradient(大小 at 位置, 颜色 位置 ,颜色 位置 ,颜色 位置)

大小：

- circle 圆形
    
- ellipse 椭圆
    
- closest-side 近边
    
- closest-corner 近角
    
- farthest-side 远边
    
- farthest-corner 远角
    

位置：top right left center bottom

```CSS
background-image: radial-gradient(farthest-corner at 100px 100px, red , #bfa)
```

10. ### **过渡（transition）**
    

- **transition-delay**: 过渡效果的延迟，等待一段时间后在执行过渡
    
- **transition-property**: 指定要执行过渡的属性 ，逗号隔开，如果所有属性都需要过渡，则使用all关键字
    
- **transition-duration**: 指定过渡效果的持续时间
    
- **transition-timing-function**: 过渡的时序函数，指定过渡的执行的方式
    
    - ease 默认值，慢速开始，先加速，再减速
        
    - linear 匀速运动
        
    - ease-in 加速运动
        
    - ease-out 减速运动
        
    - ease-in-out 先加速 后减速
        
    - cubic-bezier() 来指定时序函数， [https://cubic-bezier.com](https://security.feishu.cn/link/safety?target=https%3A%2F%2Fcubic-bezier.com&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)
        
    - steps() 分步执行过渡效果，可以设置一个第二个值：
        
        - end ， 在时间结束时执行过渡(默认值)
            
        - start ， 在时间开始时执行过渡
            

```CSS
/* transition 可以同时设置过渡相关的所有属性，只有一个要求，如果要写延迟，则两个时间中第一个是持续时间，第二个是延迟 */
transition:2s margin-left 1s cubic-bezier(.24,.95,.82,-0.88);
```

11. ### 动画（animation）
    

动画和过渡类似，都是可以实现一些动态的效果， 不同的是过渡需要在某个属性发生变化时才会触发 动画可以自动触发动态效果，设置动画效果，必须先要设置一个关键帧，关键帧设置了动画执行每一个步骤

```CSS
@keyframes test {
    /* from表示动画的开始位置 也可以使用 0% */
    from{
        margin-left: 0;
        background-color: orange;
    } 

    /* to动画的结束位置 也可以使用100%*/
    to{
        background-color: red;
        margin-left: 700px;
    }
}
```

- **animation: name duration timing-function delay iteration-count direction;**
    
- **animation-name**: 要对当前元素生效的关键帧的名字
    
- **animation-duration**: 动画的执行时间
    
- **animation-delay**:动画的延时
    
- **animation-iteration-count**: 动画执行的次数/infinite 无限执行
    
- **animation-direction**:指定动画运行的方向
    
    - normal 默认值 从 from 向 to运行 每次都是这样
        
    - reverse 从 to 向 from 运行 每次都是这样
        
    - alternate 从 from 向 to运行 重复执行动画时反向执行
        
    - alternate-reverse 从 to 向 from运行 重复执行动画时反向执行
        
- **animation-play-state**: 设置动画的执行状态
    
    - running 默认值 动画执行
        
    - paused 动画暂停
        
- **animation-fill-mode**: 动画的填充模式
    
    - none 默认值 动画执行完毕元素回到原来位置
        
    - forwards 动画执行完毕元素会停止在动画结束的位置
        
    - backwards 动画延时等待时，元素就会处于开始位置
        
    - both 结合了forwards 和 backwards
        

  

12. ### 变形（transform）
    

变形就是指通过CSS来改变元素的形状或位置，变形不会影响到页面的布局

百分比是相对于自身计算的

- **平移：****translateX()** 、**translateY()** 、**translateZ()**
    
- **旋转：****rotateX()**、**rotateY()**、**rotateZ()**
    
- **缩放：scaleX()** 、**scaleY()**、**scale()** 
    

```CSS
transform: rotateZ(.25turn); 
transform: rotateY(180deg) translateZ(400px);
transform: translateZ(400px) rotateY(180deg) ; 
transform: rotateY(180deg); 
/* 是否显示元素的背面 */
backface-visibility: hidden;

transform:scale(2)

/* 变形的原点 默认值 center*/
transform-origin:20px 20px;  
```

13. ### 弹性盒子 flex
    

flex(弹性盒、伸缩盒)<是CSS中的又一种布局手段，它主要用来**代替浮动**来完成页面的布局，flex可以使元素具有弹性，让元素可以跟随页面的大小的改变而改变

**弹性容器**：

- **display:flex** / **inline-flex** 设置为行内的弹性容器
    
- **flex-direction**：顺序指定了弹性子元素在父容器中的位置。
    
- **justify-content** ：内容对齐，如何分配主轴上的空白空间
    
- **flex-wrap** ：设置弹性元素是否在弹性容器中自动换行
    
- **align-items**：元素在辅轴上如何对齐（单行）
    
- **align-content**：辅轴空白空间的分布 （多行）属性用于修改 `flex-wrap` 属性的行为。类似于 `align-items`, 但它不是设置弹性子元素的对齐，而是设置各个行的对齐。
    

**弹性元素**

- **order** 决定弹性元素的排列顺序，数值小的排在前面。可以为负值
    
- **align-self**：设置弹性元素自身辅轴对齐方式。
    
- **flex**：可以设置弹性元素所有的三个样式分配剩余空间
    
    - `flex：none | [ flex-grow ] || [ flex-shrink ] || [ flex-basis ]`
        
    
      **flex-grow**：增长系数
    
      **flex-shrink**：缩减系数
    
      **flex-basis**：在主轴上的基础长度， 如果主轴是 横向的 则 该值指定的就是元素的宽度，如果主轴是 纵向的 则 该值指定的是就是元素的高度
    

**对齐居中**：设置"margin"值为"auto"值，获取弹性容器中剩余的空间。

- 只想要设置 `margin: auto;` 可以使得弹性子元素在两上轴方向上完全居中
    
- `margin-right: auto;` 。 它将剩余的空间放置在元素的右侧：
    

14. ### viewport 移动端适配
    

```HTML
<meta name="viewport" content="width=750,initial-scale=0.5">
```

- `width`：控制 `viewport` 的大小，可以指定的一个值，如果 600，或者特殊的值，如`device-width` 为设备的宽度（单位为缩放为 100% 时的 CSS 的像素）。
    
- `height`：和 `width` 相对应，指定高度。
    
- `initial-scale`：初始缩放比例，也即是当页面第一次 `load` 的时候缩放比例。
    
      initial-scale = 屏幕的宽度 / 设计稿的宽度
    
- `maximum-scale`：允许用户缩放到的最大比例。
    
- `minimum-scale`：允许用户缩放到的最小比例。
    
- `user-scalable`：用户是否可以手动缩放。
    

15. ### 媒体查询 @media
    

语法： @media 查询规则{}

媒体类型：

all 所有设备

print 打印设备

screen 带屏幕的设备

speech 屏幕阅读器

可以使用`,`连接多个媒体类型，这样它们之间就是一个或的关系

可以在媒体类型前添加一个`only`，表示只有。only的使用主要是为了兼容一些老版本浏览器

```CSS
@media only screen {
    body{
        background-color: #bfa;
    }
}
```

**媒体特性**：

width 视口的宽度

height 视口的高度

min-width 视口的最小宽度（视口大于指定宽度时生效）

max-width 视口的最大宽度（视口小于指定宽度时生效）

样式切换的分界点，我们称其为**断点**，也就是网页的样式会在这个点时发生变化

一般比较常用的断点

小于768 超小屏幕 max-width=768px

大于768 小屏幕 min-width=768px

大于992 中型屏幕 min-width=992px

大于1200 大屏幕 min-width=1200px

```CSS
@media only screen and (min-width: 500px) and (max-width:700px){
    body{
        background-color: #bfa;
    }
}
```

  

16. ### link 和 @import
    

作用：样式的导入方式

link 的使用`<link href="index.css" rel="stylesheet">`

@import 的使用

```HTML
<style type="text/css">
@import url(index.css);
</style>
```

link 和 @import 的区别

1. 引入的内容不同：link 除了引用样式文件，还可以引用图片等资源文件，而 @import 只引用样式文件
    
2. 加载顺序不同：link 引用 CSS 时，在页面载入时同时加载；@import 需要页面网页完全载入以后加载
    
3. 兼容性不同：link 是 XHTML 标签，无兼容问题；@import 是在 CSS2.1 提出的，低版本的浏览器不支持
    
4. 对 JS 的支持不同：link 支持使用 Javascript 控制 DOM 去改变样式；而 @import 不支持
    

  

17. ### 为什么link用href获取资源 script和img用src
    

src用于替换当前元素，href用于在当前文档和引用资源之间确立联系。

**src**

- src是source的缩写，指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置；在请求src资源时会将其指向的资源下载并应用到文档内，例如js脚本，img图片和frame等元素
    
- 当浏览器解析到该元素时，**会暂停其他资源的下载和处理**，直到将该资源加载、编译、执行完毕，图片和框架 等元素也如此，类似于将所指向资源嵌入当前标签内。**这也是为什么将js脚本放在底部而不是头部**
    

**href**

- href是Hypertext Reference的缩写，指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接
    
- 在文档中添加link标签，浏览器会识别该文档为css文件，就会**并行下载资源**并且**不会**停止对当前文档的处理。这也是为什么建议使用link方式来加载css，而不是使用@import方式
    

#### 1 继承相关

css的继承：就是给父级设置一些属性，子级继承了父级的该属性，这就是我们的css中的继承。 官方解释，继承是一种 规则，它允许样式不仅应用于特定的html标签元素，而且应用于其后代元素。

**无继承性的属性**

1、display：规定元素应该生成的框的类型

2、文本属性：

vertical-align：垂直文本对齐

text-decoration：规定添加到文本的装饰

text-shadow：文本阴影效果

white-space：空白符的处理

unicode-bidi：设置文本的方向

3、盒子模型的属性：width、height、margin 、margin-top、margin-right、margin-bottom、margin-left、border、 border-style、border-top-style、border-right-style、border-bottom-style、border-left-style、border-width、border-top-width、border-right-right、border-bottom-width、border-left-width、border-color、border-top-color、border-right-color、border-bottom-color、border-left-color、border-top、border-right、border-bottom、border-left、padding、padding-top、padding-right、padding-bottom、padding-left

4、背景属性：background、background-color、background-image、background-repeat、background-position、background-attachment

5、定位属性：float、clear、position、top、right、bottom、left、min-width、min-height、max-width、max-height、overflow、clip、z-index

6、生成内容属性：content、counter-reset、counter-increment

7、轮廓样式属性：outline-style、outline-width、outline-color、outline

8、页面样式属性：size、page-break-before、page-break-after

9、声音样式属性：pause-before、pause-after、pause、cue-before、cue-after、cue、play-during

**有继承性的属性**

1、字体系列属性

font：组合字体

font-family：规定元素的字体系列

font-weight：设置字体的粗细

font-size：设置字体的尺寸

font-style：定义字体的风格

font-variant：设置小型大写字母的字体显示文本，这意味着所有的小写字母均会被转换为大写，但是所有使用小型大写 字体的字母与其余文本相比，其字体尺寸更小。

font-stretch：对当前的 font-family 进行伸缩变形。所有主流浏览器都不支持。

font-size-adjust：为某个元素规定一个 aspect 值，这样就可以保持首选字体的 x-height。

2、文本系列属性

text-indent：文本缩进

text-align：文本水平对齐

line-height：行高

word-spacing：增加或减少单词间的空白（即字间隔）

letter-spacing：增加或减少字符间的空白（字符间距）

text-transform：控制文本大小写

direction：规定文本的书写方向

color：文本颜色 a元素除外

3、元素可见性：visibility

4、表格布局属性：caption-side、border-collapse、border-spacing、empty-cells、table-layout

5、列表布局属性：list-style-type、list-style-image、list-style-position、list-style

6、生成内容属性：quotes

7、光标属性：cursor

8、页面样式属性：page、page-break-inside、windows、orphans

9、声音样式属性：speak、speak-punctuation、speak-numeral、speak-header、speech-rate、volume、voice-family、 pitch、pitch-range、stress、richness、、azimuth、elevation

**所有元素可以继承的属性**

1、元素可见性：visibility

2、光标属性：cursor

**内联元素可以继承的属性**

1、字体系列属性

2、除text-indent、text-align之外的文本系列属性

**块级元素可以继承的属性**

1、text-indent、text-align

#### 2 css预处理工具

**参考答案**：

**CSS 预处理器**是一个能让你通过预处理器自己独有的语法来生成CSS的程序。

css预处理器种类繁多，三种主流css预处理器是Less、Sass（Scss）及Stylus；它们各自的背景如下:

Sass：

2007年诞生，最早也是最成熟的CSS预处理器，拥有ruby社区的支持和compass这一最强大的css框架，目前受LESS影响，已经进化到了全面兼容CSS的SCSS（SCSS 需要使用分号和花括号而不是换行和缩进）。

Less：

2009年出现，受SASS的影响较大，但又使用CSS的语法，让大部分开发者和设计师更容易上手，在ruby社区之外支持者远超过SASS。其缺点是比起SASS来，可编程功能不够。优点是简单和兼容CSS，反过来也影响了SASS演变到了SCSS的时代，著名的Twitter Bootstrap就是采用LESS做底层语言的。

Stylus：

2010年产生，来自Node.js社区，主要用来给Node项目进行CSS预处理支持，在此社区之内有一定支持者，在广泛的意义上人气还完全不如SASS和LESS。

**比较**

在使用 CSS 预处理器之前最重要的是理解语法，幸运的是基本上大多数预处理器的语法跟 CSS 都差不多。

首先 Sass 和 Less 都使用的是标准的 CSS 语法，因此如果可以很方便的将已有的 CSS 代码转为预处理器代码，默认 Sass 使用 .sass 扩展名，而 Less 使用 .less 扩展名。

```CSS
h1 {
  color: #0982C1;
}
```

这是一个再普通不过的，不过 Sass 同时也支持老的语法，就是不包含花括号和分号的方式：

```CSS
h1
color: #0982c1
```

而 Stylus 支持的语法要更多样性一点，它默认使用 .styl 的文件扩展名，下面是 Stylus 支持的语法

```CSS
/* style.styl */
h1 {
  color: #0982C1;
}
/* omit brackets */
h1
color: #0982C1;
/* omit colons and semi-colons */
h1
color #0982C1
```

可以在同一个样式单中使用不同的变量，例如下面的写法也不会报错：

```CSS
h1 {
  color #0982c1
}
h2
font-size: 1.2em
```

#### 3 行内元素和块级元素什么区别，然后怎么相互转换

**参考答案:**

**块级元素**

1.总是从新的一行开始，即各个块级元素独占一行，默认垂直向下排列；

2.高度、宽度、margin及padding都是可控的，设置有效，有边距效果；

3.宽度没有设置时，默认为100%；

4.块级元素中可以包含块级元素和行内元素。

**行内元素**

1.和其他元素都在一行，即行内元素和其他行内元素都会在一条水平线上排列；

2.高度、宽度是不可控的，设置无效，由内容决定。

3.根据标签语义化的理念，行内元素最好只包含行内元素，不包含块级元素。

**转换**

当然块级元素与行内元素之间的特性是可以相互转换的。HTML可以将元素分为行内元素、块状元素和行内块状元素三种。

使用display属性能够将三者任意转换：

(1)display:inline;转换为行内元素；

　(2)display:block;转换为块状元素；

　(3)display:inline-block;转换为行内块状元素。

#### 4 块元素哪些属性可以继承？

**参考答案**：

text-indent、text-align、visibility、cursor

#### 5 盒模型

**参考答案**：

4. 概念
    
5. CSS盒模型本质上是一个盒子，封装周围的HTML元素，它包括：`外边距（margin）`、`边框（border）`、`内边距（padding）`、`实际内容（content）`四个属性。 CSS盒模型：**标准模型 + IE模型**
    
6. 1.1 W3C盒子模型(标准盒模型)
    

![](https://a1j6nbrw76.feishu.cn/space/api/box/stream/download/asynccode/?code=NWIxNjM1MjFhYmI4YjNiNGQ0NjA4NDc1MzViNWMyNTVfTXpmTTFuV0FjVGtiVHVyY2V3WUhER2NEUEVINXpuN3pfVG9rZW46Ym94Y253eFNlZ2s0eDlEVVJkZDV4MFkzWUNoXzE3MjIyNTYyMTQ6MTcyMjI1OTgxNF9WNA)

7. 1.2 IE盒子模型(怪异盒模型)
    

![](https://a1j6nbrw76.feishu.cn/space/api/box/stream/download/asynccode/?code=Mzk4ZjlhZjYzMmJkMjc4Mjg1NmNmOTYzZTZmMTVhMjFfQlZzcm1kYWtLTnNTbmpoS0o4Tkx0MEdTU0l5UWU0T2ZfVG9rZW46Ym94Y240Q0UwUUV3ZHA0bU1aaXpwYmdQN0c5XzE3MjIyNTYyMTQ6MTcyMjI1OTgxNF9WNA)

8. 标准模型和IE模型的区别
    
9. 计算宽度和高度的不同 标准盒模型：盒子总宽度/高度 = `width/height + padding + border + margin`。（ 即 width/height 只是 内容高度，不包含 padding 和 border 值 ） IE盒子模型：盒子总宽度/高度 = `width/height + margin = (内容区宽度/高度 + padding + border) + margin`。（ 即 width/height 包含了 padding 和 border 值 ）
    
10. CSS如何设置这两种模型
    
11. 标准：`box-sizing: content-box;` ( 浏览器默认设置 ) IE： `box-sizing: border-box;`
    
12. JS如何获取盒模型对应的宽和高
    
13. （1）`dom.style.width/height` 只能取到行内样式的宽和高，style 标签中和 link 外链的样式取不到。 （2）`dom.currentStyle.width/height` （只有IE兼容）取到的是最终渲染后的宽和高 （3）`window.getComputedStyle(dom).width/height` 同（2）但是多浏览器支持，IE9 以上支持。 （4）`dom.getBoundingClientRect().width/height` 也是得到渲染后的宽和高，大多浏览器支持。IE9 以上支持，除此外还可以取到相对于视窗的上下左右的距离。 （6）`dom.offsetWidth/offsetHeight` 包括高度（宽度）、内边距和边框，不包括外边距。最常用，兼容性最好。
    

#### 6 BFC（边距重叠解决方案）

##### 1 BFC基本概念

**BFC: 块级格式化上下文** BFC基本概念：`BFC` 是 `CSS` 布局的一个概念，是一块独立的渲染区域，是一个环境，里面的元素不会影响到外部的元素 。 父子元素和兄弟元素边距重叠，重叠原则取最大值。空元素的边距重叠是取 `margin` 与 padding 的最大值。

##### 2 BFC原理（渲染规则|布局规则）：

（1）内部的 `Box` 会在垂直方向，从顶部开始一个接着一个地放置；

（2）`Box` 垂直方向的距离由 `margin` (外边距)决定，属于同一个 `BFC` 的两个相邻 `Box` 的 `margin` 会发生重叠；

（3）每个元素的 `margin Box` 的左边， 与包含块 `border Box` 的左边相接触，（对于从左到右的格式化，否则相反）。即使存在浮动也是如此；

（4）BFC 在页面上是一个隔离的独立容器，外面的元素不会影响里面的元素，反之亦然。文字环绕效果，设置 `float`；

（5）BFC 的区域不会与 `float Box` 重叠（清浮动）;

（6）计算 `BFC` 的高度时，浮动元素也参与计算。

##### 3 CSS在什么情况下会创建出BFC（即脱离文档流）

0、根元素，即 HTML 元素（最大的一个 `BFC`） 1、浮动（ `float 的值不为 none` ） 2、绝对定位元素（ `position 的值为 absolute 或 fixed` ） 3、行内块（ `display 为 inline-block` ） 4、表格单元（ `display 为 table、table-cell、table-caption、inline-block 等 HTML 表格相关的属性` ) 5、弹性盒（ `display 为 flex 或 inline-flex` ） 6、默认值。内容不会被修剪，会呈现在元素框之外（`overflow 不为 visible`）

##### 4 BFC作用（使用场景）

1、自适应两（三）栏布局（避免多列布局由于宽度计算四舍五入而自动换行） 2、避免元素被浮动元素覆盖 3、可以让父元素的高度包含子浮动元素，清除内部浮动（原理：触发父 `div` 的 `BFC` 属性，使下面的子 `div` 都处在父 `div`的同一个 `BFC` 区域之内） 4、去除边距重叠现象，分属于不同的 `BFC` 时，可以阻止 `margin` 重叠

#### 7 IFC

##### 1 IFC基本概念

**IFC: 行内格式化上下文** IFC基本概念：

![](https://a1j6nbrw76.feishu.cn/space/api/box/stream/download/asynccode/?code=MTlkMjVkNGVlZTA1MzM5NDEwYWRiYTcyMDJmOGQ2NDFfQWt1cGpSNjhrUThmNzJTc3lpRnZJTWJUSEZMRVZPTUlfVG9rZW46Ym94Y25sbmpybUI4R1JvaHExQ2NiVFFHOHNmXzE3MjIyNTYyMTQ6MTcyMjI1OTgxNF9WNA)

##### 2 IFC原理（渲染规则|布局规则）：

（1）内部的 `Box` 会在水平方向，从含块的顶部开始一个接着一个地放置； （2）这些 `Box` 之间的水平方向的 `margin`，`border` 和`padding` 都有效； （3）`Box` 垂直对齐方式：以它们的底部、顶部对齐，或以它们里面的文本的基线（`baseline`）对齐（默认， 文本与图片对其），例：`line-heigth` 与 `vertical-align`。

#### 8 样式优先级

**参考答案**：

样式类型

样式类型分为三类

14. 行间
    

```XML
<h1 style="font-size:12px;color:#000;">我的行间CSS样式。</h1>
```

15. 内联
    

```XML
<style type="text/css">
   h1{font-size:12px;      color:#000;      }
</style>
```

16. 外部
    

```XML
<link rel="stylesheet" href="css/style.css">
```

选择器类型

- 1、ID　　#id
    
- 2、class　　.class
    
- 3、标签　　p
    
- 4、通用　　*
    
- 5、属性　　[type="text"]
    
- 6、伪类　　:hover
    
- 7、伪元素　　::first-line
    
- 8、子选择器、相邻选择器
    

权重计算规则

第一等：代表内联样式，如: style=””，权值为1000。 第二等：代表ID选择器，如：#content，权值为0100。 第三等：代表类，伪类和属性选择器，如.content，权值为0010。 第四等：代表类型选择器和伪元素选择器，如div p，权值为0001。 通配符、子选择器、相邻选择器等的。如*、>、+,权值为0000。 继承的样式没有权值。

比较规则

遵循如下法则：

- 选择器都有一个权值，权值越大越优先；
    
- 当权值相等时，后出现的样式表设置要优于先出现的样式表设置；
    
- 创作者的规则高于浏览者：即网页编写者设置的 CSS 样式的优先权高于浏览器所设置的样式；
    
- 继承的 CSS 样式不如后来指定的 CSS 样式；
    
- 在同一组属性设置中标有!important规则的优先级最大
    
- 通配符、子选择器、相邻选择器等的。虽然权值为0000，但是也比继承的样式优先。
    

！important

17. !important 的作用是提升优先级，换句话说。加了这句的样式的优先级是最高的（比内联样式的优先级还高)。
    

```XML
<style> 
p{    color:red !important;} 
</style>
<p style="color:blue;">我显示红色</p>
```

18. ie7+和别的浏览器对important的这种作用的支持度都很好。只有ie6有些bug
    

```C++
p{
      color:red !important;
      color:blue;    
 }//会显示blue
```

但是这并不说明ie6不支持important，只是支持上有些bug。看下面

```C++
p{
     color:red !important;  
}
p{
    color:blue;  
} //这样就会显示的是red。说明ie6还是支持important的。</pre>
```

#### 9 盒子塌陷是什么？

**参考答案：**

**盒子塌陷**

本应该在父盒子内部的元素跑到了外部。

**关于盒子塌陷的几种解决方法**

（1）最简单，直接，粗暴的方法就是盒子大小写死，给每个盒子设**定固定的width和height**，直到合适为止，这样的好处是简单方便，兼容性好，适合只改动少量内容不涉及盒子排布的版面。缺点是非自适应，浏览器的窗口大小直接影响用户体验。

（2）给外部的父盒子也添加浮动，让其也脱离标准文档流，这种方法方便，但是对页面的布局不是很友好，不易维护。

（3）给父盒子添加overflow属性。

overflow:auto; 有可能出现滚动条，影响美观。

overflow:hidden; 可能会带来内容不可见的问题。

（4）父盒子里最下方引入清除浮动块。最简单的有：

```HTML
    <br style="clear:both;"/>
```

有很多人是这么解决的，但是我们并不推荐，因为其引入了不必要的冗余元素 。

(5)用after伪元素清除浮动

给外部盒子的after伪元素设置clear属性，再隐藏它

这其实是对空盒子方案的改进，一种纯CSS的解决方案，不用引入冗余元素。

```CSS
.clearfix {*zoom: 1;}

.clearfix:before,.clearfix:after {

display: table;

line-height: 0;

content: "";

}

.clearfix:after {clear: both;}
```

这也是bootstrap框架采用的清除浮动的方法。

这是一种纯CSS的解决浮动造成盒子塌陷方法，没有引入任何冗余元素，推荐使用此方法来解决CSS盒子塌陷。

备注：第五种方法虽好，但是低版本IE不兼容，具体选择哪种解决方法，可根据实际情况决定。

(6) 给父盒子添加border

(7) 给父盒子设置padding-top

#### 10 为什么会出现盒子塌陷？

**参考答案**：

当父元素没设置足够大小的时候，而子元素设置了浮动的属性，子元素就会跳出父元素的边界（脱离文档流），尤其是当父元素的高度为auto时，而父元素中又没有其它非浮动的可见元素时，父盒子的高度就会直接塌陷为零， 我们称这是**CSS高度塌陷**。

#### 11 css 伪类与伪元素区别

**参考答案**：

19. 伪类(pseudo-classes)
    

- 其核⼼就是⽤来选择DOM树之外的信息,不能够被普通选择器选择的⽂档之外的元素，⽤来添加⼀些选择器的特殊效果。
    
- ⽐如:hover :active :visited :link :visited :first-child :focus :lang等
    
- 由于状态的变化是⾮静态的，所以元素达到⼀个特定状态时，它可能得到⼀个伪类的样式；当状态改变时，它⼜会失去这个样式。
    
- 由此可以看出，它的功能和class有些类似，但它是基于⽂档之外的抽象，所以叫 伪类。
    

20. 伪元素(Pseudo-elements)
    

- DOM树没有定义的虚拟元素
    
- 核⼼就是需要创建通常不存在于⽂档中的元素，
    
- ⽐如::before ::after 它选择的是元素指定内容，表示选择元素内容的之前内容或之后内容。
    
- 伪元素控制的内容和元素是没有差别的，但是它本身只是基于元素的抽象，并不存在于⽂档中，所以称为伪元素。⽤于将特殊的效果添加到某些选择器
    

21. 伪类与伪元素的区别
    

- 表示⽅法
    
    - CSS2 中伪类、伪元素都是以单冒号:表示,
        
    - CSS2.1 后规定伪类⽤单冒号表示,伪元素⽤双冒号::表示，
        
    - 浏览器同样接受 CSS2 时代已经存在的伪元素(:before, :after, :first�line, :first-letter 等)的单冒号写法。
        
    - CSS2 之后所有新增的伪元素(如::selection)，应该采⽤双冒号的写法。
        
    - CSS3中，伪类与伪元素在语法上也有所区别，伪元素修改为以::开头。浏览器对以:开头的伪元素也继续⽀持，但建议规范书写为::开头
        
- 定义不同
    
    - 伪类即假的类，可以添加类来达到效果
        
    - 伪元素即假元素，需要通过添加元素才能达到效果
        
- 总结:
    
    - 伪类和伪元素都是⽤来表示⽂档树以外的"元素"。
        
    - 伪类和伪元素分别⽤单冒号:和双冒号::来表示。
        
    - 伪类和伪元素的区别，关键点在于如果没有伪元素(或伪类)，
        
    - 是否需要添加元素才能达到效果，如果是则是伪元素，反之则是伪类
        
    - 伪类和伪元素都不出现在源⽂件和DOM树中。也就是说在html源⽂件中是看不到伪类和伪元素的。
        
    - 伪类其实就是基于普通DOM元素⽽产⽣的不同状态，他是DOM元素的某⼀特征。
        
    - 伪元素能够创建在DOM树中不存在的抽象对象，⽽且这些抽象对象是能够访问到的。
        

#### 12 行内元素的margin 和 padding

**参考答案：**

- 水平方向：水平方向上，都有效；
    
- 垂直方向：垂直方向上，都无效；（`padding-top` 和 `padding-bottom` 会显示出效果，但是高度不会撑开，不会对周围元素有影响）
    

#### 13 min-width/max-width 和 min-height/max-height 属性间的覆盖规则？

**参考答案**：

22. max-width 会覆盖 width，即使 width 是行内样式或者设置了 !important。
    
23. min-width 会覆盖 max-width，此规则发生在 min-width 和 max-width 冲突的时候；
    

#### 14 浏览器是怎样解析CSS选择器的？

**参考答案**：

CSS选择器的解析是从右向左解析的。若从左向右的匹配，发现不符合规则，需要进行回溯，会损失很多性能。若从右向左匹配，先找到所有的最右节点，对于每一个节点，向上寻找其父节点直到找到根元素或满足条件的匹配规则，则结束这个分支的遍历。两种匹配规则的性能差别很大，是因为从右向左的匹配在第一步就筛选掉了大量的不符合条件的最右节点(叶子节点)，而从左向右的匹配规则的性能都浪费在了失败的查找上面。而在 CSS解析完毕后,需要将解析的结果与DOM Tree的内容-起进行分析建立-棵Render Tree，最终用来进行绘图。在建立Render Tree时(WebKit 中的「Attachment」过程)， 浏览器就要为每个DOM Tree中的元素根据CSS的解析结果(Style Rules)来确定生成怎样的Render Tree。

### 布局

#### 1 未知高度元素垂直居中、垂直居中的实现方式有哪些？

**参考答案：**

**1、绝对定位+css3 transform:translate(-50%，-50%)**

```CSS
.wrap{
  position:relative;
}
.child{
  position: absolute;
  top:50%;
  left:50%;
  -webkit-transform:translate(-50%,-50%);
}
```

**2、css3 的flex布局**

```CSS
.wrap{
  display:flex;
  justify-content:center;
}
.child{
  align-self:center;
}
```

**3、table布局**

```CSS
<div class="wrap">   <div class="child">          <div>sadgsdgasgd</div>   </div></div>.wrap{
  display:table;
  text-align:center;
}
.child{
  background:#ccc;
  display:table-cell;
  vertical-align:middle;
}
.child div{
    width:300px;
    height:150px;
    background:red;
    margin:0 auto;
}
```

#### 2 实现图片垂直居中

**参考答案：**

**1. 使用flex实现图片垂直居中**

利用 display: flex;align-items: center 实现垂直居中。flex可能不是实现垂直居中最好的选择，因为IE8,9并不支持它。

html代码：

```HTML
<div class="flexbox">
    <img src="1.jpg" alt=""></div>
```

css代码：

```CSS
body{ background:#999}
.flexbox{width: 300px;height: 250px;background:#fff;display: flex;align-items: center}
.flexbox img{width: 100px;height: 100px;align-items: center;}
```

**2. 利用Display: table;实现img图片垂直居中**

给最外层的div设置display属性为table;img的父元素div设置display:table-cell,vertical-align: middle;如果你也想实现水平居中，你可以给最外层的div元素添加text-align: center属性

html代码：

```HTML
<div class="tablebox">
    <div id="imgbox">
        <img src="1.jpg" alt="">
    </div></div>
```

css代码：

```CSS
.tablebox{width: 300px;height: 250px;background: #fff;display: table}
#imgbox{display: table-cell;vertical-align: middle;}
#imgbox img{width: 100px}
```

**3. 用绝对定位实现垂直居中（推荐-兼容性好）**

1. 给img的父元素添加相对定位属性（position: relative），同时，要给子元素也就是图片img元素添加绝对定位属性（position: absolute）。
    
2. 将图片元素的top属性设置为50%。
    
3. 现在我们需要给img元素设置一个负的margin-top值，这个值为你想要实现垂直居中的元素高度的一半，*如果不确定元素的高度，可以不使用margin-top，而是使用transform:translateY(-50%);属性。
    
4. 记住：如果你想要同时实现水平居中，那么你可以用实现垂直居中的一样的技巧来实现。
    
5. HTML代码：
    

```HTML
<div class="posdiv">
<img src="1.jpg" alt=""></div>
```

6. css代码：
    

```CSS
body{background: #ccc;}
.posdiv{width: 300px;height: 250px;background: #fff;position: relative; margin:0 auto}
.posdiv img{width: 100px;position: absolute;top: 50%;margin-top: -50px;}
```

#### 3 设置斑马线表格(纯css)

**参考答案：**

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <title>斑马线表格</title>
 <style type="text/css">
 *{  margin: 0;  padding: 0;  /*清处浏览器默认设置*/
 } table{  /*表格的外边距和大小*/
  margin: 10px 0 0 0;  width: 100%;  border-spacing: 0;  border-collapse: collapse;  /*collapse 表格单元格边框合并    border-spacing 表格单元格间距为零  */
 } caption{  font: 30px "楷体";  padding: 5px;  /*表格标题*/
 } td{  width: 32%;  height: 50px;  /*单元格大小*/
 } tbody td{   border: 1px solid;   /*表格主体的边框*/
 } thead{  background-color: #A2A5A7;  /*表格头部*/
 } tr:hover{  background-color: #66D9EF;  cursor: pointer;  /*鼠标悬停在表格上时，表格的背景和鼠标的形状*/
 } table tbody tr:nth-child(even){  background-color: #8F908A;  box-shadow: inset 0 5px rgba(255,255,255,0.5);  /*even为偶数行 odd为奇数行    设置表格的主体部分偶数行的样式    shadow 阴影  inset将外部阴影改为内部阴影  */
 } thead tr th:first-child
 {  /*表头部分th 第一个th左上角设置圆角*/
  border-radius: 15px 0 0 0; } thead tr td:last-child{  /*最后一个单元格右上角设置圆角*/
  border-radius: 0 15px 0 0; } </style>
</head>
<body>
 <table>
 <caption>斑马线表格</caption>
 <thead>
  <tr>
   <th></th>
   <td></td>
   <td></td>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td></td>
   <td></td>
   <td></td>
  </tr>
  <tr>
   <td></td>
   <td></td>
   <td></td>
  </tr>
  <tr>
   <td></td>
   <td></td>
   <td></td>
  </tr>
  <tr>
   <td></td>
   <td></td>
   <td></td>
  </tr>
  <tr>
   <td></td>
   <td></td>
   <td></td>
  </tr>
  <tr>
   <td></td>
   <td></td>
   <td></td>
  </tr>
 </tbody>
  <tfoot>
   <tr>
    <td></td>
    <td></td>
    <td></td>
   </tr>
  </tfoot>
 </table>
</body>
</html>
```

#### 4 文本元素如何居中

**参考答案：**

7. CSS设置文字水平居中
    
8. 在CSS中可以使用text-align属性来设置文字水平居中。该属性规定元素中的文本的水平对齐方式，通过使用center值设置文本居中。
    
9. text-align是一个基本的属性，它会影响一个元素中的文本行互相间的对齐方式。值left、right和center会导致元素中的文本分别左对齐、右对齐和居中，想要使文本居中，直接使用center即可。
    
10. 该属性设置文本和img标签等一些内联对象（或与之类似的元素）的居中。
    
11. 该属性有如下几个特点：
    
12. 1）text-align的center应用在一个容器上，它只针对容器里面的文字以及容器里面的display为inline或者inline-block的容器，如果里面的容器display为block，则里面的容器的内容不会居中。
    
13. 2）text-align具有向下传递性，会不断地向子元素传递。如果设置一个div，则其子div中的内容也会居中。
    

```HTML
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>css 水平居中</title>
  <style>
    .box {       width: 400px;       height: 100px;       background: pink;       text-align:center;     }   </style>
</head>
<body>
  <div class="box">css 水平居中了--文本文字</div>
</body>

</html>
```

14. CSS设置字体垂直居中
    
15. 2.1 单行文字垂直居中
    
16. 对于单行文本，我们只需要将文本行高(line-height属性)和所在区域高度(height)设置一致就可以了
    

```HTML
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>css 垂直居中</title>
  <style>
    .box {       width: 300px;       height: 300px;       background: paleturquoise;       line-height:300px;     }   </style>
</head>
<body>
  <div class="box">css 垂直居中了--文本文字</div>
</body>
</html>
```

17. 2.2 多行文本垂直居中
    
18. 说明：多行文本垂直居中分为两种情况，一个是父级元素高度不固定，随着内容变化；另一个是父级元素高度固定。
    
19. \1) 父级元素高度不固定
    
20. 父级高度不固定的时，高度只能通过内部文本来撑开。所以，我们可以通过设置内填充（padding）的值来使文本看起来垂直居中，只需设置padding-top和padding-bottom的值相等：
    

```HTML
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>css 垂直居中</title>
  <style>
    .box {       width: 300px;       margin: 50px auto;       background: paleturquoise;       padding: 50px 20px;     }   </style>
</head>
<body>
  <div class="box">css 垂直居中了--文本文字,文本文字,文本文字,文本文字,文本文字,文本文字</div>
</body>
</html>
```

\2) 父级元素高度固定

使用vertical-align:middle +display:table-cell 使文字垂直居中

```HTML
   <!DOCTYPE html>
   <html>
    <head>
      <meta charset="UTF-8">
      <title>css 垂直居中</title>
      <style>
        .box {          width: 300px;          height: 300px;          background: paleturquoise;          vertical-align:middle;          display:table-cell;        }      </style>

    </head>

    <body>

      <div class="box">css 垂直居中了--文本文字,文本文字,文本文字,文本文字,文本文字,文本文字。</div>

    </body>

   </html>
```

说明：vertical-align:middle +display:table-cell能够使单行文字、多行文字都居中。但是因为 table-cell 是 inline 类型，所以会导致原来的块级元素每个 div 一行移动到了同一行。如果需要分列两行，需要在外面额外添加容器对位置进行控制。

#### 5 用flex实现九宫格讲思路

**参考答案：**

利用了padding-top和flex-wrap:wrap，当设置background-color时，是包括盒子模型中的content和padding的，但是为什么不设置height呢？因为父元素没有高度，所以定义height:30%是没有用的，且若想每个block都为正方形，最好的方式就是设置padding-top/padding-bottom：a%，因为此时的百分比是父元素宽度的百分比，而width也为父元素宽度的百分比，所以block可以成为正方形。

```HTML
<!DOCTYPE html>
<html>
<style>
.block {    padding-top: 30%;    margin-top: 3%;    border-radius: 10%;    background-color: orange;    width: 30%;}
.container-flex2  {    display: flex;    flex-wrap: wrap;    justify-content: space-around;}
</style>
<body>
   <div class="container-flex2">
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
    </div>
</body>
</html>
```

#### 6 CSS实现一个等腰三角形

**参考答案**：

主要是通过把宽高设置成0，边框宽度设置宽一些，设置其中三个边透明，只留一个边显示

等边三角形是特殊的等腰三角形，它的三条边都相等，顶角为60度，而高是边长的3^(1/2)/2倍，约等于0.866……假设底为160px，则高约为138.56px，因此要做边长为160px的等边三角形，可以这么做：

```HTML
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>测试</title>
  <style type="text/css">
    div {       width:0px;height:0px;margin:100px auto;       border-left:80px solid transparent;        border-right:80px solid transparent;        border-bottom:138.56px solid #A962CE; /*--三角形的高--*/
    }  </style>
</head>
<body>
  <div>
  </div>
</body>
</html>
```

**扩展：**

用CSS实现一个等边三角形：

根据各个边之间的长度关系，我们易知：需要展示的边框的宽度：相邻的透明的边框的宽度 = √3 ：1

```CSS
.triangle{
  width: 0px;
  height: 0px;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;;
  border-top: 17.32px solid transparent;
  border-bottom: 17.32px solid red; 
}
```

#### 7 实现扇形、圆形

**参考答案**：

圆形：

border-radius圆角的四个值按顺序取值分别为：左上、右上、右下、左下。这里只设置一个值，代表四个角的取值都为为50%

原理：border-radius: 50% 弯曲元素的边框以创建圆。 由于圆在任何给定点具有相同的半径，故宽和高都需要保证一样的值，不同的值将创建椭圆。

```HTML
<div class="circle"></div>
<style>
  .circle {     border-radius: 50%;     width: 80px;     height: 80px;      background: #666;  }
</style>
```

扇形：

21. 利用border-radius，实现90度角的扇形：
    
22. 原理：
    
23. 左上角是圆角，其余三个角都是直角：左上角的值为宽和高一样的值，其他三个角的值不变（等于0）。
    

```HTML
<div class="sector"></div>
<style>
.sector{  border-radius:80px 0 0;  width: 80px;  height: 80px;  background: #666;}</style>
```

24. 绘制任意角度的扇形
    

```HTML
<div class="shanxing shanxing1">
    <div class="sx1"></div>
     <div class="sx2"></div>
</div>
<!--*绘制一个85度扇形*/--p>
<div class="shanxing shanxing2">    <div class="sx1"></div>     <div class="sx2"></div></div>
<!--*绘制一个向右扇形，90度扇形*-->
<div class="shanxing shanxing3">
    <div class="sx1"></div>
     <div class="sx2"></div>
</div>
<!--*绘制一个颜色扇形 */--p>
<div class="shanxing shanxing4">    <div class="sx1"></div>     <div class="sx2"></div></div>
<!--/*绘制一个不同颜色半圆夹角 */-->
<div class="shanxing shanxing5">
    <div class="sx1"></div>
     <div class="sx2"></div>
</div>
<style>
.shanxing{    position: relative;    width: 200px;    height: 200px;    border-radius: 100px;    background-color: yellow;}

.sx1{    position: absolute;    width: 200px;    height: 200px;    transform: rotate(0deg);    clip: rect(0px,100px,200px,0px); /*这个clip属性用来绘制半圆，在clip的rect范围内的内容显示出来，使用clip属性，元素必须是absolute的 */
    border-radius: 100px;    background-color: #f00;    /*-webkit-animation: an1 2s infinite linear; */
}

.sx2{    position: absolute;    width: 200px;    height: 200px;    transform: rotate(0deg);    clip: rect(0px,100px,200px,0px);    border-radius: 100px;    background-color: #f00;    /*-webkit-animation: an2 2s infinite linear;*/
}

/*绘制一个60度扇形*/
.shanxing1 .sx1{transform: rotate(-30deg);}
.shanxing1 .sx2{transform: rotate(-150deg);}

/*绘制一个85度扇形*/
.shanxing2 .sx1{transform: rotate(-45deg);}
.shanxing2 .sx2{transform: rotate(-140deg);}

/*绘制一个向右扇形，90度扇形*/
.shanxing3 .sx1{transform: rotate(45deg);}
.shanxing3 .sx2{transform: rotate(-45deg);}

/*绘制一个颜色扇形 */
.shanxing4 .sx1{transform: rotate(45deg);background-color: #fff;}
.shanxing4 .sx2{transform: rotate(-45deg);background-color: #fff;}

/*绘制一个不同颜色半圆夹角 */
.shanxing5 .sx1{transform: rotate(45deg);background-color: #f00;}
.shanxing5 .sx2{transform: rotate(-45deg);background-color: #0f0;       
</style>
```

#### 8 旋转45度

**参考答案**：

CSS中使用**rotate**方法来实现对元素的旋转，在参数中加入角度值，旋转方式为顺时针旋转。

```HTML
<!DOCTYPE html>
 2 <html>
 3     <head>
 4         <meta charset="utf-8" />
 5         <title>Transform旋转</title>
 6         <style>
 7         div {
 8             width: 300px;
 9             margin: 150px auto;
10             background-color: yellow;
11             text-align: center;
12             -webkit-transform: rotate(45deg);    /* for Chrome || Safari */
13             -moz-transform: rotate(45deg);       /* for Firefox */
14             -ms-transform: rotate(45deg);        /* for IE */
15             -o-transform: rotate(45deg);         /* for Opera */
16         }
17         </style>
18     </head>
19     <body>
20         <div>黄色div</div>
21     </body>
22 </html>
```

#### 9 画 0.5px 的直线

**参考答案**：

25. 使用scale缩放
    

```XML
<style>
.hr.scale-half {    height: 1px;    transform: scaleY(0.5);}
</style>
    <p>1px + scaleY(0.5)</p>
    <div class="hr scale-half"></div>
```

![](https://a1j6nbrw76.feishu.cn/space/api/box/stream/download/asynccode/?code=OGVlYjE1ZmVlMWYyNmFmMjM2MTAyZmJkMTRkNjJiZTJfNWJER2hCNnhzbTN0WDJPQmhtNVVDUFJydDVpRmRURFRfVG9rZW46Ym94Y25mUTFkdmZzSUxBMmthdnRabVI2ckNmXzE3MjIyNTYyMTQ6MTcyMjI1OTgxNF9WNA)

Chrome/Safari都变虚了，只有Firefox比较完美看起来是实的而且还很细，效果和直接设置0.5px一样。所以通过transform: scale会导致Chrome变虚了，而粗细几乎没有变化。但是如果加上transform-origin: 50% 100%：

```CSS
.hr.scale-half {
    height: 1px;
    transform: scaleY(0.5);
    transform-origin: 50% 100%;
}
```

chrome现在的效果如下

![](https://a1j6nbrw76.feishu.cn/space/api/box/stream/download/asynccode/?code=ZTE1YWNjMTE3YWExOWU5ZDYxNWI3ODE0NGZhNzA5YzBfdHZnUUZHNnQ2alY5TGxhQW9PQ0R6NlRrQnNzSThhMllfVG9rZW46Ym94Y25HNXZ0MFA3ZzNuRlVodVJ5dVp0a0VkXzE3MjIyNTYyMTQ6MTcyMjI1OTgxNF9WNA)

26. 线性渐变linear-gradient
    

```XML
<style>
.hr.gradient {    height: 1px;    background: linear-gradient(0deg, #fff, #000);}
</style>
<p>linear-gradient(0deg, #fff, #000)</p>
<div class="hr gradient"></div>
```

![](https://a1j6nbrw76.feishu.cn/space/api/box/stream/download/asynccode/?code=YWJlZGViMWI5Mjc0ZDg2MjdkYTIzYzc4NmQ3Yjc1MTdfSVNUdDJXcGs5TTBhQVl2bWFDV3pVMUxNMzFsSmEydVZfVG9rZW46Ym94Y25NOEpnYklzekk0cUtOQWFCOGZPT1BiXzE3MjIyNTYyMTQ6MTcyMjI1OTgxNF9WNA)

inear-gradient(0deg, #fff, #000)的意思是：渐变的角度从下往上，从白色#fff渐变到黑色#000，而且是线性的，在高清屏上，1px的逻辑像素代表的物理（设备）像素有2px，由于是线性渐变，所以第1个px只能是#fff，而剩下的那个像素只能是#000，这样就达到了画一半的目的。

27. boxshadow
    

```XML
<style>
.hr.boxshadow {    height: 1px;    background: none;    box-shadow: 0 0.5px 0 #000;}
</style>
<p>box-shadow: 0 0.5px 0 #000</p>
<div class="hr boxshadow"></div>
```

28. viewport
    

```XML
<meta name="viewport" content="width=device-width,initial-sacle=0.5">
```

其中width=device-width表示将viewport视窗的宽度调整为设备的宽度，这个宽度通常是指物理上宽度。默认的缩放比例为1时，如iphone 6竖屏的宽度为750px，它的dpr=2，用2px表示1px，这样设置之后viewport的宽度就变成375px。但是我们可以改成0.5，viewport的宽度就是原本的750px，所以1个px还是1px，正常画就行，但这样也意味着UI需要按2倍图的出，整体面面的单位都会放大一倍。

#### 10 css 切换主题

**参考答案**：

方式一：主题层

这应该是实现主题功能的一种最常用的手段了。首先，我们的站点会有一个最初的基础样式（或者叫默认样式）；然后通过添加一些后续的额外的CSS来覆盖与重新定义部分样式。

具体实现

首先，我们引入基础的样式 `components.*` 文件

```CSS
@import "components.tabs";
@import "components.buttons"
```

其中 `components.tabs` 文件内容如下

```CSS
.tab {
    margin: 0;
    padding: 0;
    background-color: gray;
}
```

然后，假设我们的某个主题的样式文件存放于 `theme.*` 文件：

对应于 `components.tabs`，`theme.tabs` 文件内容如下

```CSS
.tab {
    background-color: red;
}
```

因此，我们只需要引入主题样式文件即可

```CSS
@import "components.tabs";
@import "components.buttons"

@import "theme.tabs";
```

这样当前的样式就变为了

```CSS
.tab {
    margin: 0;
    padding: 0;
    /* background-color: gray; */
    background-color: red;
}
```

优点

- 实现方式简单
    
- 可以实现将主题应用与所有元素
    

缺点

- 过多的冗余代码
    
- 许多的CSS其实是无用的，浪费了带宽
    
- 把样式文件切分到许多文件中，更加琐碎
    

---

方式二：有状态的主题

该方式可以实现基于条件选择不同的主题皮肤，并允许用户在客户端随时切换主题。非常适合需要客户端样式切换功能，或者需要对站点某一部分（区域）进行独立样式设置的场景。

具体实现

还是类似上一节中 Tab 的这个例子，我们可以将 Tab 部分的 (S)CSS 改为如下形式：

```CSS
.tab {
    background-color: gray;

    .t-red & {
        background-color: red;
    }

    .t-blue & {
        background-color: blue;
    }
}
```

这里我们把`.t-red`与`.t-blue`称为 Tab 元素的上下文环境（context）。Tab 元素会根据 context 的不同展示出不同的样式。

最后我们给`body`元素加上这个开关

```HTML
<body class="t-red">
    <ul class="tabs">...</ul>
</body>
```

此时 Tab 的颜色为红色。

当我们将`t-red`改为`t-blue`时，Tab 就变为了蓝色主题。

进一步的，我们可以创建一些 (S)CSS 的 util class（工具类）来专门控制一些 CSS 属性，帮助我们更好地控制主题。例如我们使用如下的`.u-color-current`类来控制不同主题下的字体颜色

```CSS
.u-color-current {
    .t-red & {
        color: red;
    }

    .t-blue & {
        color: blue;
    }
}
```

这样，当我们在不同主题上下文环境下使用`.u-color-current`时，就可以控制元素展示出不同主题的字体颜色

```HTML
<body class="t-red">
    <h1 class="page-title u-color-current">...</h1>
</body>
```

上面这段代码会控制`<h1>`元素字体颜色为红色主题时的颜色。

优点

- 将许多主题放在了同一处代码中
    
- 非常适合主题切换的功能
    
- 非常适合站点局部的主题化
    
- 可以实现将主题应用于所有元素
    

缺点

- 有时有点也是缺点，将许多主题混杂在了同一块代码中
    
- 可能会存在冗余
    

---

方式三：配置主题

这种方式其实是在开发侧来实现主题样式的区分与切换的。基于不同的配置，配合一些开发的自动化工具，我们可以在开发时期根据配置文件，编译生成不同主题的 CSS 文件。

它一般会结合使用一些 CSS 预处理器，可以对不同的 UI 元素进行主题分离，并且向客户端直接提供主题样式下最终的 CSS。

具体实现

我们还是以 Sass 为例：

首先会有一份 Sass 的配置文件，例如`settings.config.scss`，在这份配置中定义当前的主题值以及一些其他变量

```CSS
$theme: red;
```

然后对于一个 Tab 组件，我们这么来写它的 Sass 文件

```CSS
.tab {
    margin: 0;
    padding: 0;

    @if ($theme == red) {
        background-color: red;
    } @else {
        background-color: gray;
    }
}
```

这时，我们在其之前引入相应的配置文件后

```CSS
@import "settings.config";
@import "components.tabs";
```

Tab 组件就会呈现出红色主题。

当然，我们也可以把我们的`settings.config.scss`做的更健壮与易扩展一些

```CSS
$config: (
    theme: red,
    env: dev,
)

// 从$config中获取相应的配置变量
@function config($key) {
    @return map-get($config, $key);
}
```

与之前相比，这时候使用起来只需要进行一些小的修改，将直接使用`theme`变量改为调用`config`方法

```CSS
.tab {
    margin: 0;
    padding: 0;

    @if (config(theme) == red) {
        background-color: red;
    } @else {
        background-color: gray;
    }
}
```

优点

- 访问网站时，只会传输所需的 CSS，节省带宽
    
- 将主题的控制位置放在了一个地方（例如上例中的`settings.config.scss`文件）
    
- 可以实现将主题应用于所有元素
    

缺点

- 在 Sass 中会有非常多逻辑代码
    
- 只支持有限数量的主题
    
- 主题相关的信息会遍布代码库中
    
- 添加一个新主题会非常费劲
    

---

方式四：主题调色板

这种方式有些类似于我们绘图时，预设了一个调色板（palette），然后使用的颜色都从其中取出一样。

在实现主题功能时，我们也会有一个类似的“调色板”，其中定义了主题所需要的各种属性值，之后再将这些信息注入到项目中。

当你经常需要为客户端提供完全的定制化主题，并且经常希望更新或添加主题时，这种模式会是一个不错的选择。

具体实现

在方式三中，我们在一个独立的配置文件中设置了一些“环境”变量，来标示当前所处的主题。而在方式四中，我们会更进一步，抽取出一个专门的 palette 文件，用于存放不同主题的变量信息。

例如，现在我们有一个`settings.palette.red.scss`文件

```CSS
$color: red;
$color-tabs-background: $color-red;
```

然后我们的`components.tabs.scss`文件内容如下

```CSS
.tabs {
    margin: 0;
    padding: 0;
    backgroung-color: $color-tabs-background;
}
```

这时候，我们只需要引入这两个文件即可

```CSS
@import "settings.palette.red";
@import "components.tabs";
```

可以看到，`components.tabs.scss`中并没有关于主题的逻辑判断，我们只需要专注于编辑样式，剩下就是选择所需的主题调色板（palette）即可。

优点

- 编译出来的样式代码无冗余
    
- 非常适合做一些定制化主题，例如一个公司采购了你们的系统，你可以很方便实现一个该公司的主题
    
- 可以从一个文件中完全重制出你需要的主题样式
    

缺点

- 由于主要通过设定不同变量，所以代码确定后，能实现的修改范围会是有限的
    

---

方式五：用户定制化

这种模式一般会提供一个个性化配置与管理界面，让用户能自己定义页面的展示样式。

“用户定制化”在社交媒体产品、SaaS 平台或者是 Brandable Software 中最为常见。

具体实现

要实现定制化，可以结合方式二中提到的 util class。

首先，页面中支持自定义的元素会被预先添加 util class，例如 Tab 元素中的`u-user-color-background`

```HTML
<ul class="tabs u-user-color-background">...</ul>
```

此时，`u-user-color-background`还并未定义任何样式。而当用户输入了一个背景色时，我们会创建一个``标签，并将 hex 值注入其中

```HTML
<style id="my-custom">
    .u-user-color-background {        background-color: #00ffff;    }
</style>
```

这时用户就得到了一个红色的 Tab。

优点

- 不需要开发人员的输入信息（是用户定义的）
    
- 允许用户拥有自己“独一无二”的站点
    
- 非常实用
    

缺点

- 不需要开发人员的输入信息也意味着你需要处理更多的“不可控”情况
    
- 会有许多的冗余
    
- 会浪费 CSS 的带宽
    
- 失去部分 CSS 的浏览器缓存能力
    

#### 11 布局: 三栏布局(平均分布)

**参考答案：**

29. flex:1 : 设置父级弹性盒，子盒子三个各占1份
    

```HTML
<div class="Grid">
   <div class="Grid-cell">1/3</div>
   <div class="Grid-cell">1/3</div>
   <div class="Grid-cell">1/3</div>
 </div>
```

```CSS
.Grid {
 display: flex;
}

.Grid-cell {
 flex: 1;
 background: #eee;
 margin: 10px;
}
```

30. flex 百分比
    

```HTML
<div class="Grid">
   <div class="Grid-cell col3"></div>
   <div class="Grid-cell col3"></div>
   <div class="Grid-cell clo3"></div>
</div>
```

```CSS
.col3 {
 flex: 0 0 33.3%;
}
```

31. 流式布局
    

```HTML
<div class="Grid">
   <div class="Grid-cell col3"></div>
   <div class="Grid-cell col3"></div>
   <div class="Grid-cell clo3"></div>
</div>
```

```CSS
.col3 {
 width: 33.33%
}
```

#### 12 移动端 1px 问题

**参考答案**：

**问题**：1px 的边框，在高清屏下，移动端的1px 会很粗

**产生原因**

那么为什么会产生这个问题呢？主要是跟一个东西有关，DPR(devicePixelRatio) 设备像素比，它是默认缩放为100%的情况下，设备像素和CSS像素的比值。

```Plaintext
window.devicePixelRatio=物理像素 /CSS像素
复制代码
```

目前主流的屏幕DPR=2 （iPhone 8）,或者3 （iPhone 8 Plus）。拿2倍屏来说，设备的物理像素要实现1像素，而DPR=2，所以css 像素只能是 0.5。一般设计稿是按照750来设计的，它上面的1px是以750来参照的，而我们写css样式是以设备375为参照的，所以我们应该写的0.5px就好了啊！ 试过了就知道，iOS 8+系统支持，安卓系统不支持。

**解决方案**

32. WWDC对iOS统给出的方案
    
33. 在 WWDC大会上，给出来了1px方案，当写 0.5px的时候，就会显示一个物理像素宽度的 border，而不是一个css像素的 border。 所以在iOS下，你可以这样写。
    

```CSS
border:0.5px solid #E5E5E5
```

34. 可能你会问为什么在3倍屏下，不是0.3333px 这样的？经过测试，在Chrome上模拟iPhone 8Plus，发现小于0.46px的时候是显示不出来。
    
35. **总结：**
    
    1. 优点：简单，没有副作用
        
    2. 缺点：支持iOS 8+，不支持安卓。后期安卓follow就好了。
        
36. 使用边框图片
    

```CSS
border: 1px solid transparent;
border-image: url('./../../image/96.jpg') 2 repeat;
```

37. **总结：**
    
    1. 优点：没有副作用
        
    2. 缺点：border颜色变了就得重新制作图片；圆角会比较模糊。
        
38. 使用box-shadow实现
    

```CSS
box-shadow: 0  -1px 1px -1px #e5e5e5,   //上边线
           1px  0  1px -1px #e5e5e5,   //右边线
           0  1px  1px -1px #e5e5e5,   //下边线
           -1px 0  1px -1px #e5e5e5;   //左边线
```

39. **总结**
    
    1. 优点：使用简单，圆角也可以实现
        
    2. 缺点：模拟的实现方法，仔细看谁看不出来这是阴影不是边框。
        
40. 使用伪元素
    
41. 1条border
    

```CSS
.setOnePx{
 position: relative;
 &::after{
   position: absolute;
   content: '';
   background-color: #e5e5e5;
   display: block;
   width: 100%;
   height: 1px; /*no*/
   transform: scale(1, 0.5);
   top: 0;
   left: 0;
 }
}
```

42. 可以看到，将伪元素设置绝对定位，并且和父元素的左上角对齐，将width 设置100%，height设置为1px，然后进行在Y方向缩小`0.5倍`。
    
43. 4 条border
    

```CSS
.setBorderAll{
    position: relative;
      &:after{
          content:" ";
          position:absolute;
          top: 0;
          left: 0;
          width: 200%;
          height: 200%;
          transform: scale(0.5);
          transform-origin: left top;
          box-sizing: border-box;
          border: 1px solid #E5E5E5;
          border-radius: 4px;
     }
   }
```

44. 同样为伪元素设置绝对定位，并且和父元素左上角对其。将伪元素的长和宽先放大2倍，然后再设置一个边框，以左上角为中心，缩放到原来的`0.5倍`
    
45. **总结：**
    
    1. 优点：全机型兼容，实现了真正的1px，而且可以圆角。
        
    2. 缺点：暂用了after 伪元素，可能影响清除浮动。
        
46. 设置viewport的scale值
    
47. 这个解决方案是利用viewport+rem+js 实现的。
    

```HTML
<html>
 <head>
     <title>1px question</title>
     <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
     <meta name="viewport" id="WebViewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">        
     <style>
         html {              font-size: 1px;          }                      * {              padding: 0;              margin: 0;          }          .top_b {              border-bottom: 1px solid #E5E5E5;          }          .a,.b {                      box-sizing: border-box;              margin-top: 1rem;              padding: 1rem;                              font-size: 1.4rem;          }          .a {              width: 100%;          }          .b {              background: #f5f5f5;              width: 100%;          }      </style>
     <script>
         var viewport = document.querySelector("meta[name=viewport]");          //下面是根据设备像素设置viewport
         if (window.devicePixelRatio == 1) {              viewport.setAttribute('content', 'width=device-width,initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no');          }          if (window.devicePixelRatio == 2) {              viewport.setAttribute('content', 'width=device-width,initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, user-scalable=no');          }          if (window.devicePixelRatio == 3) {              viewport.setAttribute('content', 'width=device-width,initial-scale=0.3333333333333333, maximum-scale=0.3333333333333333, minimum-scale=0.3333333333333333, user-scalable=no');          }          var docEl = document.documentElement;          var fontsize = 32* (docEl.clientWidth / 750) + 'px';          docEl.style.fontSize = fontsize;      </script>
 </head>
 <body>
     <div class="top_b a">下面的底边宽度是虚拟1像素的</div>
     <div class="b">上面的边框宽度是虚拟1像素的</div>
 </body>
</html>
```

48. **总结**
    
    1. 优点：全机型兼容，直接写`1px`不能再方便
        
    2. 缺点：适用于新的项目，老项目可能改动大
        

#### 13 BFC

**参考答案**：

49. **简介**
    
50. 在解释BFC之前，先说一下文档流。我们常说的文档流其实分为**定位流**、**浮动流**、**普通流**三种。而普通流其实就是指BFC中的FC。FC(Formatting Context)，直译过来是格式化上下文，它是页面中的一块渲染区域，有一套渲染规则，决定了其子元素如何布局，以及和其他元素之间的关系和作用。常见的FC有BFC、IFC，还有GFC和FFC。
    
51. **BFC**(Block Formatting Context)块级格式化上下文，是用于布局块级盒子的一块渲染区域。[MDN上的解释](https://security.feishu.cn/link/safety?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FGuide%2FCSS%2FBlock_formatting_context&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)：BFC是Web页面 CSS 视觉渲染的一部分，用于决定块盒子的布局及浮动相互影响范围的一个区域。
    
52. 注意：一个BFC的范围包含创建该上下文元素的所有子元素，但**不包括**创建了新BFC的子元素的内部元素。这从另一方角度说明，一个元素不能同时存在于两个BFC中。因为如果一个元素能够同时处于两个BFC中，那么就意味着这个元素能与两个BFC中的元素发生作用，就违反了BFC的隔离作用。
    
53. **三种文档流的定位方案**
    
54. **常规流(Normal flow)**
    
    1. 在常规流中，盒一个接着一个排列;
        
    2. 在块级格式化上下文里面， 它们竖着排列；
        
    3. 在行内格式化上下文里面， 它们横着排列;
        
    4. 当position为static或relative，并且float为none时会触发常规流；
        
    5. 对于静态定位(static positioning)，position: static，盒的位置是常规流布局里的位置；
        
    6. 对于相对定位(relative positioning)，position: relative，盒偏移位置由top、bottom、left、right属性定义。即使有偏移，仍然保留原有的位置，其它常规流不能占用这个位置。
        
55. **浮动(Floats)**
    
    1. 左浮动元素尽量靠左、靠上，右浮动同理
        
    2. 这导致常规流环绕在它的周边，除非设置 clear 属性
        
    3. 浮动元素不会影响块级元素的布局
        
    4. 但浮动元素会影响行内元素的布局，让其围绕在自己周围，撑大父级元素，从而间接影响块级元素布局
        
    5. 最高点不会超过当前行的最高点、它前面的浮动元素的最高点
        
    6. 不超过它的包含块，除非元素本身已经比包含块更宽
        
    7. 行内元素出现在左浮动元素的右边和右浮动元素的左边，左浮动元素的左边和右浮动元素的右边是不会摆放浮动元素的
        
56. **绝对定位(Absolute positioning)**
    
    1. 绝对定位方案，盒从常规流中被移除，不影响常规流的布局；
        
    2. 它的定位相对于它的包含块，相关CSS属性：top、bottom、left、right；
        
    3. 如果元素的属性position为absolute或fixed，它是绝对定位元素；
        
    4. 对于position: absolute，元素定位将相对于上级元素中最近的一个relative、fixed、absolute，如果没有则相对于body；
        
57. **BFC触发方式**
    
58. 3.1 根元素，即HTML标签
    
59. 3.2 浮动元素：float值为`left`、`right`
    
60. 3.3 overflow值不为 visible，为 `auto`、`scroll`、`hidden`
    
61. 3.4 display值为 `inline-block`、`table-cell`、`table-caption`、`table`、`inline-table`、`flex`、`inline-flex`、`grid`、`inline-grid`
    
62. 3.5 定位元素：position值为 `absolute`、`fixed`
    
63. **注意：**display:table也可以生成BFC的原因在于Table会默认生成一个匿名的table-cell，是这个匿名的table-cell生成了BFC。
    
64. **约束规则**
    
65. 浏览器对BFC区域的约束规则：
    
    1. 生成BFC元素的子元素会一个接一个的放置。
        
    2. 垂直方向上他们的起点是一个包含块的顶部，两个相邻子元素之间的垂直距离取决于元素的margin特性。在BFC中相邻的块级元素的外边距会折叠(Mastering margin collapsing)
        
    3. 生成BFC元素的子元素中，每一个子元素左外边距与包含块的左边界相接触（对于从右到左的格式化，右外边距接触右边界），即使浮动元素也是如此（尽管子元素的内容区域会由于浮动而压缩），除非这个子元素也创建了一个新的BFC（如它自身也是一个浮动元素）。
        
66. 规则解读：
    
    1. 内部的Box会在垂直方向上一个接一个的放置
        
    2. 内部的Box垂直方向上的距离由margin决定。（完整的说法是：属于同一个BFC的两个相邻Box的margin会发生折叠，不同BFC不会发生折叠。）
        
    3. 每个元素的左外边距与包含块的左边界相接触（从左向右），即使浮动元素也是如此。（这说明BFC中子元素不会超出他的包含块，而position为absolute的元素可以超出他的包含块边界）
        
    4. BFC的区域不会与float的元素区域重叠
        
    5. 计算BFC的高度时，浮动子元素也参与计算
        
67. **作用**
    
68. BFC是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面元素，反之亦然。我们可以利用BFC的这个特性来做很多事。
    
69. 5.1 阻止元素被浮动元素覆盖
    
70. 一个正常文档流的block元素可能被一个float元素覆盖，挤占正常文档流，因此可以设置一个元素的float、 display、position值等方式触发BFC，以阻止被浮动盒子覆盖。
    
71. 5.2 可以包含浮动元素
    
72. 通过改变包含浮动子元素的父盒子的属性值，触发BFC，以此来包含子元素的浮动盒子。
    
73. 5.3 阻止因为浏览器因为四舍五入造成的多列布局换行的情况
    
74. 有时候因为多列布局采用小数点位的width导致因为浏览器因为四舍五入造成的换行的情况，可以在最后一 列触发BFC的形式来阻止换行的发生。比如下面栗子的特殊情况
    
75. 5.4 阻止相邻元素的margin合并
    
76. 属于同一个BFC的两个相邻块级子元素的上下margin会发生重叠，(设置writing-mode:tb-rl时，水平 margin会发生重叠)。所以当两个相邻块级子元素分属于不同的BFC时可以阻止margin重叠。 这里给任一个相邻块级盒子的外面包一个div，通过改变此div的属性使两个原盒子分属于两个不同的BFC，以此来阻止margin重叠。
    

#### 14 移动端适配方案

**参考答案：**

适配思路

设计稿（750*1334） ---> 开发 ---> 适配不同的手机屏幕，使其显得合理

原则

77. 开发时方便，写代码时设置的值要和标注的 160px 相关
    
78. 方案要适配大多数手机屏幕，并且无 BUG
    
79. 用户体验要好，页面看着没有不适感
    

思路

80. 写页面时，按照设计稿写固定宽度，最后再统一缩放处理，在不同手机上都能用
    
81. 按照设计稿的标准开发页面，在手机上部分内容根据屏幕宽度等比缩放，部分内容按需要变化，需要缩放的元素使用 rem, vw 相对单位，不需要缩放的使用 px
    
82. 固定尺寸+弹性布局，不需要缩放
    

**viewport 适配**

根据设计稿标准（750px 宽度）开发页面，写完后页面及元素自动缩小，适配 375 宽度的屏幕

在 head 里设置如下代码

```HTML
<meta name="viewport" content="width=750,initial-scale=0.5">
```

initial-scale = 屏幕的宽度 / 设计稿的宽度

为了适配其他屏幕，需要动态的设置 initial-scale 的值

```HTML
<head>
  <script>
    const WIDTH = 750
    const mobileAdapter = () => {      let scale = screen.width / WIDTH      let content = `width=${WIDTH}, initial-scale=${scale}, maximum-scale=${scale}, minimum-scale=${scale}`
      let meta = document.querySelector('meta[name=viewport]')      if (!meta) {        meta = document.createElement('meta')        meta.setAttribute('name', 'viewport')        document.head.appendChild(meta)      }      meta.setAttribute('content',content)    }    mobileAdapter()    window.onorientationchange = mobileAdapter //屏幕翻转时再次执行
  </script>
</head>
```

缺点就是边线问题，不同尺寸下，边线的粗细是不一样的（等比缩放后），全部元素都是等比缩放，实际显示效果可能不太好

**vw 适配（部分等比缩放）**

83. 开发者拿到设计稿（假设设计稿尺寸为750px，设计稿的元素标注是基于此宽度标注）
    
84. 开始开发，对设计稿的标注进行转换，把px换成vw。比如页面元素字体标注的大小是32px，换成vw为 (100/750)*32 vw
    
85. 对于需要等比缩放的元素，CSS使用转换后的单位
    
86. 对于不需要缩放的元素，比如边框阴影，使用固定单位px
    

关于换算，为了开发方便，利用自定义属性，CSS变量

```HTML
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1">
  <script>
    const WIDTH = 750
    //:root { --width: 0.133333 } 1像素等于多少 vw
    document.documentElement.style.setProperty('--width', (100 / WIDTH))   </script>
</head>
```

注意此时，meta 里就不要去设置缩放了

业务代码里就可以写

```CSS
header {
  font-size: calc(28vw * var(--width))
}
```

实现了按需缩放

**rem 适配**

87. 开发者拿到设计稿（假设设计稿尺寸为750px，设计稿的元素标是基于此宽度标注）
    
88. 开始开发，对设计稿的标注进行转换
    
89. 对于需要等比缩放的元素，CSS使用转换后的单位
    
90. 对于不需要缩放的元素，比如边框阴影，使用固定单位px
    

假设设计稿的某个字体大小是 40px, 手机屏幕上的字体大小应为 420/750*40 = 22.4px (体验好)，换算成 rem（相对于 html 根节点，假设 html 的 font-size = 100px,）则这个字体大小为 0.224 rem

写样式时，对应的字体设置为 0.224 rem 即可，其他元素尺寸也做换算...

但是有问题

举个 ，设计稿的标注 是40px，写页面时还得去做计算，很麻烦（全部都要计算）

能不能规定一下，看到 40px ,就应该写 40/100 = 0.4 rem,这样看到就知道写多少了（不用计算），此时的 html 的 font-size 就不能是 100px 了，应该为 (420*100)/750 = 56px，100为我们要规定的那个参数

根据不同屏幕宽度，设置 html 的 font-size 值

```HTML
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1">
  <script>
    const WIDTH = 750 //设计稿尺寸
    const setView = () => {      document.documentElement.style.fontSize = (100 * screen.width / WIDTH) + 'px'
    }    window.onorientationchange = setView    setView()  </script>
</head>
```

对于需要等比缩放的元素，CSS使用转换后的单位

```CSS
header {
  font-size: .28rem;
}
```

对于不需要缩放的元素，比如边框阴影，使用固定单位px

```CSS
header > span.active {
  color: #fff;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
}
```

假设 html 的 font size = 1px 的话，就可以写 28 rem 了，更方便了，但是浏览器对字体大小有限制，设为 1px 的话，在浏览器中是失效的，会以 12px（或者其他值） 做一个计算 , 就会得到一个很夸张的结果，所以可以把 html 写的大一些

使用 sass 库时

JS 处理还是一样的，但看着好看些

```CSS
@function px2rem($px) {
  @return $px * 1rem / 100;
}

header {
  font-size: px2rem(28);
}
```

以上的三种适配方案，都是等比缩放，放到 ipad 上时（设计稿以手机屏幕设计的），页面元素会很大很丑，有些场景下，并不需要页面整体缩放（viewport 自动处理的也很好了），所以有时只需要合理的布局即可。

**弹性盒适配（合理布局）**

```HTML
<meta name="viewport" content="width=device-width">
```

使用 flex 布局

```CSS
section {
  display: flex;
}
```

总结一下，什么样的页面需要做适配（等比缩放）呢

- 页面中的布局是栅格化的
    

换了屏幕后，到底有多宽多高很难去做设置，整体的都需要改变，所以需要整体的缩放

- 头屏大图，宽度自适应，高度固定的话，对于不同的屏幕，形状就会发生改变（放到ipad上就变成长条了），宽度变化后，高度也要保持等比例变化
    

以上所有的适配都是宽度的适配，但是在某些场景下，也会出现高度的适配

比如大屏，需要适配很多的电视尺寸，要求撑满屏幕，不能有滚动条，此时若换个屏幕

此时需要考虑小元素用 vh, 宽和高都用 vh 去表示，中间的大块去自适应，这就做到了大屏的适配，屏幕变小了，整体变小了（体验更好），中间这块撑满了屏幕

对于更复杂的场景，需要更灵活考虑，没有一种适配方式可以囊括所有场景。

### 属性

#### 1 清除浮动

**参考答案**：

除浮动其实叫做闭合浮动更合适，因为是把浮动的元素圈起来，让父元素闭合出口和入口不让他们出来影响其他的元素。 在CSS中，clear属性用于清除浮动，其基本语法格式如下：

```CSS
选择器{clear:属性值;}
/*属性值为left,清除左侧浮动的影响  属性值为right,清除右侧浮动的影响  属性值为both,同时清除左右两侧浮动的影响*/
```

91. 额外标签法
    
92. 1.1 末尾标签法 通过在浮动元素的末尾添加一个空的标签。这是W3C推荐的做法，虽然比较简单，但是添加了无意义的标 签，结构化比较差，所以不推荐使用。下面三种写法都适用：
    

```Plaintext
1. <div style="clear:both"></div>
2. .clear { clear:both }
   <div class="clear"></div>
3..clear{ clear:both }
   <br class="clear" />    <!--也可以使用br等别的块级元素来清除浮动-->
```

93. 2.2 内部标签法，把div放进父盒子里，盒子会撑开，一般也不会用。
    
94. overflow
    
95. 给父级元素添加overflow样式方法。 代码比较简洁，可以通过触发BFC方式，但是因为本身overflow的本质是溢出隐藏的效果，所以有的时候也会有一些问题存在，比如内容增多的时候不会自动换行导致内容被隐藏掉，无法显示出要溢出的元素。
    

```CSS
.father {
       overflow: auto;  
     /* 加上这句话，就可以清除浮动   overflow = hidden|auto|scroll 都可以实现*/
  }
```

96. 伪元素法（最常用）
    
97. 3.1 使用after伪元素清除浮动 after是在父元素中加一个盒子，这个元素是通过css添加上去的，符合闭合浮动思想，结构语义化正确。 父元素中加一个类名为clearfix 。但是这个方法IE6，7不识别，要进行兼容，使用zoom:1触发 hasLayout来清除浮动 代表网站：百度、淘宝、网易等
    

```CSS
.clearfix:after{
   content:".";  /*尽量不要为空，一般写一个点*/
   height:0;     /*盒子高度为0，看不见*/
   display:block;    /*插入伪元素是行内元素，要转化为块级元素*/
   visibility:hidden;      /*content有内容，将元素隐藏*/
   clear:both;  
}

.clearfix {
   *zoom: 1;   /*  *只有IE6,7识别 */
}
```

98. 3.2 after伪元素空余字符法 父元素中加一个类名为clearfix，也需要兼容IE6、7
    

```CSS
.clearfix::after{
   content:"\200B";   /* content:'\0200'; 也可以 */
   display:block;
   height:0;
   clear:both;
}

.clearfix {
   *zoom: 1; 
}
```

99. 3.3 使用before和after双伪元素清除浮动（推荐） 完全符合闭合浮动思想的方法。 父元素中加一个类名为clearfix,需要兼容IE6、7 代表网站：小米、腾讯
    

```CSS
.clearfix:before, .clearfix:after {
       content: ""; 
       display: table;
   }
   .clearfix:after {
       clear: both;
   }
   .clearfix {
       *zoom: 1;
   }
```

#### 2 padding , margin 百分比单位依据

**参考答案**：

在CSS 盒模型中，依据CSS2.2文档，margin与padding的百分比指定值时，一律参考**包含盒的宽度**。 示例：

```CSS
        .father{
            height: 100px;
            width: 200px;
            border: solid;
        }

        .son{
            margin: 20%;
            padding: 20%;
            width: 50%;
            height: 50%;
        }
```

如下图，包括padding-top/bottom,margin-top/bottom在内，所有padding和margin均是参考的包含块的宽度，故它们的值为200px * 20% = 40px。

#### 3 父子边距重合

**参考答案**：

**效果：**

边界重叠是指两个或多个盒子(可能相邻也可能嵌套)的相邻边界(其间没有任何非空内容、补白、边框)重合在一起而形成一个单一边界。

父子元素的边界重叠

```Plaintext
<style>
  .parent {    background: #e7a1c5;  }  .parent .child {    background: #c8cdf5;    height: 100px;    margin-top: 10px;  }
</style>
<section class="parent">
  <article class="child"></article>
</section>
```

以为期待的效果：

![](https://a1j6nbrw76.feishu.cn/space/api/box/stream/download/asynccode/?code=NDMzYzMyY2JlZGIzYjEyMDQyMjI0NWVmOWQ4ZGZjNmJfbFNEWEJKVFlYMjN0Vm9KWG5NVThmalk3RVl4NDNSQ05fVG9rZW46Ym94Y24xSU9ueE9zZ1hnM3hrWVJnTWR5ZkE4XzE3MjIyNTYyMTQ6MTcyMjI1OTgxNF9WNA)

而实际上效果如下:

![](https://a1j6nbrw76.feishu.cn/space/api/box/stream/download/asynccode/?code=Y2Y2ZDFiNWRmMjc2MGQ3MzczOWYwODMwYWMwNTc4YjVfODVFMlh0YXByWDE3YTJmdmpkblJudkRaaGRxV3JpOEtfVG9rZW46Ym94Y25pakF4REZCNzhUV2U4UTV5MWY0aUhlXzE3MjIyNTYyMTQ6MTcyMjI1OTgxNF9WNA)

在这里父元素的高度不是 110px，而是 100px，在这里发生了高度坍塌。

**产生原因：**

是如果块元素的 `margin-top` 与它的第一个子元素的 `margin-top` 之间没有 `border`、`padding`、`inline` `content`、 `clearance` 来分隔，或者块元素的 margin-bottom 与它的最后一个子元素的 margin-bottom 之间没有 `border`、`padding`、`inline` `content`、`height`、`min-height`、 `max-height` 分隔，那么外边距会塌陷。子元素多余的外边距会被父元素的外边距截断。

**解决办法**：

父子元素的边界重叠得解决方案： 在父元素上加上 overflow:hidden;使其成为 BFC。

#### 4 css字体大小设置（三种）.em rem px

**参考答案**：

**px（绝对长度单位）**

相信对于前端来说px这个单位是大家并不陌生，px这个单位，兼容性可以说是相当可以，大家对px的了解肯 定是没有很大的问题的。

**em（相对长度单位）**

**使用：**

100. 浏览器的默认字体都是16px，那么1em=16px，以此类推计算12px=0.75em，10px=0.625em,2em=32px；
    
101. 这样使用很复杂，很难很好的与px进行对应,也导致书写、使用、视觉的复杂(0.75em、0.625em全是小数点)；
    
102. 为了简化font-size的换算，我们在body中写入一下代码
    

```CSS
body {font-size: 62.5%;  } /*  公式16px*62.5%=10px  */ 
```

103. 这样页面中1em=10px,1.2em=12px,1.4em=14px,1.6em=16px，使得视觉、使用、书写都得到了极大的帮助。
    
104. 例子如下：
    

```HTML
<div class="font1" style='font-size:1.6em'>我是1.6em</div>
```

105. 缺点：
    
    1. em的值并不是固定的；
        
    2. em会继承父级元素的字体大小（参考物是父元素的font-size；）；
        
    3. em中所有的字体都是相对于父元素的大小决定的；所以如果一个设置了font-size:1.2em的元素在另一个设置了font-size:1.2em的元素里，而这个元素又在另一个设置了font-size:1.2em的元素里，那么最后计算的结果是1.2X1.2X1.2=1.728em
        
    
    ```HTML
    <div class="big">
      我是大字体
     <div class="small">我是小字体</div>
    </div>
    ```
    
    5. 样式为
        
    
    ```HTML
    <style>
       body {font-size: 62.5%; } /*  公式:16px*62.5%=10px  */     .big{font-size: 1.2em}    .small{font-size: 1.2em}
    </style>
    ```
    
    7. 但运行结果small的字体大小为：1.2em*1.2em=1.44em
        
106. **rem（相对长度单位）**
    
107. **使用：**
    
108. 浏览器的默认字体都是16px，那么1rem=16px，以此类推计算12px=0.75rem，10px=0.625rem，2rem=32px；
    
109. 这样使用很复杂，很难很好的与px进行对应,也导致书写、使用、视觉的复杂(0.75rem、0.625em全是小数点) ；
    
110. 为了简化font-size的换算，我们在根元素html中加入font-size: 62.5%;
    

```CSS
html {font-size: 62.5%;  } /*  公式16px*62.5%=10px  */  
```

111. 这样页面中1rem=10px,1.2rem=12px,1.4rem=14px,1.6rem=16px;使得视觉、使用、书写都得到了极大的帮助；
    

```HTML
<div class="font1" style='font-size:1.6rem'>我是1.6rem=16px</div>
```

112. 特点：
    
113. rem单位可谓集相对大小和绝对大小的优点于一身
    
114. 和em不同的是rem总是相对于根元素(如:root{})，而不像em一样使用级联的方式来计算尺寸。这种相对单位使用起来更简单。
    
115. rem支持IE9及以上，意思是相对于根元素html（网页），不会像em那样，依赖于父元素的字体大小，而造成混乱。使用起来安全了很多。
    

```HTML
<div class="big">
   我是14px=1.4rem<div class="small">我是12px=1.2rem</div>
</div>
```

```HTML
<style>
   html {font-size: 10px;  } /*  公式16px*62.5%=10px  */      .big{font-size: 1.4rem}    .small{font-size: 1.2rem}
</style>
```

116. **注意：**
    

- 值得注意的浏览器支持问题： IE8，Safari 4或 iOS 3.2中不支持rem单位。
    
- 如果你的用户群都使用最新版的浏览器，那推荐使用rem，如果要考虑兼容性，那就使用px,或者两者同时使用。
    

#### 5 css3新特性

**参考答案**：

117. **CSS3 边框**
    
118. 在 css3 中新增的边框属性如下：
    
119. **创建圆角**
    
120. **语法：** `border-radius : length length;`
    
121. length： 由浮点数字和单位标识符组成的长度值（如：20px）。不可为负值，如果为负值则与0展示效果一样。第一个值设置其水平半径，第二个值设置其垂直半径，如果第二个值省略则默认第二个值等于第一个值。
    

```CSS
div{
 border: 1px solid;
 /* 设置每个圆角水平半径和垂直半径都为30px */
 border-radius: 30px;
}
```

122. `border-radius` 是4个角的缩写方法。四个角的表示顺序与`border`类似按照`border-top-left-radius`、`border-top-right-radius`、`border-bottom-right-radius`、`border-bottom-left-radius`的顺序来设置：
    

```CSS
div{
 border: 1px solid;
 /* 如果 / 前后的值都存在，那么 / 前面的值设置其水平半径，/ 后面值设置其垂直半径，如果没有 / ，则水平和垂直半径相等 */
 border-radius: 10px 15px 20px 30px / 20px 30px 10px 15px;

 /* 上面写法等价于下面的写法，第一个值是水平半径，第二个值是垂直半径 */
 border-top-left-radius: 10px 20px;
 border-top-right-radius: 15px 30px;
 border-bottom-right-radius: 20px 10px;
 border-bottom-left-radius: 30px 15px;
}
```

123. `border-radius` 指定不同数量的值遵循对角相等的原则，即指定了值的取指定值，没有指定值的与对角值相等，对角相等模型
    
124. **边框阴影**
    
125. 通过属性`box-shadow` 向边框添加阴影。
    
126. **语法：** `{box-shadow : [inset] x-offset y-offset blur-radius extension-radius spread-radiuscolor}`
    
127. 说明：对象选择器 {box-shadow:[投影方式] X轴偏移量 Y轴偏移量 模糊半径 阴影扩展半径 阴影颜色}
    

```CSS
div{
 /* 内阴影，向右偏移10px，向下偏移10px，模糊半径5px，阴影缩小10px */
 box-shadow: inset 10px 10px 5px -10px #888888;
}
```

128. **边框图片**
    
129. **语法：**
    
130. `border-image : border-image-source || border-image-slice [ / border-image-width] || border-image-repeat`
    
131. `border-image ： none | image [ number | percentage]{1,4} [ / border-width>{1,4} ] ? [ stretch | repeat | round ]{0,2}`
    

```CSS
div{
 border-image:url(border.png) 30 30 round;

 border-image: url(border.png) 20/10px repeat;
}
```

132. **CSS3 背景**
    

**`background-size`** **属性**

在 CSS3 之前，背景图片的尺寸是由图片的实际尺寸决定的。在 CSS3 中，可以设置背景图片的尺寸，这就允许我们在不同的环境中重复使用背景图片。可以像素或百分比规定尺寸。如果以百分比规定尺寸，那么尺寸相对于父元素的宽度和高度。

```CSS
div{
  background:url(bg_flower.gif);
  /* 通过像素规定尺寸 */
  background-size:63px 100px;

  /* 通过百分比规定尺寸 */
  background-size:100% 50%;
  background-repeat:no-repeat;
}
```

**`background-origin`** **属性**

规定背景图片的定位区域，背景图片可以放置于 `content-box`、`padding-box` 或 `border-box` 区域，

```CSS
div{
  background:url(bg_flower.gif);
  background-repeat:no-repeat;
  background-size:100% 100%;
  /* 规定背景图片的定位区域 */
  background-origin:content-box;
}
```

**`background-clip`** **属性**

与`background-origin` 属性相似，规定背景颜色的绘制区域，区域划分与`background-origin` 属性相同。

```CSS
div{
  background-color:yellow;
  background-clip:content-box;
}
```

**CSS3 多重背景图片**

CSS3 允许为元素设置多个背景图像

```CSS
body{
  background-image:url(bg_flower.gif),url(bg_flower_2.gif);
}
```

133. CSS3 文本效果
    

**`text-shadow`** **属性**

给为本添加阴影，能够设置水平阴影、垂直阴影、模糊距离，以及阴影的颜色。

```CSS
h1{
  text-shadow: 5px 5px 5px #FF0000;
}
```

**text-wrap 属性**

设置区域内的自动换行。

**语法：**`text-wrap: normal | none | unrestricted | suppress | break-word;`

```CSS
/* 允许对长单词进行拆分，并换行到下一行 */
p {word-wrap:break-word;}
```

|   |   |
|---|---|
|值|描述|
|normal|只在允许的换行点进行换行。|
|none|不换行。元素无法容纳的文本会溢出。|
|break-word|在任意两个字符间换行。|
|suppress|压缩元素中的换行。浏览器只在行中没有其他有效换行点时进行换行。|

134. CSS3 字体
    

**字体定义**

在 CSS3 之前，web 设计师必须使用已在用户计算机上安装好的字体。但是通过 CSS3，web 设计师可以使用他 们喜欢的任意字体。当找到或购买到希望使用的字体时，可将该字体文件存放到 web 服务器上，它会在需要时 被自动下载到用户的计算机上。字体需要在 CSS3 @font-face 规则中定义。

```CSS
/* 定义字体 */
@font-face{
  font-family: myFont;
  src: url('Sansation_Light.ttf'),
       url('Sansation_Light.eot');     /* IE9+ */
}

div{
  font-family:myFont;
}
```

**使用粗体字体**

"Sansation_Light.ttf"文件 是定义的正常字体，"Sansation_Bold.ttf" 是另一个字体文件，它包含了 Sansation 字体的粗体字符。只要 font-family 为 "myFirstFont" 的文本需要显示为粗体，浏览器就会使用该字体。

（其实没弄清楚这样处理的原因，经测试直接在html中通过 b 标签也可以实现加粗的效果）

```CSS
/* 定义正常字体 */
@font-face{
  font-family: myFirstFont;
  src: url('/example/css3/Sansation_Light.ttf'),
       url('/example/css3/Sansation_Light.eot'); /* IE9+ */
}

/* 定义粗体时使用的字体 */
@font-face{
  font-family: myFirstFont;
  src: url('/example/css3/Sansation_Bold.ttf'),
       url('/example/css3/Sansation_Bold.eot'); /* IE9+ */
  /* 标识属性 */
  font-weight:bold;
}

div{
  font-family:myFirstFont;
}
```

135. CSS3 2D 转换
    

通过 CSS3 转换，我们能够对元素进行**移动、缩放、转动、拉长或拉伸**，转换是使元素改变形状、尺寸和位置的一种效果。

**translate() 方法**

通过 translate(x , y) 方法，元素根据给定的 left（x 坐标） 和 top（y 坐标） 位置参数从其当前位置移动，x为正值向右移动，为负值向左移动；y为正值向下移动，为负值向上移动；

```CSS
div{
  transform: translate(50px,100px);
  -ms-transform: translate(50px,100px);        /* IE 9 */
  -webkit-transform: translate(50px,100px);     /* Safari and Chrome */
  -o-transform: translate(50px,100px);         /* Opera */
  -moz-transform: translate(50px,100px);        /* Firefox */
}
```

**rotate() 方法**

控制元素顺时针旋转给定的角度。为正值，元素将顺时针旋转。为负值，元素将逆时针旋转。

```CSS
div{
  transform: rotate(30deg);
  -ms-transform: rotate(30deg);        /* IE 9 */
  -webkit-transform: rotate(30deg);    /* Safari and Chrome */
  -o-transform: rotate(30deg);         /* Opera */
  -moz-transform: rotate(30deg);       /* Firefox */
}
```

**scale() 方法**

根据给定的宽度（X 轴）和高度（Y 轴）参数，控制元素的尺寸的增加、减少。

```CSS
div{
  transform: scale(2,4);
  -ms-transform: scale(2,4);         /* IE 9 */
  -webkit-transform: scale(2,4);     /* Safari 和 Chrome */
  -o-transform: scale(2,4);         /* Opera */
  -moz-transform: scale(2,4);       /* Firefox */
}
```

**skew() 方法**

根据给定的水平线（X 轴）和垂直线（Y 轴）参数设置元素翻转给定的角度。

```CSS
/* 设置围绕 X 轴把元素翻转 30 度，围绕 Y 轴翻转 20 度。 */
div{
  transform: skew(30deg,20deg);
  -ms-transform: skew(30deg,20deg);         /* IE 9 */
  -webkit-transform: skew(30deg,20deg);     /* Safari and Chrome */
  -o-transform: skew(30deg,20deg);          /* Opera */
  -moz-transform: skew(30deg,20deg);        /* Firefox */
}
```

**matrix() 方法**

matrix() 方法把所有 2D 转换方法组合在一起。matrix() 方法需要六个参数，包含数学函数，允许旋转、缩放、移动以及倾斜元素。

```CSS
/* 使用 matrix 方法将 div 元素旋转 30 度 */
div{
  transform:matrix(0.866,0.5,-0.5,0.866,0,0);
  -ms-transform:matrix(0.866,0.5,-0.5,0.866,0,0);          /* IE 9 */
  -moz-transform:matrix(0.866,0.5,-0.5,0.866,0,0);         /* Firefox */
  -webkit-transform:matrix(0.866,0.5,-0.5,0.866,0,0);      /* Safari and Chrome */
  -o-transform:matrix(0.866,0.5,-0.5,0.866,0,0);           /* Opera */
}
```

**2D Transform 方法汇总**

|   |   |
|---|---|
|函数|描述|
|matrix(n,n,n,n,n,n)|定义 2D 转换，使用六个值的矩阵。|
|translate(x,y)|定义 2D 转换，沿着 X 和 Y 轴移动元素。|
|translateX(n)|定义 2D 转换，沿着 X 轴移动元素。|
|translateY(n)|定义 2D 转换，沿着 Y 轴移动元素。|
|scale(x,y)|定义 2D 缩放转换，改变元素的宽度和高度。|
|scaleX(n)|定义 2D 缩放转换，改变元素的宽度。|
|scaleY(n)|定义 2D 缩放转换，改变元素的高度。|
|rotate(angle)|定义 2D 旋转，在参数中规定角度。|
|skew(x-angle,y-angle)|定义 2D 倾斜转换，沿着 X 和 Y 轴。|
|skewX(angle)|定义 2D 倾斜转换，沿着 X 轴。|
|skewY(angle)|定义 2D 倾斜转换，沿着 Y 轴。|

136. CSS3 3D 转换
    

CSS3 允许使用 3D 转换来对元素进行格式化

**rotateX() 方法**

```CSS
/* 设置元素围绕其 X 轴以给定的度数进行旋转 */
div{
  transform: rotateX(120deg);
  -webkit-transform: rotateX(120deg);   /* Safari 和 Chrome */
  -moz-transform: rotateX(120deg);  /* Firefox */
}
```

**rotateY() 旋转**

```CSS
/* 设置元素围绕其 Y 轴以给定的度数进行旋转 */
div{
  transform: rotateY(130deg);
  -webkit-transform: rotateY(130deg);   /* Safari 和 Chrome */
  -moz-transform: rotateY(130deg);  /* Firefox */
}
```

137. CSS3 过渡
    
138. 通过 CSS3可以在不使用 Flash 动画或 JavaScript 的情况下，当元素从一种样式变换为另一种样式时为元素添加效果。
    
139. 要实现这一点，必须规定以下两项内容：
    
    1. 设置添加过渡效果的 CSS 属性；
        
    2. 设置过渡效果的时长；
        
140. **注意：** 如果时长未设置，则不会有过渡效果，因为默认值是 0。
    

**单项改变**

```CSS
/* 设置将变化效果添加在“宽度”上，时长为2秒；该时长在其他属性上并不适用 */
div{
  transition: width 2s;
  -moz-transition: width 2s;         /* Firefox 4 */
  -webkit-transition: width 2s;      /* Safari 和 Chrome */
  -o-transition: width 2s;           /* Opera */
}
/* 配合在一起使用的效果就是当鼠标移上去的时候宽度变为300px，这个过程耗时2秒 */
div:hover{
  width:300px;
}
```

**注意：** 当鼠标移出元素时，它会逐渐变回原来的样式。

**多项改变**

如需向多个样式添加过渡效果，请添加多个属性，由逗号隔开。

```CSS
/* 同时向宽度、高度和转换添加过渡效果 */
div{
  transition: width 2s, height 2s, transform 2s;
  -moz-transition: width 2s, height 2s, -moz-transform 2s;
  -webkit-transition: width 2s, height 2s, -webkit-transform 2s;
  -o-transition: width 2s, height 2s,-o-transform 2s;
}

/* 当鼠标移上时宽度和高度都变成200px，同时旋转180度，每个属性变化都耗时2秒 */
div:hover{
  width:200px;
  height:200px;
  transform:rotate(180deg);
  -moz-transform:rotate(180deg);        /* Firefox 4 */
  -webkit-transform:rotate(180deg);     /* Safari and Chrome */
  -o-transform:rotate(180deg);          /* Opera */
}
```

**过渡属性详解**

`transition` 是简写属性，

**语法：** `transition : transition-property | transition-duration | transition-timing-function | transition-delay;`

```CSS
/* 设置在宽度上添加过渡效果，时长为1秒，过渡效果时间曲线为linear，等待2秒后开始过渡 */
div{
  transition: width 1s linear 2s;
  -moz-transition: width 1s linear 2s;       /* Firefox 4 */
  -webkit-transition: width 1s linear 2s;    /* Safari and Chrome */
  -o-transition: width 1s linear 2s;         /* Opera */
}
```

|   |   |
|---|---|
|属性|描述|
|transition|简写属性，用于在一个属性中设置四个过渡属性。|
|transition-property|规定应用过渡的 CSS 属性的名称。|
|transition-duration|定义过渡效果花费的时间。默认是 0。|
|transition-timing-function|规定过渡效果的时间曲线。默认是 "ease"。|
|transition-delay|规定过渡效果何时开始。默认是 0。|

141. CSS3 动画
    
142. 通过 CSS3可以创建动画，这些动画可以取代网页中的画图片、Flash 动画以及 JavaScript。
    
143. CSS3 中通过@keyframes 规则来创建动画。在 @keyframes 中规定某项 CSS 样式，就能创建由当前样式（动画开始前的样式）逐渐改为新样式（需要变到的样式）的动画效果。
    

**通过from , to关键字设置动画发生的时间**

```CSS
/* 通过@keyframes 创建动画 */
@keyframes myfirst{
  from {background: red;}
  to {background: yellow;}
}
/* Firefox */
@-moz-keyframes myfirst {
  from {background: red;}
  to {background: yellow;}
}
/* Safari 和 Chrome */
@-webkit-keyframes myfirst {
  from {background: red;}
  to {background: yellow;}
}
/* Opera */
@-o-keyframes myfirst {
  from {background: red;}
  to {background: yellow;}
}

/*   将创建的动画绑定到选择器，并至少指定以下两项 CSS3 动画属性   1.指定动画的名称；   2.指定动画的时长；*/
div{
  animation: myfirst 5s;
  -moz-animation: myfirst 5s;       /* Firefox */
  -webkit-animation: myfirst 5s;    /* Safari 和 Chrome */
  -o-animation: myfirst 5s;         /* Opera */
}
```

**通过百分比设置动画发生的时间**

动画是使元素从一种样式逐渐变化为另一种样式的效果。可以改变任意多的样式任意多的次数。可以用关键词 "from" 和 "to"来设置动画变化发生的时间，其效果等同于 0% 和 100%。0% 是动画的开始，100% 是动画的完成。为了得到最佳的浏览器支持，应该始终定义 0% 和 100% 选择器。

```CSS
/* 当动画为 25% 及 50% 时改变背景色，然后当动画 100% 完成时再次改变 */
@keyframes myfirst{
  0%   {background: red;}
  25%  {background: yellow;}
  50%  {background: blue;}
  100% {background: green;}
}

/* 同时改变背景色和位置 */
@keyframes myfirst{
  0%   {background: red; left:0px; top:0px;}
  25%  {background: yellow; left:200px; top:0px;}
  50%  {background: blue; left:200px; top:200px;}
  75%  {background: green; left:0px; top:200px;}
  100% {background: red; left:0px; top:0px;}
}
```

**动画属性详解**

`animation` 是除了 `animation-play-state` 属性所有动画属性的简写属性。

**语法：** `animation : animation-name | animation-duration | animation-timing-function | animation-delay | animation-iteration-count | animation-direction`

```CSS
/* 应用的动画为myfirst，一个动画周期为5秒，动画的速度曲线为linear，动画2秒后播放，播放次数为infinite，即无限循环，动画下一周期是否逆向播放取值alternate，即逆向播放 */
div{
  animation: myfirst 5s linear 2s infinite alternate;
  /* Firefox: */
  -moz-animation: myfirst 5s linear 2s infinite alternate;
  /* Safari 和 Chrome: */
  -webkit-animation: myfirst 5s linear 2s infinite alternate;
  /* Opera: */
  -o-animation: myfirst 5s linear 2s infinite alternate;
}
```

|   |   |
|---|---|
|属性|描述|
|@keyframes|规定动画。|
|animation|所有动画属性的简写属性，除了 animation-play-state 属性。|
|animation-name|规定 @keyframes 动画的名称。|
|animation-duration|规定动画完成一个周期所花费的秒或毫秒。默认是 0。|
|animation-timing-function|规定动画的速度曲线。默认是 "ease"。|
|animation-delay|规定动画何时开始。默认是 0。|
|animation-iteration-count|规定动画被播放的次数。默认是 1。|
|animation-direction|规定动画是否在下一周期逆向地播放。默认是 "normal"。|
|animation-play-state|规定动画是否正在运行或暂停。默认是 "running"。|
|animation-fill-mode|规定对象动画时间之外的状态。|

144. CSS3 多列
    
145. 通过 CSS3够创建多个列来对文本进行布局，就像我们经常看到的报纸的布局一样。
    
146. **CSS3 创建多列**
    
147. `column-count` 属性规定元素应该被分隔的列数。
    

```CSS
/* 将div中的文本分为3列 */
div{
  column-count:3;
  -moz-column-count:3;        /* Firefox */
  -webkit-column-count:3;     /* Safari 和 Chrome */
}
```

**CSS3 规定列之间的间隔**

`column-gap` 属性规定列之间的间隔。

```CSS
/* 设置列之间的间隔为 40 像素 */
div{
  column-gap:40px;
  -moz-column-gap:40px;        /* Firefox */
  -webkit-column-gap:40px;     /* Safari 和 Chrome */
}
```

**CSS3 列规则**

`column-rule` 属性设置列之间的宽度、样式和颜色规则。

**语法：** `column-rule : column-rule-width | column-rule-style | column-rule-color`

```CSS
div{
  column-rule:3px outset #ff0000;
  -moz-column-rule:3px outset #ff0000;       /* Firefox */
  -webkit-column-rule:3px outset #ff0000;    /* Safari and Chrome */
}
```

|   |   |
|---|---|
|属性|描述|
|column-count|规定元素应该被分隔的列数。|
|column-fill|规定如何填充列。|
|column-gap|规定列之间的间隔。|
|column-rule|设置所有 column-rule-* 属性的简写属性。|
|column-rule-width|规定列之间规则的宽度。|
|column-rule-style|规定列之间规则的样式。|
|column-rule-color|规定列之间规则的颜色。|
|column-span|规定元素应该横跨的列数。|
|column-width|规定列的宽度。|
|columns|语法 : column-width column-count。|

148. CSS3 用户界面
    

**CSS3 resize**

在 CSS3中`resize` 属性设置是否可由用户调整元素尺寸。

```CSS
/* 设置div可以由用户调整大小 */
div{
  resize:both;
  overflow:auto;
}
```

**CSS3 box-sizing**

`box-sizing` 属性允许您以确切的方式定义适应某个区域的具体内容。边框计算在width中

```CSS
/* 规定两个并排的带边框方框 */
div{
  box-sizing:border-box;
  -moz-box-sizing:border-box;        /* Firefox */
  -webkit-box-sizing:border-box;     /* Safari */
  width:50%;
  float:left;
}
```

**CSS3 outline-offset**

`outline-offset` 属性对轮廓进行偏移，并在超出边框边缘的位置绘制轮廓。

轮廓与边框有两点不同：

- 轮廓不占用空间；
    
- 轮廓可能是非矩形；
    

```CSS
/* 规定边框边缘之外 15 像素处的轮廓 */
div{
  border:2px solid black;
  outline:2px solid red;
  outline-offset:15px;
}
```

#### 6 css：inline-block 的 div 之间的空隙，原因及解决

**参考答案**：

display:inline-block布局的元素在chrome下会出现几像素的间隙，原因是因为我们在编辑器里写代码的时候，同级别的标签不写在同一 行以保持代码的整齐可读性，即inline-block布局的元素在编辑器里不在同一行，即存在换行符，因此这就是著名的inline-block“换行 符/空格间隙问题”。如果inline-block元素间有空格或是换行产生了间隙，那是正常的，应该的。如果没有空格与间隙才是不正常的（**IE6/7** block水平元素）。

**解决方法：**

1、把img标签的display属性改成block：

```CSS
img{display:block;}
```

2、把div中的字体大小设为0：

```CSS
div{font-size:0;}
```

3、如果是img，修改img的vertical-align属性：

```CSS
img{vertical-align:buttom;}
img{vertical-align:middle;}
img{vertical-align:top;}
```

149. 移除标签间的空格
    

```HTML
<ul>
    <li>这是一个li</li><li>这是另一个li</li><li>这是另另一个li</li><li>这是另另另一个li</li>
</ul>

// 方式二：在标签结束处消除换行符
<ul>
    <li>这是一个li    </li><li>这是另一个li    </li><li>这是另另一个li    </li><li>这是另另另一个li</li>
</ul>

// 方式三：HTML注释标签
<ul>
    <li>这是一个li</li><!--    --><li>这是另一个li</li><!--    --><li>这是另另一个li</li><!--    --><li>这是另另另一个li</li>
</ul>
```