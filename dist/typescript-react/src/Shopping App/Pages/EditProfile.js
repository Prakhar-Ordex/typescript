"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_hook_form_1 = require("react-hook-form");
const react_router_dom_1 = require("react-router-dom");
const hooks_1 = require("../Redux/hooks");
const UserSlice_1 = require("../Redux/UserSlice");
const EditProfile = () => {
    var _a, _b;
    const { id } = (0, react_router_dom_1.useParams)();
    const userProfile = (0, hooks_1.useAppSelector)((state) => state.userData.loginUser);
    const dispatch = (0, hooks_1.useAppDispatch)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset, } = (0, react_hook_form_1.useForm)();
    (0, react_1.useEffect)(() => {
        if (userProfile)
            reset(userProfile);
    }, []);
    const onSubmit = (data) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const editData = Object.assign(Object.assign({}, data), { id: Number(id) });
            dispatch((0, UserSlice_1.editProfile)(editData));
            navigate("/profile");
        }
        catch (error) {
            console.log(error);
        }
    });
    return (<div className="mt-20">
      <div className="max-w-4xl mx-auto font-[sans-serif] p-6  bg-white rounded-lg shadow  ">
        <div className="text-center mb-16">
          <h4 className="text-gray-800 text-base font-semibold mt-6">
            Sign up into your account
          </h4>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {((_a = errors.root) === null || _a === void 0 ? void 0 : _a.message) && (<p className="text-red-500 text-sm">{(_b = errors.root) === null || _b === void 0 ? void 0 : _b.message}</p>)}
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <label className="text-gray-800 text-sm mb-2 block"> Name</label>
              <input type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter name" {...register("name", {
        required: { value: true, message: "Name is required" },
        minLength: { value: 3, message: "Min lenght 3" },
    })}/>
              {errors.name && (<p className="text-red-500 text-sm">{errors.name.message}</p>)}
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Email Id
              </label>
              <input type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter email" {...register("email", {
        required: { value: true, message: "Emial is required" },
        minLength: { value: 3, message: "Min lenght 3" },
        pattern: {
            value: /^\S+@\S+\.\S+$/,
            message: "Invalid email address",
        },
    })}/>
              {errors.email && (<p className="text-red-500 text-sm">{errors.email.message}</p>)}
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Password
              </label>
              <input type="password" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter password" {...register("password", {
        required: { value: true, message: "passworde is required" },
        minLength: { value: 6, message: "Min lenght 6" },
        pattern: {
            value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{6,}$/,
            message: "Password must be at least 8 characters long, and include an uppercase letter, a lowercase letter, and a number",
        },
    })}/>
              {/* <input name="password" type="password" /> */}
              {errors.password && (<p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>)}
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Avatar</label>
              <input type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter confirm password" {...register("avatar", {
        required: { value: true, message: "Avatar is required" },
        minLength: { value: 3, message: "Min lenght 3" },
    })}/>
              {errors.avatar && (<p className="text-red-500 text-sm">{errors.avatar.message}</p>)}
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Role</label>
              <input type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter confirm password" {...register("role", {
        required: { value: true, message: "Avatar is required" },
        minLength: { value: 3, message: "Min lenght 3" },
    })}/>
              {errors.role && (<p className="text-red-500 text-sm">{errors.role.message}</p>)}
            </div>
          </div>
          <p className="text-sm font-light text-gray-500 ">
            Don’t have an account yet?{" "}
            <react_router_dom_1.Link to="/login" className="font-medium text-primary-600 hover:underline ">
              Sign in
            </react_router_dom_1.Link>
          </p>

          <div className="!mt-12">
            <button disabled={isSubmitting} type="submit" className="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
              {isSubmitting ? "Loading..." : "Sign up"}
            </button>
          </div>
        </form>
      </div>
    </div>);
};
exports.default = EditProfile;
