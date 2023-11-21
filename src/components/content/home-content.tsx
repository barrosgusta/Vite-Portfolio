import TechBoxes from "@/components/tech-box";
import { PillSeparator } from "../pill-separator";
import { motion } from "framer-motion";

export function HomeContent() {
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
                        Introdução
                    </h1>
                    <PillSeparator className="my-3" />
                </div>
            </div>

            <section className="text-zinc-700 dark:text-zinc-300 mt-3 text-left">
                
                <h2 className="font-semibold text-2xl md:text-3xl">
                    Olá, conheça seu próximo <strong>Desenvolvedor/Programador Full Stack</strong>:
                </h2>

                <br />

                <div className="flex flex-col gap-y-3 text-xl">
                    <p>Como um amante de tecnologia desde a infância, encontrei minha paixão por programação e estou determinado a ter sucesso na carreira.</p>

                    <p>Desde pequeno, sempre tive curiosidade em saber como as coisas funcionavam. Essa curiosidade me levou a estudar tecnologia e, mais tarde, a me apaixonar por programação.</p>

                    <p>Meu primeiro contato com a programação foi quando aprendi a criar modificações para jogos que eu gostava. Foi um processo desafiador, mas muito gratificante. Percebi que não era só sobre habilidades técnicas, mas também sobre criatividade.</p>

                    <p>A cada projeto que terminava, sentia um grande prazer e orgulho. Era como aprender uma nova música no piano. A cada nova nota que aprendia, ampliava meu conhecimento e minha capacidade de criar.</p>

                    <p>Sou uma pessoa que aprende rápido tudo que me interessa. Todos com quem já trabalhei me elogiam por isso.</p>

                    <p>Atualmente, estou super dedicado a ter a expertise em tudo que o mercado atual pede. Estou confiante de que, com meu conhecimento e minha capacidade de aprendizado, serei capaz de alcançar meus objetivos profissionais.</p>
                </div>
            </section>


            <h2 className="text-zinc-700 dark:text-zinc-100 text-2xl md:text-3xl font-bold mt-7 mb-4 text-left">
                Tecnologias que eu uso ou já usei:
            </h2>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-rows-2">
                <TechBoxes.ReactJs />
                <TechBoxes.NextJs />
                <TechBoxes.NodeJs />
                <TechBoxes.Swift />
                <TechBoxes.Php />
                <TechBoxes.Python />
                <TechBoxes.Delphi />
                <TechBoxes.JavaScript />
                <TechBoxes.TypeScript />
                <TechBoxes.MongoDb />
                <TechBoxes.PostgreSql />
                <TechBoxes.Docker />
            </section>
        </div>
        </motion.div>       
    )
}
