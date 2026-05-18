import { CommercialLandingPage } from "@/components/CommercialLandingPage";
import { buildCommercialMetadata, getCommercialPage } from "@/lib/commercial-content";

const page = getCommercialPage("/drata-vendor-risk-alternative");

export const metadata = buildCommercialMetadata(page);

export default function DrataVendorRiskAlternativePage() {
  return <CommercialLandingPage page={page} />;
}

