import { useEffect, useState } from "react";

import Home from "./pages/Home";

import Loader from "./components/global/Loader";

import ScrollProgress from "./components/global/ScrollProgress";

import FloatingWhatsApp from "./components/global/FloatingWhatsApp";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader loading={loading} />

      {!loading && (
        <>
          <ScrollProgress />

          <FloatingWhatsApp />

          <BrowserRouter>
            <Routes>
              <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />

                <Route path="/services" element={<ServicesPage />} />

                <Route path="/contact" element={<ContactPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </>
      )}
    </>
  );
};

export default App;
