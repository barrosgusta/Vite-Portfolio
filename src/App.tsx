import { Background } from "./components/Background"
import { MainForm } from "./components/MainForm/MainForm"
import { NavBarBottom } from "./components/NavBar/NavBarBottom"
import { SideBar } from "./components/SideBar/SideBar"

function App() {
  return (
    <>
      <Background />

      <div className="flex flex-col lg:flex-row justify-center m-40 mt-20 gap-9 transition-all duration-75 font-sfp">
        <SideBar />
        <MainForm />
      </div>

      <NavBarBottom />
    </>
  )
}

export default App
