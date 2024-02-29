import Image from "next/image";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function () {
  // const [emailInput, setEmailInput] = useState("");
  // const handleEmailInput = (e: any) => {
  //   setEmailInput(e.target.value);
  // };
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
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
  };
  const onSubmit = (_data: any) => {
    const data = form.current || null;
    console.dir(data);
    toastMessage();
    reset();
    // setEmailInput("");
  };
  return (
    <div>
      <div className="w-full h-[310px] flex justify-between items-end px-[200px] pb-[70px]">
        <div className="flex flex-col space-y-[24px] w-full max-w-[300px]">
          <p className="font-bold text-[24px]">Sign up for our emails</p>
          <p className="font-light text-[13px]">
            We'll send you updates on our latest launches and more.
          </p>
          <form
            ref={form}
            onSubmit={handleSubmit(onSubmit)}
            className="relative border border-white flex w-full items-center"
          >
            <div className="h-full w-full flex">
              <input
                {...register("email", {
                  required: "required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message:
                      "Please enter a valid email address in the format user@example.com.",
                  },
                })}
                type="email"
                id="email"
                placeholder="Email"
                className="bg-inherit mx-[12px] text-[12px] w-full outline-none"
                // onChange={handleEmailInput}
              />
              <div
                className={
                  errors.email
                    ? `absolute bottom-[-36px] text-[8px] lg:text-[13px] text-[#e87c03] py-[6px] px-[3px] w-full text-start`
                    : "hidden"
                }
              >
                {String(errors.email?.message)}
              </div>
            </div>
            <button type="submit" className="">
              <div className="bg-white flex p-[8px]">
                <Image
                  src="/right-arrow.png"
                  width={20}
                  height={20}
                  alt="right-arrow"
                />
              </div>
            </button>
          </form>
        </div>
        <div className="flex flex-col items-center space-y-[40px]">
          <p className="text-[14px] antialiased font-bold">FOLLOW US</p>
          <div className="flex space-x-[20px]">
            <Image
              src="/instagram.png"
              width={30}
              height={30}
              alt="instagram"
            />
            <Image src="/facebook.png" width={30} height={30} alt="facebook" />
            <Image src="/linkedin.png" width={30} height={30} alt="linkedin" />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
