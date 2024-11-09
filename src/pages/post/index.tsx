import { FC } from "react";
import Image from "next/image";
import MySideBar from "@/components/MySideBar";
import React from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import { allPosts, Post } from "contentlayer/generated";
import { formatDate } from "@/utils";
import dayjs from "dayjs";
import LineIcon from "@/components/lines/LineIcon";
import SingleLine from "@/components/lines/SingleLine";
import BranchLine, { BranchLineStyle } from "@/components/lines/BranchLine";
import config from "@/configs";

interface PostListProps {}
const PostList: FC<PostListProps> = () => {
  const PostFiles = allPosts.sort((a, b) => dayjs(b.date).diff(dayjs(a.date)));

  console.log("PostFiles ===", PostFiles.length);
  return (
    <>
      <div className="self">
        <div className="flex ml-auto items-end justify-end">
          <div className="contact-btns flex gap-6 mb-4 mr-4 flex-row-reverse">
            <a
              href={`mailto:${config.email}`}
              className="contact-icon"
              target="_blank"
            >
              <Image src="/icons/email.svg" width={28} height={28} alt="" />
            </a>
            <a href={config.github} className="contact-icon" target="_blank">
              <Image src="/icons/github.svg" width={28} height={28} alt="" />
            </a>
          </div>
          <img className="avatar" src="/avatar.jpg"></img>
        </div>
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
            <div className={styles.postItem} key={file._id}>
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
        <div className="relative mt-[400px] ">
          <MySideBar isTags={true} />
        </div>
      </div>
    </>
  );
};

export default PostList;
