const redirects = require('./config/redirects');

module.exports = {
  // Configuração da barra para campanhas de marketing e URL
  trailingSlash: true,
  async redirects() {
    return redirects;
  },
};
