import React, { ReactNode } from "react";

interface MainHeaderProps {
    children: ReactNode;
}

const MainHeader: React.FC<MainHeaderProps> = (props) => {
  return (
    <div className="w-full h-16 fixed top-0 left-0 shadow-md px-6 lg:px-64
      flex items-center justify-between">
        {props.children}
    </div>
  )
}

export default MainHeader;