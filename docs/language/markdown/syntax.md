---
sidebar_position: 1
description: Markdown 基础语法
---

# 基础语法

Markdown 是一种轻量级标记语言，它允许人们使用易读易写的纯文本格式编写文档。

---

## 段落

段落是一行或多行连续的文本。在 markdown 源代码中，段落由多个空行分隔。

大多数 markdown 解析器将忽略单行中断，如果需要单行的行尾换行符，可以在行尾留下两个空格，或者插入 `<br/>` 。

---

## 标题

标题在行的开头使用 1-6 个 `#` 字符，对应于标题级别 1-6 。

```markdown
# 一级标题

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题
```

# 一级标题

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题

---

## 引用

Markdown 使用电子邮件样式 `>` 字符进行块引用。

### 单行引用

```markdown
> talk is cheap, show me the code.
```

> talk is cheap, show me the code.

---

### 多行引用

```markdown
> talk is cheap, show me the code.
>
> 废话少说，放码过来！
```

> talk is cheap, show me the code.
>
> 废话少说，放码过来！

---

### 多级引用
    
```markdown
> talk is cheap, show me the code.
>
> > 废话少说，放码过来！
```

> talk is cheap, show me the code.
>
> > 废话少说，放码过来！

---

## 列表

列表：无序列表，有序列表，任务列表。

---

### 无序列表

输入 `* list item 1` 将创建一个无序列表，该 `*` 符号可以替换为 `+` 或 `-` 。 建议使用 `-` 符号。

```markdown
- 红色
- 黄色
- 蓝色
```

- 红色
- 黄色
- 蓝色

---

### 有序列表

输入 `1. list item 1` 将创建一个有序列表。

```markdown
1. 红色
2. 黄色
3. 蓝色
```

1. 红色
2. 黄色
3. 蓝色

---

### 任务列表

任务列表是标记为 `[ ]` 或 `[x]`（未完成或完成）的项目的列表。

```markdown
- [x] 吃饭
- [x] 睡觉
- [ ] 游戏
```

- [x] 吃饭
- [x] 睡觉
- [ ] 游戏

---

## 代码块

输入 \``` 之后输入一个可选的语言标识符，然后换行，然后输入代码块，最后换行输入 \``` 结尾。

即使用 **```** 作为代码块的开始和结束标记。

```markdown
\```javascript
function test() {
  console.log("hello, world!");
}
\```
```

```javascript
function test() {
  console.log("hello, world!");
}
```

---

## 数学公式块

在 markdown 源文件中，数学公式块是由 **$$** 标记包装的 LaTeX 表达式。

```markdown
$$
E=mc^2
$$
```

$$ E=mc^2 $$

---

## 表格

在 markdown 源代码中，它们看起来像这样：

```markdown
| First Header | Second Header |
|--------------|---------------|
| Content Cell | Content Cell  |
| Content Cell | Content Cell  |
```

| First Header | Second Header |
|--------------|---------------|
| Content Cell | Content Cell  |
| Content Cell | Content Cell  |

可以在表格中包括内联 Markdown 语法，例如链接，粗体，斜体或删除线。

最后，通过在标题行中包含冒号：可以将文本定义为左对齐，右对齐或居中对齐：

```markdown
| Left-Aligned  | Center Aligned  | Right Aligned |
|:--------------|:---------------:|--------------:|
| col 3 is      | some wordy text |         $1600 |
| col 2 is      |    centered     |           $12 |
| zebra stripes |    are neat     |            $1 |
```

| Left-Aligned  | Center Aligned  | Right Aligned |
|:--------------|:---------------:|--------------:|
| col 3 is      | some wordy text |         $1600 |
| col 2 is      |    centered     |           $12 |
| zebra stripes |    are neat     |            $1 |

最左侧的冒号表示左对齐的列; 最右侧的冒号表示右对齐的列; 两侧的冒号表示中心对齐的列。

---

## 脚注

```markdown
可以像这样创建脚注[^footnote].

[^footnote]: Here is the *text* of the **footnote**.
```

可以像这样创建脚注[^footnote].

[^footnote]: Here is the *text* of the **footnote**.

鼠标移动到 footnote 上标中查看脚注的内容。

---

## 水平线

输入 `***` 或 `---` 在空行上将绘制一条水平线。

---

## YAML Front Matter

在文章顶部输入 `---` 然后换行输入 Front Matter 内容，最后换行输入 `---`。

---

## 目录

[toc]

---

## 图表

可以使用 mermaid 语法创建流程图，序列图，甘特图等。

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

---

## 链接

Markdown 支持两种类型的链接：内联和引用。

在这两种样式中，链接文本都写在 `[方括号]` 内。

要创建内联链接，请在链接文本的结束方括号后立即使用一组常规括号。在常规括号内，输入URL地址，以及可选的用引号括起来的链接标题。例如：

```markdown
This is [an example](http://example.com/ "Title") inline link.

[This link](http://example.net/) has no title attribute.
```

This is [an example](http://example.com/ "Title") inline link.

[This link](http://example.net/) has no title attribute.

---

### 内部链接

内部链接是指向文档中的标题的链接。内部链接使用两个方括号，后跟标题的名称。

```markdown
[内部链接](#内部链接)
```

[内部链接](#内部链接)

---

### 参考链接

参考样式链接使用第二组方括号，在其中放置您选择的标签以标识链接：

This is [an example][id] reference-style link.

然后，在文档中的任何位置，您可以单独定义链接标签，如下所示：

[id]: http://example.com/  "Optional Title Here"

This is an example reference-style link.

---

## 图片

图像与链接类似， 但在链接语法之前需要添加额外的 ! 字符。 图像语法如下所示：

```
![logo](/img/logo.png)
```

![logo](/img/logo.png)

---

## 强调（斜体）

Markdown 将星号 (*) 和下划线(_) 视为强调的指示。用一个 * or _ 包裹文本将使用HTML `<em>` 标签包裹文本。例如：

```markdown
*单个星号*

_单个下划线_
```

*单个星号*

_单个下划线_

建议使用 * 号。

要在用作强调分隔符的位置生成文字星号或下划线，可以用反斜杠转义：

```markdown
\*这个文字被文字星号包围\*
```

\*这个文字被文字星号包围\*

---

## 粗体

用两个 * 或 _ 包裹的文本将使用HTML `<strong>` 标签包裹，例如：

```markdown
**双星号**

__双重下划线__
```

**双星号**

__双重下划线__

建议使用 ** 号。

---

## 代码

要指示代码范围，请使用反引号（`）进行包裹。与预格式化的代码块不同，代码跨度表示正常段落中的代码。例如：

```markdown
使用 `printf()` 函数。
```

使用 `printf()` 函数。

---

## 删除线

```markdown
~~错误的文字。~~
```

~~错误的文字。~~

---

## 下划线

下划线由原始HTML提供支持。

```markdown
<u>下划线</u>
```

<u>下划线</u>

---

## 表情符号

```markdown
:smile:
```

:smile:

也可以直接输入UTF8表情符号字符 Emoji。

---

## 内联数学公式

使用 $ 来包裹TeX命令，例如：`$\lim_{x \to \infty} \exp(-x) = 0$` 将呈现为LaTeX命令。

---

## 下标

用 ~ 来包裹下标内容。

```markdown
H~2~O
```

H~2~O

## 上标

用 ^ 来包裹上标内容。

```markdown
X^2^
```

X^2^

---

## 高亮

用 == 来包裹高亮内容

```markdown
==highlight==
```

==highlight==

---

## HTML

可以使用HTML来设置纯 Markdown 不支持的内容。

例如， `<span style="color:red">this text is red</span>` 用于添加红色文本。
