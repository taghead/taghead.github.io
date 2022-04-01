import "./layout.css";

export const Layout = ({ children }: any) => {
  return (
    <div className="layout">
      <div>Welcome</div>
      <main>{children}</main>
    </div>
  );
};
