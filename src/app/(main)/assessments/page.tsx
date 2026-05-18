import { CommercialLandingPage } from "@/components/CommercialLandingPage";
import { buildCommercialMetadata, getCommercialPage } from "@/lib/commercial-content";

const page = getCommercialPage("/assessments");

export const metadata = buildCommercialMetadata(page);

export default function AssessmentsPage() {
  return <CommercialLandingPage page={page} />;
}

