---
tags:
  - idea
layout: list
---

>UX 稿： https://www.figma.com/file/fdcjvVsktoOZ16cYNkGKBL/Industrial-Map?type=design&node-id=0-1&mode=design&t=TKlMzkMoG5BMAhEp-0


### Objective
- [link](zotero://open-pdf/library/items/5MX56RJV?page=15&annotation=8CNDCM9Z)V -NLI的性能很大程度上取决于NLP模型。如表3（NLP工具包或技术栏和推荐算法栏）所示，大多数现有的V-NLI系统只是为了方便而应用手工编写的语法规则或典型的NLP工具包。最近，一些最先进的 NLP 模型已经在特定任务中达到了人类的表现

- 仅仅考虑NL查询的语义是有限的，还应该考虑数据集的语义。现有的数据属性匹配技术仅局限于字母匹配级别，而没有深入到语义匹配级别。 
- 交互上的限制，如何改进用户输入的prompt，Richer Prompt to Improve System Discoverability
- 

## ITRODUCTION
>1. 这个工作的背景意义，当前还有什么未被解决，这个未解决的问题又如何如何重要；
>2. 以前的论文工作如何如何，但不能很好地解决我们提出的这个问题；
>3. 我们论文的工作如何能解决我们所提出的问题，论文工作的Overview；


城市绩效是评估城市运行和发展状况的重要指标，对城市的可持续发展和居民生活 质量有着重要影响。



传统方法一般基于自然语言处理(NLP)相关技术，在特定应用领域探究城市绩效指标，例如 Zhu 等人提出 Location2vec[1]，将移动轨迹数据转换为上 下文化轨迹文档使用 Skip-gram 模型来学习位置嵌入来构建城市位置的情境感知表示。 Sun 等人提出 Block2vec[2]，将 POI 之间以及区域之间的空间相关性映射为高维向量进 行城市功能区域的分类。Zhai 等人 [3] 提出结合 POI 数据和简化的 Place2vec 模型来 检测邻域区域规模的功能区域的方法。Chen 等人提出 SenseMap [4] 首次尝试利用 POI 的语义信息计算语义文本相似度得到八个绩效指标的语义地图。然而由于人的主观感知 性，城市绩效指标的相关应用分析一直是城市数据分析的瓶颈。城市绩效指标的计算依 赖于语义文本相似度的计算，随着 LLMs 在自然语言处理方面的发展，传统方法在语义 准确性和指标的广泛性上存在一定局限。

直观的城市地理可视化分析系统对于城市数据分析是非常必要的。先前已有大量 的研究关注城市分析可视化系统，旨在解决各领域的城市问题，例如 Deng 等人提出 AirVis[5]，模拟污染物传输并提取空气污染的传播模式，检查城市空气污染的传播问题。 Li 等人提出 DDLVis[6]，使用基于字典学习的稀疏编码进行时空密度图的表征，并基于 编码实现高效的时空可视检索，对城市噪声水平进行视觉查询。传统的城市可视化系统 更多关注于数据的检索分析，用户的直观性、交互性受到了一定限制。

近年来，自然语言界面(V-NLI)的出现大大提高可视化工具的可用性，以自然语 言问答形式的可视化分析系统受到了广泛关注。例如 Song 等人提出的 GVQA[7]，通过 计算自然语言输入和序列化查询图序列之间的语义相似度，以进行查询图排名，以生成 有关网络图可视化的答案。Yu 等人提出 FlowSense[8]，应用带有特殊话语标记和占位符 的语义解析器，实现灵活的数据流可视化数据探索。然而现有的 V-NLI 技术在城市地 理分析领域尚未得到充分探讨。


%% 
senseMap使用操作复杂，学习成本较高。因此，找到一个可行的方法，借助准确且直观的系统来更好的帮助用户探索城市分析是非常有必要的。
可视化的自然语言界面（V-NLI）的出现可以大大提高可视化工具的可用性，目前已在多个领域应用，……。由于人类语言的模糊性，用户的提问大多都具有很大的主观性，不能详细描述

因此，我们定义了一个新的地理可视化问题，如何将自然语言利用文本相似度分析urban performance 转换成地理数据用以进行城市地理可视化分析。 %%



在本文中，我们提出了SenseMapQA，这是一种分析自然语言中关于城市绩效的主观语义信息，生成用于城市分析的地理可视化数据的方法。
因此，我们引入了一种新颖的pipeline，我们扩充了POI的语义数据，利用先进的LLMs方法，感知提取并扩充自然语言提问中的urban performance measures corpus，并根据文本相似度将自然语言transformer to 地理数据GeoJson




### 1.1 Contributions
In this work, we make several contributions, including:
1.  我们对现有的senseMap生成方式进行了改进。
	- 改用 LLM 后可以得到之前无法得到的 performance measure 结果.
	- ~~我们考虑并改进了KDE过程，引入负语义信息对POI的影响，更加准确~~
	- 我们同样使用了经济繁荣性和房价进行评估，可以得到的比先前工作更好的结果
2. 我们引入了一种新颖的pipeline，用以将自然语言翻译为地理数据GeoJson。
3. 我们设计了一个map可视化交互系统，在结果呈现上加入更多自然语言问答的交互和结果的可解释可视化
	- 文本可视化，可解释可视化
	- 例如:套索选择后弹出可视化+生成文本+源文本的解释
	- 相似区域的推荐(综合数值和语义)


## 2 RELATED WORK
### 2.1 Natural Language Interfaces for Visualization
```ad-tip
1. Ambiguity Widgets: 歧义小部件的处理（prompt）
2. Task Identify:任务推断的方法
3. Graphical Elements: 专属于map的数据类型转换Graphical element (e.g., points, lines, surfaces, and volumes)
```
有关 V-NLI 研究的文献不断涌现……，

[@Shen_2023_NaturalLanguageInterfaces]()
Shen et al.等人对过去的二十年里近57篇关于利用先进的自然语言处理技术开发的V-NLI系统进行了全面审查，提出对V-NLI技术的信息可视化的pipeline，并针对V-NLI社区未来工作给出相关建议。其中xxx等建议，在本文中也进行了改进。

[@Luo_2022_NaturalLanguageVisualization]()
不同于这篇文章，输入的是一个明确的命令，将其transform成vega-lite用以图表显示。我们的工作输入是一个带有人类主观意识的问题，我们首先需要对问题进行语义解析。

然而现有的技术都是通过……没有充分利用自然语言中的语义信息？太发散，在城市地理分析中，不够适用。



[@Setlur_2021_GeoSneakPiqueVisualAutocompletion]()


###  2.2 Semantic Textual Similarity
[@Shen_2023_NaturalLanguageInterfaces]()
Shen et al. 等人总结了近年里关于语义解析的方法。一种使用传统NLP工具包分词解析；
一种使用LMs，将query转换成embedding再利用神经网络训练。
[Chen_2023_SenseMapUrbanPerformance](Chen_2023_SenseMapUrbanPerformance.md)
Chen et at. 等人从基于位置的社交媒体收集评论，并使用 DistilRoBERTa [18] 模型分析语义信息。将POI和Urban measure的语义信息转换成高维embedding，计算其中的余弦相似以得到位置的语义相似性。但……

### 2.3 VQA
城市信息分析越来越重要，应用之广



## OVERVIEW
> 概要介绍论文的工作，对论文问题的输入和输出做出定义，可以有一些数学符号。再对论文的主要工作做个Summary，也可以介绍一下论文的Pipeline。有数据集也可以在这里进行介绍。




## METHODOLOGY
### Knowledge Base
外挂知识库丰富模型，重点阐述知识库的收集


### Data Transformation
Measures Generation
利用微调好的模型提取

### SenseMap
cosSim, kde, fusion

### Query Interpretation
Task Type Identification
点线面，设计了多条规则
利用向量数据库，根据question embedding找到余弦相似度最高的规则


### Visual Mapping
Data Generation
点集：根据阈值找到最佳的点
线：设定
面：

### Visualization and Annotation Generation


## VISUAL DESIGN
- 自动补全
- 歧义小组件
- 



## USAGE SCENARIOS
### 居住地决策
Q：Where are the most livable locations in Shanghai？

### 旅行路线规划
Q：Please help me plan the most interesting travel route in Shanghai.

## EVALUATION
### Evaluate Similarities with Human Judgment


### Evaluate Semantic Maps with Reference Data


### User Study


## DISCUSSION


## CONCLUSION


