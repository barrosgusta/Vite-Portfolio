import { ProjectModal, ProjectModalContent, ProjectModalDescription, ProjectModalHeader, ProjectModalTechnologies, ProjectModalTitle } from "@/components/project-modal.tsx";
import { ImageMiniature } from "../../image-miniature/index.tsx";
import { PillSeparator } from "../../pill-separator.tsx";
import { motion } from "framer-motion";
import { useState } from "react";
import { ProjetoClassificadoImages, ChatbotAIImages, SpotifyCloneImages, YourEcommerceAdminImages, YourEcommerceStoreImages, TrucoGameImages, BrasileiraoManagerImages, JornadaDoHeroiImages } from "@/components/content/portfolio/images";
import TechBoxes from "@/components/tech-box";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

export type Project = {
    title: string,
    description: ReactNode,
    techBoxes?: ReactNode,
    imagesSource: string[],
    projectUrl?: string,
    siteUrl?: string
};
    
export function PortfolioContent() {
    const { t } = useTranslation(); 
    const projects: Project[] = [
        {
            title: t("projectPage.project.projetoClassificado.title"),
            description: t("projectPage.project.projetoClassificado.description"),
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
            title: t("projectPage.project.jornadaDoHeroi.title"),
            description: t("projectPage.project.jornadaDoHeroi.description"),
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
            title: t("projectPage.project.chatbotAi.title"),
            description: t("projectPage.project.chatbotAi.description"),
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
            title: t("projectPage.project.spotifyClone.title"),
            description: t("projectPage.project.spotifyClone.description"),
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
            title: t("projectPage.project.ecommerceAdmin.title"),
            description: t("projectPage.project.ecommerceAdmin.description"),
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
            title: t("projectPage.project.ecommerceStore.title"),
            description: t("projectPage.project.ecommerceStore.description"),
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
        {
            title: t("projectPage.project.truco.title"),
            description: t("projectPage.project.truco.description"),
            techBoxes: (
                <TechBoxes.Delphi />
            ),
            imagesSource: TrucoGameImages,
            projectUrl: "https://github.com/barrosgusta/delphi-truco"
        },
        {
            title: t("projectPage.project.brasileiraoManager.title"),
            description: t("projectPage.project.brasileiraoManager.description"),
            imagesSource: BrasileiraoManagerImages,
            projectUrl: "https://github.com/barrosgusta/brasileirao_manager"
        },
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

        <div className="text-justify">
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
                    key={project.title}
                    imageSource={project.imagesSource[0]}
                    title={project.title}
                    className="w-full hover:shadow-2xl active:scale-95 active:shadow-sm"
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
                <h2 className="font-bold text-lg mb-2">
                    {t("projectPage.subtitle")}
                </h2> 
                <p>
                    {t("projectPage.content")}
                </p>
            </section>
        </div>
        </motion.div>       
    )
}  