---
tags:
  - idea
layout: list
---

>UX 稿： https://www.figma.com/file/fdcjvVsktoOZ16cYNkGKBL/Industrial-Map?type=design&node-id=0-1&mode=design&t=TKlMzkMoG5BMAhEp-0


## 技术路线

### Step 1. 提高语义准确性（✅）
更换senseMap模型，提高语义准确性（实验）
**如果衡量是否提高？**
-  定义量化指标
- 做差找出差别最大的地区，进行用户实验，


### Step 2. QA
构建问题，判断问题相关性，提取重要指标，生成地图展示答案



### Step 3. 交互可视化系统
地图QA系统搭建，设计交互





***
# Draft
## ITRODUCTION

**（1）这个工作的背景意义，当前还有什么未被解决，这个未解决的问题又如何如何重要；**
urban performance在城市可视化分析中具有重要意义，尤其是人类主观指标。

senseMap使用操作复杂，学习成本较高。因此，找到一个可行的方法，借助准确且直观的系统来更好的帮助用户探索城市分析是非常有必要的。



**（2）以前的论文工作如何如何，但不能很好地解决我们提出的这个问题；**
可视化的自然语言界面（V-NLI）的出现可以大大提高可视化工具的可用性，目前已在多个领域应用，……。由于人类语言的模糊性，用户的提问大多都具有很大的主观性，不能详细描述

因此，我们定义了一个新的地理可视化问题，*如何将自然语言利用文本相似度分析urban performance 转换成地理数据用以进行城市地理可视化分析*。


**（3）我们论文的工作如何能解决我们所提出的问题，论文工作的Overview；**
在本文中，我们提出了SenseMapQA，这是一种分析自然语言中关于城市绩效的主观语义信息，生成用于城市分析的地理可视化数据的方法。

因此，我们引入了一种新颖的pipeline，我们扩充了POI的语义数据，利用先进的LLMs方法，感知提取并扩充自然语言提问中的urban performance measures corpus，并根据文本相似度将自然语言transformer to 地理数据GeoJson



**Contributions.** In this work, we make several contributions, including:
1.  我们对现有的senseMap生成方式进行了改进。
	- 改用 LLM 后可以得到之前无法得到的 performance measure 结果.
	- ~~我们考虑并改进了KDE过程，引入负语义信息对POI的影响，更加准确~~
	- 我们同样使用了经济繁荣性和房价进行评估，可以得到的比先前工作更好的结果
2. 我们引入了一种新颖的pipeline，用以将自然语言翻译为地理数据GeoJson。
3. 我们设计了一个map可视化交互系统，在结果呈现上加入更多自然语言问答的交互和结果的可解释可视化
	- 文本可视化，可解释可视化
	- 例如:套索选择后弹出可视化+生成文本+源文本的解释
	- 相似区域的推荐(综合数值和语义)


## RELATED WORK
### Semantic Textual Similarity
[Chen_2023_SenseMapUrbanPerformance](Chen_2023_SenseMapUrbanPerformance.md)

**Advantage:** 


**Limitation：**
1. 语义指标是提前指定的，且只有8个，不够丰富
2. 由Bert模型进行embedding，效果不理想？？


### Natural Language Interfaces for Visualization
```ad-tip
1. Ambiguity Widgets: 歧义小部件的处理（prompt）
2. Task Identify:任务推断的方法
3. Graphical Elements: 专属于map的数据类型转换Graphical element (e.g., points, lines, surfaces, and volumes)
```

[@Luo_2022_NaturalLanguageVisualization]()
不同于这篇文章，输入的是一个明确的命令，将其transform成vega-lite用以图表显示。我们的工作输入是一个带有人类主观意识的问题，我们首先需要对问题进行语义解析。

然而现有的技术都是通过……没有充分利用自然语言中的语义信息？太发散，在城市地理分析中，不够适用。

[@Shen_2023_NaturalLanguageInterfaces]()
综述性文章，指出了

[@Setlur_2021_GeoSneakPiqueVisualAutocompletion]()
### Urban  Visual



## METHOD
### Data Processing（后置）


### Data Transformation
#### Measures Generation
利用微调好的模型提取

#### Similarity



### Visual Mapping
#### Task Type Identification
点线面，设计了多条规则
利用向量数据库，根据question embedding找到余弦相似度最高的规则

#### Data Generation
点：max
线：最优化路径
面：
### Visualization and Annotation Generation


## SYSTEM DESIGN



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