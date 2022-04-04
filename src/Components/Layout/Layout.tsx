import "./layout.css";

export const Layout = ({ children }: any) => {
  return (
    <div className="layout">
      <div className="flex space-between">
        <div>Andrew Chander</div>
        <div>Site is currently under construction.</div>
        <div>Github | Twitter | LinkedIn | WakaTime </div>
      </div>
      <main>{children}</main>
    </div>
  );
};
