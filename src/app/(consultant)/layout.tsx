import type { ReactNode } from "react";
import { ConsultantHeader } from "@/components/ConsultantHeader";
import { ConsultantFooter } from "@/components/ConsultantFooter";

export default function ConsultantLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <ConsultantHeader />
      <main>{children}</main>
      <ConsultantFooter />
    </>
  );
}
