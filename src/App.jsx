import ProfileCard from "./components/ProfileCard";
import AlexaImage from "./assets/alexa.png";
import CortanaImage from "./assets/cortana.png";
import SiriImage from "./assets/siri.png";
import { useState } from "react";

function App() {

  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <>

      {/* adding state concept */}

        <button className="bg-green-300 p-2 cursor-pointer" onClick={handleClick}>Click me!</button>
        <div>Number increase by 1: {count}</div>


      {/* <h1 className="text-center bg-green-500 p-3 mb-10">
        Personal Digital Assistants
      </h1>

      <div className="flex flex-row space-x-4 p-2 items-stretch justify-center">
        <div className="flex flex-col w-[200px] shadow-xl rounded-xl">
          <ProfileCard
            title="Alexa"
            handle="@alexa123"
            image={AlexaImage}
            desc="The morning sun rose gently, painting the sky golden while birds sang, welcoming a new day"
          />
        </div>
        <div className="flex flex-col w-[180px] shadow-xl  rounded-xl">
          <ProfileCard
            title="Cortana"
            handle="@cortana123"
            image={CortanaImage}
            desc="Waves crashed against the shore, carrying whispers of distant lands and secrets hidden beneath waters."
          />
        </div>
        <div className="flex flex-col w-[180px] shadow-xl rounded-xl ">
          <ProfileCard
            title="Siri"
            handle="@siri123"
            image={SiriImage}
            desc="Children laughed joyfully in the park, chasing butterflies and dreams, while the world felt endlessly alive."
          />
        </div>
      </div> */}
    </>
  );
}

export default App;
