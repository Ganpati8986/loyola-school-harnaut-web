import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { RegistrationForm } from "../components/RegistrationForm";
import { ApplicationForm } from "../components/ApplicationForm";

const Forms = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type"); // "registration" | "application" | null
  const regRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<HTMLDivElement>(null);

  // Scroll to the targeted form when type param changes
  useEffect(() => {
    if (type === "registration" && regRef.current) {
      regRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (type === "application" && appRef.current) {
      appRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [type]);

  const handlePrint = (formType: "registration" | "application") => {
    // Temporarily hide the other form during print
    const regEl = regRef.current;
    const appEl = appRef.current;
    if (!regEl || !appEl) return;

    if (formType === "registration") {
      appEl.style.display = "none";
    } else {
      regEl.style.display = "none";
    }

    window.print();

    // Restore after print dialog closes
    setTimeout(() => {
      regEl.style.display = "";
      appEl.style.display = "";
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-[900px] mx-auto px-4 space-y-12">

        {/* Page Title */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#002147] uppercase tracking-widest">
            School Forms
          </h1>
          <div className="h-[3px] bg-[#FFD700] w-24 mx-auto mt-2 rounded-full" />
        </div>

        {/* Registration Form Section */}
        <div ref={regRef} className="scroll-mt-24">
          <div className="flex items-center justify-between mb-4 no-print">
            <h2 className="text-xl font-bold text-[#002147] uppercase tracking-wider">
              Registration Form
            </h2>
            <button
              onClick={() => handlePrint("registration")}
              className="flex items-center gap-2 bg-[#002147] hover:bg-[#003366] text-white px-5 py-2 rounded font-bold text-sm tracking-wider transition-colors shadow"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Print / Download
            </button>
          </div>
          <RegistrationForm />
        </div>

        {/* Application Form Section */}
        <div ref={appRef} className="scroll-mt-24">
          <div className="flex items-center justify-between mb-4 no-print">
            <h2 className="text-xl font-bold text-[#002147] uppercase tracking-wider">
              Application Form
            </h2>
            <button
              onClick={() => handlePrint("application")}
              className="flex items-center gap-2 bg-[#CC0000] hover:bg-[#aa0000] text-white px-5 py-2 rounded font-bold text-sm tracking-wider transition-colors shadow"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Print / Download
            </button>
          </div>
          <ApplicationForm />
        </div>

      </div>
    </div>
  );
};

export default Forms;