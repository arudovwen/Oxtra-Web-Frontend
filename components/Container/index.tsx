interface ContainerProps {
  children: React.ReactNode;
  marginBottom?: string;
}

const Container = ({ children, marginBottom }: ContainerProps) => {
  return (
    <div
      className={`max-w-[1192px] flex-col flex grow mx-auto ${marginBottom}`}
    >
      {children}
    </div>
  );
};

export default Container;
