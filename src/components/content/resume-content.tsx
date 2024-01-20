import { faBook, faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PillSeparator } from "../pill-separator";
import { IconFrame } from "../icon-frame";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export function ResumeContent() {
    const { t } = useTranslation();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-left"
        >

            <div className="grid place-content-start">
                <div className="grid">
                    <h1 className="text-zinc-700 dark:text-zinc-100 text-3xl font-bold">
                        {t("professionalPage.title")}
                    </h1>
                    <PillSeparator className="my-3" />
                </div>
            </div>

            <section className="text-zinc-700 dark:text-zinc-300 relative">
                <div className="flex items-center">
                    <IconFrame icon={<FontAwesomeIcon icon={faSuitcase} />} />
                    <h3 className="font-semibold text-xl">
                        {t("professionalPage.experienceSubtitle")}
                    </h3>
                </div>

                <div className="absolute border-2 rounded-xl left-[1.90em] h-[calc(100%-60px)] border-zinc-500 dark:border-zinc-200 shadow-md">
                </div>

                <ul className="ml-[2.92rem]">
                    <li className="mb-3">

                        <h4 className="font-semibold text-xl">
                            {t("professionalPage.experience.ipm.title")}
                        </h4>

                        <span className="opacity-70 text-xs uppercase">
                            {t("professionalPage.experience.ipm.date")}
                        </span>

                        <div className="flex flex-col mt-2 gap-y-1 text-lg">
                            <p>
                                {t("professionalPage.experience.ipm.description.p1")}
                            </p>
                            <p>
                                {t("professionalPage.experience.ipm.description.p2")}
                            </p>
                            <p dangerouslySetInnerHTML={
                                {__html: t("professionalPage.experience.ipm.description.p3")}
                            }/>      
                        </div>

                    </li>

                    <li className="mb-3">
                        <h4 className="font-semibold text-xl">
                            {t("professionalPage.experience.freelance.title")}
                        </h4>
                        <span className="opacity-70 text-xs uppercase">
                            {t("professionalPage.experience.freelance.date")}
                        </span>

                        <div className="flex flex-col mt-2 gap-y-1 text-lg">
                            <p>
                                {t("professionalPage.experience.freelance.description.p1")}
                            </p>
                            <p dangerouslySetInnerHTML={
                                {__html: t("professionalPage.experience.freelance.description.p2")}
                            }/>
                        </div>

                    </li>
                </ul>
            </section>

            <section className="mt-1 text-zinc-700 dark:text-zinc-300 relative">
                <div className="flex items-center">
                    <IconFrame icon={<FontAwesomeIcon icon={faBook} />} />
                    <h3 className="font-semibold text-xl">
                        {t("professionalPage.educationSubtitle")}
                    </h3>
                </div>

                <div className="absolute border-2 rounded-xl left-[1.90em] h-[calc(100%-60px)] border-zinc-500 dark:border-zinc-200 shadow-md">
                </div>

                <ul className="ml-[2.92rem]">
                    <li className="mb-3">
                        <h4 className="font-semibold text-xl">
                            {t("professionalPage.university.title")}
                        </h4>

                        <span className="opacity-70 text-xs uppercase">
                            {t("professionalPage.university.date")}
                        </span>
                        
                        <div className="flex flex-col mt-2 gap-y-1 text-lg">
                            <p>
                                {t("professionalPage.university.description.p1")}
                            </p>
                            <p> 
                                {t("professionalPage.university.description.p2")}
                            </p>
                        </div>
                      
                    </li>
                </ul>
            </section>

            <section className="mt-1 text-zinc-700 dark:text-zinc-300 relative">
                <div className="flex items-center">
                    <IconFrame icon={<FontAwesomeIcon icon={faBook} />} />
                    <h3 className="font-semibold text-xl">
                        {t("professionalPage.coursesSubtitle")}
                    </h3>
                </div>

                <div className="absolute border-2 rounded-xl left-[1.90em] h-[calc(100%-60px)] border-zinc-500 dark:border-zinc-200 shadow-md">
                </div>
                
                <ul className="ml-[2.92rem]">
                    <li className="mb-3">
                        <h4 className="font-semibold text-lg">
                            {t("professionalPage.course.click.title")}
                        </h4>
                        <span className="opacity-70 text-xs uppercase">
                            {t("professionalPage.course.click.date")}
                        </span>
                    </li>
                    <li className="mb-3">
                        <h4 className="font-semibold text-lg" dangerouslySetInnerHTML={
                            {__html: t("professionalPage.course.knn.title")}
                        }/>

                        <span className="opacity-70 text-xs uppercase">
                            {t("professionalPage.course.knn.date")}
                        </span>
                    </li>  
                    <li className="mb-3">
                        <h4 className="font-semibold text-lg" dangerouslySetInnerHTML={
                            {__html: t("professionalPage.course.ipm.title")}
                        }/>
                            
                        <span className="opacity-70 text-xs uppercase">
                            {t("professionalPage.course.ipm.date")}
                        </span>
                    </li>                    
                </ul>

            </section>

        </motion.div>       
    )
}