interface BannerProps {
  title?: string;
  isErrorPage?: boolean;
}
const Banner = (props: BannerProps) => {
  const { title = "Heavenmei Blog", isErrorPage = false } = props;

  return (
    <header className="intro-header">
      <div className="container">
        {isErrorPage ? <h1>404</h1> : <h1>{title}</h1>}
      </div>
    </header>
  );
};

export default Banner;
