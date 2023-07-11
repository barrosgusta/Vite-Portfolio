import { PicMiniature, PicMiniatureRoot } from "../../PicMiniature/PicMiniature";
import { PillSeparator } from "../../PillSeparator";
import { motion } from "framer-motion";

export function PortfolioContent() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
        <div className="text-justify m-7">
            <div className="grid place-content-start">
                <div className="grid">
                    <h1 className="text-zinc-800 dark:text-zinc-100 text-3xl font-sfpbold">
                        Portfolio de Projetos
                    </h1>
                    <PillSeparator additionaTailwindClasses="my-3" />
                </div>
            </div>
        </div>

        <section className="grid grid-cols-3 place-items-center m-4 gap-3">
            <PicMiniature url="https://github.com/barrosgusta/Vite-Portfolio" title="ReactJS Portfolio" />            
            <PicMiniature url="https://github.com/barrosgusta/Vite-Portfolio" title="ReactJS Portfolio" />  
            <PicMiniature url="https://github.com/barrosgusta/Vite-Portfolio" title="ReactJS Portfolio" /> 
        </section>

        <PillSeparator additionaTailwindClasses="m-6" />

        <section className="m-4 text-zinc-700 dark:text-zinc-200 font-sfp">
            <p>Ainda possuo poucos projetos disponiveis no GitHub, a maioria dos meus projetos foram feitos no meu tempo livre na antiga empresa em que trabalhava,</p>
            <p>os computadores de desenvolvimento não possuem acesso a internet por politicas de segurança impossibilitando o acesso aos fontes.</p>
            <br />
            <h2 className="font-sfpbold mb-2">Alguns dos projetos que fiz lá:</h2> 
            <p>Clone do NotePad++, Semi-Simulador de Física com um objeto interativo na tela, Gerenciador de Chamados para uso interno na empresa, Jogo Pong, Conversor de Números (Hex, Octal...),</p>
            <p>Conversor de Código Morse, Interpretador BrainF*ck, todos desenvolvidos no Borland Delphi 7 e banco PostgreSQL.</p>
        </section>

        </motion.div>       
    )
}  