import { ProjetoClassificadoImages, ChatbotAIImages, SpotifyCloneImages, YourEcommerceAdminImages, YourEcommerceStoreImages, UnidaviImages, TrucoGameImages, BrasileiraoManagerImages, JornadaDoHeroiImages } from "@/components/content/portfolio/images";
import TechBoxes from "@/components/tech-box";
import { ReactNode } from "react";

export type Project = {
    title: string,
    description: ReactNode,
    techBoxes?: ReactNode,
    imagesSource: string[],
    projectUrl?: string,
    siteUrl?: string
};

export const projects: Project[] = [
    {
        title: "Projeto Classificado",
        description: "Projeto fullstack de um site responsivo de venda de carros com enfase em carros modificados ou carros projeto. Foi criado toda a modelagem do banco  \
            com o Prisma ORM, rotas API pelo Next.js API Routes, autenticação com Clerk, integração com o Stripe para pagamentos, integração com o Cloudinary para armazenamento das imagens, \
            cadastro com descrição em Markdown, e muito mais. Foi utilizado também API's externas para integração com a tabela FIPE.",
        techBoxes: (
            <>
                <TechBoxes.NextJs />
                <TechBoxes.ReactJs />
                <TechBoxes.Prisma />
                <TechBoxes.TypeScript />
                <TechBoxes.ShadcnUi />
                <TechBoxes.TailwindCss />
                <TechBoxes.Stripe />
                <TechBoxes.MySql />
            </>
        ),
        imagesSource: ProjetoClassificadoImages,
        siteUrl: "https://projetoclassificado.vercel.app"
    },
    {
        title: "Jornada do Herói",
        description: "Desafio criado pela equipe de desenvolvimento da Azapfy. Desenvolvido em Next.js, TailwindCSS e Shadcn/UI. Neste projeto foi utilizado a API disponibilizada para a listagem dos personagens.",
        techBoxes: (
            <>
                <TechBoxes.NextJs />
                <TechBoxes.ReactJs />
                <TechBoxes.TypeScript />
                <TechBoxes.ShadcnUi />
                <TechBoxes.TailwindCss />
            </>
        ),
        imagesSource: JornadaDoHeroiImages,
        siteUrl: "https://jornada-do-heroi-azapfy.vercel.app",
        projectUrl: "https://github.com/barrosgusta/jornada_do_heroi-azapfy"
    },
    {
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
        imagesSource: ChatbotAIImages,
        projectUrl: "https://github.com/barrosgusta/chatbot_ai"
    },
    {
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
        imagesSource: SpotifyCloneImages,
        projectUrl: "https://github.com/barrosgusta/spotify-clone",
        siteUrl: "https://spotify-clone-beta-ecru.vercel.app"
    },
    {
        title: "E-Commerce Admin",
        description: (
            <>
                Aplicação web de gerenciamento de lojas e-commerce com rotas API restful para integração com as lojas.
            </>
            ),
        techBoxes: (
            <>
                <TechBoxes.Stripe />
                <TechBoxes.ReactJs />
                <TechBoxes.NextJs />
                <TechBoxes.TypeScript />
                <TechBoxes.TailwindCss />
                <TechBoxes.ShadcnUi />
            </>
        ),
        imagesSource: YourEcommerceAdminImages,
        projectUrl: "https://github.com/barrosgusta/your-ecommerce-admin",
    },
    {
        title: "E-Commerce Store",
        description: (
            <>
                Aplicação web de e-commerce aonde foi utilizado as rotas API do <strong>E-Commerce Admin</strong>. 
            </>
            ),
        techBoxes: (
            <>
                <TechBoxes.ReactJs />
                <TechBoxes.NextJs />
                <TechBoxes.TypeScript />
                <TechBoxes.TailwindCss />
                <TechBoxes.ShadcnUi />
            </>
        ),
        imagesSource: YourEcommerceStoreImages,
        projectUrl: "https://github.com/barrosgusta/your-ecommerce-store",
    },
    // {
    //     title: "Unidavi",
    //     description: (
    //         <>
    //             Respositório com os projetos desenvolvidos durante o curso de Sistemas de Informação na Unidavi.
    //         </>
    //         ),
    //     techBoxes: (
    //         <>
    //             <TechBoxes.TailwindCss />
    //         </>
    //     ),
    //     imagesSource: UnidaviImages,
    //     // projectUrl: "https://github.com/barrosgusta/your-ecommerce-store",
    // },
    {
        title: "Truco",
        description: "Jogo de Truco feito em Delphi 7.",
        techBoxes: (
            <TechBoxes.Delphi />
        ),
        imagesSource: TrucoGameImages,
        projectUrl: "https://github.com/barrosgusta/delphi-truco"
    },
    {
        title: "Brasileirão Manager",
        description: "Gerenciador de campeonatos com foco no Brasileirão feito em Pascal utilizando o Pascalzim. Neste projeto foi aplicando conceitos de estrutura de dados como pilha, fila e lista, assim como a utilização de ponteiros.",
        imagesSource: BrasileiraoManagerImages,
        projectUrl: "https://github.com/barrosgusta/brasileirao_manager"
    },
];