import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export function NavBarBottom() {
    return (
        <nav className="fixed bottom-0 left-0 w-screen backdrop-blur-lg backdrop-saturate-200 border-t rounded-t-3xl shadow-default z-50 lg:hidden
        bg-zinc-100/60 border-zinc-400 duration-75 p-4 font-semibold
        dark:bg-zinc-800/60 dark:border-zinc-700">
            <ul className="grid grid-flow-col place-content-center">
                <li className="">
                    <CustomLink to="/home">Introdução</CustomLink>
                </li>
                <li className="">
                    <CustomLink to="/resume">Currículo</CustomLink>
                </li>
                <li className="">
                    <CustomLink to="/portfolio">Portfólio</CustomLink>
                </li>
                <li className="">
                    <CustomLink to="/contact">Contato</CustomLink>
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