import "./layout.css";

export const Layout = ({ children }: any) => {
  return (
    <div className="layout">
      <div>Navbar here</div>
      <main>{children}</main>
    </div>
  );
};
