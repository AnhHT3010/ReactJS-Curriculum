import PropTypes from "prop-types";

const ItemPerson = ({ id, text }) => {
  return (
    <div>
      <p className="italic font-mono font-semibold text-blue-600">{id}</p>
      <p className="italic font-mono font-semibold text-blue-600">{text}</p>
    </div>
  );
};

ItemTodoList.PropTypes = {
  id: PropTypes.number,
  text: PropTypes.string.isRequired,
};

export default ItemTodoList;
