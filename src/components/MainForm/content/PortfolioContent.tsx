import { ImageMiniature } from "../../ImageMiniature";
import { PillSeparator } from "../../PillSeparator";
import { motion } from "framer-motion";
import PortFolioGif from "../../../assets/images/portfolio/web-portfolio-demo.gif";
import TrucoImage from "../../../assets/images/portfolio/truco.png";
import BrasileiraoManagerImage from "../../../assets/images/portfolio/brasileirao-manager.png";
import PhpCrudImage from "../../../assets/images/portfolio/php-crud.png";

export function PortfolioContent() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
        <div className="text-justify m-7">
            <div className="grid place-content-start">
                <div className="grid">
                    <h1 className="text-zinc-800 dark:text-zinc-100 text-3xl font-sfpbold">
                        Portfólio de Projetos
                    </h1>
                    <PillSeparator additionalTailwindClasses="my-3" />
                </div>
            </div>

            <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-6">
                <ImageMiniature 
                    imageSource={PortFolioGif}
                    url="https://github.com/barrosgusta/Vite-Portfolio" 
                    title="Portfólio em ReactJS" 
                    additionalTailwindClasses="w-full" />  

                <ImageMiniature 
                    imageSource={TrucoImage}
                    url="https://github.com/barrosgusta/delphi-truco" 
                    title="Truco em Delphi 7" 
                    additionalTailwindClasses="w-full" /> 

                <ImageMiniature 
                    imageSource={BrasileiraoManagerImage}
                    url="https://github.com/barrosgusta/pascal-brasileirao_manager" 
                    title="Brasileirão Manager" 
                    additionalTailwindClasses="w-full" /> 

                <ImageMiniature 
                    imageSource={PhpCrudImage}
                    url="https://github.com/barrosgusta/php-crud" 
                    title="Crud PHP MVC" 
                    additionalTailwindClasses="w-full" />           
            </section>

            <PillSeparator additionalTailwindClasses="m-6" />

            <section className="text-zinc-700 dark:text-zinc-200 font-sfp">
                <p>No momento possuo poucos projetos no GitHub, a maioria dos meus projetos foram feitos no meu tempo livre na antiga empresa em que trabalhava,</p>
                <p>os computadores de desenvolvimento de lá não possuem acesso a internet por politicas de segurança impossibilitando o acesso aos fontes,</p>
                <p>porém pretendo criar mais projetos de uso real e disponibilizá-los no GitHub.</p>
                <br />
                <h2 className="font-sfpbold mb-2">Alguns dos projetos que fiz lá:</h2> 
                <p>Clone do NotePad++, Semi-Simulador de Física com um objeto interativo na tela, Gerenciador de Chamados para uso interno na empresa, Jogo Pong, Conversor de Números (Hex, Octal...),</p>
                <p>Conversor de Código Morse, Interpretador BrainF*ck, todos desenvolvidos no Borland Delphi 7 e banco PostgreSQL.</p>
            </section>
        </div>
        </motion.div>       
    )
}  