import { CommercialLandingPage } from "@/components/CommercialLandingPage";
import { buildCommercialMetadata, getCommercialPage } from "@/lib/commercial-content";

const page = getCommercialPage("/iso-27001-supplier-risk");

export const metadata = buildCommercialMetadata(page);

export default function Iso27001SupplierRiskPage() {
  return <CommercialLandingPage page={page} />;
}

