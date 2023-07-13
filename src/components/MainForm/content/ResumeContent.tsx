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
        <div className="text-justify m-7">
            <div className="grid place-content-start">
                <div className="grid place-items-center">
                    <h1 className="text-zinc-700 dark:text-zinc-100 text-3xl font-sfpbold">
                        Currículo
                    </h1>
                    <PillSeparator />
                </div>
            </div>
            <section className="text-zinc-700 dark:text-zinc-300">
                <div className="flex items-center">
                    <IconFrame icon={<FontAwesomeIcon icon={faSuitcase} />} />
                    <h3 className="font-sfpmedium">Expreriência</h3>
                </div>
                <div className="absolute border-2 rounded-xl left-[59px] h-4 border-zinc-500 dark:border-zinc-200 shadow-md">
                </div>
                <ol className="ml-[2.92rem]">
                    <li className="mb-3">
                        <h4 className="font-sfpmedium">IPM Sistemas | Programador BackEnd - Delphi</h4>
                        <span className="font-sfpthinitalic">Outubro de 2022 — Julho de 2023</span>
                        <p className="">
                            Manutenção e desenvolvimento do software de migração de banco de dados utilizado na IPM Sistemas.
                        </p>
                        <p className="">
                            No dia a dia utilizava tecnologias como Delphi, MySQL, Firebird, PostgreeSQL, MongoDB, Redis, entre outras.
                        </p>
                    </li>
                </ol>
            </section>

            <section className="mt-1 text-zinc-700 dark:text-zinc-300">
                <div className="flex items-center">
                    <IconFrame icon={<FontAwesomeIcon icon={faBook} />} />
                    <h3 className="font-sfpmedium">Educação</h3>
                </div>
                <div className="absolute border-2 rounded-xl left-[59px] h-4 border-zinc-500 dark:border-zinc-200 shadow-md">
                </div>
                <ol className="ml-[2.92rem]">
                    <li className="mb-3">
                        <h4 className="font-sfpmedium">Unidavi | Sistemas de Informação</h4>
                        <span className="font-sfpthinitalic">Março de 2022 — Dezembro de 2025</span>
                        <p className="">
                            Estudante universitário de TI motivado, com uma base técnica sólida, paixão pelo aprendizado contínuo e compromisso em manter-se atualizado com as tendências emergentes do setor. 
                            Forte capacidade de trabalho em equipe e de comunicação. Buscando oportunidades de aplicar o aprendizado em sala de aula para impulsionar os avanços tecnológicos e contribuir para o sucesso organizacional.
                        </p>
                    </li>
                </ol>
            </section>

            <section className="mt-1 text-zinc-700 dark:text-zinc-300">
                <div className="flex items-center">
                    <IconFrame icon={<FontAwesomeIcon icon={faBook} />} />
                    <h3 className="font-sfpmedium">Cursos</h3>
                </div>
                <div className="absolute border-2 rounded-xl left-[59px] h-4 border-zinc-500 dark:border-zinc-200 shadow-md">
                </div>
                <ol className="ml-[2.92rem]">
                    <li className="mb-3">
                        <h4 className="font-sfpmedium">Click | Montagem e Manutenção de Computadores</h4>
                        <span className="font-sfpthinitalic">Fevereiro de 2016 — Dezembro de 2016</span>
                    </li>
                    <li className="mb-3">
                        <h4 className="font-sfpmedium">KNN Idiomas | Inglês</h4>
                        <span className="font-sfpthinitalic">Julho de 2019 — Agosto de 2021</span>
                    </li>  
                    <li className="mb-3">
                        <h4 className="font-sfpmedium">IPM Sistemas | Delphi</h4>
                        <span className="font-sfpthinitalic">Agosto de 2022 — Setembro de 2022</span>
                    </li>                    
                </ol>

            </section>
        </div>
        </motion.div>       
    )
}