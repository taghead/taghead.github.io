import "./layout.css";

export const Layout = ({ children }: any) => {
  return (
    <div className="layout">
      <div>Github | Twitter | LinkedIn </div>
      <main>{children}</main>
    </div>
  );
};
