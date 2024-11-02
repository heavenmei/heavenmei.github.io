import { FC } from "react";
import Image from "next/image";
import MySideBar from "@/components/MySideBar";
import React from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import { allPosts, Post } from "contentlayer/generated";
import { formatDate } from "@/lib/utils";
import dayjs from "dayjs";
import LineIcon from "@/components/lines/LineIcon";
import SingleLine from "@/components/lines/SingleLine";
import BranchLine, { BranchLineStyle } from "@/components/lines/BranchLine";

interface PostListProps {}
const PostList: FC<PostListProps> = () => {
  const PostFiles = allPosts.sort((a, b) => dayjs(b.date).diff(dayjs(a.date)));

  console.log("===", PostFiles);
  return (
    <>
      <div className="self">
        <img className="avatar" src="/avatar.jpg"></img>
        <p className="sayHi">Heavenmei’s Posts</p>
      </div>

      <div className="container flex">
        <div className="w-full flex-1">
          <Image
            src={`/icons/firstLine.svg`}
            alt=""
            width={437}
            height={42}
            className="relative top-1"
          />

          {PostFiles.map((file: Post) => (
            <div className={styles.postItem} key={file.title}>
              <div>
                <BranchLine type={BranchLineStyle.PURPLE} size="small" />
              </div>
              <div
                className={`${styles.postItem_content} flex flex-col`}
                key={file.title}
              >
                <Link href={`${file.slug}`}>
                  <h2 className={styles.postItem_title}> {file.title}</h2>
                  <div className={styles.postItem_subtitle}>
                    {file.subtitle}
                  </div>
                  <div className={styles.postItem_desc}>{file.description}</div>
                </Link>
                <div className={styles.postItem_meta}>
                  Posted by {file.author} on {formatDate(file.date)}
                </div>
              </div>
              <hr />
            </div>
          ))}

          <SingleLine
            color="linear-gradient(180deg, #A371F7 0%, #64557E 50%, #0D1117 100%)"
            styles={{ position: "relative", top: "-8px" }}
            height={100}
          />
        </div>
        <div className="relative top-[400px]">
          <MySideBar />
        </div>
      </div>
    </>
  );
};

export default PostList;
