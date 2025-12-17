const Select = ({
  value,
  onChange,
  children,
  disabled = false,
  error = false,
  className = "",
  ...props
}) => {
  const baseClasses =
    "w-full px-4 py-2 border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0 bg-white";
  const errorClasses = error
    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500";
  const disabledClasses = disabled ? "bg-gray-100 cursor-not-allowed" : "";

  const classes = `${baseClasses} ${errorClasses} ${disabledClasses} ${className}`;

  return (
    <select
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={classes}
      {...props}
    >
      {children}
    </select>
  );
};

const SelectItem = ({ value, children, ...props }) => {
  return (
    <option value={value} {...props}>
      {children}
    </option>
  );
};

Select.Item = SelectItem;

export default Select;
