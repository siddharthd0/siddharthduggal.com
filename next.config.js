/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/career4all',
        destination: 'https://devpost.com/software/career4all',
        permanent: false,
      },
      {
        source: '/skyline',
        destination: 'https://devpost.com/software/skyline-a9084w',
        permanent: false,
      },
      {
        source: '/carbonara',
        destination: 'https://devpost.com/software/carbonara-8491qs',
        permanent: false,
      },
      {
        source: '/aeolus',
        destination: 'https://devpost.com/software/aeolus',
        permanent: false,
      },
      {
        source: '/devpost',
        destination: 'https://www.devpost.com/siddharthduggal2013',
        permanent: false,
      },
    ];
  },
}

module.exports = nextConfig
