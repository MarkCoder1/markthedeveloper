export default function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mark The Developer',
    url: 'https://example.com',
    jobTitle: 'Software Engineer',
    sameAs: [
      'https://github.com/username',
      'https://www.linkedin.com/in/username'
    ],
    description: 'Building scalable & delightful web experiences.',
  };
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}