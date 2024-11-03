import { FC, useEffect } from "react";
import Image from "next/image";
// @ts-ignore
import tocbot from "tocbot";
import config from "@/configs";

const MySideBar: FC<{
  isAvatar?: boolean;
  isTags?: boolean;
  isMenu?: boolean;
}> = ({ isAvatar = false, isTags = false, isMenu }) => {
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

  useEffect(() => {
    const handleScroll = () => {
      const barDom = document.querySelector("#rightSideBar") as HTMLElement;
      if (!barDom) return;
      const top = document.scrollingElement?.scrollTop ?? 0;
      if (top > 500) {
        barDom.className = "rightSideBar rightSideBar-fix";
      } else {
        barDom.className = "rightSideBar";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-[250px]">
      {isAvatar && (
        <div className="person-side flex flex-col w-full gap-4 mb-4">
          <img
            style={{ width: "100%" }}
            className="rounded-xl"
            src="/avatar.jpg"
          ></img>
          <div>Haiwen Huang</div>
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
          <hr />
          <div>
            <h5>FEATURED TAGS</h5>
            <div className="tags">
              <a href="/tags/" className="tag">
                Font
              </a>
            </div>
          </div>
        </div>
      )}
      <div id="rightSideBar" className="rightSideBar">
        {isMenu && (
          <div className="toc">
            <div className="label">In this article</div>
            <div className="js-toc"></div>
          </div>
        )}

        {isTags && (
          <div className="tag-side flex flex-col  gap-4">
            <div className="label">Types of blog</div>

            <div className="tags">
              <a href="#" className="tag">
                Font
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MySideBar;
