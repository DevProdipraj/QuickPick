import { LiaBusinessTimeSolid } from "react-icons/lia";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { AiOutlineSolution } from "react-icons/ai";
import { VscFileSubmodule } from "react-icons/vsc";
export const OurServices = () => {
  return (
    <div className="container mt-3 py-3 md:py-5 text-text">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:px-10 gap-5">
        <div className=" cursor-pointer py-5 lg:py-9 px-6 shadow-md rounded-lg border border-indigo-500">
          <LiaBusinessTimeSolid className="text-[35px] mb-3" />
          <h2 className="text-2xl font-heading1 mb-1">
            Millions of business offerings
          </h2>
          <p className="text-sm font-paragraph">
            Explore products and suppliers for your business from millions of
            offerings worldwide.
          </p>
        </div>
        <div className=" cursor-pointer py-5 lg:py-9 px-6 shadow-md rounded-lg border border-indigo-500">
          <AiOutlineSafetyCertificate className="text-[35px] mb-3" />
          <h2 className="text-2xl font-heading1 mb-1">
            Assured quality and transactions
          </h2>
          <p className="text-sm font-paragraph">
            Ensure production quality from verified suppliers, with your orders
            protected from payment to delivery.
          </p>
        </div>
        <div className=" cursor-pointer py-5 lg:py-9 px-6 shadow-md rounded-lg border border-indigo-500">
          <AiOutlineSolution className="text-[35px] mb-3" />
          <h2 className="text-2xl font-heading1 mb-1">
            One-stop trading solution
          </h2>
          <p className="text-sm font-paragraph">
            Order seamlessly from product/supplier search to order management,
            payment, and fulfillment.
          </p>
        </div>
        <div className=" cursor-pointer py-5 lg:py-9 px-6 shadow-md rounded-lg border border-indigo-500">
          <VscFileSubmodule className="text-[35px] mb-3" />
          <h2 className="text-2xl font-heading1 mb-1">
            Tailored trading experience
          </h2>
          <p className="text-sm font-paragraph">
            Get curated benefits, such as exclusive discounts, enhanced
            protection, and extra support, to help grow your business every step
            of the way.
          </p>
        </div>
      </div>
    </div>
  );
};
