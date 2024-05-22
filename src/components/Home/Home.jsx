import { Outlet } from "react-router-dom";

import ChildComponent from "../dataBrands/Data";
import Header from "../dataBrands/Header";
import Footer from "../dataBrands/Footer";

export function Home() {

  return (
    <>
      <div className="App">
        <Header />

        <div className="wrapper">
          <ChildComponent />
        </div>
        <Footer />
      </div>
      <Outlet />
    </>
  );
}

export default { Home };
