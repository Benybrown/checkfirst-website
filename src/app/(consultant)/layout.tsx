import { ConsultantHeader } from "@/components/ConsultantHeader";
import { ConsultantFooter } from "@/components/ConsultantFooter";

export default function ConsultantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ConsultantHeader />
      <main>{children}</main>
      <ConsultantFooter />
    </>
  );
}
