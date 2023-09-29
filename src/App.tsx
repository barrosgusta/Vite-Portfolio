import { Background } from "./components/Background"
import { MainForm } from "./components/MainForm/MainForm"
import { NavBarBottom } from "./components/NavBar/NavBarBottom"
import { SideBar } from "./components/SideBar/SideBar"
import { SideBarInfo } from "./components/SideBar/SideBarInfo"
import { ThemeToggle } from "./components/ThemeToogle"

function App() {
  return (
    <>
      <Background />

      <div className="hidden md:block md:fixed xl:absolute md:bottom-0 md:left-0 xl:top-0 xl:right-0 xl:left-auto m-6">
        <div className="flex items-center justify-center">
          <ThemeToggle />
        </div>
      </div>

      <div className="p-[20px] pb-20 lg:p-10 xl:p-36 xl:pt-20 ">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-4 xl:gap-7 transition-all duration-75">
          <SideBar />
          <MainForm />
          <div className="md:hidden flex justify-center backdrop-blur-3xl backdrop-saturate-200 z-10 rounded-xl bg-zinc-100 bg-opacity-60 h-fit w-full border border-zinc-400 shadow-default
          dark:bg-zinc-800 dark:bg-opacity-80 dark:border-zinc-700">
            <div className="m-9">
              <SideBarInfo />
            </div>
          </div>
        </div>
      </div>

      <NavBarBottom />
    </>
  )
}

export default App
