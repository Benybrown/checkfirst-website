import { CommercialLandingPage } from "@/components/CommercialLandingPage";
import { buildCommercialMetadata, getCommercialPage } from "@/lib/commercial-content";

const page = getCommercialPage("/vanta-vendor-risk-alternative");

export const metadata = buildCommercialMetadata(page);

export default function VantaVendorRiskAlternativePage() {
  return <CommercialLandingPage page={page} />;
}

