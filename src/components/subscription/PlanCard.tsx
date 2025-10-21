import { IPricingPlan } from "@/types/subscription";
import { FaCheck, FaStar } from "react-icons/fa";

const PlanCard = (data:IPricingPlan) => {

  return (
    
      <div className="w-full max-w-md bg-gradient-to-b from-slate-700 to-slate-800 border-2 h-full border-blue-500/30 rounded-2xl p-6 shadow-2xl">
        
        {/* Header with star icon and title */}
        <div className="flex items-center mb-6">
          <FaStar className="text-yellow-400 text-xl mr-3" />
          <h2 className="text-white text-2xl font-medium">{data?.title}</h2>
        </div>

        {/* Monthly pricing */}
        <div className="mb-6">
          <div className="mb-4">
            <span className="text-blue-400 text-3xl font-semibold">${data?.monthlyPrice??0}</span>
            <span className="text-gray-400 text-base ml-2">per month</span>
          </div>

          {/* Yearly pricing with discount */}
          <div className="relative">
            <div className="bg-blue-500/15 border border-blue-500/30 rounded-lg p-3">
              <span className="text-white text-base font-medium">${data?.yearlyPrice??0} per year</span>
              <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-md font-medium">
                {data?.discount}%
              </div>
            </div>
          </div>
        </div>

        {/* Features list */}
        <div className="space-y-3 mb-8">
          {data?.features?.map((feature, index) => (
            <div key={index} className="flex items-center">
              <FaCheck className="text-green-400 text-sm mr-3 flex-shrink-0" />
              <span className="text-gray-200 text-sm">{feature}</span>
            </div>
          ))}
        </div>

       <button
            type="submit"
            
      
            className="w-full bg-blue-500 hover:bg-blue-600 cursor-pointer text-white !py-3 !my-2 rounded-md font-medium transition disabled:opacity-70 disabled:cursor-not-allowed"
          >
            Buy Now
          </button>
      </div>
  );
};

export default PlanCard;