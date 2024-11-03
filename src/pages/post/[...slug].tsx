import * as React from "react";
import { allPosts } from "contentlayer/generated";
import { useRouter } from "next/router";
import { Mdx } from "@/components/mdx";
import MySideBar from "@/components/MySideBar";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { formatDate } from "@/lib/utils";

function getPageFromParams(params: any) {
  const slug = params?.slug?.join("/");
  const page = allPosts.find((page) => page.slugAsParams === slug);
  console.log("props===", page);

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
