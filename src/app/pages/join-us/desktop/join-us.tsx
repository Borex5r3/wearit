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
    <div className="bg-eggplant text-greypayne flex flex-col items-center pb-[100px]">
      <p className="text-white text-[80px] font-bold antialiased">WearIt</p>
      <div className="flex flex-col max-w-[600px] w-full border px-[56px] space-y-[26px] bg-white pb-[200px] pt-[8px] h-[650px] items-center">
        <div className="w-full flex mb-[20px] max-w-[352px] px-[20px]">
          <Link
            href={"/pages/sign-in"}
            className="font-bold text-[14px] antialiased uppercase text-center border-b-[4px] border-greypayne w-full py-[16px]"
          >
            join us
          </Link>
          <Link
            href={"/pages/sign-in"}
            className="font-medium text-[14px] antialiased uppercase text-center w-full py-[16px]"
          >
            sign in
          </Link>
        </div>
        {/* form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col items-center space-y-[32px]"
        >
          <div className="w-full px-[20px] space-y-[20px] flex flex-col items-center max-w-[352px]">
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
          <div className="w-full px-[20px] flex flex-col items-center max-w-[352px]">
            <button
              type="submit"
              className=" uppercase text-[14px] font-bold antialiased bg-eggplant text-white py-[12px] w-full"
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