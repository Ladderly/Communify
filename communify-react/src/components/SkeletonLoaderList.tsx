import React, { FC, memo } from "react";
import SkeletonLoader from "./SkeletonLoader";

interface Props {
  page: "home" | "questionList";
}

const SkeletonLoaderList: FC<Props> = ({ page }) => {
  return (
    <div className="flex flex-col w-full px-2 mt-6 space-y-4 sm:w-2/5 sm:mx-auto sm:px-0">
      <SkeletonLoader page={page} />
      <SkeletonLoader page={page} />
      <SkeletonLoader page={page} />
      <SkeletonLoader page={page} />
    </div>
  );
};

SkeletonLoaderList.defaultProps = {};

export default memo(SkeletonLoaderList);
