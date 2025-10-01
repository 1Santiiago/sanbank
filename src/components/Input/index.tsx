interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  containerClass?: string;
  labelClassName?: string;
  inputClassName?: string;
}

function InputComponent({
  label,
  containerClass,
  labelClassName,
  inputClassName,
  ...props
}: InputProps) {
  return (
    <div className={containerClass}>
      {label && (
        <label className={labelClassName} htmlFor={props.id}>
          {label}
        </label>
      )}
      <input className={inputClassName} {...props} />
    </div>
  );
}

export default InputComponent;
