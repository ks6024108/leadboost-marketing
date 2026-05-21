import { useEffect, useState } from "react";

import Home from "./pages/Home";

import Loader from "./components/global/Loader";

import ScrollProgress from "./components/global/ScrollProgress";

import FloatingWhatsApp from "./components/global/FloatingWhatsApp";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader loading={loading} />

      {!loading && (
        <>
          <ScrollProgress />

          <FloatingWhatsApp />

          <Home />
        </>
      )}
    </>
  );
};

export default App;
