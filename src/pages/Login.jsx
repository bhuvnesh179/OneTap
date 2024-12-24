import { useNavigate } from "react-router-dom"
import { Title } from "../components/Title"

export const Login = () => {
    const navigate = useNavigate();
    
    return (
        <div className="flex justify-center ">
          <div className="border-2 rounded-lg border-gray-800  flex justify-center p-20 w-fit shadow-2xl shadow-zinc-900 mt-28 mb-16 bg-slate-700	 ">
            <div>
            <Title/>
    
            <input id="mobile" type="tel" pattern="[0-9]{10}" className="mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter your mobile number" required />
    
            <div className="flex justify-center">
                <button onClick={() => navigate("/otp")} type="button" className="mt-4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Send OTP
                </button>
            </div>
      
            </div>
          
    
          </div> 
          
        </div>
        
      )
}