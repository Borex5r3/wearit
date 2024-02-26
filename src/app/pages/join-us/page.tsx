"use client";
import InputContainer from "../../components/inputContainer";
import Link from "next/link";
import { joinUsInputs } from "../data";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function () {
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
  return (
    <div className="bg-white text-greypayne flex flex-col items-center space-y-[32px] min-w-[280px] pb-[48px] min-h-[800px]">
      <div className="w-full flex flex-col">
        <Link
          href={"/pages/sign-in"}
          className="font-bold text-[15px] antialiased uppercase text-center border-b-[4px] border-greypayne w-full py-[16px]"
        >
          join us
        </Link>
        <Link
          href={"/pages/sign-in"}
          className="font-medium text-[15px] antialiased uppercase text-center border-b border-greypayne w-full py-[16px]"
        >
          sign in
        </Link>
      </div>
      {/* form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col items-center space-y-[32px]"
      >
        <div className="w-full px-[20px] space-y-[20px] flex flex-col items-center max-w-[525px]">
          {joinUsInputs.map((item) => {
            return (
              <InputContainer
                key={item.id}
                item={item}
                register={register}
                errors={errors}
              />
            );
          })}
        </div>
        {/* button */}
        <div className="w-full px-[20px] flex flex-col items-center max-w-[525px]">
          <button
            type="submit"
            className=" uppercase text-[15px] font-bold antialiased bg-eggplant text-white py-[24px] w-full"
          >
            join us
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
