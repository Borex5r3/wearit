import { ToastContainer } from "react-toastify";
import Link from "next/link";
import InputContainer from "../../../components/inputContainer";

const JoinUs = ({
  handleSubmit,
  onSubmit,
  joinUsInputs,
  register,
  errors,
}: {
  handleSubmit: any;
  onSubmit: any;
  joinUsInputs: any;
  register: any;
  errors: any;
}) => {
  return (
    <div className="bg-eggplant text-greypayne flex flex-col items-center pb-[100px] pt-[40px] space-y-[40px]">
      <p className="text-white text-[100px] font-bold antialiased">WearIt</p>
      <div className="flex flex-col max-w-[800px] w-full border px-[36px] space-y-[76px] bg-white pb-[200px] pt-[24px] h-[900px]">
        <div className="w-full flex">
          <Link
            href={"/pages/sign-in"}
            className="font-bold text-[16px] antialiased uppercase text-center border-b-[4px] border-greypayne w-full py-[16px]"
          >
            join us
          </Link>
          <Link
            href={"/pages/sign-in"}
            className="font-medium text-[16px] antialiased uppercase text-center w-full py-[16px]"
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
            {joinUsInputs.map((item: any) => {
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
              className=" uppercase text-[16px] font-bold antialiased bg-eggplant text-white py-[24px] w-full"
            >
              join us
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default JoinUs;