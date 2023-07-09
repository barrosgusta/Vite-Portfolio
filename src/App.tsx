import { MainForm } from "./components/MainForm/MainForm"
import { SideBar } from "./components/SideBar/SideBar"
import Background from './assets/images/bg.svg'

function App() {
  return (
    <>
      <img src={Background} alt="Background image" className="bg-cover fixed w-screen top-0" />

      <div className="flex flex-row justify-center m-20 gap-9">
        <SideBar />
        <MainForm />
      </div>
    </>
  )
}

export default App
