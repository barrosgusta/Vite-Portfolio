import { Link, useMatch, useResolvedPath } from "react-router-dom";

export function NavBarBottom() {
    return (
        <nav className="fixed bottom-0 left-0 w-screen backdrop-blur-3xl backdrop-saturate-200 bg-opacity-70 border-t rounded-t-3xl shadow-default z-50 lg:hidden
        bg-zinc-100 border-zinc-400 duration-75 p-4
        dark:bg-zinc-800 dark:border-zinc-700 dark:bg-opacity-70">
            <ul className="grid grid-flow-col place-content-center">
                <li className="">
                    <CustomLink to="/me">Eu</CustomLink>
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

function CustomLink({to, children}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    const additionClasses = " p-3 text-xl font-semibold hover:text-indigo-500 transition-all duration-400"
    return (
        <Link to={to} className={isActive ? "text-indigo-400" + additionClasses : "text-zinc-700 dark:text-zinc-300" + additionClasses}>
            {children}
        </Link>
    )
}