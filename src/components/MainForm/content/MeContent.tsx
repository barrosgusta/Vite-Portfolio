import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PillSeparator } from "../../PillSeparator";
import { TextBox } from "../../TextBox";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { BiLogoDocker, BiLogoMongodb, BiLogoNodejs, BiLogoPhp, BiLogoPostgresql, BiLogoPython, BiLogoTailwindCss } from 'react-icons/bi';
import { motion } from "framer-motion";

export function MeContent() {
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
                        Eu
                    </h1>
                    <PillSeparator additionalTailwindClasses="my-3" />
                </div>
            </div>

            <section className="mt-3">
                <h2 className="text-zinc-700 dark:text-zinc-300 font-sfpmedium text-xl">
                    Olá, Conheca seu próximo programador.
                </h2>
                <br />
                <p className="text-zinc-700 dark:text-zinc-300">
                    Começei a programar na faculdade em 2022, mas já era apaixonado por tecnologia desde criança, minha jornada no mundo da programação tem sido uma experiência gratificante e estimulante. Enquanto crescia, sempre fui fascinado pelas maravilhas da tecnologia, de computadores a smartphones, e sabia, lá no fundo, que queria fazer parte da magia por trás dessas inovações.
                </p>
                <br />
                <p className="text-zinc-700 dark:text-zinc-300">
                    Quando finalmente tive a oportunidade de estudar programação na faculdade, foi um sonho que se tornou realidade. Fiquei empolgado e ansioso quando entrei no mundo da programação, armado com minha paixão por tecnologia e sede de conhecimento. Parecia a combinação perfeita entre meu amor de infância por aparelhos e meu desejo recém-descoberto de criar e construir.
                </p>
                <br />  
                <p className="text-zinc-700 dark:text-zinc-300">
                    Embora eu fosse um iniciante no campo da programação, abordei o assunto com determinação e curiosidade. Cada linha de código que eu escrevia e cada problema que eu resolvia parecia uma pequena vitória. Logo percebi que a programação não era apenas uma habilidade técnica, mas também uma saída criativa, que me permitia dar vida às minhas ideias em um ambiente digital.
                </p>
                <br />
                <p className="text-zinc-700 dark:text-zinc-300">
                    A cada projeto e tarefa, eu me via constantemente aprendendo e ultrapassando meus limites. Descobri o poder dos algoritmos e das estruturas de dados, a elegância da programação orientada a objetos e as infinitas possibilidades do desenvolvimento de aplicativos e da Web. Foi como desvendar um quebra-cabeça complexo e encontrar alegria no processo de juntar todas as peças.
                </p>
                <br />
                <p className="text-zinc-700 dark:text-zinc-300">
                    Mas o que realmente tornou minha jornada especial foi a comunidade solidária e colaborativa de colegas programadores que encontrei ao longo do caminho. Conectei-me com pessoas que compartilhavam a mesma paixão pela tecnologia e estavam sempre dispostas a me ajudar. Juntos, enfrentamos desafios de codificação, fizemos brainstorming de soluções inovadoras e comemoramos os sucessos uns dos outros.
                </p>
                <br />
                <p className="text-zinc-700 dark:text-zinc-300">
                    Ao refletir sobre minha jornada, sinto-me muito grato pelas oportunidades que a programação me proporcionou. Ela me permitiu transformar meu fascínio de infância em um conjunto de habilidades concretas e em uma possível carreira. Mas, além disso, despertou em mim o desejo de aprender, crescer e contribuir continuamente para o mundo da tecnologia, que está em constante evolução.
                </p>
                <br />
                <p className="text-zinc-700 dark:text-zinc-300">
                    Estou animado com o futuro, onde poderei aproveitar minhas habilidades de programação para causar um impacto positivo, seja desenvolvendo aplicativos que simplificam a vida das pessoas, criando soluções inovadoras para problemas do mundo real ou contribuindo para os avanços de ponta que moldam nosso cenário digital.
                </p>
                <br />
                <p className="text-zinc-700 dark:text-zinc-300">
                    Começar minha jornada de programação na faculdade em 2022 pode ter sido um início tardio em comparação com alguns, mas minha paixão por tecnologia sempre foi uma força motriz. A cada linha de código que escrevo, lembro-me do potencial ilimitado e das infinitas possibilidades que estão por vir neste mundo empolgante e em constante expansão da programação.
                </p>
            </section>


            <h2 className="text-zinc-700 dark:text-zinc-100 text-2xl font-bold mt-7 mb-4">
                Técnologias que eu uso ou já usei:
            </h2>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-rows-2">
                    <TextBox.Root additionalTailwindClasses="bg-sky-500 border-zinc-600 m-2">
                            <TextBox.Icon icon={<FontAwesomeIcon icon={faReact} />} />
                            <TextBox.Content
                                title="ReactJS"
                                textAdditionalTailwindClasses="text-white"
                                text="Biblioteca do JavaScript"
                                titleAdditionalTailwindClasses="text-white" />
                    </TextBox.Root>
                    <TextBox.Root additionalTailwindClasses="bg-cyan-500 border-zinc-600 m-2">
                            <TextBox.Icon icon={<BiLogoTailwindCss />} />
                            <TextBox.Content
                                title="TailwindCSS"
                                textAdditionalTailwindClasses="text-white"
                                text="Biblioteca de classes CSS"
                                titleAdditionalTailwindClasses="text-white" />
                    </TextBox.Root>
                    <TextBox.Root additionalTailwindClasses="bg-green-500 border-zinc-600 m-2">
                            <TextBox.Icon icon={<BiLogoNodejs />} />
                            <TextBox.Content
                                title="NodeJS"
                                textAdditionalTailwindClasses="text-white"
                                text="BackEnd JavaScript"
                                titleAdditionalTailwindClasses="text-white" />
                    </TextBox.Root>
                    <TextBox.Root additionalTailwindClasses="bg-gradient-to-tl from-blue-600 to-yellow-600 border-zinc-600 m-2">
                            <TextBox.Icon icon={<BiLogoPython />} />
                            <TextBox.Content
                                title="Python"
                                textAdditionalTailwindClasses="text-white"
                                text="Linguagem alto nível"
                                titleAdditionalTailwindClasses="text-white" />
                    </TextBox.Root>
                     <TextBox.Root additionalTailwindClasses="bg-blue-500 border-zinc-600 m-2">
                            <TextBox.Icon icon={<BiLogoPhp />} />
                            <TextBox.Content
                                title="PHP"
                                textAdditionalTailwindClasses="text-white"
                                text="Linguagem BackEnd"
                                titleAdditionalTailwindClasses="text-white" />
                    </TextBox.Root>
                    <TextBox.Root additionalTailwindClasses="bg-green-600 border-zinc-600 m-2">
                            <TextBox.Icon icon={<BiLogoMongodb />} />
                            <TextBox.Content
                                title="MongoDB"
                                textAdditionalTailwindClasses="text-white"
                                text="Banco de dados não relacional"
                                titleAdditionalTailwindClasses="text-white" />
                    </TextBox.Root>
                    <TextBox.Root additionalTailwindClasses="bg-blue-600 border-zinc-600 m-2">
                            <TextBox.Icon icon={<BiLogoPostgresql />} />
                            <TextBox.Content
                                title="PostfresSQL"
                                textAdditionalTailwindClasses="text-white"
                                text="Banco de dados relacional"
                                titleAdditionalTailwindClasses="text-white" />
                    </TextBox.Root>
                    <TextBox.Root additionalTailwindClasses="bg-sky-600 border-zinc-600 m-2">
                            <TextBox.Icon icon={<BiLogoDocker />} />
                            <TextBox.Content
                                title="Docker"
                                textAdditionalTailwindClasses="text-white"
                                text="Plataforma de virtualização"
                                titleAdditionalTailwindClasses="text-white" />
                    </TextBox.Root>
            </section>
        </div>
        </motion.div>       
    )
}