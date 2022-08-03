import * as React from "react";
import { iconLibrary } from "./iconLibrary";

export type IconName = "calendar" | "home" | "information" | "sendMessage";

type Props = {
  name: IconName;
  style?: React.CSSProperties;
};
export const Icon = ({ name, style = { opacity: 1 } }: Props) => {
  const renderedPaths = iconLibrary[name]?.paths.map(
    (path: string, index: number) => <path key={index} d={path}></path>
  );

  const viewBox = iconLibrary[name]?.viewBox;

  return (
    <svg style={style} viewBox={viewBox} className="custom-icon">
      {renderedPaths}
    </svg>
  );
};
