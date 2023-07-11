import { EuContent } from './content/EuContent';
import { CurriculoContent } from './content/CurriculoContent';
import { ContatoContent } from './content/ContatoContent';
import { PortfolioContent } from './content/PortfolioContent';
import { Route, Routes } from 'react-router-dom';
import { NavBarForm } from '../NavBar/NavBarForm';

export function MainForm() {
    return (
        <div className="backdrop-blur-3xl backdrop-saturate-200 z-10 rounded-xl bg-zinc-100 bg-opacity-60 flex flex-col border border-zinc-400 shadow-default
        dark:bg-zinc-800 dark:bg-opacity-80 dark:border-zinc-700">
            <div className='absolute right-0'>
                <NavBarForm />
            </div>
            <Routes>
                <Route path="/" element={<EuContent />} />
                <Route path="/me" element={<EuContent />} />
                <Route path="/resume" element={<CurriculoContent />} />
                <Route path="/portfolio" element={<PortfolioContent />} />
                <Route path="/contact" element={<ContatoContent />} />
            </Routes>
        </div>
    );
}