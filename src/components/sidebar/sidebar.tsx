import { FC } from "react";
import { Layout, Menu, MenuProps, theme } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  // {
  //   key: "sub1",
  //   label: "Navigation One",
  //   icon: <MailOutlined />,
  //   children: [
  //     {
  //       key: "g1",
  //       label: "Item 1",
  //       type: "group",
  //       children: [
  //         { key: "1", label: "Option 1" },
  //         { key: "2", label: "Option 2" },
  //       ],
  //     },
  //     {
  //       key: "g2",
  //       label: "Item 2",
  //       type: "group",
  //       children: [
  //         { key: "3", label: "Option 3" },
  //         { key: "4", label: "Option 4" },
  //       ],
  //     },
  //   ],
  // },
  {
    key: 'dashboard',
    icon: <LaptopOutlined />,
    label: (
      <a href="#">
        Dashboard
      </a>
    ),
  },
  {
    key: 'members',
    icon: <UserOutlined />,
    label: "Miembros"
  },
  {
    key: 'professions',
    icon: <LaptopOutlined />,
    label: "Profesiones"
  },
  {
    key: 'ministeries',
    icon: <LaptopOutlined />,
    label: "Ministerios"
  },
  {
    type: "divider",
  },  
  {
    key: "grp",
    label: "Group",
    type: "group",
    children: [
      { key: "settings", label: "Configuraciones" },
      { key: "help", label: "Ayuda" },
    ],
  },
];

const { Sider } = Layout;

export const Sidebar = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Sider style={{ background: colorBgContainer, height: "100vh" }}>
      <div className="flex flex-col gap-0 justify-between h-full px-4 py-10">
        <div className="flex flex-col gap-8">
          <div>USUARIO</div>
          <Menu
            style={{ height: "100%" }}
            defaultSelectedKeys={["dashboard"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            items={items}
          />
        </div>
        <div>LOG OUT</div>
      </div>
    </Sider>
  );
};
