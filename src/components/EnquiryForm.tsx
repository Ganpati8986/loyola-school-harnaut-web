import React, { useState } from "react";
import { CheckCircle } from "lucide-react";

interface EnquiryFormProps {
  onSubmit?: () => void;
  theme?: "light" | "dark";
}

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzvsOoPak8B1fLSDyKy7hvoPmcaPryifTN8u9hUR0q65jNvlPFKEeBTn7g9kVQOAxygUw/exec";

const EnquiryForm: React.FC<EnquiryFormProps> = ({
  onSubmit,
  theme = "light",
}) => {
  const isDark = theme === "dark";

  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    className: "",
    message: "",
  });

  const labelClass = `block text-sm font-bold mb-2 uppercase tracking-wider ${
    isDark ? "text-white" : "text-[#003366]"
  }`;

  const inputClass = `w-full rounded-xl px-4 py-3 text-sm focus:outline-none transition-all ${
    isDark
      ? "bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-[#FFD700]"
      : "bg-white border border-gray-200 text-gray-800 focus:border-[#003366] focus:ring-2 focus:ring-[#003366]/20"
  }`;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      className: "",
      message: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const form = new FormData();

      form.append("name", formData.name);
      form.append("phone", formData.phone);
      form.append("email", formData.email);
      form.append("className", formData.className);
      form.append("message", formData.message);

      await fetch(SCRIPT_URL, {
        method: "POST",
        body: form,
      });

      resetForm();
      setShowPopup(true);

      if (onSubmit) onSubmit();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* FORM */}
      <form className="space-y-5 relative z-10" onSubmit={handleSubmit}>
        <div>
          <label className={labelClass}>Student Name</label>
          <input
            required
            type="text"
            name="name"
            placeholder="Enter student name"
            className={inputClass}
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Phone Number</label>
            <input
              required
              type="tel"
              name="phone"
              placeholder="10-digit number"
              className={inputClass}
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className={labelClass}>Email Address</label>
            <input
              required
              type="email"
              name="email"
              placeholder="Email address"
              className={inputClass}
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label className={labelClass}>
            Class Applying For
            <span className="text-xs opacity-70 normal-case font-normal">
              (Optional)
            </span>
          </label>

          <select
            name="className"
            className={inputClass}
            value={formData.className}
            onChange={handleChange}
          >
            <option value="">Select Class</option>
            <option>LKG</option>
            <option>UKG</option>
            <option>Class I</option>
            <option>Class II</option>
            <option>Class III</option>
            <option>Class IV</option>
            <option>Class V</option>
            <option>Class VI</option>
            <option>Class VII</option>
            <option>Class VIII</option>
            <option>Class IX</option>
            <option>Class XI</option>
          </select>
        </div>

        <div>
          <label className={labelClass}>Message / Remarks</label>
          <textarea
            rows={3}
            name="message"
            placeholder="How can we help you?"
            className={`${inputClass} resize-none`}
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className={`w-full font-bold py-4 rounded-xl transition-colors uppercase tracking-widest shadow-md ${
              isDark
                ? "bg-[#FFD700] text-[#003366] hover:bg-white"
                : "bg-[#FFD700] text-[#003366] hover:bg-[#003366] hover:text-white"
            }`}
          >
            {loading ? "Submitting..." : "Submit Enquiry"}
          </button>
        </div>
      </form>

      {/* SUCCESS POPUP */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-[200]">
          <div className="bg-white p-8 rounded-2xl text-center shadow-2xl max-w-sm">
            <CheckCircle size={60} className="text-green-500 mx-auto mb-4" />

            <h3 className="text-xl font-bold text-[#003366] mb-2">
              Enquiry Submitted
            </h3>

            <p className="text-gray-600 text-sm mb-6">
              Thank you for contacting Loyola School Harnaut. Our admission team
              will contact you soon.
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="bg-[#003366] text-white px-6 py-2 rounded-lg hover:bg-[#FFD700] hover:text-[#003366] transition"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default EnquiryForm;
