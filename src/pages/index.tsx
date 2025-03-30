import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import LineIcon from "@/components/lines/LineIcon";
import SingleLine from "@/components/lines/SingleLine";
import BranchLine, { BranchLineStyle } from "@/components/lines/BranchLine";
import config from "@/configs";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function Home() {
  const {
    aboutMe,
    aboutMeDesc,
    publication,
    publicationList,
    project,
    projectList,
  } = config;

  const [readme, setReadme] = useState<string>("");

  const getGithubReadme = useCallback(async () => {
    const res = await fetch(
      "https://raw.githubusercontent.com/heavenmei/heavenmei/master/README.md"
    );

    const text = await res.text();
    setReadme(text);
  }, []);

  useEffect(() => {
    getGithubReadme();
  }, []);

  return (
    <>
      <div className="self">
        <img className="avatar" src="/avatar.jpg"></img>
        <p className="sayHi">
          Hi~👋 <br />
          I’m Heavenmei
        </p>
      </div>

      <div className="container">
        {/* <Image src={`/icons/firstLine.svg`} alt="" width={437} height={522} /> */}
        <img src={`/icons/firstLine.svg`}></img>

        {/* About me */}
        <div className={styles.aboutMe}>
          <div>
            <LineIcon name="code" />
            <SingleLine height={530} />
          </div>
          <div className={styles.aboutMe_content}>
            <p className={styles.aboutMe_desc}>{aboutMe}</p>
            <div className={styles.aboutMe_contact}>
              <a
                className={styles.aboutMe_top}
                href="https://github.com/heavenmei"
              >
                <img src="/icons/github.svg" className="w-6" />
                <p> heavenmei/README.md</p>
                <img src="/icons/rightArrow.svg" className="w-6" />
              </a>

              <button className="rounded">
                <a
                  href={`mailto:${config.email}`}
                  className="contact-icon"
                  target="_blank"
                >
                  <img src="/icons/email.svg" className="w-6" />
                </a>
              </button>
              <button className="rounded">
                <a
                  href={config.github}
                  className="contact-icon"
                  target="_blank"
                >
                  <img src="/icons/github.svg" className="w-6" />
                </a>
              </button>
            </div>

            <div className="max-md:max-w-xs README mt-6  markdown-body transparent">
              <Markdown rehypePlugins={[rehypeRaw]}>{readme}</Markdown>
            </div>
          </div>
        </div>

        {/* publication */}
        <div className={styles.publication}>
          <div>
            <LineIcon name="file" color="#57D364" />
            <SingleLine
              color="linear-gradient(180deg, #56D364 0%, #2EA043 100%)"
              height={100}
            />
          </div>
          <div className={styles.publication_content}>
            <h1>Publications</h1>
            <p className={styles.publication_desc}>
              <span className="text-[#7EE787]">{publication[0]}</span>&nbsp;
              {publication[1]}
            </p>
          </div>
        </div>
        {publicationList.map((item) => (
          <div className={styles.pubList} key={item.title}>
            <div>
              <BranchLine type={BranchLineStyle.GREEN} />
            </div>
            <div className={styles.pubList_content}>
              <div className="flex flex-col gap-1 overflow-hidden justify-start">
                <div className="line-clamp-2 text-green text-md lg:text-lg font-bold">
                  {item.title}
                </div>
                <div
                  className="truncate"
                  dangerouslySetInnerHTML={{
                    __html: item.authors.replace(
                      "Haiwen Huang",
                      `<a href="#">Haiwen Huang</a>`
                    ),
                  }}
                ></div>
                <div className="text-secondary text-sm truncate">
                  <p className="tag text-green mr-auto">{item.tag}</p>
                  &nbsp;{item.venue}
                </div>
                <div className="line-clamp-2 text-secondary text-sm">
                  {item.desc}
                </div>
              </div>

              <img
                src={item.img}
                className="mt-2 lg:mt-0 lg:ml-2 lg:h-40 max-w-sm"
              />
            </div>
          </div>
        ))}

        {/* Project */}
        <div className={`${styles.publication} top-[-4px]`}>
          <div>
            <SingleLine
              color="linear-gradient(180deg, #2EA043 0%, #EC6547 50.5%, #FFA28B 100%)"
              height={100}
            />
            <LineIcon name="file" color="#EA6045" />
            <SingleLine
              color="linear-gradient(180deg, #FFA28B 0%, #EC6545 100%)"
              height={100}
            />
          </div>
          <div className={`${styles.publication_content} top-[90px]`}>
            <h1>Projects</h1>
            <p className={styles.publication_desc}>
              <span className="text-[#FFA28B]">{project[0]}</span>&nbsp;
              {project[1]}
            </p>
          </div>
        </div>

        {projectList.map((item) => (
          <div className={styles.pubList} key={item.title}>
            <div>
              <BranchLine
                type={BranchLineStyle.RED}
                styles={{ transform: `translateY(-5px)` }}
              />
            </div>
            <div className={styles.pubList_content}>
              <div className="flex flex-col gap-1">
                <div className="tag text-red mr-auto">{item.tag}</div>
                <strong className="text-red text-xl font-bold">
                  {item.title}
                </strong>
                <div
                  className="truncate"
                  dangerouslySetInnerHTML={{
                    __html: item.authors.replace(
                      "Haiwen Huang",
                      `<a href="#">Haiwen Huang</a>`
                    ),
                  }}
                ></div>
                <div className="line-clamp-2 text-secondary text-sm">
                  {item.desc}
                </div>
              </div>

              <img src={item.img} className="mt-2 lg:mt-0 lg:ml-2 lg:h-40" />
            </div>
          </div>
        ))}

        {/* Post */}
        <div className={`${styles.publication} top-[-6px]`}>
          <div>
            <SingleLine
              color="linear-gradient(180deg, #EC6547 0%, #797EF9 100%)"
              height={100}
            />
            <LineIcon name="file" color="#797EF9" />
            <SingleLine
              color="linear-gradient(180deg, #797EF9 0%, #ABB4FF 100%)"
              height={100}
            />
          </div>
          <div className={`${styles.publication_content} top-[90px]`}>
            <h1>Posts</h1>
            <p className={styles.publication_desc}>
              <span className="text-[#ABB4FF]">{project[0]}</span>&nbsp;
              {project[1]}
            </p>
          </div>
        </div>

        <div className={styles.pubList}>
          <div>
            <BranchLine
              type={BranchLineStyle.BLUE}
              styles={{ transform: `translateY(-7px)` }}
            />
          </div>
        </div>

        <SingleLine
          color="linear-gradient(180deg, #ABB4FF 0%, #797EF9 50%, #0D1117 100%)"
          styles={{ position: "relative", top: "-8px" }}
          height={100}
        />
      </div>
    </>
  );
}
