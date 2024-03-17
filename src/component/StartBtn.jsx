import PropTypes from "prop-types";
export default function StartBtn(props) {
  const initialAction = () => {
    props.actions.initialAction();
  };

  return <button onClick={() => initialAction()}> Lets Get Started</button>;
}

StartBtn.propTypes = {
  actions: PropTypes.shape({
    initialAction: PropTypes.any.isRequired,
  }).isRequired,
};
