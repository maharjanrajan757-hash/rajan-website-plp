import { LandingPage } from "@/components/landing-page";
import {
  jsonLd,
  localBusinessSchema,
  organizationSchema,
  productItemListSchema,
  websiteSchema
} from "@/lib/seo";

export default function Home() {
  const schema = [
    organizationSchema(),
    localBusinessSchema(),
    websiteSchema(),
    productItemListSchema()
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
      />
      <LandingPage />
    </>
  );
}
