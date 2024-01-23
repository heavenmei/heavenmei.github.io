import { FC, useEffect, useState } from "react";
import MarkNav from "markdown-navbar"; // markdown 目录
import ReactMarkdown from "react-markdown";

interface PostProps {
  url: string;
  content?: string;
}
const Post: FC<PostProps> = (props) => {
  const { content, url } = props;
  const [currentArticle, setCurrentArticle] = useState<PostProps>({
    url: "",
    content: content,
  });

  // 初始为开发文档
  useEffect(() => {
    changeCurrentArticle(url);
  }, [url]);

  // 更改当前文档
  const changeCurrentArticle = async (url: string) => {
    const res = await fetch(url);
    const content = await res.text();
    console.log(res);

    setCurrentArticle({ ...currentArticle, content, url });
  };

  return (
    <div className="postWrap flex">
      <div className="leftSide text-start" style={{ minWidth: 200 }}>
        <MarkNav
          // className="tocList"
          source={currentArticle.content}
          ordered={false}
        />
      </div>
      <div className="markdown-body content">
        <ReactMarkdown>{currentArticle.content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Post;
