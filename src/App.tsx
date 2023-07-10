import { Background } from "./components/Background"
import { MainForm } from "./components/MainForm/MainForm"
import { SideBar } from "./components/SideBar/SideBar"

function App() {
  return (
    <>
      <Background />

      <div className="flex flex-row justify-center m-20 gap-9 transition-all duration-75">
        <SideBar />
        <MainForm />
      </div>
    </>
  )
}

export default App
