interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  btnClass?: string;
  classDivBtn?: string;
}

function ButtonComponent({
  title,
  btnClass,
  classDivBtn,
  ...props
}: ButtonProps) {
  return (
    <div className={classDivBtn}>
      <button className={btnClass} {...props}>
        {title}
      </button>
    </div>
  );
}

export default ButtonComponent;
