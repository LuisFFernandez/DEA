import { FC } from "react";
import { Avatar, Breadcrumb, Button, Layout, Menu } from "antd";
import { Input, Switch } from "antd";
import type { SearchProps } from "antd/es/input/Search";
import {
  UserOutlined,
  SearchOutlined,
  SunFilled,
  MoonFilled,
  NotificationOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { BreadcrumbItemType } from "antd/es/breadcrumb/Breadcrumb";

const { Header } = Layout;
const { Search } = Input;

export const AppHeader = () => {
  const BreadCrumbItems: any[] = [
    {
      href: "",
      title: "Inicio",
    },
    {
      type: "separator",
    },
    {
      href: "",
      title: "Dashboard",
    },
  ];

  return (
    <div className="w-full flex flex-row justify-between px-12 py-6 items-center">
      <div className="flex flex-col gap-1">
        <p className="text-3xl font-medium">DASHBOARD</p>
        <Breadcrumb separator="" items={BreadCrumbItems} />
      </div>
      <div className="flex flex-row gap-4 items-center [&_div]:flex [&_div]:items-center">
        <div className="grow">
          <Input
            size="large"
            prefix={<SearchOutlined />}
            className="rounded-full"
            variant="filled"
            placeholder="Buscar"
          />
        </div>
        <div>
          <Switch
            unCheckedChildren={<SunFilled />}
            checkedChildren={<MoonFilled />}
          />
        </div>
        <div>
          <Button icon={<BellOutlined />} />
        </div>
        <div className="grow self-end flex justify-end gap-2">
          <Avatar icon={<UserOutlined />} /> <p>Luis Fernandez</p>
        </div>
      </div>
    </div>
  );
};
