import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";

import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function ChildComponent() {
  const [ipData, setIpData] = useState(null);
  const [ipDataCode, setIpDataCode] = useState(null);
  const [newUrl, setNewUrl] = useState("");
  const [source, setSource] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  const { t, i18n } = useTranslation();
  const selectRef = useRef(null);

  const countryOptions = [
    { code: "au", name: "Australia", flag: "🇦🇺" },
    { code: "at", name: "Austria", flag: "🇦🇹" },
    { code: "ca", name: "Canada", flag: "🇨🇦" },
    { code: "fi", name: "Finland", flag: "🇫🇮" },
    { code: "de", name: "Germany", flag: "🇩🇪" },
    { code: "gr", name: "Greece", flag: "🇬🇷" },
    { code: "ie", name: "Ireland", flag: "🇮🇪" },
    { code: "it", name: "Italy", flag: "🇮🇹" },
    { code: "nl", name: "Netherlands", flag: "🇳🇱" },
    { code: "nz", name: "New Zealand", flag: "🇳🇿" },
    { code: "no", name: "Norway", flag: "🇳🇴" },
    { code: "pl", name: "Poland", flag: "🇵🇱" },
    { code: "se", name: "Sweden", flag: "🇸🇪" },
    { code: "ch", name: "Switzerland", flag: "🇨🇭" },
    { code: "all", name: "World", flag: "🌍" },
  ];
  const countryOptions1043 = [
    { code: "all", name: "World", flag: "🌍" }, 
    { code: "ca", name: "Canada", flag: "🇨🇦" },
    { code: "us", name: "United States", flag: "🇺🇸" },
  ];
  const countryOptions1044 = [
    { code: "au", name: "Australia", flag: "🇦🇺" },
    { code: "at", name: "Austria", flag: "🇦🇹" },
    { code: "ca", name: "Canada", flag: "🇨🇦" },
    { code: "fi", name: "Finland", flag: "🇫🇮" },
    { code: "de", name: "Germany", flag: "🇩🇪" },
    { code: "gb", name: "Great Britain", flag: "🇬🇧" },
    { code: "gr", name: "Greece", flag: "🇬🇷" },
    { code: "ie", name: "Ireland", flag: "🇮🇪" },
    { code: "it", name: "Italy", flag: "🇮🇹" },
    { code: "nl", name: "Netherlands", flag: "🇳🇱" },
    { code: "no", name: "Norway", flag: "🇳🇴" },
    { code: "nz", name: "New Zealand", flag: "🇳🇿" },
    { code: "es", name: "Spain", flag: "🇪🇸" },
    { code: "pl", name: "Poland", flag: "🇵🇱" },
    { code: "se", name: "Sweden", flag: "🇸🇪" },
    { code: "ch", name: "Switzerland", flag: "🇨🇭" },
    { code: "us", name: "USA", flag: "🇺🇸" },
    { code: "all", name: "World", flag: "🌍" },
  ];

  const countryOptions1039 = [
    { code: "au", name: "Australia", flag: "🇦🇺" },
    { code: "at", name: "Austria", flag: "🇦🇹" },
    { code: "ca", name: "Canada", flag: "🇨🇦" },
    { code: "fi", name: "Finland", flag: "🇫🇮" },
    { code: "de", name: "Germany", flag: "🇩🇪" },
    { code: "gb", name: "Great Britain", flag: "🇬🇧" },
    { code: "gr", name: "Greece", flag: "🇬🇷" },
    { code: "ie", name: "Ireland", flag: "🇮🇪" },
    { code: "it", name: "Italy", flag: "🇮🇹" },
    { code: "nl", name: "Netherlands", flag: "🇳🇱" },
    { code: "no", name: "Norway", flag: "🇳🇴" },
    { code: "nz", name: "New Zealand", flag: "🇳🇿" },
    { code: "es", name: "Spain", flag: "🇪🇸" },
    { code: "pl", name: "Poland", flag: "🇵🇱" },
    { code: "se", name: "Sweden", flag: "🇸🇪" },
    { code: "ch", name: "Switzerland", flag: "🇨🇭" },
    { code: "all", name: "World", flag: "🌍" },
  ];


  useEffect(() => {
    fetch(
      "https://ipapi.co/json/?key=YD0x5VtXrPJkOcFQMjEyQgqjfM6jUcwS4J54b3DI8ztyrFpHzW"
    )
      .then((response) => response.json())
      .then((data) => {
        setIpData(data.country_name);
        setIpDataCode(data.country);
        setSelectedCountry(data.country.toLowerCase());
      })
      .catch((error) => {
        console.error("Ошибка при запросе к API:", error);
      });
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.delete("brand");
    const currentSource = searchParams.get("keyword");
    let sourceValue = "0";

    if (currentSource) {
      const match = currentSource.match(/partner(_)?\d+/);
      if (match) {
        sourceValue = match[0];
        setSource(sourceValue);
      } else {
        setSource("0");
      }
    } else {
      setSource("0");
    }
    searchParams.set("source", sourceValue);
    searchParams.set("creative_id", "");
    const queryString = `?${searchParams.toString()}`;
    setNewUrl(queryString);
  }, []);

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    localStorage.setItem("selectedCountry", country);
    document.documentElement.classList.remove("fixed-position");
    console.log("handleCountryChange")

  };

  const handleMouseDown = () => {
    document.documentElement.classList.add("fixed-position");
    console.log("handleMouseDown")

  };

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      document.documentElement.classList.remove("fixed-position");
      console.log("handleClickOutside")
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <section id="home" className="hero-section go-zoom-1">
      <div className="container">
        <div className="top__color-overly-1 flaot-bob-y"></div>
        <div className="top__color-overly-2 flaot-bob-x"></div>
        <div className="top__color-overly-3 img-bounce"></div>
        <div className="bg-img"></div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-content top-greadient">
              <h1 className="wow fadeInUp" data-wow-delay=".4s">
                Make a Deposit and Boost Your Balance
                <span className="common-gre-color">Instantly!</span>
              </h1>
              <p className="wow fadeInUp" data-wow-delay=".6s">
                Thank you for completing our survey. To show our appreciation,
                we have an exciting offer just for you! Leave your contact
                information to receive:
              </p>
              <ul className="wow fadeInUp" data-wow-delay=".6s">
                <li>Exclusive Rewards Opportunities</li>
                <li>Tips on Increasing Your Wealth</li>
                <li>Updates on the Latest Games and Offers</li>
              </ul>
              <br />

              <p className="wow fadeInUp" data-wow-delay=".6s">
                Don't miss out on these amazing opportunities to double or even
                triple your deposit! Enter your details below to start your
                journey to greater rewards.
              </p>
              <button
                type="button"
                className="main-btn btn-hover wow fadeInUp"
                data-bs-toggle="modal"
                data-bs-target="#contact-form"
              >
                <i className="fal fa-plus"></i> Get reward!
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-img-container">
              <div className="hero-img wow fadeInRight" data-wow-delay=".5s">
                <img src={"../../../src/img/man.png"} alt="" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default ChildComponent;
