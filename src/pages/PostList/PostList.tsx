import { FC } from "react";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner";
import MySideBar from "../../components/MySideBar";
import React from "react";
import styles from "./index.module.scss";

interface PostListProps {}
const PostList: FC<PostListProps> = () => {
  // const { content, url } = props;
  const PostFiles: any = process.env.PostFiles;
  // console.log("===window.PostFiles", process.env.PostFiles);

  return (
    <>
      <Banner />
      <div className={`${styles.postList} container flex w-9/12`}>
        <div className="flex flex-col flex-1 pl-4 pr-[100px] gap-4">
          {PostFiles?.map((file: any) => (
            <React.Fragment key={file.title}>
              <div
                className={`${styles.postItem} flex flex-col`}
                key={file.title}
              >
                <Link to={`/posts${file.URL}`}>
                  <h2 className={styles.postItem_title}> {file.title}</h2>
                  <div className={styles.postItem_subtitle}>
                    {file.subtitle}
                  </div>
                  <div className={styles.postItem_desc}>{file.description}</div>
                </Link>
                <div className={styles.postItem_meta}>
                  Posted by {file.author} on {file.date}
                </div>
              </div>
              <hr />
            </React.Fragment>
          ))}
        </div>
        <MySideBar />
      </div>
    </>
  );
};

export default PostList;
