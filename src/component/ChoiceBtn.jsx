import PropTypes from "prop-types";
function ChoiceBtn(props) {
  const No = () => {
    console.log("No");
    props.actions.haveLearningLicence();
  };

  const Yes = () => {
    console.log("Yes");
    props.actions.haveLicence();
  };

  return (
    <>
      <button onClick={() => Yes()}> Yes</button>
      <button onClick={() => No()}> No</button>
    </>
  );
}

ChoiceBtn.propTypes = {
  actions: PropTypes.shape({
    haveLearningLicence: PropTypes.any.isRequired,
    haveLicence: PropTypes.any.isRequired,
  }).isRequired,
};

export default ChoiceBtn;
