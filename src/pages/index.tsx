import Image from "next/image";
import styles from "./index.module.scss";
import LineIcon from "@/components/lines/LineIcon";
import SingleLine from "@/components/lines/SingleLine";
import BranchLine, { BranchLineStyle } from "@/components/lines/BranchLine";
import config from "@/configs";

export default function Home() {
  const {
    aboutMe,
    aboutMeDesc,
    publication,
    publicationList,
    project,
    projectList,
  } = config;

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
        <Image src={`/icons/firstLine.svg`} alt="" width={437} height={522} />

        {/* About me */}
        <div className={styles.aboutMe}>
          <div>
            <LineIcon name="code" />
            <SingleLine />
          </div>
          <div className={styles.aboutMe_content}>
            <div className={styles.aboutMe_top}>
              <Image src="/icons/github.svg" width={20} height={20} alt="" />
              <p>GitHub Galaxy</p>
              <Image
                src="/icons/rightArrow.svg"
                width={20}
                height={20}
                alt=""
              />
            </div>

            <p className={styles.aboutMe_desc}>{aboutMe}</p>
            <p className="text-secondary">{aboutMeDesc}</p>
            <div className={styles.aboutMe_contact}>
              <button className="rounded">
                <a
                  href={`mailto:${config.email}`}
                  className="contact-icon"
                  target="_blank"
                >
                  <Image src="/icons/email.svg" width={20} height={20} alt="" />
                </a>
              </button>
              <button className="rounded">
                <a
                  href={config.github}
                  className="contact-icon"
                  target="_blank"
                >
                  <Image
                    src="/icons/github.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                </a>
              </button>
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
            <p className="text-2xl font-light font-mono">
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
              <div className="flex flex-col gap-1">
                <div className="tag text-green mr-auto">{item.tag}</div>
                <p className="text-green text-xl font-bold">{item.title}</p>
                <div>
                  {item.authors.split(",")?.map((author, index) => {
                    const cmp =
                      author.trim() !== "Haiwen Huang" ? (
                        <span>{author}</span>
                      ) : (
                        <a href="#">{author}</a>
                      );
                    return (
                      <>
                        {cmp}
                        {index === item.authors.length - 1 ? "" : ","}
                      </>
                    );
                  })}
                </div>
                <div className="text-secondary text-sm">{item.venue}</div>
                <div className="text-secondary text-sm">{item.desc}</div>
              </div>
              <Image src={item.img} width={300} height={107} alt="" />
            </div>
          </div>
        ))}

        {/* Project */}
        <div className={styles.project}>
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
          <div className={styles.project_content}>
            <h1>Projects</h1>
            <p className="text-2xl font-light font-mono ">
              <span className="text-[#FFA28B]">{project[0]}</span>&nbsp;
              {project[1]}
            </p>
          </div>
        </div>
        {projectList.map((item) => (
          <div className={styles.pubList} key={item.title}>
            <div>
              <BranchLine type={BranchLineStyle.RED} />
            </div>
            <div className={styles.pubList_content}>
              <div className="flex flex-col gap-1">
                <div className="tag text-red mr-auto">{item.tag}</div>
                <strong className="text-red text-xl font-bold">
                  {item.title}
                </strong>
                <div>
                  {item.authors.split(",")?.map((author, index) => {
                    const cmp =
                      author.trim() !== "Haiwen Huang" ? (
                        <span>{author}</span>
                      ) : (
                        <a href="#">{author}</a>
                      );
                    return (
                      <>
                        {cmp}
                        {index === item.authors.length - 1 ? "" : ","}
                      </>
                    );
                  })}
                </div>
                <div className="text-secondary text-sm">{item.venue}</div>
                <div className="text-secondary text-sm">{item.desc}</div>
              </div>
              <Image src={item.img} width={300} height={107} alt="" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
