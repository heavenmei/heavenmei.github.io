import * as React from "react";
import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import type { MDXComponents } from "mdx/types";
import { PhotoView } from "react-photo-view";

import { cn } from "@/utils";
import { Callout } from "@/components/mdx/Callout";
import { MdxCard } from "@/components/mdx/MdxCard";
import CodeCopyButton from "@/components/mdx/CodeCopyButton";
import "katex/dist/katex.min.css";

const components: MDXComponents = {
  // h1: ({ className, ...props }) => (
  //   <h1
  //     className={cn(
  //       "mt-2 scroll-m-20 text-4xl font-bold tracking-tight",
  //       className
  //     )}
  //     {...props}
  //   />
  // ),
  // h2: ({ className, ...props }) => (
  //   <h2
  //     className={cn(
  //       "mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0",
  //       className
  //     )}
  //     {...props}
  //   />
  // ),
  // h3: ({ className, ...props }) => (
  //   <h3
  //     className={cn(
  //       "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
  //       className
  //     )}
  //     {...props}
  //   />
  // ),
  // h4: ({ className, ...props }) => (
  //   <h4
  //     className={cn(
  //       "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
  //       className
  //     )}
  //     {...props}
  //   />
  // ),
  // h5: ({ className, ...props }) => (
  //   <h5
  //     className={cn(
  //       "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
  //       className
  //     )}
  //     {...props}
  //   />
  // ),
  // h6: ({ className, ...props }) => (
  //   <h6
  //     className={cn(
  //       "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
  //       className
  //     )}
  //     {...props}
  //   />
  // ),
  // a: ({ className, ...props }) => (
  //   <a
  //     className={cn("font-medium underline underline-offset-4", className)}
  //     {...props}
  //   />
  // ),
  // p: ({ className, ...props }) => (
  //   <p
  //     className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
  //     {...props}
  //   />
  // ),
  // ul: ({ className, ...props }) => (
  //   <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  // ),
  // ol: ({ className, ...props }) => (
  //   <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  // ),
  // li: ({ className, ...props }) => (
  //   <li className={cn("mt-2", className)} {...props} />
  // ),
  // blockquote: ({ className, ...props }) => (
  //   <blockquote
  //     className={cn(
  //       "mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground",
  //       className
  //     )}
  //     {...props}
  //   />
  // ),
  // hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => {
    let isEmpty = true;

    // 若表头为空则不显示表头,用于排列图片的表格
    if (
      props.children &&
      props.children instanceof Array &&
      props.children[0]?.type === "thead"
    ) {
      const thead = props.children[0];
      for (const th of thead.props.children.props.children) {
        if (th.props.children) {
          isEmpty = false;
          break;
        }
      }
    }

    return (
      <div className="my-6 w-full overflow-y-auto">
        <table
          className={cn("w-full", isEmpty ? "table-no-head" : null, className)}
          {...props}
        />
      </div>
    );
  },
  // tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
  //   <tr
  //     className={cn("m-0 border-t p-0 even:bg-muted", className)}
  //     {...props}
  //   />
  // ),
  // th: ({ className, ...props }) => (
  //   <th
  //     className={cn(
  //       "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
  //       className
  //     )}
  //     {...props}
  //   />
  // ),
  // td: ({ className, ...props }) => (
  //   <td
  //     className={cn(
  //       "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
  //       className
  //     )}
  //     {...props}
  //   />
  // ),
  pre: ({ className, ...props }) => (
    <pre
      className={cn(
        "px-0",
        "group relative m-0 overflow-x-auto rounded-md py-4",
        className
      )}
      {...props}
    >
      {/* @ts-ignore */}
      <CodeCopyButton text={props.raw} />
      {props.children}
    </pre>
  ),
  code: ({ className, ...props }) => (
    <code
      className={cn(
        "relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className
      )}
      {...props}
    />
  ),
  img: ({ className, ...props }: any) => {
    // Image必须指定width/height,若没有该值则用img标签自适应image本身大小
    if (props.width) {
      const altWidth = props.alt?.split("|")[1];
      if (altWidth) {
        props.width = altWidth;
      }
      return (
        <PhotoView src={props.src} width={200} height={props.height}>
          <img
            className={cn("rounded-sm border mx-auto", className)}
            {...props}
          />
        </PhotoView>
      );
      // return (
      //   <Image
      //     className={cn("rounded-sm border mx-auto", className)}
      //     {...props}
      //   />
      // );
    }
    return <img className={cn("rounded-sm border", className)} {...props} />;
  },
  Callout,
  Card: MdxCard,
};

export function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  );
}
