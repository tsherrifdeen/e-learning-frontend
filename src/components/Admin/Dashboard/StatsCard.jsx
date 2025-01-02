
import PropTypes from "prop-types";

const StatsCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg  flex items-center">
      <div className="text-4xl mr-4">{icon}</div>
      <div>
        <h4 className="text-sm text-gray-500 ">{title}</h4>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
};

// PropTypes validation
StatsCard.propTypes = {
  title: PropTypes.string.isRequired, // Title must be a string and is required
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Value can be a string or a number and is required
  icon: PropTypes.node.isRequired, // Icon can be any renderable node (React element, string, etc.) and is required
};

export default StatsCard;
