"use client";
import { ReactElement } from "react";
import type { FC } from "react";
export interface IProps {
  children?: ReactElement;
}
const Loading: FC<IProps> = function (props) {
  const { children } = props;
  return (
    <div className="home">
      <div>Loading</div>
    </div>
  );
};
export default Loading;
Loading.displayName = "Loading";
