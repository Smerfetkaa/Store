import Icons from "../assets/icons/symbol-defs.svg";

const Icon = ({ id, className }) => {
  return (
    <svg className={className}>
      <use href={Icons + "#icon-" + id}></use>
    </svg>
  );
};

export default Icon;
