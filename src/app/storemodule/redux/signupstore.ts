import { SIGNUPDATA } from './coreaction';

export interface SignUpState {
    username: string;
    email: string;
    mobile: number;
    uniqueID: string;
    pincode: number;
    address: string;
}

export const SIGNUPSTATE: SignUpState = {
    username: null,
    email: null,
    mobile: null,
    uniqueID: null,
    pincode: null,
    address: null
};

export function signUpStateReducer(state: SignUpState= SIGNUPSTATE, action): SignUpState {
    switch (action.type) {
        case SIGNUPDATA:
            return Object.assign({},
                                    {   username: action.data.username,
                                        email: action.data.email,
                                        mobile: action.data.mobile,
                                        uniqueID: action.data.uniqueID,
                                        pincode: action.data.pincode,
                                        address: action.data.address});
        default:
            return state;
    }
}
