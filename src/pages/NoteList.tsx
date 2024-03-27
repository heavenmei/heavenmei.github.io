import { FC, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import MySideBar from "../components/MySideBar";

interface NoteListProps {}
const NoteList: FC<NoteListProps> = () => {
  const [curIndex, setCurIndex] = useState<number>(-1);
  // const { content, url } = props;
  //@ts-ignore
  const NoteFiles = window.NoteFiles;
  // console.log("===window.NoteFiles", NoteFiles[5]);

  // todo bug
  const curMD = useCallback((url: string) => {
    // const url = location.pathname.split("/").pop();
    const _curIndex = NoteFiles.findIndex(
      (item: any) => item.URL?.split("/")[1] == url
    );

    if (_curIndex === -1) {
      return;
    }
    setCurIndex(_curIndex);
    const _curMD = NoteFiles[_curIndex];
    console.log("====cur", _curMD);

    return `../content/notes/${_curMD.path}`;
  }, []);

  return (
    <>
      <Banner />
      <div className="post-list container flex w-9/12">
        <div className="flex flex-col flex-1 pl-4 pr-[100px] gap-4">
          {NoteFiles.map(
            (file: any) =>
              file.title && (
                <>
                  <div className="post-item flex flex-col" key={file.title}>
                    <Link
                      to={`/notes/${file.citekey}`}
                      state={{
                        id: 3,
                        curMD: curMD(file.citekey),
                        curIndex: curIndex,
                      }}
                    >
                      <h2 className="post-item-title"> {file.title}</h2>
                      <div className="post-item-subtitle">{file.subtitle}</div>
                      <div className="post-item-desc">{file.description}</div>
                    </Link>
                    <div className="post-item-meta">
                      Posted by {file.author} on {file.date}
                    </div>
                  </div>
                  <hr />
                </>
              )
          )}
        </div>
        <MySideBar />
      </div>
    </>
  );
};

export default NoteList;
