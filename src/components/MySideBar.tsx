import {
  ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import Image from "next/image";
// @ts-ignore
import tocbot from "tocbot";
import config from "@/configs";
import MenuBar from "./MenuBar";

interface MySideBarProps {
  isAvatar?: boolean;
  isTags?: boolean;
  isMenu?: boolean;
  activeTag?: string;
  setActiveTag?: (tag?: string) => void;
}

export type MySideBarRefType = {
  activeTag: string | null;
};

const MySideBar = forwardRef<MySideBarRefType, MySideBarProps>((props, ref) => {
  const {
    isAvatar = false,
    isTags = false,
    isMenu,
    activeTag,
    setActiveTag,
  } = props;
  const [tags, setTags] = useState({});

  // https://tscanlin.github.io/tocbot/
  useEffect(() => {
    tocbot.init({
      tocSelector: ".js-toc", // 选择toc的包装器
      contentSelector: ".markdown-body", // 选择内容的包装器
      headingSelector: "h2, h3, h4", // 选择要显示的标题标签
      activeLinkClass: "is-active-link",
      headingsOffset: 80,
      scrollSmooth: true,
      scrollSmoothOffset: -80,
      hasInnerContainers: true,
    });

    return () => tocbot.destroy();
  }, []);

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
                onClick={() => {
                  setActiveTag?.(activeTag === key ? undefined : key);
                }}
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
