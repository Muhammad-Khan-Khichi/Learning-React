import ProfileCard from "./components/ProfileCard"
import AlexaImage from "./assets/alexa.png"
import CortanaImage from "./assets/cortana.png"
import SiriImage from "./assets/siri.png"

function App() {

  return (
    <>
    <h1 className="text-center bg-green-500 p-3 mb-10">
  Personal Digital Assistants
</h1>

<div className="flex flex-row space-x-4 p-2 items-stretch justify-center">
  <div className="flex flex-col w-[200px] shadow-xl rounded-xl">
    <ProfileCard title="Alexa" handle="@alexa123" image={AlexaImage}/>
  </div>
  <div className="flex flex-col w-[180px] shadow-xl  rounded-xl">
    <ProfileCard title="Cortana" handle="@cortana123" image={CortanaImage}/>
  </div>
  <div className="flex flex-col w-[180px] shadow-xl rounded-xl ">
    <ProfileCard title="Siri" handle="@siri123" image={SiriImage}/>
  </div>
</div>


    </>
  )
}

export default App
