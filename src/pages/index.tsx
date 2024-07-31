import Image from 'next/image';
import styles from './index.module.scss';
import { PublicationList } from '@/lib/constant';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className={styles.homeBanner}>
        <div className={styles.content}>
          <div className={styles.sayHi}>
            <div>Hi! 👋</div>
            <div>{`I'm Heavenmei`}</div>
            <div>Front-end developer | Based in Shanghai</div>
          </div>
          <div className={styles.avatar}>
            <img className="rounded-xl" src="/avatar.jpg"></img>
          </div>
        </div>
        <div className={styles.contactBtn}>
          <a
            href="mailto:heavenmei.huang@gmail.com"
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
        <div className={styles.scrollUp}>
          {/* <IconDoubleUp className={styles.icon} /> */}
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
                  <Image src={item.img} width={275} height={105} alt="" />
                  <div
                    className={`${styles.pubItem_content} flex flex-col gap-1 w-full`}
                  >
                    <strong>{item.title}</strong>
                    <div>
                      {item.authors.split(',')?.map((author, index) => {
                        const cmp =
                          author.trim() !== 'Haiwen Huang' ? (
                            <span>{author}</span>
                          ) : (
                            <a href="#">{author}</a>
                          );
                        return (
                          <>
                            {cmp}
                            {index === item.authors.length - 1 ? '' : ','}
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
            <div className={styles.projectList}></div>
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
    </div>
  );
}
