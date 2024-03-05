import { FC } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import MySideBar from "../components/MySideBar";

interface PostListProps {}
const PostList: FC<PostListProps> = () => {
  // const { content, url } = props;
  //@ts-ignore
  const PostFiles = window.PostFiles;
  // console.log("===window.PostFiles", window.PostFiles[0]);

  return (
    <>
      <Banner />
      <div className="post-list container flex w-9/12">
        <div className="flex flex-col flex-1 pl-4 pr-[100px] gap-4">
          {PostFiles.map((file: any) => (
            <>
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
              <hr />
            </>
          ))}
        </div>
        <MySideBar />
      </div>
    </>
  );
};

export default PostList;
