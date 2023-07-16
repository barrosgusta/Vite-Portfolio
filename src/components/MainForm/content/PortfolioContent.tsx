import { ImageMiniature } from "../../ImageMiniature";
import { PillSeparator } from "../../PillSeparator";
import { motion } from "framer-motion";


const PORTFOLIO_IMG = "https://github.com/barrosgusta/ioslike-portfolio/blob/main/screenshots/demo.gif";
const CHATBOT_IMG = "https://github.com/barrosgusta/chatbot-ai/blob/main/screenshots/demo.gif";
const TRUCOGAME_IMG = "https://github.com/barrosgusta/delphi-truco/blob/main/screenshots/demo.gif";
const BRASILEIRAOMANAGER_IMG = "https://github.com/barrosgusta/brasileirao_manager/blob/main/screenshots/demo.gif";
const PHPCRUD_IMG = "https://github.com/barrosgusta/php-crud/blob/main/screenshots/form.png";

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
                    imageSource={PORTFOLIO_IMG}
                    url="https://github.com/barrosgusta/ioslike-portfilio" 
                    title="Portfólio com Vite" 
                    additionalTailwindClasses="w-full" />  

                <ImageMiniature 
                    imageSource={CHATBOT_IMG}
                    url="https://github.com/barrosgusta/chatbot-ai" 
                    title="ChatBot AI funcional com NextJS" 
                    additionalTailwindClasses="w-full" />  

                <ImageMiniature 
                    imageSource={TRUCOGAME_IMG}
                    url="https://github.com/barrosgusta/delphi-truco" 
                    title="Truco em Delphi 7" 
                    additionalTailwindClasses="w-full" /> 

                <ImageMiniature 
                    imageSource={BRASILEIRAOMANAGER_IMG}
                    url="https://github.com/barrosgusta/pascal-brasileirao_manager" 
                    title="Brasileirão Manager" 
                    additionalTailwindClasses="w-full" /> 

                <ImageMiniature 
                    imageSource={PHPCRUD_IMG}
                    url="https://github.com/barrosgusta/php-crud" 
                    title="Crud em PHP e frame MVC" 
                    additionalTailwindClasses="w-full" />           
            </section>

            <PillSeparator additionalTailwindClasses="m-6" />

            <section className="text-zinc-700 dark:text-zinc-200 font-sfp">
                <h2 className="font-sfpbold mb-2">Outros projetos que já fiz porém não estão no GitHub:</h2> 
                <p>Clone do NotePad++, Semi-Simulador de Física com um objeto interativo na tela, Gerenciador de Chamados para uso interno na empresa em que trabalhava, Jogo Pong, Conversor de Números (Hex, Octal...), Conversor de Código Morse, Interpretador BrainF*ck, todos desenvolvidos no Borland Delphi 7 e banco PostgreSQL.</p>
            </section>
        </div>
        </motion.div>       
    )
}  