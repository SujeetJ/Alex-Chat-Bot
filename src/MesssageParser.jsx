import React from "react";
import PropTypes from "prop-types";

// MessageParser starter code
const MessageParser = ({ children, actions }) => {
  console.log(children);

  const parse = (message) => {
    message = message.toLowerCase();
    console.log(message);
    if (message.includes("hello")) {
      actions.setResponse("Hello! Click on above button to Start");
    }
    if (message.includes("hi")) {
      actions.setResponse("Hi! Click on above button to Start");
    }
    if (message.includes("yes")) {
      actions.guide(children.props.state.userData.name);
    }
    if (message.includes("no")) {
      actions.fullGuide(children.props.state.userData.name);
    }
    if (message.includes("update")) {
      actions.updateLicence(children.props.state.userData.name);
    }
    const checker = children.props.state.checker;
    if (checker === "age") {
      actions.ageMessage();
      children.props.state.userData.name = message;
    }

    if (checker === "licence" && Number(message)) {
      const age = Number(message);
      if (age < 18)
        actions.setResponse(
          "Sorry, You Must be more than 18 years old to drive."
        );
      else if (age > 100)
        actions.moreAgeMessage("Sorry, You Are Too Old To Drive.");
      else {
        actions.validAgeMessage();
        children.props.state.userData.age = age;
        if (age >= 18 && age <= 22)
          children.props.state.userData.category = "Teenager";
        else if (age >= 23 && age <= 30)
          children.props.state.userData.category = "Adult";
        else children.props.state.userData.category = "Mature";
      }
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

MessageParser.propTypes = {
  children: PropTypes.node,
  actions: PropTypes.object,
};

export default MessageParser;
