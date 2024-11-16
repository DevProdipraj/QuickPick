import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="mt-2 md:mt-10 mx-5 md:mx-0 pb-5 md:pb-0">
      <div className="container bg-[#ffffffa1]  md:my-32 lg:w-4/12 mx-auto py-5 outline outline-2 outline-[#fff] rounded-md shadow-md">
        <form action="#">
          <div className="">
            <h2 className="pb-4 text-xl text-primary font-heading1 font-bold border-b-2">
              Login
            </h2>
            <div className="py-4 flex flex-col">
              <label className="text-xl text-primary " htmlFor="Email">
                Email
              </label>
              <input
                className="px-2 py-2 rounded-md mt-1 outline outline-1 focus:outline-2"
                type="email"
                name="Email"
                id="Email"
              />
            </div>
            <div className="py-4 flex flex-col">
              <label className="text-xl text-primary " htmlFor="Password">
                Password
              </label>
              <input
                className="px-2 py-2 rounded-md mt-1 outline outline-1 focus:outline-2"
                type="Password"
                name="Password"
                id="Password"
              />
            </div>
            <div className="py-4 flex items-center ">
              <input
                className="bg-primary text-[#fff] px-3 py-1 rounded-md font-bold me-5 cursor-pointer hover:bg-[#fff] hover:text-[#000] transition-colors duration-700"
                type="button"
                value="Login"
                id="Login"
              />
              <span>
                {" "}
                Don't have an Account?{" "}
                <Link
                  to="/registration"
                  className="text-primary font-bold {
                  
                }"
                >
                  Register Here
                </Link>{" "}
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
