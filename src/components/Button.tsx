export default function Button({ children, variant = "primary", size = "md", ...props }: any) {
  const base = "rounded-full font-medium focus:outline-none focus:ring-2 focus:ring-offset-2";
  const sizes: any = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };
  const variants: any = {
    primary: "bg-white text-indigo-700 hover:brightness-90",
    secondary: "bg-transparent border border-white/40 text-white hover:bg-white/5",
  };
  return (
    <button className={`${base} ${sizes[size]} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}
