import "./style.scss";

export const Layout = ({ children, className, id = "wrapper" }) => {
  return (
    <main id={id} className={className}>
      {children}
    </main>
  );
};
