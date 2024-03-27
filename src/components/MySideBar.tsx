import { FC } from "react";
import { IconEmail, IconGithub } from "@arco-design/web-react/icon";
import avatar from "../../public/avatar.jpg";

const MySideBar: FC = () => {
  // todo getTags
  return (
    <div className="person-side flex flex-col w-1/5 min-w-[200px] gap-4">
      <img
        style={{ width: 200, height: 200 }}
        className="rounded-xl"
        src={avatar}
      ></img>
      <div>Haiwen Huang,</div>
      <div className="contact-btns flex gap-2">
        <a
          href="mailto:zhaohuabing@gmail.com"
          className="contact-icon"
          target="_blank"
        >
          <IconEmail color="#fff" width={20} height={20} />
        </a>
        <a
          href="https://github.com/heavenmei"
          className="contact-icon"
          target="_blank"
        >
          <IconGithub color="#fff" width={20} height={20} />
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
  );
};

export default MySideBar;
