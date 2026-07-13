import { FormHeader, Field, Declaration, FormFooter, BuildingWatermark } from "./FormShared";

export const ApplicationForm = ({ formNoValue = "1258" }: { formNoValue?: string }) => {
  return (
    <div className="w-[210mm] min-h-[297mm] mx-auto bg-[#FDFDF9] border border-gray-200 flex flex-col pt-[5mm] relative overflow-hidden font-sans">
      
      <BuildingWatermark />
      
      <FormHeader formNoTitle="Registration Form No.:" formNoValue={formNoValue} />

      <div className="flex-1 flex flex-col pt-0 relative z-10 w-full px-[14mm]">
        <div className="text-center mb-5 z-10">
          <h2 className="inline-block text-[#2B3482] font-extrabold text-[18px] uppercase tracking-wide border-b-[2px] border-[#2B3482] pb-[1px]" style={{ letterSpacing: '0.05em' }}>
            Application Form For Admission
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

        <Field number="10" label="Religion" />
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

        <div className="flex justify-between items-end mt-4 mb-2 pr-4">
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

        <div className="flex justify-between items-end mt-6 mb-4 uppercase">
          <div className="flex flex-col items-center">
            <div className="w-[200px] border-b-[2px] border-gray-800 mb-[2px]"></div>
            <span className="font-bold text-gray-900 text-[13px] tracking-wide">
              Signature of the Principal
            </span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[200px] border-b-[2px] border-gray-800 mb-[2px]"></div>
            <span className="font-bold text-gray-900 text-[13px] tracking-wide">
              Guardian's Signature
            </span>
          </div>
        </div>
      </div>

      <FormFooter />
    </div>
  );
};
