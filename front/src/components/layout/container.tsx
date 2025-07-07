import React, { FC } from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  //px-4 sm:px-6 lg:px-8
  return <div className="mx-auto max-w-7xl  min-h-[78vh]">{children}</div>;
};

export default Container;
