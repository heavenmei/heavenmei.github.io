---
title: LaTex 使用技巧
tags:
  - skill
layout: list
categories:
  - Note
---

**高亮**： `\hl` (`usepackage{soul}`)

**新开页：** `\clearpage` 
**新开一列**：  `\newpage` 

**Figure**

```latex
\begin{figure}
\centering
\includegraphics[width=0.8\textwidth,height=0.5\textwidth]{the.png}
\caption{The caption} \label{fig1}
\end{figure}

```

**Algorithm**
```latex
\usepackage{algorithm}
\usepackage{algorithmicx}
\usepackage{algpseudocode}  % 这个和algorithmic不兼容，
\renewcommand{\algorithmiccomment}[1]{\\$\triangleright$ #1}
\renewcommand{\algorithmicrequire}{ \textbf{Input:}}    
\renewcommand{\algorithmicensure}{ \textbf{Output:}}   


\begin{algorithm}[t]
	\caption{pix2pix-zero algorithm}
	\label{alg:example}
	\begin{algorithmic}
		\Require  $x_T$ (same as $x_{inv}$): noise-regularized DDIM inversion of latent code corresponding to $\bar{x}$
		\\ c: input text features, $\Delta c_{edit}$: edit direction
		\\ $\lambda_{xa}$: cross-attention guidance weight
		\vspace{1em}
		\Ensure  $x_0$ (final edited latent code)

        \vspace{1em}
		\Comment Compute reference cross-attention map
		\For{$t=T \dots 1$ }
    	\State ${\hat{\epsilon},M_{t}^{\mathrm{ref}} \leftarrow \epsilon_{\theta}(x_{t},t,c)}$ 
            \State ${ { x_{t-1} =\mathrm{UPDATE}(x_{t},\hat{\epsilon},t)} }$
		\EndFor

        \vspace{1em}
		\Comment Compute reference cross-attention map
        \State $c_{edit}=c + \Delta c_{edit}$
		\For{$t=T \dots 1$ }
            \State --, $M_{t}^{ref} \leftarrow \epsilon_{\theta}( x_{t},t , c_{edit} )$
            \State $\displaystyle\Delta x_{t}=\nabla_{x_{t}}\bigl(||M_{t}^{edit}-M_{t}^{ref}||_{2}\bigr)$
            \State $\bar{\epsilon}$, --$\leftarrow \epsilon_{\theta}( x_t - \lambda_{xa} \Delta x_t, t, c_{edit})$
            \State $t-1\leftarrow \mathrm{UPDATE}(x_{t},\bar{\epsilon},t)$
		\EndFor

        \vspace{1em}
        \Comment Update current state $x_t$ with noise prediction $\bar{\epsilon}$
		\Function{UPDATE}{$x_t, \bar{\epsilon},t$}
		  \State $x_{t-1}=\sqrt{x_{t-1}}\ \frac{x_{t}-\sqrt{1-x_{t}}\hat{\epsilon}}{\sqrt{x_{t}}}\ +\ \sqrt{1-x_{t-1}}\hat{\epsilon} $;
            \State \Return $x_{t-1}$
		\EndFunction
	\end{algorithmic}
\end{algorithm}


```




#### 中文使用

https://www.cnblogs.com/chuqianyu/p/14620014.html
```latex
%test.tex 
\documentclass{article}
\usepackage{CJKutf8}
\begin{document}
\begin{CJK}{UTF8}{gbsn}
这是一个CJKutf8的例子，使用的字体是gbsn。
\end{CJK}
\end{document}
```
用pdflatex编译tex文件，即可得到输出结果。