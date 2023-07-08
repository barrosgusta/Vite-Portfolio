import { MainForm } from "./components/MainForm/MainForm"
import { SideBar } from "./components/SideBar/SideBar"

function App() {
  return (
    <div className="bg-fixed fixed w-screen h-screen bg-zinc-900">
      <div className="flex flex-row justify-center m-40 gap-9">
        <SideBar />
        <MainForm />
      </div>
    </div> 
  )
}

export default App
