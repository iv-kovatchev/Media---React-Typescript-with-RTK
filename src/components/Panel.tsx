import classNames from "classnames";
import { type ReactNode } from "react";

interface PanelProps {
  children: ReactNode;
  extraClasses?: string;
}

const Panel = ({
  children,
  extraClasses,
  ...args
}: PanelProps & Record<string, any>) => {
  const classes = classNames(
    "border rounded p-3 shadow bg-white w-full",
    extraClasses,
  );

  return (
    <div {...args} className={classes}>
      {children}
    </div>
  );
};

export default Panel;
