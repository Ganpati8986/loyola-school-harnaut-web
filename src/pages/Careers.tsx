// import React, { useState } from "react";
// import { motion, AnimatePresence } from "motion/react";
// import {
//   Briefcase,
//   MapPin,
//   Clock,
//   Send,
//   Upload,
//   CheckCircle2,
//   AlertCircle,
//   X,
// } from "lucide-react";
// import SEO from "../components/SEO";

// const openings = [
//   {
//     id: "JOB-001",
//     title: "Senior Mathematics Teacher",
//     department: "Mathematics",
//     type: "Full-Time",
//     location: "Harnaut, Nalanda",
//     experience: "5+ Years",
//     qualification: "M.Sc. in Mathematics with B.Ed.",
//   },
//   {
//     id: "JOB-002",
//     title: "Physical Education Instructor",
//     department: "Sports",
//     type: "Full-Time",
//     location: "Harnaut, Nalanda",
//     experience: "3+ Years",
//     qualification: "B.P.Ed. or M.P.Ed.",
//   },
//   {
//     id: "JOB-003",
//     title: "Primary School Teacher",
//     department: "Primary Section",
//     type: "Full-Time",
//     location: "Harnaut, Nalanda",
//     experience: "2+ Years",
//     qualification: "Graduate with D.El.Ed. or B.Ed.",
//   },
// ];

// const Careers = () => {
//   const generalFormRef = React.useRef<HTMLDivElement>(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     position: "",
//     experience: "",
//     message: "",
//   });
//   const [cvFile, setCvFile] = useState<File | null>(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isGeneralSubmitted, setIsGeneralSubmitted] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleInputChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >,
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       setCvFile(e.target.files[0]);
//     }
//   };

//   const SCRIPT_URL =
//     "https://script.google.com/macros/s/AKfycbyMzHkm4Sdzi3TOwnCyDc08cjTiNRIGYqoyBvX_QISeW2a-9H19S7bqa3xZs8esyg6AfQ/exec";

//   const handleSubmit = async (
//     e: React.FormEvent,
//     isGeneral: boolean = false,
//   ) => {
//     e.preventDefault();

//     try {
//       setIsSubmitting(true);

//       let fileBase64 = "";
//       let fileName = "";

//       if (cvFile) {
//         fileName = cvFile.name;

//         const reader = new FileReader();

//         const base64 = await new Promise<string>((resolve) => {
//           reader.onload = () => {
//             const result = reader.result as string;
//             resolve(result.split(",")[1]);
//           };

//           reader.readAsDataURL(cvFile);
//         });

//         fileBase64 = base64;
//       }

//       const form = new FormData();

//       form.append("name", formData.name);
//       form.append("email", formData.email);
//       form.append("phone", formData.phone);
//       form.append("position", formData.position);
//       form.append("experience", formData.experience);
//       form.append("message", formData.message);
//       form.append("formType", isGeneral ? "general" : "job");
//       form.append("fileData", fileBase64);
//       form.append("fileName", fileName);

//       await fetch(SCRIPT_URL, {
//         method: "POST",
//         body: form,
//       });

//       if (isGeneral) {
//         setIsGeneralSubmitted(true);
//       } else {
//         setIsSubmitted(true);
//       }

//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         position: "",
//         experience: "",
//         message: "",
//       });

//       setCvFile(null);
//     } catch (error) {
//       console.error("Application submit error:", error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const scrollToGeneralForm = () => {
//     generalFormRef.current?.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   };

//   return (
//     <div className="min-h-screen bg-white pb-20">
//       <SEO
//         title="Careers - Loyola School Harnaut"
//         description="Join our team of dedicated educators at Loyola School Harnaut. View current openings and apply today."
//       />

//       {/* Hero Section */}
//       <div className="relative bg-[#002147] pt-32 pb-48 overflow-hidden">
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30" />
//           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#002147]" />
//         </div>

//         {/* Floating Shapes */}
//         <div className="absolute top-20 right-10 w-64 h-64 bg-[#FFD700] rounded-full blur-[120px] opacity-20 animate-pulse" />
//         <div className="absolute bottom-10 left-10 w-48 h-48 bg-[#CC0000] rounded-full blur-[100px] opacity-10" />

//         <div className="max-w-7xl mx-auto px-4 relative z-10">
//           <div className="max-w-3xl">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               animate={{ opacity: 1, x: 0 }}
//               className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-8"
//             >
//               <span className="w-2 h-2 bg-[#FFD700] rounded-full animate-ping" />
//               <span className="text-xs font-bold tracking-widest uppercase text-[#FFD700]">
//                 We are hiring
//               </span>
//             </motion.div>

//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight"
//             >
//               Shape the Future <br />
//               <span className="text-[#FFD700]">With Us</span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//               className="text-xl text-gray-300 leading-relaxed mb-10"
//             >
//               At Loyola School Harnaut, we believe in the power of education to
//               transform lives. Join a community of passionate educators
//               dedicated to excellence.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//               className="flex flex-wrap gap-4"
//             >
//               <button
//                 onClick={scrollToGeneralForm}
//                 className="px-8 py-4 bg-[#FFD700] text-[#002147] font-bold rounded-2xl hover:bg-white transition-all duration-300 shadow-xl flex items-center space-x-2"
//               >
//                 <span>Submit Resume</span>
//                 <Upload size={18} />
//               </button>
//               <button
//                 onClick={() =>
//                   window.scrollTo({
//                     top: window.innerHeight * 0.8,
//                     behavior: "smooth",
//                   })
//                 }
//                 className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold rounded-2xl hover:bg-white/20 transition-all duration-300"
//               >
//                 View Openings
//               </button>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 -mt-32 relative z-20">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
//           {/* Left Column: Job Openings (8 cols) */}
//           <div className="lg:col-span-7 space-y-8">
//             <div className="bg-white rounded-[2rem] shadow-2xl shadow-blue-900/10 p-8 md:p-12 border border-gray-100">
//               <div className="flex items-center justify-between mb-12">
//                 <div>
//                   <h2 className="text-3xl font-bold text-[#003366] mb-2">
//                     Available Positions
//                   </h2>
//                   <div className="w-12 h-1.5 bg-[#FFD700] rounded-full" />
//                 </div>
//                 <div className="hidden md:block">
//                   <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">
//                     {openings.length} Openings
//                   </span>
//                 </div>
//               </div>

//               <div className="space-y-6">
//                 {openings.length > 0 ? (
//                   openings.map((job, index) => (
//                     <motion.div
//                       key={job.id}
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ delay: index * 0.1 }}
//                       viewport={{ once: true }}
//                       className="group relative bg-gray-50 rounded-3xl p-8 border border-transparent hover:border-[#FFD700] hover:bg-white hover:shadow-2xl transition-all duration-500"
//                     >
//                       <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
//                         <div className="space-y-4">
//                           <div className="inline-flex items-center px-3 py-1 bg-[#002147]/5 text-[#002147] rounded-full text-[10px] font-bold uppercase tracking-wider">
//                             {job.department}
//                           </div>
//                           <h3 className="text-2xl font-bold text-[#003366] group-hover:text-[#CC0000] transition-colors">
//                             {job.title}
//                           </h3>
//                           <div className="flex flex-wrap gap-6 text-sm text-gray-500">
//                             <div className="flex items-center">
//                               <MapPin
//                                 size={16}
//                                 className="mr-2 text-[#FFD700]"
//                               />{" "}
//                               {job.location}
//                             </div>
//                             <div className="flex items-center">
//                               <Clock
//                                 size={16}
//                                 className="mr-2 text-[#FFD700]"
//                               />{" "}
//                               {job.type}
//                             </div>
//                             <div className="flex items-center">
//                               <Briefcase
//                                 size={16}
//                                 className="mr-2 text-[#FFD700]"
//                               />{" "}
//                               {job.experience}
//                             </div>
//                           </div>
//                         </div>
//                         <button
//                           onClick={() => {
//                             setFormData((prev) => ({
//                               ...prev,
//                               position: job.title,
//                             }));
//                             setIsModalOpen(true);
//                             setIsSubmitted(false);
//                           }}
//                           className="shrink-0 w-full md:w-auto px-8 py-4 bg-[#002147] text-white font-bold rounded-2xl hover:bg-[#CC0000] transition-all duration-300 shadow-lg group-hover:shadow-xl flex items-center justify-center space-x-2"
//                         >
//                           <span>Apply Now</span>
//                           <Send
//                             size={16}
//                             className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
//                           />
//                         </button>
//                       </div>
//                       <div className="mt-6 pt-6 border-t border-gray-200/50">
//                         <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
//                           Key Requirement:
//                         </p>
//                         <p className="text-gray-600 leading-relaxed">
//                           {job.qualification}
//                         </p>
//                       </div>
//                     </motion.div>
//                   ))
//                 ) : (
//                   <div className="text-center py-12 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
//                     <AlertCircle
//                       size={48}
//                       className="mx-auto text-gray-300 mb-4"
//                     />
//                     <h3 className="text-xl font-bold text-gray-500 mb-2">
//                       No current openings
//                     </h3>
//                     <p className="text-gray-400 text-sm max-w-xs mx-auto">
//                       We don't have any active job listings right now, but we're
//                       always looking for talent.
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* General Resume Submission Section */}
//             <motion.div
//               ref={generalFormRef}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="bg-white rounded-[2rem] shadow-2xl shadow-blue-900/10 p-8 md:p-12 border border-gray-100 overflow-hidden relative"
//             >
//               <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD700]/10 rounded-full -mr-16 -mt-16" />
//               <div className="relative z-10">
//                 <div className="mb-10">
//                   <h2 className="text-3xl font-bold text-[#003366] mb-2">
//                     Can't find a suitable role?
//                   </h2>
//                   <p className="text-gray-500">
//                     Submit your resume for our talent pool and we'll contact you
//                     when a matching position opens up.
//                   </p>
//                   <div className="w-12 h-1.5 bg-[#CC0000] rounded-full mt-4" />
//                 </div>

//                 {isGeneralSubmitted ? (
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     className="text-center py-12"
//                   >
//                     <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
//                       <CheckCircle2 size={40} />
//                     </div>
//                     <h3 className="text-2xl font-bold text-gray-800 mb-2">
//                       Resume Received!
//                     </h3>
//                     <p className="text-gray-600 mb-8">
//                       Thank you for sharing your profile. We'll keep it in our
//                       talent pool for future opportunities.
//                     </p>
//                     <button
//                       onClick={() => setIsGeneralSubmitted(false)}
//                       className="text-[#002147] font-bold hover:underline"
//                     >
//                       Submit another resume
//                     </button>
//                   </motion.div>
//                 ) : (
//                   <form
//                     onSubmit={(e) => handleSubmit(e, true)}
//                     className="space-y-6"
//                   >
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       <div className="space-y-2">
//                         <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">
//                           Full Name
//                         </label>
//                         <input
//                           type="text"
//                           name="name"
//                           required
//                           value={formData.name}
//                           onChange={handleInputChange}
//                           className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-[#002147] focus:bg-white transition-all"
//                           placeholder="John Smith"
//                         />
//                       </div>
//                       <div className="space-y-2">
//                         <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">
//                           Email Address
//                         </label>
//                         <input
//                           type="email"
//                           name="email"
//                           required
//                           value={formData.email}
//                           onChange={handleInputChange}
//                           className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-[#002147] focus:bg-white transition-all"
//                           placeholder="john@example.com"
//                         />
//                       </div>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       <div className="space-y-2">
//                         <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">
//                           Phone Number
//                         </label>
//                         <input
//                           type="tel"
//                           name="phone"
//                           required
//                           value={formData.phone}
//                           onChange={handleInputChange}
//                           className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-[#002147] focus:bg-white transition-all"
//                           placeholder="+91 00000 00000"
//                         />
//                       </div>
//                       <div className="space-y-2">
//                         <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">
//                           Area of Interest
//                         </label>
//                         <select
//                           name="position"
//                           required
//                           value={formData.position}
//                           onChange={handleInputChange}
//                           className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-[#002147] focus:bg-white transition-all appearance-none"
//                         >
//                           <option value="">Select Department</option>
//                           <option value="Teaching">Teaching</option>
//                           <option value="Administration">Administration</option>
//                           <option value="Sports">Sports & PE</option>
//                           <option value="Support Staff">Support Staff</option>
//                           <option value="Other">Other</option>
//                         </select>
//                       </div>
//                     </div>

//                     <div className="space-y-2">
//                       <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">
//                         Upload Resume
//                       </label>
//                       <div className="relative group/upload">
//                         <input
//                           type="file"
//                           accept=".pdf,.doc,.docx"
//                           onChange={handleFileChange}
//                           className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
//                         />
//                         <div
//                           className={`w-full border-2 border-dashed rounded-2xl px-6 py-8 text-center transition-all duration-300 ${cvFile ? "border-green-500 bg-green-50" : "border-gray-200 bg-gray-50 group-hover/upload:border-[#FFD700] group-hover/upload:bg-white"}`}
//                         >
//                           {cvFile ? (
//                             <div className="flex items-center justify-center space-x-3 text-green-600">
//                               <CheckCircle2 size={20} />
//                               <p className="font-bold text-sm truncate max-w-[200px]">
//                                 {cvFile.name}
//                               </p>
//                             </div>
//                           ) : (
//                             <div className="flex items-center justify-center space-x-3 text-gray-400">
//                               <Upload size={20} className="text-[#002147]" />
//                               <p className="font-bold text-sm text-gray-600">
//                                 Click to upload CV (PDF/DOC)
//                               </p>
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                     </div>

//                     <button
//                       type="submit"
//                       disabled={isSubmitting}
//                       className="w-full bg-[#002147] text-white font-bold py-5 rounded-2xl hover:bg-[#CC0000] transition-all duration-500 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed"
//                     >
//                       {isSubmitting ? (
//                         <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
//                       ) : (
//                         <>
//                           <Send size={20} />
//                           <span className="tracking-widest uppercase text-sm">
//                             Submit to Talent Pool
//                           </span>
//                         </>
//                       )}
//                     </button>
//                   </form>
//                 )}
//               </div>
//             </motion.div>

//             {/* Culture Section */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="bg-[#CC0000] p-10 rounded-[2rem] text-white shadow-xl relative overflow-hidden group">
//                 <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700" />
//                 <h3 className="text-2xl font-bold mb-4">Our Culture</h3>
//                 <p className="text-white/80 leading-relaxed">
//                   We foster an environment of mutual respect, continuous
//                   learning, and unwavering commitment to student success.
//                 </p>
//               </div>
//               <div className="bg-[#FFD700] p-10 rounded-[2rem] text-[#002147] shadow-xl relative overflow-hidden group">
//                 <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#002147]/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
//                 <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
//                 <p className="text-[#002147]/70 leading-relaxed">
//                   To provide holistic education that empowers students to lead
//                   with integrity, compassion, and excellence.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Right Column: Culture & Info (5 cols) */}
//           <div className="lg:col-span-5 space-y-8">
//             <div className="bg-[#002147] p-10 rounded-[2rem] text-white shadow-2xl relative overflow-hidden group h-full flex flex-col justify-center">
//               <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD700] opacity-5 rounded-full -mr-32 -mt-32" />
//               <h2 className="text-3xl font-bold mb-8 relative z-10">
//                 Why Join Loyola School?
//               </h2>
//               <div className="space-y-8 relative z-10">
//                 <div className="flex items-start space-x-4">
//                   <div className="w-10 h-10 bg-[#FFD700] rounded-xl flex items-center justify-center shrink-0 text-[#002147]">
//                     <Briefcase size={20} />
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-[#FFD700] text-lg mb-1">
//                       Professional Growth
//                     </h4>
//                     <p className="text-gray-300 leading-relaxed">
//                       Continuous learning opportunities and workshops to enhance
//                       your teaching skills.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <div className="w-10 h-10 bg-[#FFD700] rounded-xl flex items-center justify-center shrink-0 text-[#002147]">
//                     <CheckCircle2 size={20} />
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-[#FFD700] text-lg mb-1">
//                       Holistic Environment
//                     </h4>
//                     <p className="text-gray-300 leading-relaxed">
//                       A supportive community that values both academic and
//                       personal development.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <div className="w-10 h-10 bg-[#FFD700] rounded-xl flex items-center justify-center shrink-0 text-[#002147]">
//                     <MapPin size={20} />
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-[#FFD700] text-lg mb-1">
//                       Modern Facilities
//                     </h4>
//                     <p className="text-gray-300 leading-relaxed">
//                       Access to state-of-the-art classrooms, labs, and sports
//                       infrastructure.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="mt-12 relative z-10">
//                 <p className="text-gray-400 italic">
//                   "Join us in our mission to provide quality education and shape
//                   the leaders of tomorrow."
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Application Modal */}
//       <AnimatePresence>
//         {isModalOpen && (
//           <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setIsModalOpen(false)}
//               className="absolute inset-0 bg-[#002147]/60 backdrop-blur-sm"
//             />

//             <motion.div
//               initial={{ opacity: 0, scale: 0.9, y: 20 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.9, y: 20 }}
//               className="relative bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden"
//             >
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 className="absolute top-6 right-6 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-[#CC0000] hover:text-white transition-all z-20"
//               >
//                 <X size={20} />
//               </button>

//               <div className="p-8 md:p-12 max-h-[90vh] overflow-y-auto custom-scrollbar">
//                 <div className="mb-10">
//                   <h2 className="text-3xl font-bold text-[#003366] mb-2">
//                     Application Form
//                   </h2>
//                   <p className="text-gray-500 text-sm">
//                     Applying for:{" "}
//                     <span className="text-[#CC0000] font-bold">
//                       {formData.position || "General Position"}
//                     </span>
//                   </p>
//                 </div>

//                 {isSubmitted ? (
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     className="text-center py-12"
//                   >
//                     <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
//                       <CheckCircle2 size={48} />
//                     </div>
//                     <h3 className="text-2xl font-bold text-gray-800 mb-4">
//                       Application Sent!
//                     </h3>
//                     <p className="text-gray-600 mb-10 leading-relaxed">
//                       Thank you for applying. Our recruitment team will review
//                       your profile and contact you shortly.
//                     </p>
//                     <button
//                       onClick={() => setIsModalOpen(false)}
//                       className="px-8 py-3 bg-[#002147] text-white font-bold rounded-xl hover:bg-[#CC0000] transition-all"
//                     >
//                       Close Window
//                     </button>
//                   </motion.div>
//                 ) : (
//                   <form onSubmit={handleSubmit} className="space-y-6">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       <div className="space-y-2">
//                         <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">
//                           Full Name
//                         </label>
//                         <input
//                           type="text"
//                           name="name"
//                           required
//                           value={formData.name}
//                           onChange={handleInputChange}
//                           className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-[#002147] focus:bg-white transition-all"
//                           placeholder="e.g. John Smith"
//                         />
//                       </div>
//                       <div className="space-y-2">
//                         <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">
//                           Phone Number
//                         </label>
//                         <input
//                           type="tel"
//                           name="phone"
//                           required
//                           value={formData.phone}
//                           onChange={handleInputChange}
//                           className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-[#002147] focus:bg-white transition-all"
//                           placeholder="+91 00000 00000"
//                         />
//                       </div>
//                     </div>

//                     <div className="space-y-2">
//                       <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">
//                         Email Address
//                       </label>
//                       <input
//                         type="email"
//                         name="email"
//                         required
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-[#002147] focus:bg-white transition-all"
//                         placeholder="john@example.com"
//                       />
//                     </div>

//                     <div className="space-y-2">
//                       <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">
//                         Position
//                       </label>
//                       <select
//                         name="position"
//                         required
//                         value={formData.position}
//                         onChange={handleInputChange}
//                         className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-[#002147] focus:bg-white transition-all appearance-none"
//                       >
//                         <option value="">Select Position</option>
//                         {openings.map((job) => (
//                           <option key={job.id} value={job.title}>
//                             {job.title}
//                           </option>
//                         ))}
//                         <option value="Other">
//                           Other / General Application
//                         </option>
//                       </select>
//                     </div>

//                     <div className="space-y-2">
//                       <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">
//                         Resume / CV
//                       </label>
//                       <div className="relative group/upload">
//                         <input
//                           type="file"
//                           accept=".pdf,.doc,.docx"
//                           onChange={handleFileChange}
//                           className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
//                         />
//                         <div
//                           className={`w-full border-2 border-dashed rounded-2xl px-6 py-10 text-center transition-all duration-300 ${cvFile ? "border-green-500 bg-green-50" : "border-gray-200 bg-gray-50 group-hover/upload:border-[#FFD700] group-hover/upload:bg-white"}`}
//                         >
//                           {cvFile ? (
//                             <div className="flex flex-col items-center text-green-600">
//                               <CheckCircle2 size={32} className="mb-2" />
//                               <p className="font-bold text-sm truncate max-w-full px-4">
//                                 {cvFile.name}
//                               </p>
//                               <p className="text-[10px] uppercase mt-1">
//                                 Ready to upload
//                               </p>
//                             </div>
//                           ) : (
//                             <div className="text-gray-400">
//                               <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-4 group-hover/upload:scale-110 transition-transform">
//                                 <Upload size={24} className="text-[#002147]" />
//                               </div>
//                               <p className="font-bold text-sm text-gray-600">
//                                 Click to upload CV
//                               </p>
//                               <p className="text-[10px] mt-1">
//                                 PDF, DOC or DOCX (Max 5MB)
//                               </p>
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                     </div>

//                     <div className="space-y-2">
//                       <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">
//                         Message
//                       </label>
//                       <textarea
//                         name="message"
//                         rows={3}
//                         value={formData.message}
//                         onChange={handleInputChange}
//                         className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-[#002147] focus:bg-white transition-all resize-none"
//                         placeholder="Briefly tell us why you're a good fit..."
//                       />
//                     </div>

//                     <button
//                       type="submit"
//                       disabled={isSubmitting}
//                       className="w-full bg-[#CC0000] text-white font-bold py-5 rounded-2xl hover:bg-[#002147] transition-all duration-500 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed"
//                     >
//                       {isSubmitting ? (
//                         <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
//                       ) : (
//                         <>
//                           <Send size={20} />
//                           <span className="tracking-widest uppercase text-sm">
//                             Submit Application
//                           </span>
//                         </>
//                       )}
//                     </button>
//                   </form>
//                 )}
//               </div>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Careers;





import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, MapPin, Clock, Send, Upload, CheckCircle2, AlertCircle, X } from 'lucide-react';
import SEO from '../components/SEO';

const openings = [
  {
    id: "JOB-001",
    title: "Senior Mathematics Teacher",
    department: "Mathematics",
    type: "Full-Time",
    location: "Harnaut, Nalanda",
    experience: "5+ Years",
    qualification: "M.Sc. in Mathematics with B.Ed."
  },
  {
    id: "JOB-002",
    title: "Physical Education Instructor",
    department: "Sports",
    type: "Full-Time",
    location: "Harnaut, Nalanda",
    experience: "3+ Years",
    qualification: "B.P.Ed. or M.P.Ed."
  },
  {
    id: "JOB-003",
    title: "Primary School Teacher",
    department: "Primary Section",
    type: "Full-Time",
    location: "Harnaut, Nalanda",
    experience: "2+ Years",
    qualification: "Graduate with D.El.Ed. or B.Ed."
  }
];

// Set this to false to hide all job openings and show the "No current openings" message
const showOpenings = false;

const Careers = () => {
  const generalFormRef = React.useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: ''
  });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isGeneralSubmitted, setIsGeneralSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCvFile(e.target.files[0]);
    }
  };
//   const SCRIPT_URL =
//     "https://script.google.com/macros/s/AKfycbyMzHkm4Sdzi3TOwnCyDc08cjTiNRIGYqoyBvX_QISeW2a-9H19S7bqa3xZs8esyg6AfQ/exec";
  // const handleSubmit = async (e: React.FormEvent, isGeneral: boolean = false) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
    
  //   // Simulate API call
  //   setTimeout(() => {
  //     setIsSubmitting(false);
  //     if (isGeneral) {
  //       setIsGeneralSubmitted(true);
  //     } else {
  //       setIsSubmitted(true);
  //     }
  //     setFormData({
  //       name: '',
  //       email: '',
  //       phone: '',
  //       position: '',
  //       experience: '',
  //       message: ''
  //     });
  //     setCvFile(null);
  //   }, 2000);
  // };


    const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwZfD-A3hH3doYnDuZ98VdYZag5rRlUhCORUW-Ayf9lbXuICpx5uzF2j0WQye16lzqj/exec";

  const handleSubmit = async (
    e: React.FormEvent,
    isGeneral: boolean = false,
  ) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      let fileBase64 = "";
      let fileName = "";

      if (cvFile) {
        fileName = cvFile.name;

        const reader = new FileReader();

        const base64 = await new Promise<string>((resolve) => {
          reader.onload = () => {
            const result = reader.result as string;
            resolve(result.split(",")[1]);
          };

          reader.readAsDataURL(cvFile);
        });

        fileBase64 = base64;
      }

      const form = new FormData();

      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("phone", formData.phone);
      form.append("position", formData.position);
      form.append("experience", formData.experience);
      form.append("message", formData.message);
      form.append("formType", isGeneral ? "general" : "job");
      form.append("fileData", fileBase64);
      form.append("fileName", fileName);

      await fetch(SCRIPT_URL, {
        method: "POST",
        body: form,
      });

      if (isGeneral) {
        setIsGeneralSubmitted(true);
      } else {
        setIsSubmitted(true);
      }

      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        message: "",
      });

      setCvFile(null);
    } catch (error) {
      console.error("Application submit error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToGeneralForm = () => {
    generalFormRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-white pb-20">
      <SEO 
        title="Careers - Loyola School Harnaut" 
        description="Join our team of dedicated educators at Loyola School Harnaut. View current openings and apply today."
      />

      {/* Hero Section */}
      <div className="relative bg-[#002147] pt-32 pb-48 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#002147]" />
        </div>
        
        {/* Floating Shapes */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#FFD700] rounded-full blur-[120px] opacity-20 animate-pulse" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-[#CC0000] rounded-full blur-[100px] opacity-10" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-8"
            >
              <span className="w-2 h-2 bg-[#FFD700] rounded-full animate-ping" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#FFD700]">We are hiring</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight"
            >
              Shape the Future <br />
              <span className="text-[#FFD700]">With Us</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-300 leading-relaxed mb-10"
            >
              At Loyola School Harnaut, we believe in the power of education to transform lives. 
              Join a community of passionate educators dedicated to excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <button 
                onClick={scrollToGeneralForm}
                className="px-8 py-4 bg-[#FFD700] text-[#002147] font-bold rounded-2xl hover:bg-white transition-all duration-300 shadow-xl flex items-center space-x-2"
              >
                <span>Submit Resume</span>
                <Upload size={18} />
              </button>
              <button 
                onClick={() => window.scrollTo({ top: window.innerHeight * 0.8, behavior: 'smooth' })}
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold rounded-2xl hover:bg-white/20 transition-all duration-300"
              >
                View Openings
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-32 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Job Openings (8 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white rounded-[2rem] shadow-2xl shadow-blue-900/10 p-8 md:p-12 border border-gray-100">
              <div className="flex items-center justify-between mb-12">
                <div>
                  <h2 className="text-3xl font-bold text-[#003366] mb-2">Available Positions</h2>
                  <div className="w-12 h-1.5 bg-[#FFD700] rounded-full" />
                </div>
                {showOpenings && (
                  <div className="hidden md:block">
                    <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                      {openings.length} Openings
                    </span>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                {showOpenings && openings.length > 0 ? (
                  openings.map((job, index) => (
                    <motion.div
                      key={job.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group relative bg-gray-50 rounded-3xl p-8 border border-transparent hover:border-[#FFD700] hover:bg-white hover:shadow-2xl transition-all duration-500"
                    >
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                        <div className="space-y-4">
                          <div className="inline-flex items-center px-3 py-1 bg-[#002147]/5 text-[#002147] rounded-full text-[10px] font-bold uppercase tracking-wider">
                            {job.department}
                          </div>
                          <h3 className="text-2xl font-bold text-[#003366] group-hover:text-[#CC0000] transition-colors">
                            {job.title}
                          </h3>
                          <div className="flex flex-wrap gap-6 text-sm text-gray-500">
                            <div className="flex items-center"><MapPin size={16} className="mr-2 text-[#FFD700]" /> {job.location}</div>
                            <div className="flex items-center"><Clock size={16} className="mr-2 text-[#FFD700]" /> {job.type}</div>
                            <div className="flex items-center"><Briefcase size={16} className="mr-2 text-[#FFD700]" /> {job.experience}</div>
                          </div>
                        </div>
                        <button 
                          onClick={() => {
                            setFormData(prev => ({ ...prev, position: job.title }));
                            setIsModalOpen(true);
                            setIsSubmitted(false);
                          }}
                          className="shrink-0 w-full md:w-auto px-8 py-4 bg-[#002147] text-white font-bold rounded-2xl hover:bg-[#CC0000] transition-all duration-300 shadow-lg group-hover:shadow-xl flex items-center justify-center space-x-2"
                        >
                          <span>Apply Now</span>
                          <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                      </div>
                      <div className="mt-6 pt-6 border-t border-gray-200/50">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Key Requirement:</p>
                        <p className="text-gray-600 leading-relaxed">{job.qualification}</p>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center py-12 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
                    <AlertCircle size={48} className="mx-auto text-gray-300 mb-4" />
                    <h3 className="text-xl font-bold text-gray-500 mb-2">No current openings</h3>
                    <p className="text-gray-400 text-sm max-w-xs mx-auto">
                      We don't have any active job listings right now, but we're always looking for talent.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* General Resume Submission Section */}
            <motion.div 
              ref={generalFormRef}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] shadow-2xl shadow-blue-900/10 p-8 md:p-12 border border-gray-100 overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD700]/10 rounded-full -mr-16 -mt-16" />
              <div className="relative z-10">
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-[#003366] mb-2">Can't find a suitable role?</h2>
                  <p className="text-gray-500">Submit your resume for our talent pool and we'll contact you when a matching position opens up.</p>
                  <div className="w-12 h-1.5 bg-[#CC0000] rounded-full mt-4" />
                </div>

                {isGeneralSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Resume Received!</h3>
                    <p className="text-gray-600 mb-8">
                      Thank you for sharing your profile. We'll keep it in our talent pool for future opportunities.
                    </p>
                    <button 
                      onClick={() => setIsGeneralSubmitted(false)}
                      className="text-[#002147] font-bold hover:underline"
                    >
                      Submit another resume
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={(e) => handleSubmit(e, true)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                        <input 
                          type="text" 
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-[#002147] focus:bg-white transition-all"
                          placeholder="Name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                        <input 
                          type="email" 
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-[#002147] focus:bg-white transition-all"
                          placeholder="example@gmail.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Phone Number</label>
                        <input 
                          type="tel" 
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-[#002147] focus:bg-white transition-all"
                          placeholder="+91 00000 00000"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Area of Interest</label>
                        <select 
                          name="position"
                          required
                          value={formData.position}
                          onChange={handleInputChange}
                          className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-[#002147] focus:bg-white transition-all appearance-none"
                        >
                          <option value="">Select Department</option>
                          <option value="Teaching">Teaching</option>
                          <option value="Administration">Administration</option>
                          <option value="Sports">Sports & PE</option>
                          <option value="Support Staff">Support Staff</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Upload Resume</label>
                      <div className="relative group/upload">
                        <input 
                          type="file" 
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        />
                        <div className={`w-full border-2 border-dashed rounded-2xl px-6 py-8 text-center transition-all duration-300 ${cvFile ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-gray-50 group-hover/upload:border-[#FFD700] group-hover/upload:bg-white'}`}>
                          {cvFile ? (
                            <div className="flex items-center justify-center space-x-3 text-green-600">
                              <CheckCircle2 size={20} />
                              <p className="font-bold text-sm truncate max-w-[200px]">{cvFile.name}</p>
                            </div>
                          ) : (
                            <div className="flex items-center justify-center space-x-3 text-gray-400">
                              <Upload size={20} className="text-[#002147]" />
                              <p className="font-bold text-sm text-gray-600">Click to upload CV (PDF/DOC)</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-[#002147] text-white font-bold py-5 rounded-2xl hover:bg-[#CC0000] transition-all duration-500 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send size={20} />
                          <span className="tracking-widest uppercase text-sm">Submit to Talent Pool</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Culture Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="bg-[#CC0000] p-10 rounded-[2rem] text-white shadow-xl relative overflow-hidden group">
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700" />
                <h3 className="text-2xl font-bold mb-4">Our Culture</h3>
                <p className="text-white/80 leading-relaxed">
                  We foster an environment of mutual respect, continuous learning, and unwavering commitment to student success.
                </p>
              </div>
              <div className="bg-[#FFD700] p-10 rounded-[2rem] text-[#002147] shadow-xl relative overflow-hidden group">
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#002147]/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-[#002147]/70 leading-relaxed">
                  To provide holistic education that empowers students to lead with integrity, compassion, and excellence.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Culture & Info (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Hiring Process */}
            <div className="bg-[#002147] p-10 rounded-[2rem] text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD700] opacity-5 rounded-full -mr-32 -mt-32" />
              <h2 className="text-3xl font-bold mb-8 relative z-10">Our Hiring Process</h2>
              <div className="space-y-6 relative z-10">
                {[
                  { step: '01', title: 'Application Review', desc: 'Our HR team reviews your resume and portfolio.' },
                  { step: '02', title: 'Initial Interview', desc: 'A quick call to discuss your background and expectations.' },
                  { step: '03', title: 'Technical Round', desc: 'A deep dive into your subject expertise and teaching style.' },
                  { step: '04', title: 'Final Selection', desc: 'Final discussion with the principal and offer rollout.' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4 group/item">
                    <div className="text-2xl font-black text-[#FFD700]/20 group-hover/item:text-[#FFD700] transition-colors duration-300 font-mono">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#002147] p-10 rounded-[2rem] text-white shadow-2xl relative overflow-hidden group flex flex-col">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD700] opacity-5 rounded-full -mr-32 -mt-32" />
              <h2 className="text-3xl font-bold mb-8 relative z-10">Why Join Loyola School?</h2>
              <div className="space-y-8 relative z-10">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#FFD700] rounded-xl flex items-center justify-center shrink-0 text-[#002147]">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#FFD700] text-lg mb-1">Professional Growth</h4>
                    <p className="text-gray-300 leading-relaxed">Continuous learning opportunities and workshops to enhance your teaching skills.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#FFD700] rounded-xl flex items-center justify-center shrink-0 text-[#002147]">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#FFD700] text-lg mb-1">Holistic Environment</h4>
                    <p className="text-gray-300 leading-relaxed">A supportive community that values both academic and personal development.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#FFD700] rounded-xl flex items-center justify-center shrink-0 text-[#002147]">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#FFD700] text-lg mb-1">Modern Facilities</h4>
                    <p className="text-gray-300 leading-relaxed">Access to state-of-the-art classrooms, labs, and sports infrastructure.</p>
                  </div>
                </div>
              </div>
              <div className="mt-12 relative z-10">
                <p className="text-gray-400 italic">"Join us in our mission to provide quality education and shape the leaders of tomorrow."</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Application Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-[#002147]/60 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-[#CC0000] hover:text-white transition-all z-20"
              >
                <X size={20} />
              </button>

              <div className="p-8 md:p-12 max-h-[90vh] overflow-y-auto custom-scrollbar">
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-[#003366] mb-2">Application Form</h2>
                  <p className="text-gray-500 text-sm">Applying for: <span className="text-[#CC0000] font-bold">{formData.position || 'General Position'}</span></p>
                </div>
                
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 size={48} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Application Sent!</h3>
                    <p className="text-gray-600 mb-10 leading-relaxed">
                      Thank you for applying. Our recruitment team will review your profile and contact you shortly.
                    </p>
                    <button 
                      onClick={() => setIsModalOpen(false)}
                      className="px-8 py-3 bg-[#002147] text-white font-bold rounded-xl hover:bg-[#CC0000] transition-all"
                    >
                      Close Window
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                        <input 
                          type="text" 
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-[#002147] focus:bg-white transition-all"
                          placeholder="e.g. John Smith"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Phone Number</label>
                        <input 
                          type="tel" 
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-[#002147] focus:bg-white transition-all"
                          placeholder="+91 00000 00000"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-[#002147] focus:bg-white transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Position</label>
                      <select 
                        name="position"
                        required
                        value={formData.position}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-[#002147] focus:bg-white transition-all appearance-none"
                      >
                        <option value="">Select Position</option>
                        {openings.map(job => (
                          <option key={job.id} value={job.title}>{job.title}</option>
                        ))}
                        <option value="Other">Other / General Application</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Resume / CV</label>
                      <div className="relative group/upload">
                        <input 
                          type="file" 
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        />
                        <div className={`w-full border-2 border-dashed rounded-2xl px-6 py-10 text-center transition-all duration-300 ${cvFile ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-gray-50 group-hover/upload:border-[#FFD700] group-hover/upload:bg-white'}`}>
                          {cvFile ? (
                            <div className="flex flex-col items-center text-green-600">
                              <CheckCircle2 size={32} className="mb-2" />
                              <p className="font-bold text-sm truncate max-w-full px-4">{cvFile.name}</p>
                              <p className="text-[10px] uppercase mt-1">Ready to upload</p>
                            </div>
                          ) : (
                            <div className="text-gray-400">
                              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-4 group-hover/upload:scale-110 transition-transform">
                                <Upload size={24} className="text-[#002147]" />
                              </div>
                              <p className="font-bold text-sm text-gray-600">Click to upload CV</p>
                              <p className="text-[10px] mt-1">PDF, DOC or DOCX (Max 5MB)</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Message</label>
                      <textarea 
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-[#002147] focus:bg-white transition-all resize-none"
                        placeholder="Briefly tell us why you're a good fit..."
                      />
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-[#CC0000] text-white font-bold py-5 rounded-2xl hover:bg-[#002147] transition-all duration-500 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send size={20} />
                          <span className="tracking-widest uppercase text-sm">Submit Application</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Careers;
