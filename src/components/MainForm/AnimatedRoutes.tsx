import { Routes, Route, useLocation } from "react-router-dom";
import { ContactContent } from "./content/Contact";
import { HomeContent } from "./content/Home";
import { PortfolioContent } from "./content/Portfolio";
import { ResumeContent } from "./content/Resume";
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
