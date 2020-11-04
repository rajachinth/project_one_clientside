import { ADDSECRET, SHOW_LOAD, HIDE_LOAD, SHOPPING_HIDE_LOAD_MOV_CART, SHOPPING_SHOW_LOAD_MOV_CART, SHOPPING_HIDE_LOAD_DEL_FROM_CART, SHOPPING_SHOW_LOAD_DEL_FROM_CART, SHOPPING_HIDE_LOAD_ADD_TO_CART, SHOPPING_SHOW_LOAD_ADD_TO_CART} from './coreaction';

export interface LogState {
    userAuthToken: String;
    show: Boolean;
    addItemsToCart: Boolean;
    deleteItemsFromCart :Boolean,
    moveCart: Boolean,
}
export const LogStateInitState: LogState = {userAuthToken: 'secretkeyToken',
                                            show: false,
                                            deleteItemsFromCart: false,
                                            moveCart: false,
                                            addItemsToCart: false};

export function LogStateStateReducer(state: LogState= LogStateInitState, action): LogState {
    switch (action.type) {
        case ADDSECRET:
            return Object.assign({}, state, {userAuthToken: action.data.token});
        case SHOW_LOAD:
            return Object.assign({}, state, {show: true});
        case HIDE_LOAD:
            return Object.assign({}, state, {show: false});
        case SHOPPING_SHOW_LOAD_ADD_TO_CART:
            return Object.assign({}, state, {addItemsToCart: true});
        case SHOPPING_HIDE_LOAD_ADD_TO_CART:
            return Object.assign({}, state, {addItemsToCart: false});
         case SHOPPING_SHOW_LOAD_DEL_FROM_CART:
            return Object.assign({}, state, {deleteItemsFromCart: true});
        case SHOPPING_HIDE_LOAD_DEL_FROM_CART:
            return Object.assign({}, state, {deleteItemsFromCart: false});
         case SHOPPING_SHOW_LOAD_MOV_CART:
            return Object.assign({}, state, {moveCart: true});
        case SHOPPING_HIDE_LOAD_MOV_CART:
            return Object.assign({}, state, {moveCart: false});
    }
    return state;
}
