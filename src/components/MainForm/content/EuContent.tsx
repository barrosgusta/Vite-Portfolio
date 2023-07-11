import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PillSeparator } from "../../PillSeparator";
import { TextBox } from "../../TextBox";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { BiLogoDocker, BiLogoMongodb, BiLogoNodejs, BiLogoPhp, BiLogoPostgresql, BiLogoPython, BiLogoTailwindCss } from 'react-icons/bi';

export function EuContent() {
    return (
        <>
        <div className="text-justify m-7">
            <div className="grid place-content-start">
                <div className="grid">
                    <h1 className="text-zinc-700 dark:text-zinc-100 text-3xl font-bold drop-shadow-sm">
                        Eu
                    </h1>
                    <PillSeparator additionaTailwindClasses="my-3" />
                </div>
            </div>

            <div className="mt-3">
                <p className="text-zinc-600 dark:text-zinc-300 drop-shadow-sm">
                    Olá, fico feliz que você esteja aqui!
                </p>
                <br />
                <p className="text-zinc-600 dark:text-zinc-300 drop-shadow-sm">
                    Como uma pessoa que começou a programar na faculdade em 2021, mas que era apaixonada por tecnologia desde criança, minha jornada no mundo da programação tem sido uma experiência gratificante e estimulante. Enquanto crescia, sempre fui fascinado pelas maravilhas da tecnologia, de computadores a smartphones, e sabia, lá no fundo, que queria fazer parte da magia por trás dessas inovações.
                </p>
                <br />
                <p className="text-zinc-600 dark:text-zinc-300 drop-shadow-sm">
                    Quando finalmente tive a oportunidade de estudar programação na faculdade, foi um sonho que se tornou realidade. Fiquei empolgado e ansioso quando entrei no mundo da programação, armado com minha paixão por tecnologia e sede de conhecimento. Parecia a combinação perfeita entre meu amor de infância por aparelhos e meu desejo recém-descoberto de criar e construir.
                </p>
                <br />  
                <p className="text-zinc-600 dark:text-zinc-300 drop-shadow-sm">
                    Embora eu fosse um iniciante no campo da programação, abordei o assunto com determinação e curiosidade. Cada linha de código que eu escrevia e cada problema que eu resolvia parecia uma pequena vitória. Logo percebi que a programação não era apenas uma habilidade técnica, mas também uma saída criativa, que me permitia dar vida às minhas ideias em um ambiente digital.
                </p>
                <br />
                <p className="text-zinc-600 dark:text-zinc-300 drop-shadow-sm">
                    A cada projeto e tarefa, eu me via constantemente aprendendo e ultrapassando meus limites. Descobri o poder dos algoritmos e das estruturas de dados, a elegância da programação orientada a objetos e as infinitas possibilidades do desenvolvimento de aplicativos e da Web. Foi como desvendar um quebra-cabeça complexo e encontrar alegria no processo de juntar todas as peças.
                </p>
                <br />
                <p className="text-zinc-600 dark:text-zinc-300 drop-shadow-sm">
                    Mas o que realmente tornou minha jornada especial foi a comunidade solidária e colaborativa de colegas programadores que encontrei ao longo do caminho. Conectei-me com pessoas que compartilhavam a mesma paixão pela tecnologia e estavam sempre dispostas a me ajudar. Juntos, enfrentamos desafios de codificação, fizemos brainstorming de soluções inovadoras e comemoramos os sucessos uns dos outros.
                </p>
                <br />
                <p className="text-zinc-600 dark:text-zinc-300 drop-shadow-sm">
                    Ao refletir sobre minha jornada, sinto-me muito grato pelas oportunidades que a programação me proporcionou. Ela me permitiu transformar meu fascínio de infância em um conjunto de habilidades concretas e em uma possível carreira. Mas, além disso, despertou em mim o desejo de aprender, crescer e contribuir continuamente para o mundo da tecnologia, que está em constante evolução.
                </p>
                <br />
                <p className="text-zinc-600 dark:text-zinc-300 drop-shadow-sm">
                    Estou animado com o futuro, onde poderei aproveitar minhas habilidades de programação para causar um impacto positivo, seja desenvolvendo aplicativos que simplificam a vida das pessoas, criando soluções inovadoras para problemas do mundo real ou contribuindo para os avanços de ponta que moldam nosso cenário digital.
                </p>
                <br />
                <p className="text-zinc-600 dark:text-zinc-300 drop-shadow-sm">
                    Começar minha jornada de programação na faculdade em 2021 pode ter sido um início tardio em comparação com alguns, mas minha paixão por tecnologia sempre foi uma força motriz. A cada linha de código que escrevo, lembro-me do potencial ilimitado e das infinitas possibilidades que estão por vir neste mundo empolgante e em constante expansão da programação.
                </p>
            </div>


            <h2 className="text-zinc-700 dark:text-zinc-100 text-2xl font-bold mt-7 mb-4">
                Técnologias que eu uso ou já usei:
            </h2>

            <div className="grid grid-cols-4 grid-rows-2">
                {/* <div className="grid grid-flow-col place-content-stretch"> */}
                    <TextBox.Root additionaTailwindClasses="bg-sky-500 border-zinc-600 m-2">
                            <TextBox.Icon icon={<FontAwesomeIcon icon={faReact} />} />
                            <TextBox.Content
                                title="ReactJS"
                                textAdditionaTailwindClasses="text-white"
                                text="Biblioteca do JavaScript"
                                titleAdditionaTailwindClasses="text-white" />
                    </TextBox.Root>
                    <TextBox.Root additionaTailwindClasses="bg-cyan-500 border-zinc-600 m-2">
                            <TextBox.Icon icon={<BiLogoTailwindCss />} />
                            <TextBox.Content
                                title="TailwindCSS"
                                textAdditionaTailwindClasses="text-white"
                                text="Biblioteca de classes CSS"
                                titleAdditionaTailwindClasses="text-white" />
                    </TextBox.Root>
                    <TextBox.Root additionaTailwindClasses="bg-green-500 border-zinc-600 m-2">
                            <TextBox.Icon icon={<BiLogoNodejs />} />
                            <TextBox.Content
                                title="NodeJS"
                                textAdditionaTailwindClasses="text-white"
                                text="BackEnd JavaScript"
                                titleAdditionaTailwindClasses="text-white" />
                    </TextBox.Root>
                    <TextBox.Root additionaTailwindClasses="bg-gradient-to-tl from-blue-600 to-yellow-600 border-zinc-600 m-2">
                            <TextBox.Icon icon={<BiLogoPython />} />
                            <TextBox.Content
                                title="Python"
                                textAdditionaTailwindClasses="text-white"
                                text="Linguagem alto nível"
                                titleAdditionaTailwindClasses="text-white" />
                    </TextBox.Root>
                {/* </div> */}
                {/* <div className="grid grid-flow-col place-items-center mt-3"> */}
                     <TextBox.Root additionaTailwindClasses="bg-blue-500 border-zinc-600 m-2">
                            <TextBox.Icon icon={<BiLogoPhp />} />
                            <TextBox.Content
                                title="PHP"
                                textAdditionaTailwindClasses="text-white"
                                text="Linguagem BackEnd"
                                titleAdditionaTailwindClasses="text-white" />
                    </TextBox.Root>
                    <TextBox.Root additionaTailwindClasses="bg-green-600 border-zinc-600 m-2">
                            <TextBox.Icon icon={<BiLogoMongodb />} />
                            <TextBox.Content
                                title="MongoDB"
                                textAdditionaTailwindClasses="text-white"
                                text="Banco de dados não relacional"
                                titleAdditionaTailwindClasses="text-white" />
                    </TextBox.Root>
                    <TextBox.Root additionaTailwindClasses="bg-blue-600 border-zinc-600 m-2">
                            <TextBox.Icon icon={<BiLogoPostgresql />} />
                            <TextBox.Content
                                title="PostfresSQL"
                                textAdditionaTailwindClasses="text-white"
                                text="Banco de dados relacional"
                                titleAdditionaTailwindClasses="text-white" />
                    </TextBox.Root>
                    <TextBox.Root additionaTailwindClasses="bg-sky-600 border-zinc-600 m-2">
                            <TextBox.Icon icon={<BiLogoDocker />} />
                            <TextBox.Content
                                title="Docker"
                                textAdditionaTailwindClasses="text-white"
                                text="Plataforma de virtualização"
                                titleAdditionaTailwindClasses="text-white" />
                    </TextBox.Root>
                {/* </div> */}
            </div>
        </div>
        </>       
    )
}