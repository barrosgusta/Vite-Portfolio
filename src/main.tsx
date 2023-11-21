import React from "react"
import ReactDOM from "react-dom/client"
import AppPage from "./app-page.tsx";
import { BrowserRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "./global.css"
import { ThemeProvider } from "./providers/theme-provider.tsx";
import { routes } from "./components/animated-routes.tsx";

library.add(fas);
library.add(fab);

// routes.filter((route) => route.path === window.location.pathname)
routes.find((route) => route.path === window.location.pathname) === undefined && window.location.replace("/home");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <AppPage />
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

