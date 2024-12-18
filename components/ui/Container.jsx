const Container = ({ children, className }) => {
  return <div className={`${className} max-w-7xl mx-auto px-4 lg:px-8`}>{children}</div>;
};

export default Container;
