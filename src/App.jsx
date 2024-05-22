import { useState, useEffect } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";

import { Home } from "./components/Home/Home";



function App() {
  const [isLoading, setIsLoading] = useState(true);
  console.log(isLoading);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);



  return (
  
      <HashRouter>
        {/* <I18nInitializer />  */}
        {/* <LanguageSelector />  */}
            <Routes>
                <Route index path="/" element={<Home />} />
                {/* <Route index path="/withdrawal" element={<Withdrawal />} />
                <Route index path="/my-account" element={<MyAccount />} />
                <Route index path="/faq" element={<Faq />} />
                <Route index path="/tournament" element={<Tournament />} /> */}
                {/* <Route index path="/terms" element={<Terms />} /> */}
                {/* <Route index path="/fortunewheel" element={<Wheel />} />
                <Route index path="/withdrawal" element={<Withdraw />} />
                <Route index path="/unsubscribed" element={<Unsubscribed />} /> */}


            </Routes>
      </HashRouter>
 
  );
}

export default App;
