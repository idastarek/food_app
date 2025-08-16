// button component interface
export interface ButtonType {
  type: "button" | "submit" | "reset";
  text: string;
  className?: string;
  onClick?: () => void;
}

// button component
export default function Button({ type, text, className, onClick }: ButtonType) {
  return (
    <button type={type} className={className} onClick={onClick}>{text}</button>
  );
}