import { FaFaceSadTear } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export const Page404 = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-primary text-text text-center h-[60vh] flex items-center justify-center flex-col  ">
      <FaFaceSadTear size={110} />
      <h1 className="text-3xl text-text font-heading2 mt-5">
        Page Not Found |<span className=""> 404 Error</span>{" "}
      </h1>
      <botton
        className="bg-secondary mt-4  py-2 px-2 rounded-md cursor-pointer"
        onClick={() => navigate("/")}
      >
        {" "}
        Go Back Home
      </botton>
    </div>
  );
};
