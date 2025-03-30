import { useEffect } from "react";
// @ts-ignore
import tocbot from "tocbot";
interface MenuBarProps {
  id?: string;
}

const MenuBar = ({ id }: MenuBarProps) => {
  // https://tscanlin.github.io/tocbot/
  useEffect(() => {
    tocbot.init({
      tocSelector: `#${id}`, // 选择toc的包装器
      contentSelector: ".markdown-body", // 选择内容的包装器
      headingSelector: "h2, h3", // 选择要显示的标题标签
      activeLinkClass: "is-active-link",
      headingsOffset: 80,
      scrollSmooth: true,
      scrollSmoothOffset: -80,
      hasInnerContainers: true,
      isCollapsedClass: "is-collapsed",
      collapsibleClass: "is-collapsible",
    });

    return () => tocbot.destroy();
  }, []);

  const showMenu = () => {
    const tocDom = document.querySelector(`#toc_${id}`) as HTMLElement;
    if (!tocDom) return;
    tocDom.className = "toc toc-side";
    tocbot.refresh();
  };

  const closeMenu = () => {
    const tocDom = document.querySelector(`#toc_${id}`) as HTMLElement;
    if (!tocDom) return;
    tocDom.className = "toc";
  };

  return (
    <div className="menuBar">
      <div className="menuBar_hidden" onClick={showMenu}>
        Menu
      </div>
      <div className="toc" id={`toc_${id}`}>
        <div className="label" onClick={closeMenu}>
          In this article
          <img src="/icons/rightArrow.svg" className="rightArrow w-6" />
        </div>
        <nav className="js-toc" id={id}></nav>
      </div>
    </div>
  );
};

export default MenuBar;
