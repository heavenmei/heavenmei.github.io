import { FC, useMemo, useState } from "react";
// import MarkdownWrap from "../components/MarkdownWrap";
import Banner from "../components/Banner";
import MarkNav from "markdown-navbar"; // markdown 目录
import ReactMarkdown from "react-markdown";
import { Pagination } from "@arco-design/web-react";
import { useLocation } from "react-router-dom";

const Article: FC = () => {
  const [currentArticle, setCurrentArticle] = useState<string>();
  const [curIndex, setCurIndex] = useState<number>(-1);
  const articleList: any = process.env.PostFiles;
  const { state } = useLocation();
  console.log(state);

  // 更改当前文档
  const changeCurrentArticle = async (url: string) => {
    const res = await fetch(url);
    const text = await res.text();
    const content = text.split("---")[2];
    console.log(content);

    setCurrentArticle(content);
  };

  const curMD = useMemo(() => {
    const url = location.pathname.split("/").pop();
    const _curIndex = articleList.findIndex(
      (item: any) => item.URL?.split("/")[1] == url
    );

    if (_curIndex === -1) {
      return;
    }
    setCurIndex(_curIndex);
    const _curMD = articleList[_curIndex];
    console.log("====cur", _curMD);

    // todo 本地模式
    // return import.meta.env.MODE === "development"
    //   ? curMD.absPath
    //   : `../content/post/${curMD.path}`;

    changeCurrentArticle(`../content/post/${_curMD.path}`);
    return _curMD;
  }, []);

  function itemRender(page, type, originElement) {
    if (type === "prev") {
      return <a style={{ fontSize: 14, margin: "0 8px" }}>Prev</a>;
    }

    if (type === "next") {
      return <a style={{ fontSize: 14, margin: "0 8px" }}>Next</a>;
    }

    return originElement;
  }

  return (
    <>
      <Banner title={curMD.title} />
      <div className="container w-9/12 flex ">
        {/* <MarkdownWrap url={`../content/post/${curMD.path}`} /> */}
        <div
          className="leftSide text-start w-1/5 mr-4"
          style={{ minWidth: 200 }}
        >
          <MarkNav source={currentArticle} ordered={false} />
        </div>
        <div className=" content">
          <div className="markdown-body">
            <ReactMarkdown>{currentArticle}</ReactMarkdown>
          </div>
          <div className="pagenation w-full my-[50px]">
            <Pagination
              size="large"
              current={curIndex}
              itemRender={itemRender}
              pageSize={1}
              total={articleList.length}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
