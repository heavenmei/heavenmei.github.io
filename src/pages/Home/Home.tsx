import React, { FC } from "react";
import styles from "./index.module.scss";
import { ProjectList, PublicationList } from "./constant";
import avatar from "../../../public/avatar.jpg";
import {
  IconEmail,
  IconGithub,
  IconDoubleUp,
} from "@arco-design/web-react/icon";
import { Carousel } from "@arco-design/web-react";

const Home: FC = () => {
  return (
    <React.Fragment>
      <div className={styles.homeBanner}>
        <div className={styles.content}>
          <div className={styles.sayHi}>
            <div>Hi! 👋</div>
            <div>I'm Heavenmei</div>
            <div>Front-end developer | Based in Shanghai</div>
          </div>
          <div className={styles.avatar}>
            <img className="rounded-xl" src={avatar}></img>
          </div>
        </div>
        <div className={styles.contactBtn}>
          <a
            href="mailto:heavenmei.huang@gmail.com"
            className="contact-icon"
            target="_blank"
          >
            <IconEmail className={styles.icon} />
          </a>
          <a
            href="https://github.com/heavenmei"
            className="contact-icon"
            target="_blank"
          >
            <IconGithub className={styles.icon} />
          </a>
        </div>
        <div className={styles.scrollUp}>
          <IconDoubleUp className={styles.icon} />
        </div>
        <div className={styles.homeBg}></div>
      </div>
      <div className={styles.homeContent}>
        <div className="w-3/4 m-auto">
          <section>
            <div className={styles.sectionTitle}>Publications</div>
            <div className={`flex flex-col ${styles.pubList}`}>
              {PublicationList.map((item) => (
                <div
                  className={`${styles.pubItem} flex gap-4`}
                  key={item.title}
                >
                  <img style={{ width: 275, height: 108 }} src={item.img}></img>
                  <div
                    className={`${styles.pubItem_content} flex flex-col gap-1 w-full`}
                  >
                    <strong>{item.title}</strong>
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
                    <div className={styles.lightText}>{item.venue}</div>
                    <div className={styles.lightText}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className={styles.sectionTitle}>Projects</div>
            <div className={styles.projectList}>
              <Carousel
                autoPlay
                animation="card"
                // showArrow="never"
                indicatorPosition="outer"
                style={{ width: "80%" }}
              >
                {ProjectList.map((item, index) => (
                  <div
                    className={styles.projectList_item}
                    key={index}
                    style={{ width: "60%" }}
                  >
                    <img src={item.img} style={{ width: "100%" }} />
                    <div>{item.title}</div>
                  </div>
                ))}
              </Carousel>
            </div>
          </section>

          <div>
            <h2>Posts</h2>
            <div className="pubList flex flex-col">
              {PublicationList.map((item) => (
                <div className="pulItem flex gap-4" key={item.title}>
                  <div className="flex flex-col gap-1">
                    <div>{item.title}</div>
                    <div>{item.authors}</div>
                    <div>{item.venue}</div>
                    <div>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
