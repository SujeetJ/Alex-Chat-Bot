import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import "./App.css";
import config from "./config";
import MessageParser from "./MesssageParser";
import ActionProvider from "./ActionProvider";

function App() {
  return (
    <>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      ></Chatbot>
    </>
  );
}

export default App;
