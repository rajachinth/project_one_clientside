import { LOGOUTUSER, USERDATA } from './coreaction';

export interface LoginState {
    username: string;
    uniqueID: string;
    isUserLogged: Boolean;
}

export const LOGINSTATE: LoginState = {
    username: null,
    uniqueID: null,
    isUserLogged: false,
};

export function loginStateReducer(state: LoginState= LOGINSTATE, action): LoginState {
    switch (action.type) {
        case USERDATA:
            return Object.assign({}, state, {username: action.data.name, uniqueID: action.data.uniqueID, isUserLogged: true});

        case LOGOUTUSER:
            return Object.assign({}, state, {username: null, uniqueID: null, isUserLogged: false});

        default:
            return state;
    }

}
