import React from "react";
import NorthIcon from "@mui/icons-material/North";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="sticky bottom-5 w-full cursor-pointer">
      <div className="flex items-center justify-center flex-col">
        <NorthIcon className="animate-bounce text-purple-9" />
        <p className="text-xs">Back to top</p>
      </div>
    </footer>
  );
};

export default Footer;
