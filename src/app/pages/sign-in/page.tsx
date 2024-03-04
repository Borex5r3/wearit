"use client";
import { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BreakpointContext } from "../../layout";
import SignInMobile from "./mobile/sign-in";
import SignInDesktop from "./desktop/sign-in";

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
    <SignInMobile
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      form={form}
      register={register}
      errors={errors}
    />
  ) : (
    <SignInDesktop
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      form={form}
      register={register}
      errors={errors}
    />
  );
}
