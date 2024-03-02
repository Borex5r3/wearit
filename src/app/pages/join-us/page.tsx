"use client";
import InputContainer from "../../components/inputContainer";
import Link from "next/link";
import { joinUsInputs } from "../data";
import { useForm } from "react-hook-form";
import { useContext, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import JoinUsMobile from "./mobile/join-us";
import JoinUsDesktop from "./desktop/join-us";
import { BreakpointContext } from "../layout";

export default function () {
  const { isBreakpoint } = useContext(BreakpointContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const form = useRef<HTMLFormElement>(null);
  const toastMessage = () => {
    toast.success("Welcome aboard, WearIt fans ! 🚀", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
  };
  const onSubmit = (_data: any) => {
    const data = form.current || null;
    console.log(data);
    toastMessage();
    reset();
  };
  return isBreakpoint ? (
    <JoinUsMobile
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      joinUsInputs={joinUsInputs}
      register={register}
      errors={errors}
    />
  ) : (
    <JoinUsDesktop
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      joinUsInputs={joinUsInputs}
      register={register}
      errors={errors}
    />
  );
}
