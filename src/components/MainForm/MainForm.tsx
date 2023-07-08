import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextBox } from "../TextBox/TextBox";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { NavButton } from "../NavButton/NavButton";

export function MainForm() {
    return (
        <div className="rounded-xl flex flex-col border border-slate-400 bg-zinc-800 shadow-default shadow-slate-950" >
            <div className="flex justify-end ">
                <NavButton text = "Eu" zIndex={1} paddingRight={300} />
                <NavButton text = "Experiência" zIndex={2} paddingRight={190}/>
                <NavButton text = "Portfólio" zIndex={3} paddingRight={100}/>
                <NavButton text = "Contato" zIndex={4} paddingRight={15}/>
            </div>
            <div className="text-justify m-7">
                <h1 className="text-white text-xl mb-4">Sobre mim</h1>
                <p className="text-zinc-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Laborum recusandae expedita officia error optio praesentium, dolor, iusto facere, qui eligendi pariatur aut esse veritatis repellendus corrupti? 
                    Est eum explicabo corrupti.</p>
            </div>
            <TextBox
                title="Sobre mim"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                icon={<FontAwesomeIcon icon={faUser} />}
            />
        </div>  
    )
}