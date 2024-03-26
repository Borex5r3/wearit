const InputContainer = ({
  item,
  register,
  errors,
}: {
  item: any;
  register: any;
  errors: any;
}) => {
  const {
    title,
    placeholder,
    type,
    id,
  }: { title: string; placeholder: string; type: string; id: number } = item;

  const registerObjectParameter =
    id === 0
      ? {
          required: "required",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message:
              "Please enter a valid email address in the format user@example.com.",
          },
        }
      : {
          required: "required",
        };
  let errorInput;
  let registerFirstParameter;
  switch (id) {
    case 0:
      errorInput = errors.email;
      registerFirstParameter = "email";
      break;
    case 1:
      errorInput = errors.password;
      registerFirstParameter = "password";
      break;
    case 2:
      errorInput = errors.first_name;
      registerFirstParameter = "first_name";

      break;
    case 3:
      errorInput = errors.last_name;
      registerFirstParameter = "last_name";

      break;
    default:
      break;
  }
  return (
    <div className="relative space-y-[12px] w-full">
      <p className="text-greypayne text-[13px] font-medium antialiased uppercase">
        {title}
      </p>
      <input
        {...register(registerFirstParameter, registerObjectParameter)}
        placeholder={placeholder}
        type={type}
        className="text-white text-[13px] font-medium antialiased py-[12px] px-[12px] outline-none bg-greypayne w-full"
      />
      <div
        className={
          errorInput
            ? `absolute bottom-[-24px] text-[8px] lg:text-[13px] text-[#e87c03] py-[6px] px-[3px] w-full text-start`
            : "hidden"
        }
      >
        {String(errorInput?.message)}
      </div>
    </div>
  );
}

export default InputContainer;