import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Head } from "./style";

const Header: FC = () => {
  return (
    <Head>
      <Link to="/goods">Goods</Link>
    </Head>
  );
};

export default Header;
