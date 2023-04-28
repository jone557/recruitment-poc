import { PropsWithChildren } from "react";
import { FC } from "react";
import { Footer, Header } from "../components";

interface AppLayoutProps {}

export const AppLayout: FC<AppLayoutProps> = ({
  children,
}: PropsWithChildren<AppLayoutProps>) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
