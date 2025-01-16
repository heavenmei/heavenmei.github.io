import React, { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./index.module.scss";
import config from "@/configs";
import MySideBar from "@/components/MySideBar";
import SingleLine from "@/components/lines/SingleLine";
import BranchLine, { BranchLineStyle } from "@/components/lines/BranchLine";
import LineIcon from "@/components/lines/LineIcon";

const NoteDir = () => {
  const [activeTag, setActiveTag] = useState<string>();

  const { noteList } = config;

  return (
    <>
      <div className="self">
        <img className="avatar" src="/avatar.jpg"></img>
        <p className="sayHi">
          Hi~👋 <br />
          I’m Heavenmei
        </p>
      </div>

      <div className="container flex gap-24">
        <div className="w-full flex-1 ">
          <Image
            src={`/icons/firstLineGreen.svg`}
            alt=""
            width={437}
            height={522}
          />

          <div className={styles.publication}>
            <div>
              <LineIcon name="file" color="#57D364" />
              <SingleLine
                color="linear-gradient(180deg, #56D364 0%, #2EA043 100%)"
                height={100}
              />
            </div>
            <div className={styles.publication_content}>
              <h1>Notes</h1>
              <p className="text-2xl font-light font-mono">系列整理</p>
            </div>
          </div>
          {noteList.map((item) => (
            <div className={styles.pubList} key={item.title}>
              <div>
                <BranchLine type={BranchLineStyle.GREEN} />
              </div>
              <Link
                className={styles.pubList_content}
                href={`/post?id=${item.id}`}
              >
                <div className="flex flex-col gap-1">
                  <div className="flex gap-4">
                    <p className="text-green text-xl font-bold">{item.title}</p>
                    <p className="tag text-green mr-auto">{item.tag}</p>
                  </div>
                  <div className="text-secondary text-sm">{item.desc}</div>
                </div>
                <Image src={item.img} width={200} height={107} alt="" />
              </Link>
            </div>
          ))}
        </div>
        <div className="relative mt-[500px] ">
          <MySideBar
            isTags={true}
            activeTag={activeTag}
            setActiveTag={setActiveTag}
          />
        </div>
      </div>
    </>
  );
};

export default NoteDir;
