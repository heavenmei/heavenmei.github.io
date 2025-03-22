const config = {
  email: "heavenmei.huang@gmail.com",
  github: "https://github.com/heavenmei",
  aboutMe: "Front-end developer | Based in Shanghai",
  aboutMeDesc:
    "A person who is curious about the world and loves to explore and share",
  publication: [
    "Research orientation: Data Visualization, Geographic Visualization, Artificial Intelligence.",
    "Works involved during the master's degree:",
  ],
  publicationList: [
    {
      tag: "CCF A",
      img: "/images/2024_salientime.jpg",
      title: `SalienTime: User-driven Selection of Salient Time Steps for Large-Scale Geospatial Data Visualization`,
      venue: `ACM SIGCHI Conference on Human Factors in Computing Systems 2024 (CHI 2024)`,
      authors: `Juntong Chen, Haiwen Huang, Huayuan Ye, Zhong Peng, Chenhui Li, Changbo Wang`,
      desc: `Selecting a subset of time steps with user-specified priorities, leveraging structural variation info learned by Autoencoders.`,
    },
    {
      tag: "CCF B",
      img: "/images/2025_SUPQA.png",
      title: `SUPQA: LLM-based Geo-Visualization for Subjective Urban Performance Question-Answering`,
      venue: `EuroVis2025`,
      authors: `Haiwen Huang, Juntong Chen, Changbo Wang, Chenhui Li`,
      desc: `A novel approach for urban performance exploration using natural language as input and interactive geographic visualizations as output,leveraging Large Language Models (LLMs) to effectively interpret user intents and quantify various urban performance measures.`,
    },
  ],
  noteList: [
    {
      id: "note/fontEnd",
      tag: "前端三件套",
      img: "/images/javaScript.png",
      title: "HTML/CSS/JavaScript",
      bread: "HTML/CSS/JS",
      desc: ``,
    },
    {
      id: "note/games101",
      tag: "CG",
      img: "/images/games101.jpeg",
      title: "Games 101",
      bread: "Games 101系列",
      desc: ``,
    },
    {
      id: "note/Java",
      tag: "Java",
      img: "/images/java.jpeg",
      title: "Java 后端系列",
      bread: "Java 后端系列",
      desc: ``,
    },
    {
      // 根据文件夹名字来筛选
      id: "post",
      tag: "Post",
      img: "/images/home-bg.jpg",
      bread: "Post",
      title: "随手记",
      desc: ``,
    },
  ],
  project: [
    "Development field: Front-end, AIGC, Full stack, JS, python, mini-program.",
    "Full of creativity and collision of ideas project 🌍",
  ],
  projectList: [
    {
      tag: "WebGL",
      img: "/images/fluid.png",
      title: "艺术流体可视化",
      authors: `Haiwen Huang`,
      desc: `利用WebGL技术，实现了艺术流体可视化。`,
    },
    {
      tag: "Paper",
      img: "/images/explanationVis.png",
      title: "提升用户信任度的机器学习解释框架",
      authors: `Haiwen Huang, Yin Tang`,
      desc: `通过增强型事实检查框架对任务模型进行解释分析处理。利用偏相关方差算法、锚定算法、影响函数、反事实算法等多种算法对模型及训练集进行处理，进一步加深了对任务模型的理解。将处理结果输入到交互式机器学习模型解释可视化分析系统中，对模型进行深入分析.`,
    },
    {
      tag: "Vis",
      img: "/images/atmosphereVis.png",
      title: "大气污染可视化平台",
      authors: `Haiwen Huang`,
      desc: `2021年可视化分析大赛.基于大气污染数据集，设计了一套大气污染可视化平台.`,
    },
  ],
};

export default config;
