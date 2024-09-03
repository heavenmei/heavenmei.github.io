import { FC } from 'react';
import Banner from '@/components/Banner';
import MySideBar from '@/components/MySideBar';
import React from 'react';
import styles from './index.module.scss';
import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns';
import { allPosts, Post } from 'contentlayer/generated';
import { formatDate } from '@/lib/utils';

interface PostListProps {}
const PostList: FC<PostListProps> = () => {
  // const { content, url } = props;
  // const PostFiles: any = process.env.PostFiles;
  // console.log("===window.PostFiles", process.env.PostFiles);
  const PostFiles = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date as any), new Date(b.date as any))
  );
  console.log('===', PostFiles);

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
            </React.Fragment>
          ))}
        </div>
        <MySideBar />
      </div>
    </>
  );
};

export default PostList;
