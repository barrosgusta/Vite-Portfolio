import Background from "@/components/app-background";
import MainWindow from "@/components/main-window";
import { NavBarBottom } from "@/components/nav-bar/nav-bar-bottom";
import { SideBar } from "@/components/side-bar/side-bar";
import { ThemeToggle } from "@/components/theme-toogle";
import { LangChange } from "./components/lang-change";
import { SplashScreen } from "./components/splash-screen";
import Cookies from 'js-cookie';
import { signal } from "@preact/signals-react"
import { useTranslation } from "react-i18next";

export default function AppPage() {
  let alreadyVisited = Cookies.get('alreadyVisited');
  let showSplashScreen = false;
  // const { t } = useTranslation();

  const reactjstech = signal("tech.reactjs");
  reactjstech.value = "teste";
  console.log(reactjstech.value, "reactjstech");

  alreadyVisited ? showSplashScreen = false : showSplashScreen = true;


  return (
    <>
      <Background />


      <div className="hidden md:block md:fixed xl:absolute md:bottom-0 md:left-0 xl:top-0 xl:right-0 xl:left-auto m-6">
        <div className="flex items-center justify-center gap-1">
          <ThemeToggle />
          <LangChange />
        </div>
      </div>

      <div className="p-[20px] pb-20 lg:p-10 xl:p-36 xl:pt-20">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-4 xl:gap-7 transition-all duration-75">
          <SideBar />
          <MainWindow />
        </div>
      </div>

      <NavBarBottom />
      {showSplashScreen && <SplashScreen />}
    </>
  )
}
