module.exports = {
    async redirects() {
      return [
        {
          source: '/join',
          destination: '/login',
          permanent: false,
        },
      ];
    },
  };
  
