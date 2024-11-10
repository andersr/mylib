// import { useContext } from "react";
// import { twMerge } from "tailwind-merge";
// import { AlertContext } from "../providers/AlertProvider";
// import { AlertType } from "../types/Alert";
// import { IconButton } from "./buttons/IconButton";

// want to export this as an object

// goal is to be able to know what props to pass in
interface AlertProps {
  message: string;
  type: "info" | "success" | "danger";
  close?: () => void;
}

export function Alert({ message, type }: AlertProps) {
  return message ? (
    <div className={type === "danger" ? " bg-red-400" : " bg-gray-200"}>
      <div className="flex-1 pr-1">{message}</div>
    </div>
  ) : null;
}
