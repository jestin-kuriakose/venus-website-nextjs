export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Venus International",
    "description": "Leading oil and gas suppliers and contractors in Kuwait, serving the Middle East, North Africa, and Eastern Mediterranean.",
    "url": "https://venusintlkwt.com",
    "logo": "https://venusintlkwt.com/logo.png",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "",
        "contactType": "Sales",
        "email": "sales@venusintlkwt.com",
        "areaServed": ["KW", "Middle East", "North Africa", "Eastern Mediterranean"],
        "availableLanguage": ["en", "ar"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "",
        "contactType": "Engineering",
        "email": "engg@venusintlkwt.com",
        "areaServed": ["KW", "Middle East", "North Africa", "Eastern Mediterranean"],
        "availableLanguage": ["en", "ar"]
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Fahaheel",
      "addressCountry": "KW",
      "postalCode": "7167"
    },
    "areaServed": [
      {
        "@type": "Place",
        "name": "Kuwait"
      },
      {
        "@type": "Place",
        "name": "Middle East"
      },
      {
        "@type": "Place",
        "name": "North Africa"
      },
      {
        "@type": "Place",
        "name": "Eastern Mediterranean"
      }
    ],
    "sameAs": []
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://venusintlkwt.com",
    "name": "Venus International",
    "image": "https://venusintlkwt.com/logo.png",
    "description": "One of the leading oil and gas suppliers and contractors in Kuwait with years of expertise in upstream and downstream operations.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "PO BOX 7167",
      "addressLocality": "Fahaheel",
      "addressCountry": "KW"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 29.0825,
      "longitude": 48.1295
    },
    "url": "https://venusintlkwt.com",
    "telephone": "",
    "email": "sales@venusintlkwt.com",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday"
        ],
        "opens": "08:00",
        "closes": "17:00"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
