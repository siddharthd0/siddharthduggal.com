/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/career4all',
        destination: 'https://devpost.com/software/career4all',
        permanent: true,
      },
      {
        source: '/skyline',
        destination: 'https://devpost.com/software/skyline-a9084w',
        permanent: true,
      },
      {
        source: '/carbonara',
        destination: 'https://devpost.com/software/carbonara-8491qs',
        permanent: true,
      },
      {
        source: '/aeolus',
        destination: 'https://devpost.com/software/aeolus',
        permanent: true,
      },
      {
        source: '/devpost',
        destination: 'https://www.devpost.com/siddharthduggal2013',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
