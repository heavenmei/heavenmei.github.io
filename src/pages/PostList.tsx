import { FC } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";

interface PostListProps {}
const PostList: FC<PostListProps> = (props) => {
  // const { content, url } = props;
  //@ts-ignore
  const mdFiles = window.MDFILES;
  // console.log("===window.MDFILES", window.MDFILES[0]);

  return (
    <>
      <Banner />
      <div className="post-list container flex flex-col">
        {mdFiles.map((file: any) => (
          <div className="post-item flex flex-col" key={file.title}>
            <Link to={`/posts${file.URL}`}>
              <h2 className="post-item-title"> {file.title}</h2>
              <div className="post-item-subtitle">{file.subtitle}</div>
              <div className="post-item-desc">{file.description}</div>
            </Link>
            <div className="post-item-meta">
              Posted by {file.author} on {file.date}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PostList;
