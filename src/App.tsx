import { Background } from "./components/Background"
import { MainForm } from "./components/MainForm/MainForm"
import { NavBarBottom } from "./components/NavBar/NavBarBottom"
import { SideBar } from "./components/SideBar/SideBar"
import { SideBarInfo } from "./components/SideBar/SideBarInfo"

function App() {
  return (
    <>
      <Background />

      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start m-[20px] mb-20 lg:m-10 xl:m-36 xl:mt-20 gap-4 xl:gap-7 transition-all duration-75 font-sfp">
        <SideBar />
        <MainForm />

        <div className="md:hidden flex justify-center backdrop-blur-3xl backdrop-saturate-200 z-10 rounded-xl bg-zinc-100 bg-opacity-60 h-fit w-full border border-zinc-400 shadow-default 
        dark:bg-zinc-800 dark:bg-opacity-80 dark:border-zinc-700">
          <div className="m-9">
            <SideBarInfo />
          </div>
        </div>
      </div>

      <NavBarBottom />
    </>
  )
}

export default App
