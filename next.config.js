
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/contact',
        destination: '/kontakt',
        permanent: true,
      
      },
      {
        source: '/about',
        destination: '/omzone90',
        permanent: true,
      
      },
      {
        source: '/service',
        destination: '/tjanster',
        permanent: true,
    
      },
    ];
  },

};

module.exports = nextConfig;
