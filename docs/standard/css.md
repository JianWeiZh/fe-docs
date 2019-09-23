# CSS 规范

## 命名规范

### 命名规则
- 所有的命名都使用 `小写字母`
- 尽量使用英文命名原则
- 尽量不缩写，除非一看就明白的单词如 `btn`
- 尽量不用id命名样式

### 重要样式命名
- wrap ------------------ 用于最外层
- header ---------------- 用于头部
- main ------------------ 用于主体内容（中部）
- main-left ------------- 左侧布局
- main-right ------------ 右侧布局
- nav ------------------- 网页菜单导航条
- content --------------- 用于网页中部主体
- footer ---------------- 用于底部

### 样式属性顺序
- 1、定位：position z-index left right top bottom clip等。
- 2、自身属性：width height min-height max-height min-width max-width等。
- 3、文字样式：color font-size letter-spacing, color text-align等。
- 4、背景：background-image border等。
- 5、文本属性: text-align vertical-align text-wrap text-transform text-indent text-decoration  letter-spacing word-spacing white-space text-overflow等。
- 6、css3中属性：content、box-shadow、animation、border-radius、transform等
::: tip
**目的：** 减少浏览器reflow(回流)，提升浏览器渲染dom的性能。
:::

