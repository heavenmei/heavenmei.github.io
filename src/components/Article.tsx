import * as React from "react";
import { Mdx } from "@/components/mdx";
import MySideBar from "@/components/MySideBar";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { formatDate } from "@/utils";
import config from "@/configs";

type ArticleProps = {
  slug: string;
  page: any;
};

export default function Article(props: ArticleProps) {
  const { slug, page } = props;
  console.log("PostPage props ===> ", page);

  if (!page) {
    return;
  }

  const lastBread = config.noteList.find((item) => item.id === page.parDir);

  const Banner = (
    <div className="banner">
      <div className="-translate-x-[200px]">
        {page.tags?.map((tag: any) => (
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
            list: "next-breadcrumbs mb-4 border-none",
          }}
          itemClasses={{
            item: "next-breadcrumbs-item data-[current=true]:text-primary",
            separator: "next-breadcrumbs-item",
          }}
        >
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem href={`/post?id=${lastBread?.id}`}>
            {lastBread?.bread}
          </BreadcrumbItem>
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
