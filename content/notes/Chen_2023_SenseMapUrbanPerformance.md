---
zotero-key: QHHGZAAZ
zt-attachments:
  - "1310"
title: "SenseMap: Urban Performance Visualization and Analytics via Semantic Textual Similarity"
citekey: Chen_2023_SenseMapUrbanPerformance
authors: Juntong Chen, Qiaoyun Huang, Changbo Wang, Chenhui Li
publication: IEEE Transactions on Visualization and Computer Graphics
date: "2023"
tags:
  - 📖PaperReading
---
```ad-info
title-zh:  SenseMap：通过语义文本相似性进行城市绩效可视化和分析
pdf:  [Zotero](zotero://select/library/items/QHHGZAAZ) [attachment](<file:///Users/heavenmei/Zotero/storage/WIII72K3/Chen%20et%20al_2023_SenseMap.pdf>)
```

## Abstract
  随着城市人口的增长，有效获取宜居性和舒适度等城市绩效指标变得越来越重要，因为它们具有重大的社会经济影响。虽然兴趣点 (POI) 数据已用于基于位置的服务中的各种应用，但其城市性能分析的潜力仍未得到开发。在本文中，我们提出了 SenseMap，这是一种利用 POI 数据作为城市功能的语义表示来分析城市绩效的新方法。我们通过计算构建的语料库上的语义文本相似性来量化 POI 对不同城市绩效指标的贡献。我们提出了语义自适应核密度估计，它考虑了 POI 在不同流量分析区域的影响区域和语义贡献，以生成用于测量的语义密度图。我们设计并实施了功能丰富的实时视觉分析系统，供用户探索周围环境的城市表现。人类判断和参考数据的评估证明了我们方法的可行性和有效性。使用场景和用户研究展示了我们系统的能力、可用性和可解释性。
rate: -1
**原文：**
As urban populations grow, effectively accessing urban performance measures such as livability and comfort becomes increasingly important due to their significant socioeconomic impacts. While Point of Interest (POI) data has been utilized for various applications in location-based services, its potential for urban performance analytics remains unexplored. In this paper, we present SenseMap, a novel approach for analyzing urban performance by leveraging POI data as a semantic representation of urban functions. We quantify the contribution of POIs to different urban performance measures by calculating semantic textual similarities on our constructed corpus. We propose Semantic-adaptive Kernel Density Estimation which takes into account POIs' influential areas across different Traffic Analysis Zones and semantic contributions to generate semantic density maps for measures. We design and implement a feature-rich, real-time visual analytics system for users to explore the urban performance of their surroundings. Evaluations with human judgment and reference data demonstrate the feasibility and validity of our method. Usage scenarios and user studies demonstrate the capability, usability and explainability of our system.

## Old Translation

### OVERVIEW


- 形式上，POI 由集合 P = {p1, p2 …, pn} 表示。每个 POI pi 被定义为一个元组 ⟨t, T, (x, y)⟩，包含地理位置 (x, y) 和分类标签 t 和 T 。类别标签 T ，例如教育、交通和生活服务提供了更广泛的分类级别，而类别标签 t ，例如图书馆、公交车站和邮局提供了更精细的分类级别。在我们的 POI 数据中，我们有 113 个类别，分为 12 个类别。要分析的目标绩效衡量标准表示为 M 。用于计算 POI 的语义文本相似性的语料库和性能度量表示为 CM 和 CP。生成的语义图DM是表示每个地理位置的测量得分的二维密度场。 D 是通过组合中间类级别密度图 Dt 生成的。 SemanticMap 的整体流程可以表示为 **(P, M, CM, CP) → DM** ，如图 1 所示。我们的流程构建如下：
1.  数据预处理：为了确保只使用有用的信息并方便用户交互和评估，我们通过过滤琐碎的项目对 POI 数据进行预处理，并将 POI 分为 12 类。我们改进 TAZ 边界以避免交叉或重叠。
2. 语义贡献测量：为了量化不同 POI 对 M 的贡献，我们使用词典定义和上下文文本构建 POI 和 M 的语料库，然后计算它们的语义相似度
3. 语义地图生成：为了准确反映不同 POI 的影响范围和对性能指标的语义贡献，我们提出 SAKDE 作为 KDE 的改进，根据 POI 每个流量分析区域的本地密度及其语料库的语义文本自适应设置内核带宽和权重与绩效衡量的相似之处
4. 交互式视觉分析：为了方便公众对城市绩效进行分析，我们设计了一个实时视觉分析系统，支持语义地图的区域查询和跨测量比较。

### SEMANTICMAP
#### Data Pre-processing
- POI 过滤。我们关注中国上海的POI数据，可以从百度地图2公开获得。原始数据包含大约 460,000 个 POI，分为 122 个类别。我们**排除影响较小的 POI**（例如楼梯、电梯和垃圾桶）以及那些通常被视为较大建筑物或结构的组成部分的 POI。桥梁和道路也被拆除，因为它们更普遍地被视为用于导航目的的交通基础设施而不是目的地。这是通过删除特定类别的 POI 并对 POI 名称应用基于关键字的过滤来实现的。
- POI 分类。过滤后，我们剩下 113 个 POI 类别。然后，我们将这些类别**组织成更广泛的分类级别**的类别。我们按照地形测量 3 提供的方案建立分类法。虽然官方地形测量方案包括 10 个类别，但我们通过将教育和健康类别分为教育和医疗保健来进一步细致化其结构，以更好地反映它们在功能和语义上的差异。我们还添加了“住宅”类别，该类别在原始地形测量方案中未找到，但在我们的 POI 数据中很常见。其他类别保持不变。总共有 12 个类别。然后，我们手动将 POI 类别分配到相应的类别。类别列表和一些示例类如图 3 所示。详细的分类可以在附录中找到。
- TAZ 划分 我们根据 OpenStreetMap 4 获得的道路网络数据来划分 TAZ。我们选择所有主要道路，包括高速公路以及 OSM 代码为 511x 的国家、地区和地方道路作为边界。我们在 ArcGIS Pro 中使用要素到栅格和栅格到面的转换，**从道路网络形状文件创建 TAZ 边界**。然后，我们通过应用 GEOS MakeValid 算法修复无效的自相交多边形 [73]。该算法将自相交的 TAZ 分割成多个有效部分。应用该算法后，我们观察到 277 个 TAZ 表现出重叠区域。我们手动删除它们，总共有 5677 个 TAZ

#### Corpus Construction
- 拥有代表性语料库对于语义地图的质量至关重要，因为它是量化 POI 对不同度量的语义贡献的基础。我们将性能测量的语料库表示为 CM，将不同 POI 类别的语料库表示为 CP = {CPi}|t| 1 ，其中 |t|是 POI 类别的数量。使用定义句子来导出更好的句子嵌入来进行相似性测量，我们使用**定义句子和上下文文本构建我们的语料库。** POI 和绩效指标的定义语句均从 WordNet Synsets [75] 中检索。每个 Synset 代表一个概念或含义，并包含一组同义词。我们使用 POI 类名和性能指标名称查询 Synset，并提取相关含义作为定义句子。例如，POI 类 Gym 的定义句子是“为运动或体育训练配备的体育设施”。
	- 对于上下文文本，我们从基于位置的社交媒体应用程序收集文本用户评论，并选择可以描述 CP POI 功能的评论。
	- 对于CM，我们收集相关网页，包括博客、白皮书、游记、网站和相关研究论文作为初始文件。
- 在这里，每个文件可能描述多种城市绩效衡量标准。因此，在为特定的 M 构建语料库时，我们首先计算每个文档中 M 的词频 F，然后根据 F 对文档进行排序，然后选择前 50% 的文档作为候选文档。候选文档仍然包含不相关的信息，例如广告或表格。为了排除这些信息，我们将候选文档分成单独的句子 {S}in，并选择所有提及 M 的句子 Sn 及其上下文句子 {Si||i − n| ≤ 2}，作为 M 的最终语料库。这里，n表示上下文窗口大小
- 语料库构建过程如图 4 所示。我们总共收集了 1,175 条用户评论（翻译成英文后 238k 词）作为 CM，以及 113 个文档（总共 594k 词，经过过滤和上下文提取后 20k 词）作为 CP，提供绩效衡量和 POI 的综合表示。

#### Semantic Textual Similarity Measurement
- 为了测量测量语料库和 POI 之间的语义文本相似性，我们利用预先训练的语言模型 DistilRoBERTa [18]，它是 RoBERTa [26] 模型的精炼版本，具有更快的速度和更低的内存使用量。该模型在 10 亿个句子对数据集上进行微调，并预测一组随机采样句子中的哪个句子与输入配对。根据 STS 基准 5 上的语义文本相似度，它在多个 SemEval 任务上的 Pearson 相关性方面实现了最先进的语义文本相似度性能。我们首先对语料库进行标记，以获取 POI 名称或度量名称 Tname 的标记、定义句子 Tdef 和上下文文本 Tcontext。模型的输入序列 I 表示为
- 然后，我们使用不同类 POI 数量的加权平均来计算每个 POI 类别 Ti 的语义文本相似度：

#### Semantic-adaptive Kernel Density Estimation
- 度量的语义图 D 的生成包括两个步骤。首先，我们生成类级密度图 Dt。其次，结合Dt生成语义图D，如图5所示。我们提出语义自适应核密度估计（SAKDE）来生成Dt并在4.5节中描述融合过程

## Research Objectives


## Advantage


## Limitations


## Annotations
> [!yellow] Page 1 [link](zotero://open-pdf/library/items/WIII72K3?page=1&annotation=TUP63L3W)
> <p style="color: #ffd400;">Urban performance refers to the ability of an urban area to meet the needs and expectations of its residents in terms of environmental, social, economic, and other aspects [</p>
> 
> 
> ---
> 🔤城市绩效是指城市地区在环境、社会、经济等方面满足居民需求和期望的能力。🔤
> ^TUP63L3WaWIII72K3p1


> [!yellow] Page 1 [link](zotero://open-pdf/library/items/WIII72K3?page=1&annotation=ADNSITRN)
> <p style="color: #ffd400;">Human subjective perceptions of urban areas are challenging to measure and cannot be quantiﬁed through visualizing and analyzing individual domain problems. It is a combination of heterogeneous knowledge and data.</p>
> 
> 
> ---
> 🔤人类对城市地区的主观感知很难测量，并且无法通过可视化和分析个别领域问题来量化。它是异构知识和数据的组合。🔤
> ^ADNSITRNaWIII72K3p1

> [!yellow] Page 2 [link](zotero://open-pdf/library/items/WIII72K3?page=2&annotation=PV7WJE63)
> <p style="color: #ffd400;">We collect comments from locationbased social media and analyze the semantic information with a DistilRoBERTa [18] model.</p>
> 
> 
> ---
> 🔤我们从基于位置的社交媒体收集评论，并使用 DistilRoBERTa [18] 模型分析语义信息。🔤
> ^PV7WJE63aWIII72K3p2

> [!red] Page 6 [link](zotero://open-pdf/library/items/WIII72K3?page=6&annotation=SATLPUPI)
> <p style="color: #ff6666;">But their contribution to urban performance has not been considered. These contributions can be either positive or negative.</p>
> 
> 
> ---
> ^SATLPUPIaWIII72K3p6

> [!yellow] Page 6 [link](zotero://open-pdf/library/items/WIII72K3?page=6&annotation=H9YXUJC7)
> <p style="color: #ffd400;">Based on our trial-and-error experiments, we set λ = 0.75, resulting in 75% coefficients being positive and the remaining 25% negative</p>
> 
> 
> ---
> 🔤根据我们的试错实验，我们设置 λ = 0.75，导致 75% 的系数为正，其余 25% 为负🔤
> ^H9YXUJC7aWIII72K3p6

> [!yellow] Page 9 [link](zotero://open-pdf/library/items/WIII72K3?page=9&annotation=EI865WU8)
> <p style="color: #ffd400;">Filter controls (b2) allow multiple filters for different measures.</p>
> 
> 
> ---
> 筛选功能
> 🔤过滤器控件 (b2) 允许针对不同的度量使用多个过滤器。🔤
> ^EI865WU8aWIII72K3p9

