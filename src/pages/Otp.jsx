import { useRef } from "react";
import { Title } from "../components/Title"

export const Otp = () => {
    const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  // Function to handle typing in the input field
  const handleInput = (e, index) => {
    const value = e.target.value; // Get what the user typed

    // Check if the input is a valid single digit
    if (value.match(/^\d$/)) {
      if (index < inputRefs.length - 1) {
        inputRefs[index + 1].current.focus(); // Move to the next field
      }
    } else {
      e.target.value = ""; // Clear the input if it’s not a digit
    }
  };
    return <div className="flex justify-center ">
             <div className="border-2 rounded-lg border-gray-800  flex justify-center p-20 w-fit shadow-2xl shadow-zinc-900 mt-28 mb-16 bg-slate-700	 ">
               <div>
               <Title/>
                <div className="flex justify-between">
                {/* Create 4 input fields */}
            {inputRefs.map((ref, index) => (
              <input
                key={index}
                ref={ref} // Attach the reference to the input
                type="text"
                maxLength="1" // Only allow 1 character
                onChange={(e) => handleInput(e, index)} // Call the function when typing
                className="mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-10 p-2.5"
              />
            ))}

                </div>
               
       
               <div className="flex justify-center">
                   <button  type="button" className="mt-4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Login
                   </button>
               </div>
         
               </div>
             
       
             </div> 
             
           </div>
}