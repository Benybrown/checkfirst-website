import { CommercialLandingPage } from "@/components/CommercialLandingPage";
import { buildCommercialMetadata, getCommercialPage } from "@/lib/commercial-content";

const page = getCommercialPage("/soc-2-vendor-risk");

export const metadata = buildCommercialMetadata(page);

export default function Soc2VendorRiskPage() {
  return <CommercialLandingPage page={page} />;
}

