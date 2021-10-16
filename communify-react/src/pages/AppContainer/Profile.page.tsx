import React, { FC, memo, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

interface Props {}

const Profile: FC<Props> = (props) => {
  const user = useContext(AuthContext);
  return <div>{user?.displayName}</div>;
};

Profile.defaultProps = {};

export default memo(Profile);
