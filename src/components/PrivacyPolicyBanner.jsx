import React, { useState, useEffect } from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], display: "swap", weight: "300" });
const robotoBold = Roboto({ subsets: ["latin"], display: "swap", weight: "500" });

function PrivacyPolicyBanner() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const isBannerClosed = localStorage.getItem("bannerClosed");
    if (isBannerClosed === "true") {
      setVisible(false);
    }
  }, []);

  if (!visible) return null;

  const handleClose = () => {
    localStorage.setItem("bannerClosed", "true");
    setVisible(false);
  };

  return (
    <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="relative bg-white dark:bg-salice-900 w-11/12 max-w-md p-6 rounded-xl shadow-material">
        <p className={`${roboto.className} mb-4 text-slate-900 dark:text-white text-sm`}>
          Non utilizziamo cookie di profilazione o analitici. Per maggiori
          informazioni sul trattamento dei dati personali, consulta la nostra
          informativa sulla privacy.
        </p>
        <button
          className={`border-0 border-salice-50 rounded-xl flex flex-row w-32 h-12 mx-auto text-sm no-click-bg text-white bg-gradient-to-br from-salice-100 to-salice-500 shadow-material justify-center items-center ${robotoBold.className}`}
          onClick={handleClose}
        >
          CHIUDI
        </button>
      </div>
    </div>
  );
}

export default PrivacyPolicyBanner;