import { destroyCookie, setCookie } from 'nookies';
import { isStagingEnv } from '../../infra/env/isStagingEnv';

async function HttpClient(url, { headers, body, ...options }) {
  return fetch(url, {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...options,
  })
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }
      throw new Error('Falha em pegar os dados do servidor :(');
    });
}

const BASE_URL = isStagingEnv
// BackEnd de DEV
  ? 'https://instalura-api.vercel.app'
// BackEnd de Prod
  : 'https://instalura-api.vercel.app';

export const loginService = {
  async login({ username, password }) {
    return HttpClient(`${BASE_URL}/api/login`, {
      method: 'POST',
      body: {
        username, // 'omariosouto'
        password, // 'senhasegura'
      },
    })
      .then((respostaConvertida) => {
        // Salvar o Token
        // Escrever os testes
        // console.log(respostaConvertida);
        const { token } = respostaConvertida.data;
        const DAY_IN_SECONDS = 86400;

        setCookie(null, 'APP_TOKEN', token, {
          path: '/',
          maxAge: DAY_IN_SECONDS * 7,
        });

        return respostaConvertida;
      });
  },
  logout() {
    destroyCookie('APP_TOKEN');
  },
};
