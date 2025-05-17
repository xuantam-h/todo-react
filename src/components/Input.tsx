type InputProps = {
  label: string;
  type: string;
  value: string;
  id: string;
  class?: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const Input = ({ onChange, label, type, id, placeholder }: InputProps) => {
  return (
    <div className="input-wrapper">
      <p className="input-label">{label}</p>
      <input
        id={id}
        className="input-text"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};
export default Input;
