import React from "react";
import PropTypes from "prop-types";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const setResponse = (msg) => {
    const message = createChatBotMessage(msg);
    updateState(message);
  };

  const ageMessage = () => {
    const message = createChatBotMessage(
      "Let me know your age so I can suggest you."
    );
    updateState(message, "licence");
  };

  const initialAction = () => {
    const message = createChatBotMessage("Type Your Name to Begin.");
    updateState(message, "age");
  };

  const validAgeMessage = () => {
    const message = createChatBotMessage("Do You have Driving Licence ?", {
      widget: "choiceBtn",
    });
    updateState(message);
  };

  const haveLicence = () => {
    const message = createChatBotMessage(
      "Great! Do you want any help with your Driving Licence? "
    );
    updateState(message);
  };

  const haveLearningLicence = () => {
    const message = createChatBotMessage("Ok! Do you have Learning Licence? ");
    updateState(message);
  };

  const fullGuide = (name) => {
    const message = createChatBotMessage(
      `Don't worry ${name.toUpperCase()}.You can apply for Learning Licence by clicking the following link button or visiting the RTO office.`,
      {
        widget: "linkBtn",
      }
    );
    updateState(message, "LL");
  };

  const guide = (name) => {
    const message = createChatBotMessage(
      `Great ${name.toUpperCase()}. You can apply for Driving Licence by clicking the following link button or visiting the RTO office.`,
      {
        widget: "linkBtn",
      }
    );
    updateState(message, "DL");
  };

  const updateLicence = (name) => {
    const message = createChatBotMessage(
      `Don't worry ${name.toUpperCase()}. You can update your Driving Licence by clicking the following link button or visiting the RTO office.`,
      {
        widget: "linkBtn",
      }
    );
    updateState(message, "DL");
  };

  const updateState = (message, checker) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      checker,
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            initialAction,
            setResponse,
            ageMessage,
            validAgeMessage,
            haveLicence,
            haveLearningLicence,
            fullGuide,
            guide,
            updateLicence,
          },
        });
      })}
    </div>
  );
};

ActionProvider.propTypes = {
  createChatBotMessage: PropTypes.func,
  setState: PropTypes.func,
  children: PropTypes.node,
};

export default ActionProvider;
