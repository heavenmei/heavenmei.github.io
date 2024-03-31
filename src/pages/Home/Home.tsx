import React, { FC } from "react";
import Banner from "../../components/Banner";
import MySideBar from "../../components/MySideBar";
import styles from "./index.module.scss";
import { ProjectList, PublicationList } from "./constant";

const Home: FC = () => {
  return (
    <React.Fragment>
      <Banner />
      <div className="w-9/12 container flex">
        <div className="px-4 flex-1">
          <section>
            <h2>Publications</h2>
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
                    <div>{item.authors}</div>
                    <div>{item.venue}</div>
                    <div>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div>
            <h2>Projects</h2>
            <div className="projList flex flex-col">
              {ProjectList.map((item) => (
                <div className="projItem flex gap-4" key={item.title}>
                  <img style={{ width: 375, height: 208 }} src={item.img}></img>
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
        <MySideBar />
      </div>
    </React.Fragment>
  );
};

export default Home;
