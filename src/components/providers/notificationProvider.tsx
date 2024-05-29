// src/components/NotificationProvider.tsx

import React, { createContext, useContext } from "react";
import { notification } from "antd";

interface NotificationContextProps {
  api: any;
}

const NotificationContext = createContext<NotificationContextProps | null>(
  null
);

export const NotificationProvider = ({ children }:any) => {
  const [api, contextHolder] = notification.useNotification();

  return (
    <NotificationContext.Provider value={{ api }}>
      {contextHolder}
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotificationAPI = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotificationAPI must be used within a NotificationProvider"
    );
  }
  return context.api;
};

interface CrearNotificacionProps {
  message: React.ReactNode;
  description: React.ReactNode;
  action?: React.ReactNode;
  afterClose?: () => void;
  banner?: boolean;
  closable?: boolean;
  icon?: React.ReactNode;
  showIcon?: boolean;
  type?: "success" | "info" | "warning" | "error";
  onClose?: (e: MouseEvent) => void;
}

export const CrearNotificacion = (api: any, props: CrearNotificacionProps) => {
  api.open({
    message: props.message,
    description: props.description,
    action: props.action,
    afterClose: props.afterClose,
    banner: props.banner,
    closable: props.closable,
    icon: props.icon,
    showIcon: props.showIcon,
    type: props.type,
    onClose: props.onClose,
    duration: null, // Keeping the notification open indefinitely unless closed manually
  });
};
