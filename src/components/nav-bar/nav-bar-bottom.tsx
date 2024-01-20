import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export function NavBarBottom() {
    const { t } = useTranslation();
    return (
        <nav className="fixed bottom-0 left-0 w-screen backdrop-blur-lg backdrop-saturate-200 backdrop-brightness-150 backdrop-contrast-125 dark:backdrop-brightness-75 border-t rounded-t-3xl shadow-default lg:hidden
        bg-zinc-100/75 border-zinc-400 duration-75 p-4 font-semibold
        dark:bg-zinc-800/75 dark:border-zinc-700">
            <ul className="grid grid-flow-col place-content-center">
                <li>
                    <CustomLink to="/home">{t("navBar.home")}</CustomLink>
                </li>
                <li>
                    <CustomLink to="/professional">{t("navBar.professional")}</CustomLink>
                </li>
                <li>
                    <CustomLink to="/projects">{t("navBar.projects")}</CustomLink>
                </li>
                <li>
                    <CustomLink to="/contact">{t("navBar.contact")}</CustomLink>
                </li>
            </ul>
        </nav>
    )
}


interface CustomLinkProps {
    to: string
    children: React.ReactNode
}

function CustomLink({ to, children }: CustomLinkProps) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    const additionClasses = "p-2 text-xl hover:text-indigo-500 transition-all duration-400"
    return (
        <Link to={to} className={isActive ? "text-indigo-400" + " " + additionClasses : "text-zinc-700 dark:text-zinc-300" + " " + additionClasses}>
            {children}
        </Link>
    )
}