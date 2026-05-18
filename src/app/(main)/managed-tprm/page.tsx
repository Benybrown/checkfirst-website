import { CommercialLandingPage } from "@/components/CommercialLandingPage";
import { buildCommercialMetadata, getCommercialPage } from "@/lib/commercial-content";

const page = getCommercialPage("/managed-tprm");

export const metadata = buildCommercialMetadata(page);

export default function ManagedTprmPage() {
  return <CommercialLandingPage page={page} />;
}

