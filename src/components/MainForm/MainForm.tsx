import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextBox } from "../TextBox/index.tsx";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { NavButton } from "../NavButton/NavButton";
import { PillSeparator } from "../PillSeparator.tsx";

export function MainForm() {
    return (
        <div className="backdrop-blur-2xl z-10 rounded-xl bg-zinc-100 bg-opacity-60 flex flex-col border border-zinc-400 shadow-default" >
            <div className="flex justify-end ">
                <NavButton text = "Eu" zIndex={1} paddingRight={310} />
                <NavButton text = "Experiência" zIndex={2} paddingRight={195}/>
                <NavButton text = "Portfólio" zIndex={3} paddingRight={105}/>
                <NavButton text = "Contato" zIndex={4} paddingRight={15}/>
            </div>
            <div className="text-justify m-7">
                <div className="grid place-content-start">
                    <div className="grid place-items-center">
                        <h1 className="text-zinc-700 text-3xl font-bold">Sobre mim</h1>
                        <PillSeparator />
                    </div>
                </div>

                <div className="mt-3">
                    <p className="text-zinc-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Laborum recusandae expedita officia error optio praesentium, dolor, iusto facere, qui eligendi pariatur aut esse veritatis repellendus corrupti? 
                        Est eum explicabo corrupti.</p>
                    <p className="text-zinc-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Laborum recusandae expedita officia error optio praesentium, dolor, iusto facere, qui eligendi pariatur aut esse veritatis repellendus corrupti? 
                        Est eum explicabo corrupti.</p>

                    <p className="text-zinc-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Laborum recusandae expedita officia error optio praesentium, dolor, iusto facere, qui eligendi pariatur aut esse veritatis repellendus corrupti? 
                        Est eum explicabo corrupti.</p>

                    <p className="text-zinc-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Laborum recusandae expedita officia error optio praesentium, dolor, iusto facere, qui eligendi pariatur aut esse veritatis repellendus corrupti? 
                        Est eum explicabo corrupti.</p>

                    <p className="text-zinc-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Laborum recusandae expedita officia error optio praesentium, dolor, iusto facere, qui eligendi pariatur aut esse veritatis repellendus corrupti? 
                        Est eum explicabo corrupti.</p>

                    <p className="text-zinc-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Laborum recusandae expedita officia error optio praesentium, dolor, iusto facere, qui eligendi pariatur aut esse veritatis repellendus corrupti? 
                        Est eum explicabo corrupti.</p>

                    <p className="text-zinc-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Laborum recusandae expedita officia error optio praesentium, dolor, iusto facere, qui eligendi pariatur aut esse veritatis repellendus corrupti? 
                        Est eum explicabo corrupti.</p>

                    <p className="text-zinc-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Laborum recusandae expedita officia error optio praesentium, dolor, iusto facere, qui eligendi pariatur aut esse veritatis repellendus corrupti? 
                        Est eum explicabo corrupti.</p>

                    <p className="text-zinc-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Laborum recusandae expedita officia error optio praesentium, dolor, iusto facere, qui eligendi pariatur aut esse veritatis repellendus corrupti? 
                        Est eum explicabo corrupti.</p>

                    <p className="text-zinc-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Laborum recusandae expedita officia error optio praesentium, dolor, iusto facere, qui eligendi pariatur aut esse veritatis repellendus corrupti? 
                        Est eum explicabo corrupti.</p>

                    <p className="text-zinc-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Laborum recusandae expedita officia error optio praesentium, dolor, iusto facere, qui eligendi pariatur aut esse veritatis repellendus corrupti? 
                        Est eum explicabo corrupti.</p>

                    <p className="text-zinc-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Laborum recusandae expedita officia error optio praesentium, dolor, iusto facere, qui eligendi pariatur aut esse veritatis repellendus corrupti? 
                        Est eum explicabo corrupti.</p>

                    <p className="text-zinc-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Laborum recusandae expedita officia error optio praesentium, dolor, iusto facere, qui eligendi pariatur aut esse veritatis repellendus corrupti? 
                        Est eum explicabo corrupti.</p>

                    <p className="text-zinc-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Laborum recusandae expedita officia error optio praesentium, dolor, iusto facere, qui eligendi pariatur aut esse veritatis repellendus corrupti? 
                        Est eum explicabo corrupti.</p>

                    <p className="text-zinc-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Laborum recusandae expedita officia error optio praesentium, dolor, iusto facere, qui eligendi pariatur aut esse veritatis repellendus corrupti? 
                        Est eum explicabo corrupti.</p>
                </div>
                
            </div>

            <TextBox.Root>
                <TextBox.Icon icon={<FontAwesomeIcon icon={faUser} />}/>
                <TextBox.Content title="Sobre mim" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            </TextBox.Root>

            
            {/* <TextBox
                title="Sobre mim"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                icon={<FontAwesomeIcon icon={faUser} />}
            /> */}
        </div>  
    )
}