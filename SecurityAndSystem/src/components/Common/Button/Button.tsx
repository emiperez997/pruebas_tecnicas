import style from "./button.module.css";

export function Button({
  children,
  bg,
}: {
  children: React.ReactNode;
  bg: "primary" | "secondary" | "tertiary";
}) {
  return <button className={`${style.button} ${style[bg]}`}>{children}</button>;
}
