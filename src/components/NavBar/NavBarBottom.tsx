import { Link, useMatch, useResolvedPath } from "react-router-dom";

export function NavBarBottom() {
    return (
        <nav className="fixed bottom-0 left-0 w-screen backdrop-blur-3xl backdrop-saturate-200 bg-zinc-100 bg-opacity-60 border rounded-t-xl shadow-default duration-75 z-50 lg:hidden">
            <ul className="grid grid-flow-col place-content-center">
                <li className="m-2">
                    <CustomLink to="/me">Eu</CustomLink>
                </li>
                <li className="m-2">
                    <CustomLink to="/resume">Currículo</CustomLink>
                </li>
                <li className="m-2">
                    <CustomLink to="/portfolio">Portfólio</CustomLink>
                </li>
                <li className="m-2">
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
        <Link to={to} className={isActive ? "text-indigo-400" + additionClasses : "text-zinc-600" + additionClasses}>
            {children}
        </Link>
    )
}