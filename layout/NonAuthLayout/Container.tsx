interface ContainerProps {
  children: React.ReactNode;
  marginBottom?: string;
  className?: string;
}

const Container = ({ children, marginBottom, className }: ContainerProps) => {
  return (
    <div className={`w-[93%] lg:max-w-[1280px]  mx-auto ${marginBottom} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
