import * as React from "react";
import { allDocuments, allPosts, Post } from "contentlayer/generated";
import Article from "@/components/Article";
import { PageType } from ".";

// function getPageFromParams(params: any) {
//   const slug = params?.slug;
//   const post = allPosts.find((page) => page.slugAsParams === slug);
//   console.log("props===", allPosts, post, slug);

//   if (!post) {
//     null;
//   }

//   return post;
// }

type PageProps = {
  slug: string;
  page: PageType;
};

export default function PostPage(props: PageProps) {
  return <Article {...props} />;
}

export async function getStaticProps(paths: any) {
  const { params } = paths;
  const page = allDocuments.find((page) => page.slugAsParams === params.slug);
  // console.log("getStaticProps===>", params, page?.title);

  return { props: { slug: params.slug, page: page } };
}

// 使用getStaticPaths将会build多个页面
export const getStaticPaths = async () => {
  const paths = allDocuments.map((post) => ({
    params: { slug: post.slugAsParams },
  }));

  // console.log("getStaticPaths===", paths);
  return {
    // 这里的数据将提供给getStaticProps使用
    paths,
    // fallback为false，表示如果不在以上参数的路由将返回404
    fallback: false,
  };
};
