import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Screenshots from "./components/Screenshots";
import Stats from "./components/Stats";
import CallToAction from "./components/CallToAction";
import DonationNotice from "./components/DonationNotice";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import Contact from "./components/Contact";
import Links from "./components/Links";

function LandingPage() {
  return (
    <>
      <Hero />
      <Features />
      <Screenshots />
      <Stats />
      <DonationNotice />
      <CallToAction />
    </>
  );
}

function AppRoutes() {
  const location = useLocation();
  const hideFooter = location.pathname === "/links";

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/links" element={<Links />} />
      </Routes>
      {!hideFooter && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
