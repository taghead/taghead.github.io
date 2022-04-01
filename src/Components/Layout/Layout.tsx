import "./layout.css";

export const Layout = ({ children }: any) => {
  return (
    <>
      <div>Welcome</div>
      <main className="layout">{children}</main>
    </>
  );
};
