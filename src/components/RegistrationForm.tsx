// import { FormHeader, Field, Declaration, FormFooter, BuildingWatermark } from "./FormShared";

// export const RegistrationForm = ({ formNoValue = "1384" }: { formNoValue?: string }) => {
//   return (
//     <div className="w-[210mm] min-h-[297mm] mx-auto bg-[#FDFDF9] border border-gray-200 flex flex-col pt-[5mm] relative overflow-hidden font-sans">
      
//       <BuildingWatermark />
      
//       <FormHeader formNoTitle="Registration Form No.:" formNoValue={formNoValue} />

//       <div className="flex-1 flex flex-col pt-0 relative z-10 w-full px-[14mm]">
//         <div className="text-center mb-4 z-10">
//           <h2 className="inline-block text-[#2B7A5D] font-extrabold text-[18px] uppercase tracking-wide border-b-[2px] border-[#2B7A5D] pb-[1px]" style={{ letterSpacing: '0.05em' }}>
//             Registration Form For Admission
//           </h2>
//         </div>

//         <Field number="1" label="Name of the Student" />

//         <div className="flex gap-4 mb-0">
//           <div className="w-[50%]">
//             <Field number="2" label="Date of Birth" />
//           </div>
//           <div className="w-[50%] flex items-end justify-center mb-[15px]">
//             <span className="mr-4 whitespace-nowrap text-gray-900 font-medium text-[15px]">
//               3.
//             </span>
//             <span className="mr-6 whitespace-nowrap text-gray-900 font-medium text-[15px]">
//               Sex :
//             </span>
//             <label className="flex items-center space-x-2 mr-6 cursor-pointer">
//               <span className="text-gray-900 font-medium text-[15px]">M</span>
//               <div className="w-5 h-5 border-[1.5px] border-gray-600 bg-white shadow-sm flex items-center justify-center"></div>
//             </label>
//             <label className="flex items-center space-x-2 cursor-pointer">
//               <span className="text-gray-900 font-medium text-[15px]">F</span>
//               <div className="w-5 h-5 border-[1.5px] border-gray-600 bg-white shadow-sm flex items-center justify-center"></div>
//             </label>
//           </div>
//         </div>

//         <Field number="4" label="Father's Name :" />
//         <Field number="5" label="Father's Occupation :" />
//         <Field number="6" label="Mother's Name :" />
//         <Field number="7" label="Mother's Occupation :" />

//         <div className="flex">
//           <Field number="8" label="Address :" />
//         </div>
//         <div className="flex gap-4">
//           <div className="w-[65%] pl-6">
//             <Field label="" />
//           </div>
//           <div className="w-[35%]">
//             <Field label="Pin Code" />
//           </div>
//         </div>

//         <div className="flex gap-4">
//           <div className="flex-1">
//             <Field number="9" label="Aadhar No.:" />
//           </div>
//           <div className="w-[35%]">
//             <Field label="Phone No.:" />
//           </div>
//         </div>

//         <div className="flex gap-4">
//           <div className="flex-1">
//             <Field number="10" label="Caste :" />
//           </div>
//           <div className="w-[45%]">
//             <Field label="Category :" />
//           </div>
//         </div>

//         <Field number="11" label="Previous School (if any)" />
//         <Field number="12" label="Previous Class (if any)" />

//         <div className="flex gap-4">
//           <div className="flex-1">
//             <Field number="13" label="Class" />
//           </div>
//           <div className="w-[45%]">
//             <Field label="Date for Admission" />
//           </div>
//         </div>

//         <div className="flex justify-between items-end mt-4 mb-1 pr-4">
//           <div className="flex w-52 items-end">
//             <span className="mr-2 font-bold text-gray-900 text-[15px]">Date :</span>
//             <div className="flex-1 border-b-[2px] border-dotted border-gray-400 mb-1"></div>
//           </div>
//           <div className="flex flex-col items-center">
//             <div className="w-48 border-b-[2px] border-gray-500 mb-1"></div>
//             <span className="font-medium text-gray-800 text-[13px]">Signature of Parent</span>
//           </div>
//         </div>

//         <Declaration />

//         {/* Tear-off Section specific to Registration Form */}
//         <div className="mt-4 pt-4 border-t-[2px] border-dashed border-gray-400 relative">
//           <div className="absolute top-[3px] right-2 px-2 text-gray-500 text-sm rotate-90" aria-hidden="true" style={{ fontSize: '18px' }}>
//             ✂
//           </div>
//           <Field number="1" label="Name of the Student" />
//           <div className="flex w-1/2">
//             <Field number="2" label="Class" />
//           </div>
//           <div className="flex w-[60%]">
//              <Field number="3" label="Date of Entrance Examination" />
//           </div>
//         </div>
//       </div>

//       <FormFooter />
//     </div>
//   );
// };



// import { FormHeader, Field, Declaration, FormFooter, BuildingWatermark } from "./FormShared";

// export const RegistrationForm = ({ formNoValue = "" }: { formNoValue?: string }) => {
//   return (
//     <div className="print-area w-[210mm] min-h-[297mm] mx-auto bg-[#FDFDF9] border border-gray-200 flex flex-col pt-[5mm] relative overflow-hidden font-sans">
      
//       <BuildingWatermark />
      
//       <FormHeader formNoTitle="Registration Form No.:" formNoValue={formNoValue} />

//       <div className="flex-1 flex flex-col pt-0 relative z-10 w-full px-[14mm]">
//         <div className="text-center mb-4 z-10">
//           <h2 className="inline-block text-[#2B7A5D] font-extrabold text-[18px] uppercase tracking-wide border-b-[2px] border-[#2B7A5D] pb-[1px]" style={{ letterSpacing: '0.05em' }}>
//             Registration Form For Admission
//           </h2>
//         </div>

//         <Field number="1" label="Name of the Student" />

//         <div className="flex gap-4 mb-0">
//           <div className="w-[50%]">
//             <Field number="2" label="Date of Birth" />
//           </div>
//           <div className="w-[50%] flex items-end justify-center mb-[15px]">
//             <span className="mr-4 whitespace-nowrap text-gray-900 font-medium text-[15px]">
//               3.
//             </span>
//             <span className="mr-6 whitespace-nowrap text-gray-900 font-medium text-[15px]">
//               Sex :
//             </span>
//             <label className="flex items-center space-x-2 mr-6 cursor-pointer">
//               <span className="text-gray-900 font-medium text-[15px]">M</span>
//               <div className="w-5 h-5 border-[1.5px] border-gray-600 bg-white shadow-sm flex items-center justify-center"></div>
//             </label>
//             <label className="flex items-center space-x-2 cursor-pointer">
//               <span className="text-gray-900 font-medium text-[15px]">F</span>
//               <div className="w-5 h-5 border-[1.5px] border-gray-600 bg-white shadow-sm flex items-center justify-center"></div>
//             </label>
//           </div>
//         </div>

//         <Field number="4" label="Father's Name :" />
//         <Field number="5" label="Father's Occupation :" />
//         <Field number="6" label="Mother's Name :" />
//         <Field number="7" label="Mother's Occupation :" />

//         <div className="flex">
//           <Field number="8" label="Address :" />
//         </div>
//         <div className="flex gap-4">
//           <div className="w-[65%] pl-6">
//             <Field label="" />
//           </div>
//           <div className="w-[35%]">
//             <Field label="Pin Code" />
//           </div>
//         </div>

//         <div className="flex gap-4">
//           <div className="flex-1">
//             <Field number="9" label="Aadhar No.:" />
//           </div>
//           <div className="w-[35%]">
//             <Field label="Phone No.:" />
//           </div>
//         </div>

//         <div className="flex gap-4">
//           <div className="flex-1">
//             <Field number="10" label="Caste :" />
//           </div>
//           <div className="w-[45%]">
//             <Field label="Category :" />
//           </div>
//         </div>

//         <Field number="11" label="Previous School (if any)" />
//         <Field number="12" label="Previous Class (if any)" />

//         <div className="flex gap-4">
//           <div className="flex-1">
//             <Field number="13" label="Class" />
//           </div>
//           <div className="w-[45%]">
//             <Field label="Date for Admission" />
//           </div>
//         </div>

//         <div className="flex justify-between items-end mt-4 mb-1 pr-4">
//           <div className="flex w-52 items-end">
//             <span className="mr-2 font-bold text-gray-900 text-[15px]">Date :</span>
//             <div className="flex-1 border-b-[2px] border-dotted border-gray-400 mb-1"></div>
//           </div>
//           <div className="flex flex-col items-center">
//             <div className="w-48 border-b-[2px] border-gray-500 mb-1"></div>
//             <span className="font-medium text-gray-800 text-[13px]">Signature of Parent</span>
//           </div>
//         </div>

//         <Declaration />

//         {/* Tear-off Section specific to Registration Form */}
//         <div className="mt-4 pt-4 border-t-[2px] border-dashed border-gray-400 relative">
//           <div className="absolute top-[3px] right-2 px-2 text-gray-500 text-sm rotate-90" aria-hidden="true" style={{ fontSize: '18px' }}>
//             ✂
//           </div>
//           <Field number="1" label="Name of the Student" />
//           <div className="flex w-1/2">
//             <Field number="2" label="Class" />
//           </div>
//           <div className="flex w-[60%]">
//              <Field number="3" label="Date of Entrance Examination" />
//           </div>
//         </div>
//       </div>

//       <FormFooter />
//     </div>
//   );
// };



import { useEffect, useRef, useState } from "react";
import { FormHeader, Field, Declaration, FormFooter, BuildingWatermark } from "./FormShared";

export const RegistrationForm = ({ formNoValue = "" }: { formNoValue?: string }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const fitToPage = () => {
      if (!contentRef.current) return;
      const A4_HEIGHT_PX = 297 * 3.7795275591;
      const contentHeight = contentRef.current.scrollHeight;
      if (contentHeight > A4_HEIGHT_PX) {
        setScale(A4_HEIGHT_PX / contentHeight);
      } else {
        setScale(1);
      }
    };

    fitToPage();
    window.addEventListener("beforeprint", fitToPage);
    window.addEventListener("resize", fitToPage);
    return () => {
      window.removeEventListener("beforeprint", fitToPage);
      window.removeEventListener("resize", fitToPage);
    };
  }, []);

  return (
    <div className="print-area w-[210mm] h-[297mm] mx-auto bg-[#FDFDF9] border border-gray-200 relative overflow-hidden font-sans">
      <div
        ref={contentRef}
        className="flex flex-col pt-[5mm] w-full"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          width: scale < 1 ? `${100 / scale}%` : "100%",
        }}
      >
        <BuildingWatermark />

        <FormHeader formNoTitle="Registration Form No.:" formNoValue={formNoValue} />

        <div className="flex-1 flex flex-col pt-0 relative z-10 w-full px-[14mm]">
          <div className="text-center mb-4 z-10">
            <h2 className="inline-block text-[#2B7A5D] font-extrabold text-[18px] uppercase tracking-wide border-b-[2px] border-[#2B7A5D] pb-[1px]" style={{ letterSpacing: '0.05em' }}>
              Registration Form For Admission
            </h2>
          </div>

          <Field number="1" label="Name of the Student" />

          <div className="flex gap-4 mb-0">
            <div className="w-[50%]">
              <Field number="2" label="Date of Birth" />
            </div>
            <div className="w-[50%] flex items-end justify-center mb-[15px]">
              <span className="mr-4 whitespace-nowrap text-gray-900 font-medium text-[15px]">
                3.
              </span>
              <span className="mr-6 whitespace-nowrap text-gray-900 font-medium text-[15px]">
                Sex :
              </span>
              <label className="flex items-center space-x-2 mr-6 cursor-pointer">
                <span className="text-gray-900 font-medium text-[15px]">M</span>
                <div className="w-5 h-5 border-[1.5px] border-gray-600 bg-white shadow-sm flex items-center justify-center"></div>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <span className="text-gray-900 font-medium text-[15px]">F</span>
                <div className="w-5 h-5 border-[1.5px] border-gray-600 bg-white shadow-sm flex items-center justify-center"></div>
              </label>
            </div>
          </div>

          <Field number="4" label="Father's Name :" />
          <Field number="5" label="Father's Occupation :" />
          <Field number="6" label="Mother's Name :" />
          <Field number="7" label="Mother's Occupation :" />

          <div className="flex">
            <Field number="8" label="Address :" />
          </div>
          <div className="flex gap-4">
            <div className="w-[65%] pl-6">
              <Field label="" />
            </div>
            <div className="w-[35%]">
              <Field label="Pin Code" />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <Field number="9" label="Aadhar No.:" />
            </div>
            <div className="w-[35%]">
              <Field label="Phone No.:" />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <Field number="10" label="Caste :" />
            </div>
            <div className="w-[45%]">
              <Field label="Category :" />
            </div>
          </div>

          <Field number="11" label="Previous School (if any)" />
          <Field number="12" label="Previous Class (if any)" />

          <div className="flex gap-4">
            <div className="flex-1">
              <Field number="13" label="Class" />
            </div>
            <div className="w-[45%]">
              <Field label="Date for Admission" />
            </div>
          </div>

          <div className="flex justify-between items-end mt-4 mb-1 pr-4">
            <div className="flex w-52 items-end">
              <span className="mr-2 font-bold text-gray-900 text-[15px]">Date :</span>
              <div className="flex-1 border-b-[2px] border-dotted border-gray-400 mb-1"></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-48 border-b-[2px] border-gray-500 mb-1"></div>
              <span className="font-medium text-gray-800 text-[13px]">Signature of Parent</span>
            </div>
          </div>

          <Declaration />

          <div className="mt-4 pt-4 border-t-[2px] border-dashed border-gray-400 relative">
            <div className="absolute top-[3px] right-2 px-2 text-gray-500 text-sm rotate-90" aria-hidden="true" style={{ fontSize: '18px' }}>
              ✂
            </div>
            <Field number="1" label="Name of the Student" />
            <div className="flex w-1/2">
              <Field number="2" label="Class" />
            </div>
            <div className="flex w-[60%]">
               <Field number="3" label="Date of Entrance Examination" />
            </div>
          </div>
        </div>

        <FormFooter />
      </div>
    </div>
  );
};
