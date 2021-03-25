const redirects = require('./config/redirects');

module.exports = {
  // Configuração da barra para campanhas de marketing
  trailingSlash: true,
  async redirects() {
    return redirects;
  },
};
