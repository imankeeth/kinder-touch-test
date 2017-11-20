import { userLogin } from '../utils/credentials';

export const login = data => dispatch => userLogin(data);

export const authenticateUser = data => ({ type: 'AUTHENTICATE_USER' });

export const unAuthenticateUser = data => ({ type: 'UNAUTHENTICATE_USER' });
