import { FC } from 'react';
import Image from 'next/image';

const MySideBar: FC = () => {
  // todo getTags
  return (
    <div className="person-side flex flex-col w-1/5 min-w-[200px] gap-4">
      <img
        style={{ width: 200, height: 200 }}
        className="rounded-xl"
        src="/avatar.jpg"
      ></img>
      <div>Haiwen Huang,</div>
      <div className="contact-btns flex gap-2">
        <a
          href="mailto:zhaohuabing@gmail.com"
          className="contact-icon"
          target="_blank"
        >
          <Image src="/icons/email.svg" width={20} height={20} alt="" />
        </a>
        <a
          href="https://github.com/heavenmei"
          className="contact-icon"
          target="_blank"
        >
          <Image src="/icons/github.svg" width={20} height={20} alt="" />
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
