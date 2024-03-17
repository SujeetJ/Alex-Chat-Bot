import PropTypes from "prop-types";
const LinkBtn = (props) => {
  console.log(props);

  var link;
  if (props.state.checker === "DL") link = props.state.data.DL_link;
  if (props.state.checker === "LL") link = props.state.data.LL_link;
  console.log(link);
  return (
    <button>
      <a href={link} target="_blank">
        Visit
      </a>
    </button>
  );
};

LinkBtn.propTypes = {
  state: PropTypes.shape({
    data: PropTypes.shape({
      LL_link: PropTypes.string.isRequired,
      DL_link: PropTypes.string.isRequired,
    }).isRequired,
    checker: PropTypes.string.isRequired,
  }).isRequired,
};

export default LinkBtn;
