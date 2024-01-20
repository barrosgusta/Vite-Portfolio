import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Cookies from "js-cookie";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

export function SplashScreen() {
    const { t, i18n } = useTranslation();

    const [open, setOpen] = useState(true);
    const [isSplashScreenShowing, setIsSplashScreenShowing] = useState(true);
    const [currentLang, setCurrentLang] = useState(i18n.language);

    const handleLangChange = (lang: string) => {
        i18n.changeLanguage(lang);
        setCurrentLang(lang);
        // Cookies.set("lang", lang);
    }

    useEffect(() => {
        // Lock the scroll when the component is mounted
        document.body.style.overflow = 'hidden';

        return () => {
            // Unlock the scroll when the component is unmounted
            document.body.style.overflow = 'auto';
        };
    }, []);

    const handleClick = async () => {
        Cookies.set("alreadyVisited", "true");
        document.body.style.overflow = 'auto';
        setOpen(false);
        setTimeout(() => {
            setIsSplashScreenShowing(false);
        }, 700);
    }

    return (
        <div className={cn("duration-700 transition-opacity top-0 absolute backdrop-blur-xl h-screen w-screen", !open && "opacity-0", !isSplashScreenShowing && ("-z-50"))}>
            <div className="absolute w-full top-0 flex justify-center p-8 gap-2">
                <Button variant="ghost" disabled={currentLang == "pt"} className="text-5xl" onClick={() => handleLangChange("pt")}>
                    🇧🇷
                </Button>
                <Button variant="ghost" disabled={currentLang == "en"} className="text-5xl" onClick={() => handleLangChange("en")}>
                    🇺🇸
                </Button>
            </div>
            <div className="grid grid-cols-1 gap-3 h-full justify-center place-items-center place-content-center">
                <h1 className="drop-shadow-lg text-center text-3xl font-bold text-zinc-800 dark:text-zinc-100 uppercase">
                    {t("splashScreen.title")}
                </h1>
                <Button className="animate-pulse shadow-lg" onClick={handleClick} >
                    {t("splashScreen.button")}
                </Button>
            </div>
        </div>
    )
}