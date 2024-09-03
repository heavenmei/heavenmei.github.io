import * as React from 'react';
import { allPosts, Post } from 'contentlayer/generated';
import { useRouter } from 'next/router';
import Banner from '@/components/Banner';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Mdx } from '@/components/mdx/MDXComponents';

function getPageFromParams(params: any) {
  const slug = params?.slug?.join('/');
  const page = allPosts.find((page) => page.slugAsParams === slug);
  console.log('props===', page);

  if (!page) {
    null;
  }

  return page;
}

interface PageProps {
  params: {
    slug: string[];
  };
}

export default function PostPage(props: PageProps) {
  const router = useRouter();
  const page = getPageFromParams(router.query);

  if (!page) {
    return;
  }

  return (
    page && (
      <>
        <Banner title={page.title} />
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
              <Mdx code={page.body.code} />
            </div>
          </div>
        </div>
      </>
    )
  );
}
