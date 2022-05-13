export const Button = ({ selected, children, onClick = null }) => {
  const className = `button ${selected && "selected"}`;

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
