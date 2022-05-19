import React, { useState } from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  PhoneOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import Link from 'next/link';

function Navbar() {
  const [state, setState] = useState({ current: "home" });
  const handleClick = (e) => {
    setState({ current: e.key });
  };

  const { current } = state;

  return (
    <div className="navbar-wrapper flex items-center">
      <Link href={"/"} style={{ width: "-webkit-fill-available" }}>
        <h2 className="w-full my-0 text-xl text-white">The Cocktail</h2>
      </Link>
      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        theme="dark"
        mode="horizontal"
        style={{ justifyContent: "flex-end", width: "100%" }}
      >
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <Link href={"/"}>Home</Link>
        </Menu.Item>
        <Menu.Item key="cat1" icon={<AppstoreOutlined />}>
          <Link href={"/category/Cocktail"}>Cocktail</Link>
        </Menu.Item>
        <Menu.Item key="cat2" icon={<AppstoreOutlined />}>
          <Link href={"/category/Ordinary Drink"}>Ordinary Drink</Link>
        </Menu.Item>
        <Menu.Item key="cat3" icon={<AppstoreOutlined />}>
          <Link href={"/category/Beer"}>Beer</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Navbar;