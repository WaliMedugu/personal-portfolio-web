import { tv } from "tailwind-variants";

export const buttonVariants = tv({
  base: "rounded-lg px-4 py-2 font-semibold",
  variants: {
    variant: {
      default: "bg-blue-500 text-white hover:bg-blue-600",
      outline: "border border-blue-500 text-blue-500 hover:bg-blue-100",
    },
    size: {
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});