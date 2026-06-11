import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?:       string
  description?: string
  image?:       string
  url?:         string
}

export default function SEO({
  title       = 'Foxpress Studios — Elevating Stories. Inspiring the World.',
  description = 'Foxpress Studios is a full-service media and marketing studio dedicated to transforming ideas into powerful visual stories that captivate, engage, and inspire.',
  image       = '/og-image.jpg',
  url         = 'https://foxpressmedia.com',
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description"        content={description} />
      <meta name="robots"             content="index, follow" />

      {/* Open Graph */}
      <meta property="og:type"        content="website" />
      <meta property="og:url"         content={url} />
      <meta property="og:title"       content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image"       content={image} />

      {/* Twitter */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={image} />

      {/* Schema.org LocalBusiness */}
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Foxpress Studios",
          "description": "${description}",
          "url": "${url}",
          "email": "studios@foxpressmedia.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "45 S Arroyo Pkwy",
            "addressLocality": "Pasadena",
            "addressRegion": "CA",
            "postalCode": "91105",
            "addressCountry": "US"
          },
          "sameAs": [
            "https://facebook.com/foxpressstudios",
            "https://instagram.com/foxpressstudios",
            "https://linkedin.com/company/foxpressstudios",
            "https://youtube.com/foxpressstudios"
          ]
        }
      `}</script>
    </Helmet>
  )
}
