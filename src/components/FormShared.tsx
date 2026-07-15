// import { ReactNode } from "react";
// import build from "../assets/sch.png"

// export const SchoolBadge = () => (
//   <div className="absolute top-[8px] left-[16px] z-10">
//     <div className="w-[100px] h-[100px] bg-[#E1895B] rotate-45 rounded-[16px] border-[6px] border-[#F2F2F2] shadow-sm flex items-center justify-center relative overflow-visible">
//       {/* Reverse rotation for the logo content container */}
//       <div className="w-[140px] h-[140px] -rotate-45 flex items-center justify-center absolute">
//         <svg width="86" height="86" viewBox="0 0 100 100" className="z-10">
//           {/* Main white circle base */}
//           <circle cx="50" cy="50" r="48" fill="#FFF" />
          
//           {/* Pink ring for text */}
//           <circle cx="50" cy="50" r="42" fill="none" stroke="#F4C7D0" strokeWidth="12" />
//           <circle cx="50" cy="50" r="48" fill="none" stroke="#9A332C" strokeWidth="0.5" />
//           <circle cx="50" cy="50" r="36" fill="none" stroke="#9A332C" strokeWidth="0.5" />
          
//           {/* Subtle scalloped inner border simulation (dots) */}
//           <circle cx="50" cy="50" r="35.5" fill="none" stroke="#9A332C" strokeWidth="1.5" strokeDasharray="2 3" />
          
//           {/* Center background (light orange/yellowish) */}
//           <circle cx="50" cy="50" r="34" fill="#E8CDA9" />

//           {/* Text Paths */}
//           <path id="top-curve" d="M 12,50 A 38,38 0 1,1 88,50" fill="none" />
//           <path id="bottom-curve" d="M 18,50 A 32,32 0 0,0 82,50" fill="none" />

//           {/* Text Top */}
//           <text fill="#9A332C" fontSize="13" fontWeight="900" letterSpacing="0.8">
//             <textPath href="#top-curve" startOffset="50%" textAnchor="middle">LOYOLA SCHOOL</textPath>
//           </text>
          
//           {/* Text Bottom */}
//           <text fill="#9A332C" fontSize="8" fontWeight="bold">
//             <textPath href="#bottom-curve" startOffset="50%" textAnchor="middle">Harnaut, Estd. 2000</textPath>
//           </text>

//           {/* Stars */}
//           <g fill="#9A332C">
//             <path d="M 16,56 L 18,61 L 13,58 L 8,61 L 10,56 L 6,52 L 12,52 L 13,47 L 15,52 L 21,52 Z" transform="scale(0.4) translate(15, 60)" />
//             <path d="M 16,56 L 18,61 L 13,58 L 8,61 L 10,56 L 6,52 L 12,52 L 13,47 L 15,52 L 21,52 Z" transform="scale(0.4) translate(195, 60)" />
//           </g>

//           {/* Center Graphic Elements */}
//           <g transform="translate(30, 34) scale(0.65)">
//              {/* Rays behind cross */}
//              <path d="M 22,3 L 13,8 M 22,3 L 31,8 M 16,13 L 28,13" fill="none" stroke="#1A1A1A" strokeWidth="1.5" />
//              {/* Cross Base */}
//              <rect x="18" y="5" width="8" height="35" fill="none" stroke="#1A1A1A" strokeWidth="1.5" bg="white" />
//              <rect x="8" y="15" width="28" height="8" fill="none" stroke="#1A1A1A" strokeWidth="1.5" bg="white" />
//              {/* Inner Cross Lines (like union jack simulation on the cross) */}
//              <line x1="8" y1="15" x2="36" y2="23" stroke="#1A1A1A" strokeWidth="1.5" />
//              <line x1="8" y1="23" x2="36" y2="15" stroke="#1A1A1A" strokeWidth="1.5" />
             
//              {/* Book Base */}
//              <path d="M 10,40 L 22,42 L 22,58 L 10,56 Z" fill="none" stroke="#1A1A1A" strokeWidth="2.5" />
//              <path d="M 22,42 L 34,40 L 34,56 L 22,58 Z" fill="none" stroke="#1A1A1A" strokeWidth="2.5" />
//              <path d="M 22,42 L 22,58" fill="none" stroke="#1A1A1A" strokeWidth="2.5" />
//              {/* Book Lines (Pages text) */}
//              <line x1="13" y1="45" x2="20" y2="46" stroke="#1A1A1A" strokeWidth="1.5" />
//              <line x1="13" y1="49" x2="20" y2="50" stroke="#1A1A1A" strokeWidth="1.5" />
//              <line x1="13" y1="53" x2="20" y2="54" stroke="#1A1A1A" strokeWidth="1.5" />
//              <line x1="24" y1="46" x2="31" y2="45" stroke="#1A1A1A" strokeWidth="1.5" />
//              <line x1="24" y1="50" x2="31" y2="49" stroke="#1A1A1A" strokeWidth="1.5" />
//              <line x1="24" y1="54" x2="31" y2="53" stroke="#1A1A1A" strokeWidth="1.5" />
             
//              {/* Lamp/Bowl Base */}
//              <path d="M 40,51 A 8,8 0 0,0 60,51 Z" fill="#2A2A2A" stroke="#1A1A1A" strokeWidth="2" />
//              <ellipse cx="50" cy="51" rx="10" ry="3" fill="none" stroke="#1A1A1A" strokeWidth="2" />
//              {/* Flame */}
//              <path d="M 50,49 Q 47,43 50,38 Q 53,43 50,49 Z" fill="none" stroke="#1A1A1A" strokeWidth="1.5" />
//              <circle cx="50" cy="46" r="2" fill="#1A1A1A" />
//              {/* Base line below lamp */}
//              <line x1="42" y1="60" x2="58" y2="60" stroke="#1A1A1A" strokeWidth="2" />
//           </g>

//           {/* Text in center right */}
//           <text x="62" y="42" fill="#1A1A1A" fontSize="5" fontWeight="900">Truth</text>
//           <text x="62" y="48" fill="#1A1A1A" fontSize="5" fontWeight="900">Love</text>
//           <text x="62" y="54" fill="#1A1A1A" fontSize="5" fontWeight="900">Service</text>
//         </svg>
//       </div>
//     </div>
//   </div>
// );

// export const BuildingWatermark = () => (
//   <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[80%] pointer-events-none opacity-[0.3] z-0 flex flex-col items-center justify-center">
//     {/* User will replace '/building.png' with their actual watermark image */}
//     <img 
//       src={build}
//       alt="School Building Watermark" 
//       className="w-full h-auto object-contain"
//       onError={(e) => {
//         // Fallback if image not found
//         e.currentTarget.style.display = 'none';
//         e.currentTarget.nextElementSibling?.classList.remove('hidden');
//       }}
//     />
//     {/* Fallback placeholder if image is missing */}
//     <div className="hidden w-full aspect-video border-[4px] border-dashed border-gray-900 rounded-2xl flex items-center justify-center">
//        <span className="text-gray-900 font-bold text-2xl tracking-widest text-center px-4">
//          WATERMARK BUILDING IMAGE<br/>
//          <span className="text-lg font-normal">(Add /building.png to public folder)</span>
//        </span>
//     </div>
//   </div>
// );

// export const FormHeader = ({ formNoTitle, formNoValue }: { formNoTitle: string; formNoValue: string }) => (
//   <div className="w-full mb-2 relative pt-2">
//     <SchoolBadge />
    
//     {/* Background Bar */}
//     <div className="bg-[#2F357D] h-[52px] flex items-center justify-center relative z-0">
//       <h1 className="text-white text-[42px] font-bold font-sans tracking-tight ml-8" style={{ transform: 'scaleY(1.05)' }}>
//         LOYOLA SCHOOL
//       </h1>
//     </div>
      
//     {/* Sub Bar */}
//     <div className="flex h-[20px] relative z-0">
//       <div className="bg-[#C13832] flex-1 flex items-center pl-[130px]">
//         <span className="text-white font-medium text-[11px] tracking-wide">Affiliated to C.B.S.E., New Delhi, Aff. No.: 330310</span>
//       </div>
//       <div className="bg-[#CF8855] w-[260px] flex items-center justify-start pl-6 px-4">
//         <span className="text-gray-900 font-bold text-[12px] tracking-wider">{formNoTitle}</span>
//       </div>
//     </div>
    
//     {/* Form Number text */}
//     <div className="flex justify-end pr-[90px] mt-[10px] relative z-10">
//       <span className="text-[20px] font-mono font-bold tracking-widest">{formNoValue || "\u00A0"}</span>
//     </div>
//   </div>
// );

// interface FieldProps {
//   number?: string;
//   label: string;
//   className?: string;
//   children?: ReactNode;
// }

// export const Field = ({ number, label, className = "w-full", children }: FieldProps) => (
//   <div className={`flex items-end mb-[15px] ${className}`}>
//     <span className="mr-2 whitespace-nowrap text-gray-900 font-medium text-[15px]">
//       {number && `${number}. `}
//       {label}
//     </span>
//     {children ? (
//       children
//     ) : (
//       <div className="flex-1 border-b-[2px] border-dotted border-gray-400 mb-1"></div>
//     )}
//   </div>
// );

// export const Declaration = () => (
//   <div className="mt-8 mb-6 px-1 relative">
//     <div className="text-center relative">
//        <div className="absolute top-1/2 left-0 w-full border-t-[2px] border-dotted border-gray-400 z-0"></div>
//        <span className="bg-[#2F357D] text-white px-8 py-1 font-bold text-[14px] tracking-widest z-10 relative">
//         DECLARATION
//        </span>
//     </div>
//     <div className="mt-6 space-y-4">
//       <p className="text-[15px] leading-[34px] text-gray-900 font-medium text-justify">
//         I (Guardian's Name)
//         <span className="inline-block border-b-[2px] border-dotted border-gray-400 mx-2" style={{ width: 'calc(100% - 170px)' }}></span>
//         am ready to obey the rules taken of the School and consent to abide by them. I also agree to
//         follow the decision taken by the School regarding my daughter / son. I shall uphold all the values of the school.
//       </p>
//     </div>
//     <div className="mt-12 flex flex-col items-end px-4 font-medium text-gray-900 text-[15px] space-y-6">
//       <div className="flex items-end w-[350px] justify-between">
//         <span>Date:</span>
//         <div className="w-[180px] border-b-[2px] border-dotted border-gray-400"></div>
//       </div>
//       <div className="flex items-end w-[350px] justify-between">
//         <span className="whitespace-nowrap">Signature of Guardian's</span>
//         <div className="w-[180px] border-b-[2px] border-dotted border-gray-400 ml-2"></div>
//       </div>
//     </div>
//   </div>
// );

// export const FormFooter = () => (
//   <div className="mt-auto pt-4 w-full relative">
//     <div className="bg-[#D86937] h-[6px] w-full mb-[2px]"></div>
//     <div className="bg-[#2F357D] h-[36px] w-full flex items-center justify-center font-medium text-[11px] sm:text-[12px] tracking-wider text-white relative overflow-hidden px-4 text-center">
//       <span className="relative z-10">HARNAUT (NALANDA) | Email : loyolaschoolharnaut@gmail.com | Phone.: 9508123348, 7634003082</span>
      
//       {/* Decorative overlay blocks to match the image right side */}
//       <div className="absolute right-0 bottom-0 top-0 w-40 pointer-events-none z-0">
//         <div className="absolute right-[-30px] bottom-[-50px] w-[140px] h-[140px] bg-[#D86937] border-[6px] border-[#FDFDF9] rounded-[24px] rotate-45 transform origin-center shadow-sm"></div>
//         <div className="absolute right-[-25px] bottom-[-45px] w-[90px] h-[90px] bg-[#2F357D] border-[6px] border-[#FDFDF9] rounded-[16px] rotate-45 transform origin-center shadow-sm"></div>
//       </div>
//     </div>
//   </div>
// );



import { ReactNode } from "react";
import build from "../assets/sch.png"

export const SchoolBadge = () => (
  <div className="absolute top-[8px] left-[16px] z-10">
    <div className="w-[100px] h-[100px] bg-[#E1895B] rotate-45 rounded-[16px] border-[6px] border-[#F2F2F2] shadow-sm flex items-center justify-center relative overflow-visible">
      <div className="w-[140px] h-[140px] -rotate-45 flex items-center justify-center absolute">
        <svg width="86" height="86" viewBox="0 0 100 100" className="z-10">
          <circle cx="50" cy="50" r="48" fill="#FFF" />
          <circle cx="50" cy="50" r="42" fill="none" stroke="#F4C7D0" strokeWidth="12" />
          <circle cx="50" cy="50" r="48" fill="none" stroke="#9A332C" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="36" fill="none" stroke="#9A332C" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="35.5" fill="none" stroke="#9A332C" strokeWidth="1.5" strokeDasharray="2 3" />
          <circle cx="50" cy="50" r="34" fill="#E8CDA9" />

          <path id="top-curve" d="M 12,50 A 38,38 0 1,1 88,50" fill="none" />
          <path id="bottom-curve" d="M 18,50 A 32,32 0 0,0 82,50" fill="none" />

          <text fill="#9A332C" fontSize="13" fontWeight="900" letterSpacing="0.8">
            <textPath href="#top-curve" startOffset="50%" textAnchor="middle">LOYOLA SCHOOL</textPath>
          </text>
          <text fill="#9A332C" fontSize="8" fontWeight="bold">
            <textPath href="#bottom-curve" startOffset="50%" textAnchor="middle">Harnaut, Estd. 2000</textPath>
          </text>

          <g fill="#9A332C">
            <path d="M 16,56 L 18,61 L 13,58 L 8,61 L 10,56 L 6,52 L 12,52 L 13,47 L 15,52 L 21,52 Z" transform="scale(0.4) translate(15, 60)" />
            <path d="M 16,56 L 18,61 L 13,58 L 8,61 L 10,56 L 6,52 L 12,52 L 13,47 L 15,52 L 21,52 Z" transform="scale(0.4) translate(195, 60)" />
          </g>

          <g transform="translate(30, 34) scale(0.65)">
             <path d="M 22,3 L 13,8 M 22,3 L 31,8 M 16,13 L 28,13" fill="none" stroke="#1A1A1A" strokeWidth="1.5" />
             <rect x="18" y="5" width="8" height="35" fill="none" stroke="#1A1A1A" strokeWidth="1.5" bg="white" />
             <rect x="8" y="15" width="28" height="8" fill="none" stroke="#1A1A1A" strokeWidth="1.5" bg="white" />
             <line x1="8" y1="15" x2="36" y2="23" stroke="#1A1A1A" strokeWidth="1.5" />
             <line x1="8" y1="23" x2="36" y2="15" stroke="#1A1A1A" strokeWidth="1.5" />
             
             <path d="M 10,40 L 22,42 L 22,58 L 10,56 Z" fill="none" stroke="#1A1A1A" strokeWidth="2.5" />
             <path d="M 22,42 L 34,40 L 34,56 L 22,58 Z" fill="none" stroke="#1A1A1A" strokeWidth="2.5" />
             <path d="M 22,42 L 22,58" fill="none" stroke="#1A1A1A" strokeWidth="2.5" />
             <line x1="13" y1="45" x2="20" y2="46" stroke="#1A1A1A" strokeWidth="1.5" />
             <line x1="13" y1="49" x2="20" y2="50" stroke="#1A1A1A" strokeWidth="1.5" />
             <line x1="13" y1="53" x2="20" y2="54" stroke="#1A1A1A" strokeWidth="1.5" />
             <line x1="24" y1="46" x2="31" y2="45" stroke="#1A1A1A" strokeWidth="1.5" />
             <line x1="24" y1="50" x2="31" y2="49" stroke="#1A1A1A" strokeWidth="1.5" />
             <line x1="24" y1="54" x2="31" y2="53" stroke="#1A1A1A" strokeWidth="1.5" />
             
             <path d="M 40,51 A 8,8 0 0,0 60,51 Z" fill="#2A2A2A" stroke="#1A1A1A" strokeWidth="2" />
             <ellipse cx="50" cy="51" rx="10" ry="3" fill="none" stroke="#1A1A1A" strokeWidth="2" />
             <path d="M 50,49 Q 47,43 50,38 Q 53,43 50,49 Z" fill="none" stroke="#1A1A1A" strokeWidth="1.5" />
             <circle cx="50" cy="46" r="2" fill="#1A1A1A" />
             <line x1="42" y1="60" x2="58" y2="60" stroke="#1A1A1A" strokeWidth="2" />
          </g>

          <text x="62" y="42" fill="#1A1A1A" fontSize="5" fontWeight="900">Truth</text>
          <text x="62" y="48" fill="#1A1A1A" fontSize="5" fontWeight="900">Love</text>
          <text x="62" y="54" fill="#1A1A1A" fontSize="5" fontWeight="900">Service</text>
        </svg>
      </div>
    </div>
  </div>
);

export const BuildingWatermark = () => (
  <div className="form-watermark absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[80%] pointer-events-none select-none opacity-[0.2] print:opacity-[0.15] z-0 flex flex-col items-center justify-center">
    <img 
      src={build}
      alt="School Building Watermark" 
      className="w-full h-auto object-contain"
      style={{ WebkitPrintColorAdjust: "exact", printColorAdjust: "exact" }}
      onError={(e) => {
        e.currentTarget.style.display = 'none';
        e.currentTarget.nextElementSibling?.classList.remove('hidden');
      }}
    />
    <div className="hidden w-full aspect-video border-[4px] border-dashed border-gray-900 rounded-2xl flex items-center justify-center">
       <span className="text-gray-900 font-bold text-2xl tracking-widest text-center px-4">
         WATERMARK BUILDING IMAGE<br/>
         <span className="text-lg font-normal">(Add /building.png to public folder)</span>
       </span>
    </div>
  </div>
);

export const FormHeader = ({ formNoTitle, formNoValue }: { formNoTitle: string; formNoValue?: string }) => {
  const hasNumber = formNoValue && formNoValue.trim() !== "";

  return (
    <div className="w-full mb-2 relative pt-2">
      <SchoolBadge />
      
      <div className="bg-[#2F357D] h-[52px] flex items-center justify-center relative z-0">
        <h1 className="text-white text-[42px] font-bold font-sans tracking-tight ml-8" style={{ transform: 'scaleY(1.05)' }}>
          LOYOLA SCHOOL
        </h1>
      </div>
        
      <div className="flex h-[20px] relative z-0">
        <div className="bg-[#C13832] flex-1 flex items-center pl-[130px]">
          <span className="text-white font-medium text-[11px] tracking-wide">Affiliated to C.B.S.E., New Delhi, Aff. No.: 330310</span>
        </div>
        <div className="bg-[#CF8855] w-[260px] flex items-center justify-start pl-6 px-4">
          <span className="text-gray-900 font-bold text-[12px] tracking-wider">{formNoTitle}</span>
        </div>
      </div>
      
      {/* Form Number - single blank box if not provided, so school can fill by hand */}
      <div className="flex justify-end pr-[90px] mt-[10px] relative z-10">
        {hasNumber ? (
          <span className="text-[20px] font-mono font-bold tracking-widest text-gray-900">
            {formNoValue}
          </span>
        ) : (
          <div className="w-[130px] h-[28px] border-[1.5px] border-gray-700 bg-white"></div>
        )}
      </div>
    </div>
  );
};

interface FieldProps {
  number?: string;
  label: string;
  className?: string;
  children?: ReactNode;
}

export const Field = ({ number, label, className = "w-full", children }: FieldProps) => (
  <div className={`flex items-end mb-[15px] ${className}`}>
    <span className="mr-2 whitespace-nowrap text-gray-900 font-medium text-[15px]">
      {number && `${number}. `}
      {label}
    </span>
    {children ? (
      children
    ) : (
      <div className="flex-1 border-b-[2px] border-dotted border-gray-400 mb-1"></div>
    )}
  </div>
);

export const Declaration = () => (
  <div className="mt-8 mb-6 px-1 relative">
    <div className="text-center relative">
       <div className="absolute top-1/2 left-0 w-full border-t-[2px] border-dotted border-gray-400 z-0"></div>
       <span className="bg-[#2F357D] text-white px-8 py-1 font-bold text-[14px] tracking-widest z-10 relative">
        DECLARATION
       </span>
    </div>
    <div className="mt-6 space-y-4">
      <p className="text-[15px] leading-[34px] text-gray-900 font-medium text-justify">
        I (Guardian's Name)
        <span className="inline-block border-b-[2px] border-dotted border-gray-400 mx-2" style={{ width: 'calc(100% - 170px)' }}></span>
        am ready to obey the rules taken of the School and consent to abide by them. I also agree to
        follow the decision taken by the School regarding my daughter / son. I shall uphold all the values of the school.
      </p>
    </div>
    <div className="mt-12 flex flex-col items-end px-4 font-medium text-gray-900 text-[15px] space-y-6">
      <div className="flex items-end w-[350px] justify-between">
        <span>Date:</span>
        <div className="w-[180px] border-b-[2px] border-dotted border-gray-400"></div>
      </div>
      <div className="flex items-end w-[350px] justify-between">
        <span className="whitespace-nowrap">Signature of Guardian's</span>
        <div className="w-[180px] border-b-[2px] border-dotted border-gray-400 ml-2"></div>
      </div>
    </div>
  </div>
);

export const FormFooter = () => (
  <div className="mt-auto pt-4 w-full relative">
    <div className="bg-[#D86937] h-[6px] w-full mb-[2px]"></div>
    <div className="bg-[#2F357D] h-[36px] w-full flex items-center justify-center font-medium text-[11px] sm:text-[12px] tracking-wider text-white relative overflow-hidden px-4 text-center">
      <span className="relative z-10">HARNAUT (NALANDA) | Email : loyolaschoolharnaut@gmail.com | Phone.: 9508123348, 7634003082</span>
      
      <div className="absolute right-0 bottom-0 top-0 w-40 pointer-events-none z-0">
        <div className="absolute right-[-30px] bottom-[-50px] w-[140px] h-[140px] bg-[#D86937] border-[6px] border-[#FDFDF9] rounded-[24px] rotate-45 transform origin-center shadow-sm"></div>
        <div className="absolute right-[-25px] bottom-[-45px] w-[90px] h-[90px] bg-[#2F357D] border-[6px] border-[#FDFDF9] rounded-[16px] rotate-45 transform origin-center shadow-sm"></div>
      </div>
    </div>
  </div>
);
