import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Teachers from './pages/Teachers';
import Careers from './pages/Careers';
import Activities from './pages/Activities';
import SchoolHistory from './pages/SchoolHistory';
import Achievements from './pages/Achievements';
import OurSchool from './pages/OurSchool';
import Admission from './pages/Admission';
import AdmissionResults from './pages/AdmissionResults';
import BookList from './pages/BookList';
import BulletinBoard from './pages/BulletinBoard';
import RegulationsSyllabus from './pages/RegulationsSyllabus';
import ExaminationSchedules from './pages/ExaminationSchedules';
import EMagazine from './pages/EMagazine';
import SchoolCalendar from './pages/SchoolCalendar';
import OnlineLearning from './pages/OnlineLearning';
import OnlineExaminations from './pages/OnlineExaminations';
import ClassSyllabus from './pages/ClassSyllabus';
import Results from './pages/Results';
import ResultsOld from './pages/ResultsOld';
import Legacy from './pages/Legacy';
import ComingSoon from './pages/ComingSoon';
import AboutUs from './pages/AboutUs';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col font-sans selection:bg-[#FFD700] selection:text-[#003366]">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/activities" element={<Activities />} />
              <Route path="/school-history" element={<SchoolHistory />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/our-school" element={<OurSchool />} />
              <Route path="/admission" element={<Admission />} />
              <Route path="/admission-results" element={<AdmissionResults />} />
              <Route path="/book-list" element={<BookList />} />
              <Route path="/bulletin-board" element={<BulletinBoard />} />
              <Route path="/regulations-syllabus" element={<RegulationsSyllabus />} />
              <Route path="/examination-schedules" element={<ExaminationSchedules />} />
              <Route path="/e-magazine" element={<EMagazine />} />
              <Route path="/school-calendar" element={<SchoolCalendar />} />
              <Route path="/online-learning" element={<OnlineLearning />} />
              <Route path="/online-examinations" element={<OnlineExaminations />} />
              <Route path="/class-syllabus" element={<ClassSyllabus />} />
              <Route path="/results" element={<Results />} />
              <Route path="/results-old" element={<ResultsOld />} />
              <Route path="/legacy" element={<Legacy />} />
              <Route path="/coming-soon" element={<ComingSoon />} />
              {/* Fallback to Home for now as other pages are not yet implemented */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}
