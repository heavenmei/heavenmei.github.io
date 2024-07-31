import * as React from 'react';
import { allPosts, Post } from 'contentlayer/generated';
import { useRouter } from 'next/router';
import Banner from '@/components/Banner';

export interface INewsPageProps {}

export default function PostPage(props: INewsPageProps) {
  const router = useRouter();

  const article = allPosts.find((item) => {
    return item.url.split('/')[1] == router.query.slug?.[0];
  });
  console.log('props===', article, allPosts, router.query.slug?.[0]);
  // if (!news) {
  //   throw new Error(`News '${router.query.slug}' not found.`);
  // }
  return (
    article && (
      <>
        <Banner title={article.title} />
        <div className="container w-9/12 flex ">
          {/* <MarkdownWrap url={`../content/post/${curMD.path}`} /> */}
          <div
            className="leftSide text-start w-1/5 mr-4"
            style={{ minWidth: 200 }}
          >
            {/* <MarkNav source={currentArticle} ordered={false} /> */}
          </div>
          <div className=" content">
            <div className="markdown-body">
              <div
                className="typography"
                dangerouslySetInnerHTML={{ __html: article.body.html }}
              ></div>
            </div>
          </div>
        </div>
      </>
    )
  );
}
