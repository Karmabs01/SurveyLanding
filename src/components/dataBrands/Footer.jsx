import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";

function ChildComponent() {

    const { t } = useTranslation();

    return (
      <footer className="footer pt-115">
      <div className="container">
        <div className="widget-wrapper"></div>
        <div className="copy-right">
          <p>Copyright © 2024. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
    );
}

export default ChildComponent;
