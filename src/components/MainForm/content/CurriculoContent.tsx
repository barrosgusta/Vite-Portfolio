import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PillSeparator } from "../../PillSeparator";
import { TextBox } from "../../TextBox";

export function CurriculoContent() {
    return (
        <>
        <div className="text-justify m-7">
            <div className="grid place-content-start">
                <div className="grid place-items-center">
                    <h1 className="text-zinc-700 dark:text-zinc-100 text-3xl font-bold">
                        Currículo
                    </h1>
                    <PillSeparator />
                </div>
            </div>

            <div className="mt-3">
                <p className="text-zinc-600 dark:text-zinc-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum recusandae expedita officia error optio
                    praesentium, dolor, iusto facere, qui eligendi pariatur
                    aut esse veritatis repellendus corrupti? Est eum
                    explicabo corrupti.
                </p>
                <p className="text-zinc-600 dark:text-zinc-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum recusandae expedita officia error optio
                    praesentium, dolor, iusto facere, qui eligendi pariatur
                    aut esse veritatis repellendus corrupti? Est eum
                    explicabo corrupti.
                </p>

            </div>
        </div><TextBox.Root>
                <TextBox.Icon icon={<FontAwesomeIcon icon={faUser} />} />
                <TextBox.Content
                    title="Sobre mim"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            </TextBox.Root>
        </>       
    )
}