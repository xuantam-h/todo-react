import { useState } from "react";

interface CollapseProps extends React.PropsWithChildren {
  title: string;
}

const Collapse = ({ title, children }: CollapseProps) => {
  const [openCollapse, setOpenCollapse] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse-title">
        {title}
        {children}
      </div>
    </div>
  );
};
export default Collapse;
