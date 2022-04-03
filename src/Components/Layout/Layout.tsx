import "./layout.css";

export const Layout = ({ children }: any) => {
  return (
    <div className="layout">
      <div className="flex space-between">
        <div>Andrew Chander</div>
        <div>Github | Twitter | LinkedIn </div>
      </div>
      <main>{children}</main>
    </div>
  );
};
