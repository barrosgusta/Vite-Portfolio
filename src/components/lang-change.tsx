
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import i18n from "@/lib/i18n"
import { useState } from "react"
// import Cookies from "js-cookie"

export function LangChange() {
  const [currentLang, setCurrentLang] = useState(i18n.language);
  // const langCookie = Cookies.get("lang");
  // if (langCookie) {
    // i18n.changeLanguage(langCookie);
  // };

  const handleLangChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
    // Cookies.set("lang", lang);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {/* <Languages className="h-[1.2rem] w-[1.2rem]" /> */}
          <h1 className="text-lg">{currentLang == "pt" ? "🇧🇷" : "🇺🇸"}</h1>
          <span className="sr-only">Change Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem disabled={currentLang == "pt"} onClick={() => handleLangChange("pt")}>
          🇧🇷 Português Brasil
        </DropdownMenuItem>
        <DropdownMenuItem disabled={currentLang == "en"} onClick={() => handleLangChange("en")}>
          🇺🇸 English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
