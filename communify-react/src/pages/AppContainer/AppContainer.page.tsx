import React, { FC, memo } from "react";

interface Props {}

const AppContainer: FC<Props> = (props) => {
  return <div></div>;
};

AppContainer.defaultProps = {};

export default memo(AppContainer);
