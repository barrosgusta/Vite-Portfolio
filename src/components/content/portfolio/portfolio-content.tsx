import { ProjectModal, ProjectModalContent, ProjectModalDescription, ProjectModalHeader, ProjectModalTechnologies, ProjectModalTitle } from "@/components/project-modal.tsx";
import { ImageMiniature } from "../../image-miniature/index.tsx";
import { PillSeparator } from "../../pill-separator.tsx";
import { motion } from "framer-motion";
import { useState } from "react";
import { Project, projects } from "./projects.tsx";
    
export function PortfolioContent() {
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
                <h2 className="font-bold text-lg mb-2">Outros projetos que já fiz porém não estão no GitHub:</h2> 
                <p>Clone do NotePad++, Semi-Simulador de Física com um objeto interativo na tela, Gerenciador de Chamados para uso interno na empresa em que trabalhava, Jogo Pong, Conversor de Números (Hex, Octal...), Conversor de Código Morse, Interpretador BrainF*ck, todos desenvolvidos no Borland Delphi 7 e banco PostgreSQL.</p>
            </section>
        </div>
        </motion.div>       
    )
}  