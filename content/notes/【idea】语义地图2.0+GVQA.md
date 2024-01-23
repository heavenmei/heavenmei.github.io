---
tags:
  - idea
layout: list
---
> 
> UX 稿： https://www.figma.com/file/fdcjvVsktoOZ16cYNkGKBL/Industrial-Map?type=design&node-id=0-1&mode=design&t=TKlMzkMoG5BMAhEp-0


## Motivation
GPT回答这类问题很粗糙，也不直观
![](assets/Pasted%20image%2020240118151423.png)
可以利用GPT提炼出相关指标，重构语料库，生成新的语义地图
![](assets/Pasted%20image%2020240118151607.png)
再回答相应问题


**创新点：**
1. 换模型，生成新的语义地图8章
2. 解析问题，增量知识库，理解问题
	1. 问题相关性
3. 问题的答案，地图的呈现




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




## Related Work
###  SenseMap:
![](assets/Pasted%20image%2020240120125130.png)
![](assets/Pasted%20image%2020240120135840.png)
指定8个语义指标（Measure Corpus）POI语料库（POI Corpus），将二者利用Sbert/Openai embedding
计算M-P之间的余弦相似度（即语义相似度）
**S1. 现阶段利用原有的数据集，将Bert模型替换成GPT** 
> S1-Q： 如何衡量替换之后的优劣？？衡量指标？？



**Limitation：**
1. 语义指标是提前指定的，且只有8个，不够丰富
2. 由Bert模型进行embedding，效果不理想？？


