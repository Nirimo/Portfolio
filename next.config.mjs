/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
    reactStrictMode: true,
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.module.rules.push({
          test: /\.html$/,
          loader: 'html-loader',
          options: {
            minimize: true,
            esModule: true,
            attributes: {
              list: [
                {
                  attribute: 'type',
                  condition: 'script',
                  value: 'module',
                },
              ],
            },
            // Ajoute l'option suivante pour encoder les apostrophes
            entities: {
              apos: '&apos;',
            },
          },
        });
      }
      return config;
    },
  };

export default nextConfig;
