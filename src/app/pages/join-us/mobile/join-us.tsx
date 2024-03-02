import { ToastContainer } from "react-toastify";
import Link from "next/link";
import InputContainer from "../../../components/inputContainer";

export default function ({
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
}) {
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
