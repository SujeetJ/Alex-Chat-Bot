// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";
import Avatar from "./Avatar";
import UserAvatar from "./UserAvatar";
import StartBtn from "./component/StartBtn";
import ChoiceBtn from "./component/ChoiceBtn";
import data from "./data";
import LinkBtn from "./component/LinkBtn";

const config = {
  initialMessages: [
    createChatBotMessage(
      `Hello There! I'm a chatbot! How can I help you today?`,
      {
        widget: "startBtn",
      }
    ),
  ],
  botName: "Alex",
  customComponents: {
    botAvatar: (props) => <Avatar {...props} />,
    userAvatar: (props) => <UserAvatar {...props} />,
  },
  state: {
    checker: "",
    data,
    userData: {
      name: "",
      age: 0,
      category: "",
      haveLicence: false,
    },
  },
  widgets: [
    {
      widgetName: "startBtn",
      widgetFunc: (props) => <StartBtn {...props} />,
    },
    {
      widgetName: "choiceBtn",
      widgetFunc: (props) => <ChoiceBtn {...props} />,
    },
    {
      widgetName: "linkBtn",
      widgetFunc: (props) => <LinkBtn {...props} />,
    },
  ],
};

export default config;
