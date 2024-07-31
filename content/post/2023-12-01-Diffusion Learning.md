---
title: Diffusion Learning
subtitle: 
layout: post
date: 2023-12-01
author: heavenmei
categories:
  - Post
description: 
tags:
  - Academic
url: /2023-12-01-Diffusion Learning
image:
---


![Untitled.png](https://raw.githubusercontent.com/heavenmei/heavenmei.github.io/master/images/202312121119465.png)
## 评价指标

### Frechet Inception Distance（FID）

评价一张图片的好坏，首先需要一个训练好的分类器，然后比较生成图片与真实图片representation之间的距离，距离越小越好，这需要大量图片来测量。

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/568ff324-820e-4458-94c0-e72a5b6a8e65/ab32932e-bd14-4d15-8f07-f8a7c6cbab59/Untitled.png)

### ****Contrastive Language-Image Pre-Training（CLIP）****

使用CLIP模型根据对应的文字描述来判断生成图像的质量。400million text-image pairs

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/568ff324-820e-4458-94c0-e72a5b6a8e65/c2e08dfd-038a-4e6b-b309-b5468c97cb45/Untitled.png)

## Diffusion Model原理 [DDPM](https://arxiv.org/abs/2006.11239)

### 去噪声（生成）

不同时序使用的是**同一个denoise模型**，但是因为输入图片的状态有很大的不同，所以需要把step本身也输入到denoise模型，让它知道当前图片的去噪状况。

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/568ff324-820e-4458-94c0-e72a5b6a8e65/e2165ea8-9a3e-4a71-85cf-03fcb86bd597/Untitled.png)

Denoise模块中存在一个Predicter，它用来预测输入图片的噪声，再用要被denoise的图片减去噪声就可以得到denoise之后的图片了。

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/568ff324-820e-4458-94c0-e72a5b6a8e65/5b5b5fee-eef5-4232-9bd6-84bbd4c29ccb/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/568ff324-820e-4458-94c0-e72a5b6a8e65/04f30b69-2ba4-4b55-b86b-3bae8be58906/Untitled.png)

### 加噪声（训练）

那么这个Noise Predicter如何训练呢？在训练时，我们首先需要根据原始无噪声的图片认为生成Predicter的噪声Ground truth。

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/568ff324-820e-4458-94c0-e72a5b6a8e65/09513c5b-d848-46f1-8b50-78724bf6a1d7/Untitled.png)

在forward process（前向过程）中已经存储了GT，得到了标签。

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/568ff324-820e-4458-94c0-e72a5b6a8e65/6b58c56a-6008-401a-9b0d-e27947f04d4d/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/568ff324-820e-4458-94c0-e72a5b6a8e65/d497cf60-bce6-4b2f-9bd1-2e35e4801f27/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/568ff324-820e-4458-94c0-e72a5b6a8e65/8b212294-180e-43bf-9b9f-cff8b4482f13/Untitled.png)

## Text2Image框架

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/568ff324-820e-4458-94c0-e72a5b6a8e65/4bc084c0-52d2-451f-a2c2-f696f7d22757/Untitled.png)

从这个framework中可以看出，文字是没有办法直接输入到模型中的，首先需要一个encoder（GPT,BERT）将文本编码成token，再和噪声一起输入到生成模型（也就是diffusion模型），得到的中间产物最后通过一个decoder生成最终的图像。**其中decoder的训练数据可以不需要标签。**

### ****Stable Diffusion、DALL-E、Imagen****各自框架

> [Stable Diffusion](https://www.notion.so/High-Resolution-Image-Synthesis-with-Latent-Diffusion-Models-66e17659d5e145ea93ed2eaef546d1aa?pvs=21)
> 
> ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/568ff324-820e-4458-94c0-e72a5b6a8e65/b4000e36-993d-4d92-9eca-e5ae94c34f3f/Untitled.png)

> DALLE-E
> 
> ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/568ff324-820e-4458-94c0-e72a5b6a8e65/3a0a2626-17e4-47f5-97eb-f731ec71e0ce/Untitled.png)

> Imagen
> 
> ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/568ff324-820e-4458-94c0-e72a5b6a8e65/d8a3db67-2e42-4fae-a1b3-57dcb3a66bbd/Untitled.png)

### Decoder

Decoder的输入有两种情况，一种是denoise图片的压缩版本（imagen），一种是latent representation（stable diffusion）。对于前者非常简单，只需要拿很多downsample的图片来训练就可以了。对于后者需要训练一个auto encoder，把decoder拿出来。**decoder的训练数据可以不需要标签**

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/568ff324-820e-4458-94c0-e72a5b6a8e65/ea9fd821-b38b-4e77-89a2-25bc1a224140/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/568ff324-820e-4458-94c0-e72a5b6a8e65/924e059b-04e6-43ea-a5cd-ae272dc3bf8b/Untitled.png)

### Generation Model

对于framework中的生成模型，noise加在中间产物（latent representation）上而不是原始图像上。