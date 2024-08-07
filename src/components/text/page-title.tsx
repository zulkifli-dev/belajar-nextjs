import { ReactNode } from "react";

function PageTitle({ children }: { children: ReactNode }) {
  return <h1 className="font-semibold text-2xl">{children}</h1>;
}

export default PageTitle;
