import { ADDTOKENACCESS, ADDTOKENAUTH, LOGOUTUSER, REMOVETOKEN, USERDATA } from './coreaction';

export interface TokenState {
   accessToken: string,
   authToken: string,
}

export const TOKENSTATE: TokenState = {
   accessToken: null,
   authToken: null,
};

export function TokenStateReducer(state: TokenState= TOKENSTATE, action): TokenState {
    switch (action.type) {
        case ADDTOKENACCESS:
            return Object.assign({}, state, {accessToken: action.data, authToken: state.authToken});
        case ADDTOKENAUTH:
            return Object.assign({}, state, {accessToken: state.accessToken, authToken: action.data});
        case REMOVETOKEN:
            return Object.assign({}, state, {accessToken: null, authToken: null});

        default:
            return state;
    }
}
