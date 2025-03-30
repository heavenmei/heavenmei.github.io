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
        <div className="w-3/4 flex-1 ">
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
              <p className={styles.publication_desc}>系列整理</p>
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
                <div className="flex flex-col gap-1 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-green text-xl font-bold">
                      {item.title}
                    </span>
                    <span className="tag text-green">{item.tag}</span>
                  </div>
                  <div className="text-secondary text-sm">{item.desc}</div>
                </div>
                <img src={item.img} className="mt-2 lg:mt-0 lg:ml-2 lg:h-40 max-h-[200px]" />
              </Link>
            </div>
          ))}
          <SingleLine
            color="linear-gradient(180deg, #2EA043 0%, #56D364 50%, #0D1117 100%)"
            styles={{ position: "relative", top: "-8px" }}
            height={100}
          />
        </div>

        <div className="w-1/4 relative mt-[500px] hidden lg:block">
          <MySideBar isTags={true} />
        </div>
      </div>
    </>
  );
};

export default NoteDir;
