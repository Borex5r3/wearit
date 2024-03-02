import { ToastContainer } from "react-toastify";
import Link from "next/link";
import InputContainer from "../../../components/inputContainer";
import Image from "next/image";
import { signInInputs } from "../../data";

export default function ({
  handleSubmit,
  onSubmit,
  register,
  form,
  errors,
}: {
  handleSubmit: any;
  onSubmit: any;
  form: any;
  register: any;
  errors: any;
}) {
  return (
    <div className="bg-eggplant text-greypayne flex flex-col items-center pb-[100px] pt-[40px] space-y-[40px]">
      <p className="text-white text-[100px] font-bold antialiased">WearIt</p>
      <div className="flex flex-col max-w-[800px] h-[900px] items-center w-full px-[36px] space-y-[76px] bg-white pb-[200px] pt-[24px]">
        <div className="w-full flex">
          <Link
            href={"/pages/join-us"}
            className="font-medium text-[15px] antialiased uppercase text-center w-full py-[16px]"
          >
            join us
          </Link>
          <Link
            href={"/pages/sign-in"}
            className="font-bold text-[15px] antialiased uppercase text-center border-b-[4px] border-greypayne w-full py-[16px]"
          >
            sign in
          </Link>
        </div>
        {/* form */}
        <form
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full space-y-[32px] items-center"
        >
          <div className="w-full px-[20px] space-y-[20px] max-w-[525px]">
            {signInInputs.map((item) => {
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
          <div className="w-full px-[20px] max-w-[525px]">
            <button
              type="submit"
              className=" uppercase text-[15px] font-bold antialiased bg-eggplant text-white py-[24px] w-full"
            >
              sign in
            </button>
          </div>
        </form>
        <p className="font-bold text-[14px] antialiased uppercase text-black">
          or sign in with...
        </p>
        {/* google and facebook */}
        <div className="flex w-full items-center px-[20px] max-w-[525px] justify-between">
          <button className="py-[12px] border-[2px] border-greypayne flex justify-center items-center w-[200px]">
            <div className="space-x-[12px] flex items-center">
              <Image
                src="/search.png"
                width={24}
                height={24}
                alt="google icon"
              />
              <p className="text-[13px] antialiased font-bold uppercase">
                google
              </p>
            </div>
          </button>
          <button className="py-[12px] border-[2px] border-greypayne flex justify-center items-center w-[200px]">
            <div className="space-x-[12px] flex items-center">
              <Image
                src="/facebook.png"
                width={24}
                height={24}
                alt="facebook icon"
              />
              <p className="text-[13px] antialiased font-bold uppercase">
                facebook
              </p>
            </div>
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
