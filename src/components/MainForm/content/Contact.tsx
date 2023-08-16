import { PillSeparator } from "../../PillSeparator";
import { motion } from "framer-motion";
import { SubmitButton } from "../../SubmitButton";
import { Check } from "lucide-react";
import { useState } from "react"
import { PropagateLoader } from "react-spinners";

export function ContactContent() { 
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [isFormPending, setIsFormPending] = useState(false);
    const [submitButtonText, setSubmitButtonText] = useState("Enviar");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault(); 
    
        setSubmitButtonText("");
        setIsFormPending(true);

        const formData = new FormData(e.target as HTMLFormElement);
        handleFormAction(formData);
    }
    
    async function handleFormAction(formData: FormData) {
        const res =  await fetch("https://getform.io/f/b4d41457-4df7-403e-b23f-c16a6efd1d4f", {
            method: "POST",
            body: formData,
        })
    
        console.log(res);
    
        setIsFormPending(false);

        if (res.status === 200) {
            setSubmitButtonText ("Mensagem Enviada!");
            setIsFormSubmitted(true);
            clearForm();
        } else {
            setSubmitButtonText("Erro ao Enviar");
        }

        //to debug loading animation
        // const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

        // await delay(10000);
    }

    function clearForm() {
        setName("");
        setEmail("");
        setMessage("");
    }
    
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
                            Contato
                        </h1>
                        <PillSeparator className="my-3" />
                    </div>
                </div>


                <div className="hidden md:flex justify-center items-center ">
                    <section className="mb-5 rounded-xl overflow-hidden border border-indigo-400 bg-zinc-100 shadow-default
                    dark:bg-zinc-800">
                        <figure className="hidden xl:block -hue-rotate-[-120deg] dark:grayscale dark:invert">
                            <iframe width="1000"
                                height="300"
                                loading="lazy"
                                src="https://maps.google.com/maps?width=878&amp;height=433&amp;hl=en&amp;q=Rua%20Bulc%C3%A3o%20Viana%20Rio%20do%20Sul+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                            </iframe>
                        </figure>
                        <figure className="-hue-rotate-[-120deg] dark:grayscale dark:invert md:block xl:hidden">
                            <iframe width="700"
                                height="525"
                                loading="lazy"
                                src="https://maps.google.com/maps?width=878&amp;height=433&amp;hl=en&amp;q=Rua%20Bulc%C3%A3o%20Viana%20Rio%20do%20Sul+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                            </iframe>
                        </figure>
                    </section>
                </div>

                <form onSubmit={handleOnSubmit} className="transition-all duration-300">
                    <div className="mb-6">
                        <h2 className="font-bold text-zinc-800 dark:text-zinc-100 mb-2">Formulário de Contato</h2>

                        <div className="grid gap-x-6 gap-y-5 grid-cols-6 font-sfp">

                            <div className="col-span-3">
                                <input type="text" 
                                        name="name" 
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        placeholder="Nome Completo"
                                        className="block w-full rounded-md p-3 text-zinc-800 shadow-sm border-zinc-300 placeholder:text-zinc-400 border-2 focus:border-indigo-600 text-sm leading-6
                                dark:bg-zinc-800 dark:border-indigo-400 dark:text-zinc-100" />
                            </div>

                            <div className="col-span-3">
                                <input type="email" 
                                        name="email" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        placeholder="E-Mail"
                                        className="block w-full rounded-md p-3 text-zinc-800 shadow-sm border-zinc-300 placeholder:text-zinc-400 border-2 focus:border-indigo-600 text-sm leading-6
                                dark:bg-zinc-800 dark:border-indigo-400 dark:text-zinc-100" />
                            </div>

                            <div className="col-span-6">
                                <textarea 
                                    name="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Sua Mensagem"
                                    className="block w-full min-h-[100px] max-h-52 rounded-md p-3 text-zinc-800 shadow-sm border-zinc-300 placeholder:text-zinc-400 border-2 focus:border-indigo-600 text-sm dark:bg-zinc-800 dark:border-indigo-400 dark:text-zinc-100" />
                            </div>

                        </div>
                    </div>
                    <SubmitButton
                        key={submitButtonText}
                        disabled={isFormSubmitted || isFormPending ? true : false}
                        className="w-full"
                    >
                        {isFormPending && <PropagateLoader color="white" className="mt-1 mb-5" />}
                        {isFormSubmitted && <Check />}
                        {submitButtonText}
                    </SubmitButton>
                </form>
            </div>
        </motion.div>       
    )
}