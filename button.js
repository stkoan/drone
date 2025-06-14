export function Button({ children, className, variant = "default" }) {
  const baseStyle = "rounded-xl px-4 py-2 font-medium ";

  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
  };

  return <button className={`${baseStyle} ${variants[variant]} ${className}`}>{children}</button>;
}