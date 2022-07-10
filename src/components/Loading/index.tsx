import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

type Props = {
  size?: number;
  color?: string;
};
const Loading = (props: Props) => {
  const { size = 30, color = "#3c4390" } = props;
  return <ClipLoader size={size} color={color} />;
};

export default Loading;
