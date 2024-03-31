---
zotero-key: JEK3MWBZ
zt-attachments:
  - "1336"
title: "Towards Natural Language Interfaces for Data Visualization: A Survey"
citekey: Shen_2023_Natural
authors: Leixian Shen, Enya Shen, Yuyu Luo, Xiaocong Yang, Xuming Hu, Xiongshuai Zhang, Zhiwei Tai, Jianmin Wang
publication: IEEE Transactions on Visualization and Computer Graphics
date: "2023"
tags:
  - 📖PaperReading
---
```ad-info
title-zh:  面向数据可视化的自然语言界面：一项调查
pdf:  [Zotero](zotero://select/library/items/JEK3MWBZ) [attachment](file:///Users/heavenmei/Zotero/storage/5MX56RJV/Towards_Natural_Language_Interfaces_for_Data_Visualization_A_Survey.pdf)
```

## Abstract
  利用面向可视化的自然语言界面 (V-NLI) 作为补充输入方式来直接操作视觉分析可以提供引人入胜的用户体验。它使用户能够专注于他们的任务，而不必担心如何操作界面上的可视化工具。在过去的二十年里，尤其是近年来，利用先进的自然语言处理技术，学术研究和商业软件中开发了众多的V-NLI系统。在本文中，我们对现有的 V-NLI 进行了全面审查。为了对每篇论文进行分类，我们基于经典信息可视化管道和 V-NLI 层的扩展开发了分类维度。使用以下七个阶段：查询解释、数据转换、可视化映射、视图转换、人机交互、对话管理和演示。最后，我们还阐明了 V-NLI 社区未来工作的几个有希望的方向。
rate: 3
**原文：**
Utilizing Visualization-oriented Natural Language Interfaces (V-NLI) as a complementary input modality to direct manipulation for visual analytics can provide an engaging user experience. It enables users to focus on their tasks rather than having to worry about how to operate visualization tools on the interface. In the past two decades, leveraging advanced natural language processing technologies, numerous V-NLI systems have been developed in academic research and commercial software, especially in recent years. In this article, we conduct a comprehensive review of the existing V-NLIs. In order to classify each paper, we develop categorical dimensions based on a classic information visualization pipeline with the extension of a V-NLI layer. The following seven stages are used: query interpretation, data transformation, visual mapping, view transformation, human interaction, dialogue management, and presentation. Finally, we also shed light on several promising directions for future work in the V-NLI community.

## Research Objectives
- 近年来，有关V-NLI的相关研究文献不断涌现，本文收集了 57 篇关于接受自然语言作为输入和输出可视化的 VNLI 的论文，对文献进行组织分类并全面分析概括。

- 基于经典信息可视化管道和 V-NLI 层的扩展开发了分类维度，提出了新的信息可视化pipeline，包含以下七个阶段：查询解释、数据转换、可视化映射、视图转换、人机交互、对话管理和演示。

## Advantage
查询解释：
- 4.1 语义解析，一种使用传统NLP工具包分词解析；一种使用LMs，将query转换成embedding再利用神经网络训练
 - 4.2 任务识别，一种训练task model，一种基于规则的对比匹配
 - 4.3 数据属性推断， 引入歧义小部件
 
数据转换：
- ==大多数都是处理表格数据，而且只展示原始数据而不进行数据转换==
- 为了扩充数据的准确性，外接数据库，将query转SQL查询

可视化映射：
- 空间基底： xy轴
- 图形元素： 点线面体
- 图形属性：形状、颜色、大小等

视图转换：
- 很少使用


人机交互：
- 歧义部件
- 自动补充，推荐指令
- 多模态（AR）

对话管理：
- 对话上下文管理

演示：
- 注释，可解释性

## Limitations
- 领域知识、外接数据库
- 更先进的NLP model
- 交互上，为用户提供更丰富的prompt
- 交互上，联系上下文推断用户意图

## Annotations

> [!red] Page 1 [link](zotero://open-pdf/library/items/5MX56RJV?page=1&annotation=J4PERIQT)
> <p style="color: #ff6666;">However, designing and implementing V-NLIs is challenging due to the ambiguous and underspeciﬁed nature of human language, the complexity of maintaining context in a conversational ﬂow, and the lack of discoverability (communicating to users what the system can do)</p>
> 
> 
> ---
> 🔤然而，由于人类语言的模糊性和不明确性、在会话流中维护上下文的复杂性以及缺乏可发现性（向用户传达系统可以做什么），设计和实现 V-NLI 具有挑战性。🔤
> ^J4PERIQTa5MX56RJVp1

> [!red] Page 2 [link](zotero://open-pdf/library/items/5MX56RJV?page=2&annotation=YPB55EDV)
> <p style="color: #ff6666;">Literature on V-NLI research is proliferating, covering aspects such as Visualization (VIS), Human-Computer Interaction (HCI), Natural Language Processing (NLP), and Data Mining and Management (DMM). As a result, there is an increasing need to better organize the research landscape, categorize current work, identify knowledge gaps, and assist people who are new to this growing area to understand the challenges and subtleties in the community</p>
> 
> 
> ---
> 🔤有关 V-NLI 研究的文献不断涌现，涵盖可视化 (VIS)、人机交互 (HCI)、自然语言处理 (NLP) 和数据挖掘与管理 (DMM) 等方面。因此，越来越需要更好地组织研究领域，对当前工作进行分类，确定知识差距，并帮助刚接触这个不断发展的领域的人们了解社区中的挑战和微妙之处🔤
> ^YPB55EDVa5MX56RJVp2

> [!yellow] Page 2 [link](zotero://open-pdf/library/items/5MX56RJV?page=2&annotation=9GRH7UFI)
> <p style="color: #ffd400;">we focused on visualization-oriented natural language interfaces, which accept natural language queries as input and output appropriate visualizations automatically.</p>
> 
> 
> ---
> 🔤我们专注于面向可视化的自然语言界面，它接受自然语言查询作为输入并自动输出适当的可视化。🔤
> ^9GRH7UFIa5MX56RJVp2

> [!yellow] Page 3 [link](zotero://open-pdf/library/items/5MX56RJV?page=3&annotation=TTLQ2YDZ)
> <p style="color: #ffd400;">Finally, we collected 57 papers about VNLI that accepts natural language as input and outputs visualizations.</p>
> 
> 
> ---
> 🔤最后，我们收集了 57 篇关于接受自然语言作为输入和输出可视化的 VNLI 的论文。🔤
> ^TTLQ2YDZa5MX56RJVp3


> [!yellow] Page 3 [link](zotero://open-pdf/library/items/5MX56RJV?page=3&annotation=SVHUW4JF)
> <p style="color: #ffd400;">The three elements of visual mapping for information visualization are spatial substrate, graphical elements, and graphical properties [28].</p>
> 
> 
> ---
> Visual Mapping (C):
> transform NL queries to visual structures data. 空间基底、图形元素和图形属性.
> visual element: points, lines, surfaces, and volumes
> ^SVHUW4JFa5MX56RJVp3

> [!yellow] Page 3 [link](zotero://open-pdf/library/items/5MX56RJV?page=3&annotation=QFMJQTPC)
> 
> ![](notes/assets/QFMJQTPC.png)
> ---
> ^QFMJQTPCa5MX56RJVp3

> [!yellow] Page 4 [link](zotero://open-pdf/library/items/5MX56RJV?page=4&annotation=I5XYWWUH)
> <p style="color: #ffd400;">QUERY INTERPRETATION</p>
> 
> 
> ---
> 通过语义和语法分析，发现query的层次结构，挖掘数据属性，解析任务。难点在于模糊和不明确的NL
> ^I5XYWWUHa5MX56RJVp4

> [!yellow] Page 4 [link](zotero://open-pdf/library/items/5MX56RJV?page=4&annotation=C5FBQH2W)
> <p style="color: #ffd400;">tokenization, identifying parts-of-speech (POS) tags, recognizing name entities, removing stop words, performing stemming, creating a dependency tree, generating N-grams, etc</p>
> 
> 
> ---
> 语义解析器的工作
> 🔤分词、识别词性 (POS) 标签、识别名称实体、删除停用词、执行词干提取、创建依赖树、生成 N 元语法等🔤
> ^C5FBQH2Wa5MX56RJVp4

> [!green] Page 4 [link](zotero://open-pdf/library/items/5MX56RJV?page=4&annotation=UXP7Y2CV)
> <p style="color: #5fb236;">Flowsense [273] is a natural language interface designed for a dataflow visualization system [272]. It applies a semantic parser with special utterances (table column names, node labels, node types, and dataset names) tagging and placeholders. Fig. 4 displays a parse tree for the derivation of the user’s query.</p>
> 
> 
> ---
> 🔤Flowsense [273] 是为数据流可视化系统 [272] 设计的自然语言界面。它应用带有特殊话语（表列名称、节点标签、节点类型和数据集名称）标记和占位符的语义解析器。图 4 显示了用于推导用户查询的解析树。🔤
> ^UXP7Y2CVa5MX56RJVp4

> [!yellow] Page 4 [link](zotero://open-pdf/library/items/5MX56RJV?page=4&annotation=C8RSBUYH)
> <p style="color: #ffd400;">In addition, recently, there have been some systems that do not rely on these tools but leverage Language Models (LMs) to directly “interpret” queries [143], [150]. They first generate a rich representation of the input by translating them into highdimensional vectors and then adopt neural networks to enable smart visualization inference.</p>
> 
> 
> ---
> 🔤此外，最近出现了一些不依赖这些工具而是利用语言模型（LM）直接“解释”查询的系统[143]，[150]。他们首先通过将输入转换为高维向量来生成输入的丰富表示，然后采用神经网络来实现智能可视化推理。🔤
> ^C8RSBUYHa5MX56RJVp4

> [!yellow] Page 4 [link](zotero://open-pdf/library/items/5MX56RJV?page=4&annotation=CZGPIMF2)
> <p style="color: #ffd400;">However, they are trained on NLP datasets, thus lacking adequate consideration of visualization elements (e.g., mark, visual channel, and encoding property).</p>
> 
> 
> ---
> 🔤然而，它们是在 NLP 数据集上进行训练的，因此缺乏对可视化元素（例如标记、视觉通道和编码属性）的充分考虑。🔤
> ^CZGPIMF2a5MX56RJVp4

> [!green] Page 6 [link](zotero://open-pdf/library/items/5MX56RJV?page=6&annotation=YCRMXILU)
> <p style="color: #5fb236;">Recently, Shen et al. [211] summarized 18 classical analytic tasks by a survey covering both academia and industry.</p>
> 
> 
> ---
> 🔤最近，沉等人。 [211]通过一项涵盖学术界和工业界的调查总结了 18 项经典分析任务。🔤
> ^YCRMXILUa5MX56RJVp6

> [!yellow] Page 6 [link](zotero://open-pdf/library/items/5MX56RJV?page=6&annotation=K83AWB89)
> <p style="color: #ffd400;">few visualization systems have attempted to infer the user’s analytic task before the emergence of natural language interfaces.</p>
> 
> 
> ---
> 🔤在自然语言界面出现之前，很少有可视化系统尝试推断用户的分析任务。🔤
> ^K83AWB89a5MX56RJVp6

> [!yellow] Page 7 [link](zotero://open-pdf/library/items/5MX56RJV?page=7&annotation=LLK8LBDA)
> <p style="color: #ffd400;">Most systems infer the analytic tasks by comparing the query tokens to a predefined list of task keywords [63], [83], [174], [205], [239], [273].</p>
> 
> 
> ---
> 通过对比query和task keywords匹配任务
> 🔤大多数系统通过将查询标记与预定义的任务关键字列表进行比较来推断分析任务[63]、[83]、[174]、[205]、[239]、[273]。🔤
> ^LLK8LBDAa5MX56RJVp7

> [!green] Page 7 [link](zotero://open-pdf/library/items/5MX56RJV?page=7&annotation=285DM2QL)
> <p style="color: #5fb236;">NL4DV [174] identifies five low-level analytic tasks: Correlation, Distribution, Derived Value, Trend,andFilter. A task keyword list is integrated internally (e.g., Correlation task includes ‘correlate,’ ‘relationship,’ etc., Distribution task includes ‘range,’ ‘spread,’ etc.). NL4DV also leverages POS tags and query parsing results to model the relationship between query phrases and populate task details.</p>
> 
> 
> ---
> 🔤NL4DV [174] 确定了五个低级分析任务：相关性、分布、导出值、趋势和过滤器。内部集成了任务关键字列表（例如，关联任务包括“关联”、“关系”等，分布任务包括“范围”、“传播”等）。 NL4DV 还利用 POS 标签和查询解析结果来对查询短语之间的关系进行建模并填充任务详细信息。🔤
> ^285DM2QLa5MX56RJVp7

> [!red] Page 7 [link](zotero://open-pdf/library/items/5MX56RJV?page=7&annotation=44PZPRG2)
> <p style="color: #ff6666;">Besides, rule-based approaches account for the majority; various advanced learning models provide a great opportunity to infer analytic tasks in an unbiased and rigorous manner</p>
> 
> 
> ---
> 🔤此外，基于规则的方法占大多数；各种先进的学习模型提供了以公正和严格的方式推断分析任务的绝佳机会🔤
> ^44PZPRG2a5MX56RJVp7

> [!red] Page 7 [link](zotero://open-pdf/library/items/5MX56RJV?page=7&annotation=2AV32SE2)
> <p style="color: #ff6666;">However, when it comes to underspeciﬁed or vague queries (e.g., include synonym, abbreviation, and terminology in different ﬁelds), these systems often fail to generate appropriate visualizations</p>
> 
> 
> ---
> 🔤然而，当涉及未指定或模糊的查询（例如，包括不同领域的同义词、缩写和术语）时，这些系统通常无法生成适当的可视化🔤
> ^2AV32SE2a5MX56RJVp7


> [!yellow] Page 8 [link](zotero://open-pdf/library/items/5MX56RJV?page=8&annotation=8PJ8F9MW)
> <p style="color: #ffd400;">To describe related works, we categorize tabular data into four types: temporal, quantitative, nominal, and ordinal, which are widely adopted in the visualization community [168].</p>
> 
> 
> ---
> 🔤为了描述相关工作，我们将表格数据分为四种类型：时间数据、定量数据、名义数据和序数数据，这些数据在可视化社区中被广泛采用[168]。🔤
> ^8PJ8F9MWa5MX56RJVp8

> [!red] Page 8 [link](zotero://open-pdf/library/items/5MX56RJV?page=8&annotation=XX3M4VIA)
> <p style="color: #ff6666;">Besides, to our knowledge, most V-NLIs are designed to deal with tabular data, but there are also several systems that focus on speciﬁc data types (e.g., network [231] and map [204]). However, they mostly only display the raw data without data transformations.</p>
> 
> 
> ---
> 🔤此外，据我们所知，大多数 V-NLI 都是为处理表格数据而设计的，但也有一些系统专注于特定的数据类型（例如网络[231]和地图[204]）。然而，它们大多只显示原始数据，而不进行数据转换。🔤
> ^XX3M4VIAa5MX56RJVp8

> [!yellow] Page 8 [link](zotero://open-pdf/library/items/5MX56RJV?page=8&annotation=ADC6B6PV)
> <p style="color: #ffd400;">So a practical system should be in a position to automatically recommend data insights for users.</p>
> 
> 
> ---
> 🔤因此，一个实用的系统应该能够自动为用户推荐数据见解。🔤
> ^ADC6B6PVa5MX56RJVp8

> [!yellow] Page 8 [link](zotero://open-pdf/library/items/5MX56RJV?page=8&annotation=NIDWUJWW)
> <p style="color: #ffd400;">Natural Language Interface for Database (NLI4DB), or Text-toSQL, is a task to automatically translate a user’s query text in natural language into an executable query for databases like SQL [6]</p>
> 
> 
> ---
> 🔤数据库自然语言接口 (NLI4DB) 或 Text-toSQL 是一项自动将用户的自然语言查询文本转换为 SQL 等数据库的可执行查询的任务 [6]🔤
> ^NIDWUJWWa5MX56RJVp8

> [!red] Page 9 [link](zotero://open-pdf/library/items/5MX56RJV?page=9&annotation=4MK6ZMBC)
> <p style="color: #ff6666;">Graphical element (e.g., points, lines, surfaces, and volumes), which is usually named mark or chart type, is an important part of visualizations.</p>
> 
> 
> ---
> 🔤图形元素（例如点、线、面、体）通常被称为标记或图表类型，是可视化的重要组成部分。🔤
> ^4MK6ZMBCa5MX56RJVp9

> [!yellow] Page 10 [link](zotero://open-pdf/library/items/5MX56RJV?page=10&annotation=R37D3NY5)
> <p style="color: #ffd400;">Jacques Bertin ﬁrst identiﬁed seven “retinal” graphical properties (visual encoding properties) in visualizations: position, size, value, texture, color, orientation, and shape.</p>
> 
> 
> ---
> 🔤Jacques Bertin 首先确定了可视化中的七个“视网膜”图形属性（视觉编码属性）：位置、大小、值、纹理、颜色、方向和形状。🔤
> ^R37D3NY5a5MX56RJVp10

> [!green] Page 10 [link](zotero://open-pdf/library/items/5MX56RJV?page=10&annotation=MBDMIVNF)
> <p style="color: #5fb236;">Besides, Text-to-Viz [41] integrates a color module that aims to generate a set of color palettes for a speciﬁc infographic. Similarly, InfoColorizer [275] recommends color palettes for infographics in an interactive and dynamic manner.</p>
> 
> 
> ---
> 🔤此外，Text-to-Viz [41] 集成了一个颜色模块，旨在为特定信息图生成一组调色板。类似地，InfoColorizer [275] 以交互和动态的方式推荐信息图表的调色板。🔤
> ^MBDMIVNFa5MX56RJVp10

> [!red] Page 10 [link](zotero://open-pdf/library/items/5MX56RJV?page=10&annotation=J9H4CNCK)
> <p style="color: #ff6666;">One is to generate appropriate defaults by inferencing underspeciﬁed natural language utterances, discussed in Section 4.4. The other is to return the decision right to users through ambiguity widgets.</p>
> 
> 
> ---
> 🔤一种是通过推断未指定的自然语言话语来生成适当的默认值，这将在 4.4 节中讨论。另一种是通过歧义小部件将决策权归还给用户。🔤
> ^J9H4CNCKa5MX56RJVp10


> [!red] Page 15 [link](zotero://open-pdf/library/items/5MX56RJV?page=15&annotation=28Z3NJJP)
> <p style="color: #ff6666;">A major limitation of most existing V-NLI systems is the absence of domain knowledge.</p>
> 
> 
> ---
> 🔤大多数现有 V-NLI 系统的主要限制是缺乏领域知识。🔤
> ^28Z3NJJPa5MX56RJVp15

> [!green] Page 15 [link](zotero://open-pdf/library/items/5MX56RJV?page=15&annotation=J77M4D2E)
> <p style="color: #5fb236;">CogNet [249], a knowledge base dedicated to integrating various existing knowledge bases (e.g., FrameNet, YAGO, Freebase, DBpedia, Wikidata, and ConceptNet), may be useful for broadening the repertoire of utterances supported.</p>
> 
> 
> ---
> 🔤CogNet [249] 是一个致力于集成各种现有知识库（例如 FrameNet、YAGO、Freebase、DBpedia、Wikidata 和 ConceptNet）的知识库，可能有助于扩大支持的话语库。🔤
> ^J77M4D2Ea5MX56RJVp15

> [!yellow] Page 16 [link](zotero://open-pdf/library/items/5MX56RJV?page=16&annotation=N4X3MZ7N)
> <p style="color: #ffd400;">However, just considering the semantics of the NL query is limited, and the semantics of the dataset should also be taken into consideration. The existing technologies for data attribute matching only conﬁne to the letter-matching level but do not go deep into the semantic-matching level, as described in Section 4.3.</p>
> 
> 
> ---
> 🔤然而，仅仅考虑NL查询的语义是有限的，还应该考虑数据集的语义。现有的数据属性匹配技术仅局限于字母匹配级别，而没有深入到语义匹配级别，如4.3节所述。🔤
> ^N4X3MZ7Na5MX56RJVp16

> [!green] Page 16 [link](zotero://open-pdf/library/items/5MX56RJV?page=16&annotation=RRYLYG7N)
> <p style="color: #5fb236;">A promising way to augment semantic interpretation ability is to connect with recent semantic data type detection models for visualization like Sherlock [90], Sato [278], ColNet [31], DCOM [156], EXACTA [267], and Doduo [238]</p>
> 
> 
> ---
> 🔤增强语义解释能力的一种有前途的方法是与最新的语义数据类型检测模型连接以进行可视化，例如 Sherlock [90]、Sato [278]、ColNet [31]、DCOM [156]、EXACTA [267] 和 Doduo [238] ]🔤
> ^RRYLYG7Na5MX56RJVp16

> [!yellow] Page 16 [link](zotero://open-pdf/library/items/5MX56RJV?page=16&annotation=T26BPF4Z)
> <p style="color: #ffd400;">The user may not be aware of what input is valid and what chart types are supported by the system with open-ended textboxes. As described in Section 8.2, discoverability has received relatively little attention in current V-NLIs compared to other characteristics.</p>
> 
> 
> ---
> 🔤用户可能不知道什么输入是有效的以及具有开放式文本框的系统支持什么图表类型。如第 8.2 节所述，与其他特性相比，可发现性在当前的 V-NLI 中受到的关注相对较少。🔤
> ^T26BPF4Za5MX56RJVp16

> [!green] Page 16 [link](zotero://open-pdf/library/items/5MX56RJV?page=16&annotation=R73DYV7N)
> <p style="color: #5fb236;">etlur et al. [206] conducted a crowdsourcing study regarding the efﬁcacy of autocompletion suggestions. The insights drawn from the studies are of great value to inspire the future design of V-NLI</p>
> 
> 
> ---
> 🔤埃特鲁尔等人[206]进行了一项关于自动完成建议的功效的众包研究。研究得出的见解对于启发 V-NLI 的未来设计具有重要价值🔤
> ^R73DYV7Na5MX56RJVp16

> [!green] Page 16 [link](zotero://open-pdf/library/items/5MX56RJV?page=16&annotation=QC3273JU)
> <p style="color: #5fb236;">Recently, Zehrung et al. [276] conducted a crowdsourcing study analyzing trust in humans versus algorithmically generated visualization recommendations. Based on the results, they suggested that the recommendation system should be customized according to the speciﬁc user’s information search strategy. Personalized information derived from historical user interaction and context can provide a richer model to satisfy the user’s analytic tasks. A large number of innovative models in the recommendation system [281] can also be applied for reference</p>
> 
> 
> ---
> 🔤最近，Zehung 等人。 [276]进行了一项众包研究，分析对人类的信任与算法生成的可视化建议。根据结果​​，他们建议推荐系统应根据特定用户的信息搜索策略进行定制。从历史用户交互和上下文中得出的个性化信息可以提供更丰富的模型来满足用户的分析任务。推荐系统中的大量创新模型[281]也可以借鉴🔤
> ^QC3273JUa5MX56RJVp16

> [!green] Page 17 [link](zotero://open-pdf/library/items/5MX56RJV?page=17&annotation=PQFHTCBT)
> <p style="color: #5fb236;">To assist the deployment of learning-based techniques for parsing human language, Fu et al. [61] proposed Quda, containing diverse user queries annotated with analytic tasks</p>
> 
> 
> ---
> 🔤为了协助部署基于学习的技术来解析人类语言，Fu 等人。 [61]提出了 Quda，包含用分析任务注释的不同用户查询🔤
> ^PQFHTCBTa5MX56RJVp17



> [!red] Page 15 [link](zotero://open-pdf/library/items/5MX56RJV?page=15&annotation=8CNDCM9Z)
> <p style="color: #ff6666;">The performance of V-NLI depends to a great extent on NLP models. As shown in Table 3 (column NLP Toolkit or Technology and column Recommendation Algorithm), most of the existing V-NLI systems just apply hand-crafted grammar rules or typical NLP toolkits for convenience. Recently, several state-of-the-art NLP models have reached human performance in speciﬁc tasks, such as ELMO [179], BERT [49], GPT-3 [25], and CPM-2 [283]. S</p>
> 
> 
> ---
> 🔤V-NLI的性能很大程度上取决于NLP模型。如表3（NLP工具包或技术栏和推荐算法栏）所示，大多数现有的V-NLI系统只是为了方便而应用手工编写的语法规则或典型的NLP工具包。最近，一些最先进的 NLP 模型已经在特定任务中达到了人类的表现，例如 ELMO [179]、BERT [49]、GPT-3 [25] 和 CPM-2 [283]。 S🔤
> ^8CNDCM9Za5MX56RJVp15

