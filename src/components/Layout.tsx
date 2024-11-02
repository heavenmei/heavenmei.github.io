import Nav from "./Nav";
import Footer from "./Footer";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default RootLayout;
