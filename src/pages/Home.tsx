import { FC } from "react";
import Banner from "../components/Banner";
import MySideBar from "../components/MySideBar";
import SalientTime from "@/assets/img/2024_salientime.jpg";

const PublicationList = [
  {
    img: SalientTime,
    title: `SalienTime: User-driven Selection of Salient Time Steps for Large-Scale Geospatial Data Visualization`,
    venue: `ACM SIGCHI Conference on Human Factors in Computing Systems 2024 (CHI 2024)`,
    authors: `Juntong Chen, Haiwen Huang, Huayuan Ye, Zhong Peng, Chenhui Li, Changbo Wang`,
    desc: `Selecting a subset of time steps with user-specified priorities, leveraging structural variation info learned by Autoencoders.`,
  },
];

const ProjectList = [
  {
    img: SalientTime,
    title: `SalienTime: User-driven Selection of Salient Time Steps for Large-Scale Geospatial Data Visualization`,
    venue: `ACM SIGCHI Conference on Human Factors in Computing Systems 2024 (CHI 2024)`,
    authors: `Juntong Chen, Haiwen Huang, Huayuan Ye, Zhong Peng, Chenhui Li, Changbo Wang`,
    desc: `Selecting a subset of time steps with user-specified priorities, leveraging structural variation info learned by Autoencoders.`,
  },
];

const Home: FC = () => {
  return (
    <>
      <Banner />
      <div className="w-9/12 container flex">
        <div className="px-4 flex-1">
          <div className="">
            <h2>Publications</h2>
            <div className="pulList flex flex-col">
              {PublicationList.map((item) => (
                <div className="pulItem flex gap-4">
                  <img style={{ width: 275, height: 108 }} src={item.img}></img>
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
            <h2>Projects</h2>
            <div className="projList flex flex-col">
              {ProjectList.map((item) => (
                <div className="projItem flex gap-4">
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
            <div className="pulList flex flex-col">
              {PublicationList.map((item) => (
                <div className="pulItem flex gap-4">
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
    </>
  );
};

export default Home;
