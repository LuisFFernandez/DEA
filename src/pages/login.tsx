import { NextPage } from "next";
import { MainLayout } from "@/layouts/layout";
import { Button, Checkbox, Image, Input } from "antd";
// import Password from "antd/es/input/Password";
import { GoogleOutlined } from "@ant-design/icons";
import {
  CrearNotificacion,
  useNotificationAPI,
} from "@/components/providers/notificationProvider";

const Home: NextPage = () => {
  const api = useNotificationAPI();
  return (
    <div className="bg-zinc-800 w-full h-full flex justify-center items-center">
      <div className="rounded-3xl grid grid-cols-2 overflow-hidden">
        <div className="h-full bg-zinc-900 flex items-center justify-center">
          <div className="w-full px-16 flex flex-col gap-4 items-center">
            <div className="text-white leading-none flex flex-col gap-0 items-center mb-4">
              <p className="text-2xl">Bienvenido a Dashboard</p>
              <p className="text-sm">Inicie sesion para utilizar el sistema</p>
            </div>
            <Button
              block
              iconPosition="start"
              icon={<GoogleOutlined />}
              className="bg-zinc-700 text-white border-none"
            >
              Google
            </Button>
            <div className="my-4">
              <p className="text-white">O Puedes</p>
            </div>
            <Input
              placeholder="usuario@ejemplo.com o usuario"
              variant="outlined"
            />
            {/* <Password placeholder="xxxxxxxx" variant="outlined" /> */}
            <Input type="password" />
            <div className="flex flex-row justify-between w-full text-white">
              <Checkbox className="text-white">Recordar</Checkbox>
              <a>Recuperar Contraseña</a>
            </div>
            <button
              className="bg-zinc-800 w-full rounded-md py-2 text-white hover:bg-zinc-600 transition-all duration-5"
              onClick={() => {
                CrearNotificacion(api, {
                  message: "Notification Title",
                  description: "This is the content of the notification.",
                  type: "info",
                  action: (
                    <Button onClick={() => console.log("Action Clicked")}>
                      Action
                    </Button>
                  ),
                  afterClose: () => console.log("Notification closed"),
                  banner: true,
                  closable: true,
                  showIcon: true,
                });
              }}
            >
              Iniciar Sesion
            </button>
          </div>
        </div>
        <div className="bg-stone-700 items-center justify-center flex">
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/login-4489776-3757211.png?f=webp" />
        </div>
      </div>
    </div>
  );
};

export default Home;
