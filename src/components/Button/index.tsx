interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: any;
  btnClass?: string;
  classDivBtn?: string;
  icons?: any;
}

function ButtonComponent({
  title,
  btnClass,
  classDivBtn,
  icons,
  ...props
}: ButtonProps) {
  return (
    <div className={classDivBtn}>
      <button className={btnClass} {...props}>
        {icons}
        {title}
      </button>
    </div>
  );
}

export default ButtonComponent;
