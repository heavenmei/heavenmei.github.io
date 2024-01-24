import { FC, useMemo } from "react";
import MarkdownWrap from "../components/MarkdownWrap";
import Banner from "../components/Banner";

const Article: FC = () => {
  const FullURL = useMemo(() => {
    const postURL = location.pathname.split("/").pop();
    //@ts-ignore
    const curMD = window.MDFILES.find(
      (item: any) => item.URL?.split("/")[1] == postURL
    );
    // console.log(window.MDFILES, curMD);

    // todo 本地模式
    // return import.meta.env.MODE === "development"
    //   ? curMD.absPath
    //   : `../content/post/${curMD.path}`;
    return `../content/post/${curMD.path}`;
  }, []);

  return (
    <div className="">
      <Banner />
      <MarkdownWrap url={FullURL} />
    </div>
  );
};

export default Article;
