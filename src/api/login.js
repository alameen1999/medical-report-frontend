import { urls } from './urls';
import { POST } from '../services/http';

export async function login(credentials) {
  const req = {
    url: urls.login,
    data: credentials,
  };
  const response = await POST(req);
  return response;
}