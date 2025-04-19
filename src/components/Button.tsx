import { clsx } from "clsx"

export type Props = {
  onClick?: () => void
  color?: "blue" | "red" | "gray"
  type?: "button" | "submit" | "reset"
}

export const Button: React.FC<React.PropsWithChildren<Props>> = ({
  onClick,
  color = "blue",
  children,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx("flex items-center rounded px-3 py-1 text-white", {
        "bg-blue-500": color === "blue",
        "bg-red-500": color === "red",
        "bg-gray-500": color === "gray",
      })}
    >
      {children}
    </button>
  )
}
