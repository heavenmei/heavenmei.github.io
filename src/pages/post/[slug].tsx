import * as React from "react";
import { allPosts, Post } from "contentlayer/generated";
import { Mdx } from "@/components/mdx";
import MySideBar from "@/components/MySideBar";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { formatDate } from "@/utils";

function getPageFromParams(params: any) {
  const slug = params?.slug;
  const post = allPosts.find((page) => page.slugAsParams === slug);
  console.log("props===", allPosts, post, slug);

  if (!post) {
    null;
  }

  return post;
}

type PageProps = {
  slug: string;
  page: Post;
};

export default function PostPage(props: PageProps) {
  const { slug, page } = props;
  // console.log("PostPage props ===> ", props);

  if (!page) {
    return;
  }

  const Banner = (
    <div className="banner">
      <div className="-translate-x-[300px]">
        {page.tags?.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <h1>{page.title}</h1>
      <div className="text-sm text-white/50">{page.subtitle}</div>
      <div className="text-sm text-white/50">{formatDate(page.date)}</div>
    </div>
  );

  return page ? (
    <>
      <div className="container">
        <Breadcrumbs
          variant="bordered"
          classNames={{
            list: "bg-white mb-4 border-none",
          }}
          itemClasses={{
            item: "text-black data-[current=true]:text-primary",
            separator: "text-black/80",
          }}
        >
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem href="/post">Post</BreadcrumbItem>
          <BreadcrumbItem href="#">{page.title}</BreadcrumbItem>
        </Breadcrumbs>

        <div className="flex gap-8">
          <div className="markdown-body rounded-xl p-6 flex-1 h-full">
            {Banner}
            <Mdx code={page.body.code} />
          </div>
          <MySideBar isAvatar={true} isMenu={true} isTags={true} />
        </div>
      </div>
    </>
  ) : (
    <h1>Not Found</h1>
  );
}

export async function getStaticProps(paths: any) {
  const { params } = paths;
  const page = allPosts.find((page) => page.slugAsParams === params.slug);
  // console.log("getStaticProps===>", params, page?.title);

  return { props: { slug: params.slug, page: page } };
}

// 使用getStaticPaths将会build多个页面
export const getStaticPaths = async () => {
  const paths = allPosts.map((post) => ({
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
