import { Routes, Route, useLocation } from "react-router-dom";
import { ContactContent } from "./content/contact-content";
import { HomeContent } from "./content/home-content";
import { PortfolioContent } from "./content/portfolio/portfolio-content";
import { ResumeContent } from "./content/resume-content";
import { AnimatePresence } from "framer-motion";

export const routes = [
    { path: "/home", element: <HomeContent /> },
    { path: "/resume", element: <ResumeContent /> },
    { path: "/portfolio", element: <PortfolioContent /> },
    { path: "/contact", element: <ContactContent /> },
];

export function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                {routes.map((route) => (
                    <Route key={route.path} path={route.path} element={route.element} />    
                ))}
            </Routes>
        </AnimatePresence>
    )
}
