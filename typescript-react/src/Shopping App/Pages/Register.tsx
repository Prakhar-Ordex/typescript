import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { registerUser } from "../Redux/UserSlice";
import { useAppDispatch } from "../Redux/hooks";
import { registerData } from "../constant/constant";

const Register = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<registerData>();

  const onSubmit: SubmitHandler<registerData> = async (data) => {
    try {
      await dispatch(registerUser(data));
      reset();
      navigate("/login");
    } catch (error) {
      setError("root", { type: "manual", message:`  Error registering use : ${error}` });
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className="py-16 bg-gray-800 min-h-screen">
      <div className="max-w-4xl mx-auto font-[sans-serif] p-6  bg-gray-100 rounded-lg shadow  mt-10">
        <div className="text-center mb-16">
          <h4 className="text-gray-800  text-2xl font-semibold ">
            Sign up into your account
          </h4>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="">
          {errors.root?.message && (
            <p className="text-red-500 text-sm">{errors.root?.message}</p>
          )}
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <label className="text-gray-800 text-sm mb-2 block"> Name</label>
              <input
                type="text"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all border-2"
                placeholder="Enter name"
                {...register("name", {
                  required: { value: true, message: "Name is required" },
                  minLength: { value: 3, message: "Min lenght 3" },
                })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Email Id
              </label>
              <input
                type="text"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all border-2"
                placeholder="Enter email"
                {...register("email", {
                  required: { value: true, message: "Emial is required" },
                  minLength: { value: 3, message: "Min lenght 3" },
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Password
              </label>
              <input
                type="password"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all border-2"
                placeholder="Enter password"
                {...register("password", {
                  required: { value: true, message: "passworde is required" },
                  minLength: { value: 6, message: "Min lenght 6" },
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                    message:
                      "Password must be at least 8 characters long, and include an uppercase letter, a lowercase letter, and a number",
                  },
                })}
              />
              {/* <input name="password" type="password" /> */}
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Avatar</label>
              <input
                type="text"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all border-2"
                placeholder="Enter confirm password"
                {...register("avatar", {
                  required: { value: true, message: "Avatar is required" },
                  minLength: { value: 3, message: "Min lenght 3" },
                })}
              />
              {errors.avatar && (
                <p className="text-red-500 text-sm">{errors.avatar.message}</p>
              )}
            </div>
          </div>
          <p className="text-sm font-light text-gray-500 ">
            Don’t have an account yet?{" "}
            <Link
              to="/login"
              className="font-medium text-primary-600 hover:underline "
            >
              Sign in
            </Link>
          </p>

          <div className="!mt-12">
            <button
              disabled={isSubmitting}
              type="submit"
              className="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
            >
              {isSubmitting ? "Loading..." : "Sign up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
