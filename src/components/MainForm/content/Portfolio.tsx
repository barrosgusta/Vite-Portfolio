import { ProjectModal, ProjectModalContent, ProjectModalDescription, ProjectModalHeader, ProjectModalTechnologies, ProjectModalTitle } from "@/components/ProjectModal.tsx";
import { ImageMiniature } from "../../ImageMiniature/index.tsx";
import { PillSeparator } from "../../PillSeparator.tsx";
import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import { TechBoxes } from "./TechBoxes.tsx";

import ChatbotImg1 from "@/assets/images/projects/chatbot_ai/demo.gif";
import PortfolioImg1 from "@/assets/images/projects/portfolio/demo.gif";
import SpotifyImg1 from "@/assets/images/projects/spotify-clone/main.png";
import SpotifyImg2 from "@/assets/images/projects/spotify-clone/account.png";
import SpotifyImg3 from "@/assets/images/projects/spotify-clone/search.png";
import SpotifyImg4 from "@/assets/images/projects/spotify-clone/stripe.png";
import SpotifyImg5 from "@/assets/images/projects/spotify-clone/supabase.png";
import TrucoGameImg1 from "@/assets/images/projects/delphi-truco/main.png";
import BrasileiraoManagerImg1 from "@/assets/images/projects/brasileirao_manager/main.png";
import PhpCrudImg1 from "@/assets/images/projects/php-crud/form.png";
import PhpCrudImg2 from "@/assets/images/projects/php-crud/home.png";
import PhpCrudImg3 from "@/assets/images/projects/php-crud/table_view.png";

type Project = {
    id: number,
    title: string,
    description: ReactNode,
    techBoxes?: ReactNode,
    imagesSource: string[],
    projectUrl?: string,
    siteUrl?: string
}

export function ShadcnUiIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-6 w-6">
            <rect width="256" height="256" fill="none"></rect>
            <line x1="208" y1="128" x2="128" y2="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line>
            <line x1="192" y1="40" x2="40" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line>
        </svg>
    )
}
    
export function PortfolioContent() {
    const projects: Project[] = [
        {
            id: 0,
            title: "Portfólio",
            description: "Portfólio web feito em React.js utilizando Vite, TailwindCSS, Framer Motion e React Router. Neste projeto foi aplicando conceitos de boas práticas de UI/UX e reutilização de componentes.",
            techBoxes: (
                <>
                    <TechBoxes.Docker />
                    <TechBoxes.ReactJs />
                    <TechBoxes.TypeScript />
                    <TechBoxes.ShadcnUi />
                    <TechBoxes.TailwindCss />
                </>
            ),
            imagesSource: [PortfolioImg1],
            projectUrl: "https://github.com/barrosgusta/ioslike_portfolio",
            siteUrl: "https://barrosgusta.netlify.app/home"
        },
        {
            id: 1,
            title: "ChatBot AI",
            description: "ChatBot feito em Next.js utilizando TailwindCSS e Shadcn/UI. Neste projeto foi utilizado a API da OpenAI e usado-a como base para o desenvolvimento do ChatBot.",
            techBoxes: (
                <>
                    <TechBoxes.ReactJs />
                    <TechBoxes.NextJs />
                    <TechBoxes.TypeScript />
                    <TechBoxes.ShadcnUi />
                    <TechBoxes.TailwindCss />
                    <TechBoxes.OpenAi />
                </>
            ),
            imagesSource: [ChatbotImg1],
            projectUrl: "https://github.com/barrosgusta/chatbot_ai"
        },
        {
            id: 2,
            title: "Spotify Clone",
            description: (
                <>
                    Clone do Spotify feito em Next.js utilizando TailwindCSS, Supabase, Stripe, Radix e PostgreSQL. 
                    Também foi utilizado uma biblioteca de audio (Tone.js) para o uso dos efeitos de reverberação e alteração de pitch conforme a velocidade que o audio toca. Caso queira testar, informe o login e senha: <strong>test@test.com</strong> / <strong>test</strong>
                </>
                ),
            techBoxes: (
                <>
                    <TechBoxes.ReactJs />
                    <TechBoxes.NextJs />
                    <TechBoxes.TypeScript />
                    <TechBoxes.TailwindCss />
                    <TechBoxes.Supabase />
                    <TechBoxes.Stripe />
                    <TechBoxes.RadixUi />
                    <TechBoxes.PostgreSql />
                </>
            ),
            imagesSource: [SpotifyImg1, SpotifyImg2, SpotifyImg3, SpotifyImg4, SpotifyImg5],
            projectUrl: "https://github.com/barrosgusta/spotify-clone",
            siteUrl: "https://spotify-clone-beta-ecru.vercel.app"
        },
        {
            id: 3,
            title: "Truco",
            description: "Jogo de Truco feito em Delphi 7.",
            techBoxes: (
                <TechBoxes.Delphi />
            ),
            imagesSource: [TrucoGameImg1],
            projectUrl: "https://github.com/barrosgusta/delphi-truco"
        },
        {
            id: 4,
            title: "Brasileirão Manager",
            description: "Gerenciador de campeonatos com foco no Brasileirão feito em Pascal utilizando o Pascalzim. Neste projeto foi aplicando conceitos de estrutura de dados como pilha, fila e lista, assim como a utilização de ponteiros.",
            imagesSource: [BrasileiraoManagerImg1],
            projectUrl: "https://github.com/barrosgusta/brasileirao_manager"
        },
        {
            id: 5,
            title: "Crud PHP",
            description: "Crud feito em PHP utilizando banco de dados MySQL. Neste projeto foi aplicando a arquitetura MVC (Model, View, Controller).",
            techBoxes: (
                <>
                    <TechBoxes.Php />
                    <TechBoxes.MySql />
                </>
            ),
            imagesSource: [PhpCrudImg1, PhpCrudImg2, PhpCrudImg3],
            projectUrl: "https://github.com/barrosgusta/php-crud"
        }
    ];


    const [isOpen, setIsOpen] = useState(false);
    const [project, setProject] = useState<Project>(projects[0]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
        <ProjectModal 
            imagesSource={project.imagesSource} 
            isOpen={isOpen} 
            onClose={() => setIsOpen(false)}
            projectUrl={project.projectUrl}
            siteUrl={project.siteUrl}
        >
            <ProjectModalContent>
                <ProjectModalHeader>
                    <ProjectModalTitle>{project.title}</ProjectModalTitle>
                    <ProjectModalDescription>{project.description}</ProjectModalDescription>
                </ProjectModalHeader>
                {project.techBoxes && (
                    <ProjectModalTechnologies>
                        {project.techBoxes}
                    </ProjectModalTechnologies>
                    )
                }
            </ProjectModalContent>
        </ProjectModal>

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

            {projects.map((project) => (
                <ImageMiniature.Root
                    key={project.id}
                    imageSource={project.imagesSource[0]}
                    title={project.title}
                    className="w-full"
                    onClick={() => {
                        setProject(project)
                        setIsOpen(true)
                    }}
                >
                </ImageMiniature.Root>
            ))}
            
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