import { ImageMiniature } from "../../ImageMiniature/index.tsx";
import { PillSeparator } from "../../PillSeparator";
import { motion } from "framer-motion";


const PORTFOLIO_IMG = "https://github.com/barrosgusta/ioslike_portfolio/blob/main/screenshots/demo.gif?raw=true";
const CHATBOT_IMG = "https://github.com/barrosgusta/chatbot_ai/blob/main/screenshots/demo.gif?raw=true";
const SPOTIFY_IMG = "https://github.com/barrosgusta/spotify-clone/blob/main/screenshots/demo.png?raw=true";
const TRUCOGAME_IMG = "https://github.com/barrosgusta/delphi-truco/blob/main/screenshots/main.png?raw=true";
const BRASILEIRAOMANAGER_IMG = "https://github.com/barrosgusta/brasileirao_manager/blob/main/screenshots/main.png?raw=true";
const PHPCRUD_IMG = "https://github.com/barrosgusta/php-crud/blob/main/screenshots/form.png?raw=true";

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
                    <h1 className="text-zinc-800 dark:text-zinc-100 text-3xl font-bold">
                        Portfólio de Projetos
                    </h1>
                    <PillSeparator className="my-3" />
                </div>
            </div>

            <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-6">

            <ImageMiniature.Root 
                imageSource={PORTFOLIO_IMG}
                projectUrl="https://github.com/barrosgusta/ioslike_portfilio"
                siteUrl="https://barrosgusta.netlify.app/"
                title="Portfólio"
                className="w-full"
            >
                <ImageMiniature.Description 
                    className="group-hover:h-[105px]" 
                >
                    <p className='text-xs sm:text-sm text-center mx-5'>
                        Portfólio web feito em ReactJS utilizando Vite, TailwindCSS, Framer Motion e React Router. Neste projeto foi aplicando conceitos de boas práticas de UI/UX e reutilização de componentes.
                    </p>
                </ImageMiniature.Description>
            </ImageMiniature.Root>

            <ImageMiniature.Root
                imageSource={CHATBOT_IMG}
                projectUrl="https://github.com/barrosgusta/chatbot_ai"
                title="ChatBot AI"
                className="w-full"
            >
                <ImageMiniature.Description
                    className="group-hover:h-[85px]"
                >
                    <p className='text-xs sm:text-sm text-center mx-5'>
                        ChatBot feito em NextJS utilizando TailwindCSS e Shadcn/UI. Neste projeto foi utilizado a API da OpenAI e usado-a como base para o desenvolvimento do ChatBot.
                    </p>        
                </ImageMiniature.Description>
            </ImageMiniature.Root>

            <ImageMiniature.Root
                imageSource={SPOTIFY_IMG}
                projectUrl="https://github.com/barrosgusta/spotify-clone"
                title="Spotify Clone"
                className="w-full"
            >
                <ImageMiniature.Description
                    className="group-hover:h-16"
                >
                    <p className='text-xs sm:text-sm text-center mx-5'>
                        Clone do Spotify feito em NextJS utilizando TailwindCSS, Supabase, Stripe, Radix e PostgreSQL.
                    </p>
                </ImageMiniature.Description>
            </ImageMiniature.Root>

            <ImageMiniature.Root
                imageSource={TRUCOGAME_IMG}
                projectUrl="https://github.com/barrosgusta/delphi-truco"
                title="Truco"
                className="w-full"
            >
                <ImageMiniature.Description
                    className="group-hover:h-12"
                >
                    <p className='text-xs sm:text-sm text-center mx-5'>
                        Jogo de Truco feito em Delphi 7.
                    </p>  
                </ImageMiniature.Description>
            </ImageMiniature.Root>

            <ImageMiniature.Root
                imageSource={BRASILEIRAOMANAGER_IMG}
                projectUrl="https://github.com/barrosgusta/brasileirao_manager"
                title="Brasileirão Manager"
                className="w-full"
            >
                <ImageMiniature.Description
                    className="group-hover:h-[105px]"
                >
                    <p className='text-xs sm:text-sm text-center mx-5'>
                        Gerenciador de campeonatos com foco no Brasileirão feito em Pascal utilizando o Pascalzim. Neste projeto foi aplicando conceitos de estrutura de dados como pilha, fila e lista, assim como a utilização de ponteiros.
                    </p>
                </ImageMiniature.Description>
            </ImageMiniature.Root>

            <ImageMiniature.Root
                imageSource={PHPCRUD_IMG}
                projectUrl="https://github.com/barrosgusta/php-crud"
                title="Crud PHP"
                className="w-full"
            >
                <ImageMiniature.Description
                    className="group-hover:h-[83px]"
                >
                    <p className='text-xs sm:text-sm text-center mx-5'>
                        Crud feito em PHP utilizando banco de dados MySQL. Neste projeto foi aplicando a arquitetura MVC (Model, View, Controller).
                    </p>
                </ImageMiniature.Description>
            </ImageMiniature.Root>

            </section>

            <PillSeparator className="m-6 w-auto" />

            <section className="text-zinc-700 dark:text-zinc-200 text-left">
                <h2 className="font-bold text-lg mb-2">Outros projetos que já fiz porém não estão no GitHub:</h2> 
                <p>Clone do NotePad++, Semi-Simulador de Física com um objeto interativo na tela, Gerenciador de Chamados para uso interno na empresa em que trabalhava, Jogo Pong, Conversor de Números (Hex, Octal...), Conversor de Código Morse, Interpretador BrainF*ck, todos desenvolvidos no Borland Delphi 7 e banco PostgreSQL.</p>
            </section>
        </div>
        </motion.div>       
    )
}  