import { Routes, Route, useLocation } from "react-router-dom";
import { ContactContent } from "./content/ContactContent";
import { MeContent } from "./content/MeContent";
import { PortfolioContent } from "./content/PortfolioContent";
import { ResumeContent } from "./content/ResumeContent";
import { AnimatePresence } from "framer-motion";

export function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                {/* <Route path="/" element={<MeContent />} /> */}
                <Route path="/me" element={<MeContent />} />
                <Route path="/resume" element={<ResumeContent />} />
                <Route path="/portfolio" element={<PortfolioContent />} />
                <Route path="/contact" element={<ContactContent />} />
            </Routes>
        </AnimatePresence>
    )
}