import { Routes, Route, useLocation } from "react-router-dom";
import { ContactContent } from "./content/ContactContent";
import { HomeContent } from "./content/HomeContent";
import { PortfolioContent } from "./content/PortfolioContent";
import { ResumeContent } from "./content/ResumeContent";
import { AnimatePresence } from "framer-motion";

export function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomeContent />} />
                <Route path="/home" element={<HomeContent />} />
                <Route path="/resume" element={<ResumeContent />} />
                <Route path="/portfolio" element={<PortfolioContent />} />
                <Route path="/contact" element={<ContactContent />} />
            </Routes>
        </AnimatePresence>
    )
}