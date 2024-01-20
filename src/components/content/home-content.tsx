import TechBoxes from "@/components/tech-box";
import { PillSeparator } from "../pill-separator";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export function HomeContent() {
    const {t} = useTranslation();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
        <div className="text-justify">
            <div className="grid place-content-start">
                <div className="grid">
                    <h1 className="text-zinc-800 dark:text-zinc-100 text-3xl font-bold">
                        {t("homePage.title")}
                    </h1>
                    <PillSeparator className="my-3" />
                </div>
            </div>

            <section className="text-zinc-700 dark:text-zinc-300 mt-3 text-left">
                
                <h2 className="font-semibold text-2xl md:text-3xl" dangerouslySetInnerHTML={
                    {__html: t("homePage.subtitle")}
                } />

                <br />

                <div className="flex flex-col gap-y-3 text-xl">
                    <p>{t("homePage.content.p1")}</p>

                    <p>{t("homePage.content.p2")}</p>

                    <p>{t("homePage.content.p3")}</p>

                    <p>{t("homePage.content.p4")}</p>

                    <p>{t("homePage.content.p5")}</p>

                    <p>{t("homePage.content.p6")}</p>
                </div>
            </section>


            <h2 className="text-zinc-700 dark:text-zinc-100 text-2xl md:text-3xl font-bold mt-7 mb-4 text-left">
                {t("homePage.subtitle2")}
            </h2>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-rows-2 gap-4">
                <TechBoxes.ReactJs />
                <TechBoxes.NextJs />
                <TechBoxes.NodeJs />
                <TechBoxes.Swift />
                <TechBoxes.Php />
                <TechBoxes.Rust />
                <TechBoxes.Python />
                <TechBoxes.Delphi />
                <TechBoxes.JavaScript />
                <TechBoxes.TypeScript />
                <TechBoxes.MongoDb />
                <TechBoxes.PostgreSql />
                <TechBoxes.MySql />
                <TechBoxes.Docker />
            </section>
        </div>
        </motion.div>       
    )
}
