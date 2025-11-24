import type { ReactNode } from "react";

type Props = { children: ReactNode };

export default function Banner({ children }: Props) {
  return (
    <div className="container">
      <div className="p-3 rounded bg-light border">
        {children}
      </div>
    </div>
  );
}
