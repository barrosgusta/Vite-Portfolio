import { MainForm } from "./components/MainForm/MainForm"
import { SideBar } from "./components/SideBar/SideBar"

function App() {
  return (
    <div className="absolute bg-zinc-50">
      <div className="flex flex-row justify-center m-20 gap-9">
        <SideBar />
        <MainForm />
      </div>
    </div> 
  )
}

export default App
