import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { HashRouter } from "react-router-dom";
import Router from "./routes/routes";
import GlobalStyles from "./styles/globalStyles";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Router />
    </HashRouter>
    <GlobalStyles />
  </StrictMode>
);
