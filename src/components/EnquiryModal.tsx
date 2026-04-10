import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, Loader2, CheckCircle } from "lucide-react";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyS6l_C_ItItybG-CjeYl7EvKYUlFLwUsO5cBb1WHBUdfQABRozmWsZP8QVJhAvNd7T/exec";

const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    className: "",
    message: "",
  });

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
      setShowSuccess(true);
    } catch (error) {
      console.error("Submission failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* MODAL */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* HEADER */}
            <div className="bg-[#002147] p-6 text-white flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-serif font-bold tracking-wide">
                  Admission Enquiry
                </h2>
                <p className="text-[#FFD700] text-xs font-bold uppercase tracking-widest mt-1">
                  Loyola School Harnaut
                </p>
              </div>

              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-full"
              >
                <X size={24} />
              </button>
            </div>

            {/* SUCCESS SCREEN */}
            {showSuccess ? (
              <div className="p-10 text-center space-y-4">
                <CheckCircle size={60} className="text-green-500 mx-auto" />

                <h3 className="text-xl font-bold text-[#002147]">
                  Enquiry Submitted Successfully
                </h3>

                <p className="text-gray-600 text-sm">
                  Thank you for contacting Loyola School Harnaut. Our admission
                  team will contact you soon.
                </p>

                <button
                  onClick={() => {
                    setShowSuccess(false);
                    onClose();
                  }}
                  className="mt-4 bg-[#002147] text-white px-6 py-2 rounded-lg hover:bg-[#FFD700] hover:text-[#002147] transition"
                >
                  OK
                </button>
              </div>
            ) : (
              <form className="p-8 space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold text-[#002147] uppercase">
                      Student Name
                    </label>

                    <input
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter full name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#002147] uppercase">
                      Contact Number
                    </label>

                    <input
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 00000 00000"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold text-[#002147] uppercase">
                      Email
                    </label>

                    <input
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@gmail.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#002147] uppercase">
                      Enquiry for Class
                    </label>

                    <select
                      name="className"
                      value={formData.className}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200"
                    >
                      <option value="">Select Class</option>
                      <option>Nursery</option>
                      <option>LKG</option>
                      <option>UKG</option>

                      {Array.from({ length: 12 }, (_, i) => (
                        <option key={i + 1}>Class {i + 1}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#002147] uppercase">
                    Message
                  </label>

                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#CC0000] text-white font-bold py-4 rounded-xl hover:bg-[#002147] flex items-center justify-center space-x-3"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" size={18} />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>SUBMIT ENQUIRY</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EnquiryModal;
