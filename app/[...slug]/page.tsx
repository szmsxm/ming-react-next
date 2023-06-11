"use client";
import { ReactElement } from "react";
import type { FC } from "react";
import { useRouter } from "next/router";
export interface IProps {
  children?: ReactElement;
}
const NotFound: FC<IProps> = function (props) {
  const { children } = props;
  // const router = useRouter();
  // console.log(router);
  return (
    <div className="slug">
      <div>notFound</div>
    </div>
  );
};
export default NotFound;
NotFound.displayName = "notFound";
