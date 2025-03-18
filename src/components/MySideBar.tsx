import {
  ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import Image from "next/image";
// @ts-ignore
// import tocbot from "tocbot";
import config from "@/configs";
import MenuBar from "./MenuBar";
import { useRouter } from "next/router";

interface MySideBarProps {
  isAvatar?: boolean;
  isTags?: boolean;
  isMenu?: boolean;
}

export type MySideBarRefType = {
  activeTag: string | null;
};

function buildQueryString(queryParams: any) {
  const queryString = Object.keys(queryParams)
    .map((key) => {
      const value = queryParams[key];
      return value && `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    })
    .join("&");
  return queryString;
}

const MySideBar = forwardRef<MySideBarRefType, MySideBarProps>((props, ref) => {
  const { isAvatar = false, isTags = false, isMenu } = props;

  const [tags, setTags] = useState({});
  const router = useRouter();
  const activeTag = (router.query.tag as string) || undefined;

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const barDom = document.querySelector("#rightSideBar") as HTMLElement;
  //     if (!barDom) return;
  //     const top = document.scrollingElement?.scrollTop ?? 0;
  //     if (top > 500) {
  //       barDom.className = "rightSideBar rightSideBar-fix";
  //     } else {
  //       barDom.className = "rightSideBar";
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.addEventListener("scroll", handleScroll);
  // }, []);

  const handleTagClick = (tag?: string) => {
    router.query.tag = tag;
    const params = buildQueryString(router.query);
    router.replace(`${router.pathname}?${params}`);
  };

  useEffect(() => {
    fetch("/tag-data.json")
      .then((response) => response.json())
      .then((data) => {
        setTags(data);
        // console.log("Tags data:", data);
      })
      .catch((error) => {
        console.error("Error fetching the JSON data:", error);
      });
  }, []);

  // useImperativeHandle(ref, () => ({}));

  return (
    <div className="rightSideBar">
      {isAvatar && (
        <div className="person-side flex flex-col w-full gap-4">
          <img
            style={{ width: "100%" }}
            className="rounded-xl"
            src="/avatar.jpg"
          ></img>
          <div className="contact-btns flex gap-2">
            <a
              href={`mailto:${config.email}`}
              className="contact-icon"
              target="_blank"
            >
              <Image src="/icons/email.svg" width={20} height={20} alt="" />
            </a>
            <a href={config.github} className="contact-icon" target="_blank">
              <Image src="/icons/github.svg" width={20} height={20} alt="" />
            </a>
          </div>
          {/* <hr /> */}
          {/* <div>
            <h5>FEATURED TAGS</h5>
            <div className="tags"></div>
          </div> */}
        </div>
      )}

      {isMenu && <MenuBar id="sideBar-toc" />}

      {isTags && (
        <div className="tag-side flex flex-col  gap-4">
          <div className="text-xl mb-2">Blog Tags</div>

          <div className="flex flex-wrap gap-3">
            {Object.entries(tags).map(([key, value]) => (
              <a
                className={`tag ${activeTag === key ? "tag-active" : ""}`}
                key={key}
                onClick={() =>
                  handleTagClick(activeTag === key ? undefined : key)
                }
              >
                {key} ({value as string})
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
});

MySideBar.displayName = "MySideBar";
export default MySideBar;
