import { faBook, faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PillSeparator } from "../../PillSeparator";
import { IconFrame } from "../../IconFrame/IconFrame";
import { motion } from "framer-motion";

export function ResumeContent() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
        <div className="text-left m-7">

            <div className="grid place-content-start">
                <div className="grid">
                    <h1 className="text-zinc-700 dark:text-zinc-100 text-3xl font-bold">
                        Currículo
                    </h1>
                    <PillSeparator className="my-3" />
                </div>
            </div>

            <section className="text-zinc-700 dark:text-zinc-300 relative">
                <div className="flex items-center">
                    <IconFrame icon={<FontAwesomeIcon icon={faSuitcase} />} />
                    <h3 className="font-semibold">Expreriência</h3>
                </div>

                <div className="absolute border-2 rounded-xl left-[1.90em] h-[calc(100%-60px)] border-zinc-500 dark:border-zinc-200 shadow-md">
                </div>

                <ul className="ml-[2.92rem]">
                    <li className="mb-3">
                        <h4 className="font-semibold">IPM Sistemas | Desenvolvedor Delphi</h4>
                        <span className="opacity-70 text-xs uppercase">
                            Outubro de 2022 — Julho de 2023
                        </span>

                        <div className="flex flex-col mt-2 gap-y-1">
                            <p>
                                Meu objetivo era a manutenção e o desenvolvimento do software de migração de banco de dados utilizado na IPM Sistemas.
                            </p>
                            <p>
                                Neste projeto eu contribui com diversas melhorias de desempenho e usabilidade além de implementar novas funcionalidades para facilitar as migrações.
                            </p>
                        </div>

                    </li>

                    <li className="mb-3">
                        <h4 className="font-semibold">Freelancer | Autônomo</h4>
                        <span className="opacity-70 text-xs uppercase">
                            Setembro de 2023 — Até o momento
                        </span>

                        <div className="flex flex-col mt-2 gap-y-1">
                            <p>
                                Enfrentei momentos difíceis durante um período de 'lay-off', no qual até perdi minha moradia. Isso me impulsionou a buscar novas oportunidades profissionais.
                            </p>
                            <p>
                                Atualmente, estou dedicando meu tempo a projetos pessoais privados, com o objetivo de gerar renda e adquirir experiência, enquanto busco uma posição em regime CLT ou como PJ.
                            </p>
                        </div>

                    </li>
                </ul>
            </section>

            <section className="mt-1 text-zinc-700 dark:text-zinc-300 relative">
                <div className="flex items-center">
                    <IconFrame icon={<FontAwesomeIcon icon={faBook} />} />
                    <h3 className="font-semibold">Educação</h3>
                </div>

                <div className="absolute border-2 rounded-xl left-[1.90em] h-[calc(100%-60px)] border-zinc-500 dark:border-zinc-200 shadow-md">
                </div>

                <ul className="ml-[2.92rem]">
                    <li className="mb-3">
                        <h4 className="font-semibold">Unidavi | Sistemas de Informação</h4>

                        <span className="opacity-70 text-xs uppercase">
                            Março de 2022 - Dezembro de 2025
                        </span>
                        
                        <div className="flex flex-col mt-2 gap-y-1">
                            <p>
                                Estudante universitário de TI motivado, com uma base técnica sólida, paixão pelo aprendizado contínuo e compromisso em manter-se atualizado com as tendências emergentes do setor.
                            </p>
                            <p> 
                                Forte capacidade de trabalho em equipe e de comunicação. Buscando oportunidades de aplicar o aprendizado em sala de aula para impulsionar os avanços tecnológicos e contribuir para o sucesso organizacional.
                            </p>
                        </div>
                      
                    </li>
                </ul>
            </section>

            <section className="mt-1 text-zinc-700 dark:text-zinc-300 relative">
                <div className="flex items-center">
                    <IconFrame icon={<FontAwesomeIcon icon={faBook} />} />
                    <h3 className="font-semibold">Cursos</h3>
                </div>

                <div className="absolute border-2 rounded-xl left-[1.90em] h-[calc(100%-60px)] border-zinc-500 dark:border-zinc-200 shadow-md">
                </div>
                
                <ul className="ml-[2.92rem]">
                    <li className="mb-3">
                        <h4 className="font-semibold">Click | Montagem e Manutenção de Computadores</h4>
                        <span className="opacity-70 text-xs uppercase">Fevereiro de 2016 — Dezembro de 2016</span>
                    </li>
                    <li className="mb-3">
                        <h4 className="font-semibold">KNN Idiomas | Inglês</h4>
                        <span className="opacity-70 text-xs uppercase">Julho de 2019 — Agosto de 2021</span>
                    </li>  
                    <li className="mb-3">
                        <h4 className="font-semibold">IPM Sistemas | Delphi</h4>
                        <span className="opacity-70 text-xs uppercase">Agosto de 2022 — Setembro de 2022</span>
                    </li>                    
                </ul>

            </section>

        </div>
        </motion.div>       
    )
}