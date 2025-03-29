import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Pagination } from "@nextui-org/react";

import { allDocuments, Post, Note } from "contentlayer/generated";
import dayjs from "dayjs";
import styles from "./index.module.scss";
import { formatDate, buildQueryString } from "@/utils";
import config from "@/configs";
import MySideBar from "@/components/MySideBar";
import SingleLine from "@/components/lines/SingleLine";
import BranchLine, { BranchLineStyle } from "@/components/lines/BranchLine";
import { useRouter } from "next/router";

const PAGE_SIZE = 20;
export type PageType = Post | Note;

const PostList: FC = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const tag = (router.query.tag as string) || undefined;
  const page = parseInt(router.query.page as string) || 1;

  const [postFiles, setPostFiles] = useState<PageType[]>([]);
  const [total, setTotal] = useState<number>(0);

  const allFiles = useMemo(() => {
    const allF = allDocuments
      .filter((item) => (id ? item.parDir === id : true))
      .sort((a, b) => dayjs(b.date).diff(dayjs(a.date)));
    setTotal(allF.length);
    return allF;
  }, [id]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const filterFiles = tag
      ? allFiles.filter((file) => file.tags?.includes(tag))
      : allFiles;

    setTotal(filterFiles.length);
    setPostFiles(filterFiles.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE));
  }, [allFiles, page, tag]);

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
          <img
            src={`/icons/firstLine.svg`}
            className="relative w-[437px] top-1"
          />

          {postFiles.map((file: PageType) => (
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

          <Pagination
            classNames={{
              base: "bg-transparent color-white  ",
              wrapper: "ml-[100px] bg-white/20 color-white text-white ",
              prev: "bg-transparent hover:!bg-secondary",
              next: "bg-transparent hover:!bg-secondary",
              item: "bg-transparent hover:!bg-secondary",
              // cursor: "bg-red",
            }}
            isCompact
            showControls
            total={Math.ceil(total / PAGE_SIZE)}
            initialPage={page}
            variant="light"
            onChange={(page) => {
              router.query.page = page.toString();
              if (id) router.query.id = id;
              const params = buildQueryString(router.query);
              router.push(`/post?${params}`);
            }}
          />
        </div>
        <div className="mt-[400px] hidden lg:block">
          <MySideBar isTags={true} />
        </div>
      </div>
    </>
  );
};

export default PostList;
