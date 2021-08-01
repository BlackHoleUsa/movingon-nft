import { CONNECT_META_MASK, BUY_COIN, SET_USER_BALANCE } from '../types/types';

export const connectMetaMaskAction = (data) => ({
    type: CONNECT_META_MASK,
    payload: data
});

export const buyCoin = (data) => ({
    type: BUY_COIN,
    payload: data
});

export const setUserBalance = (data) => ({
    type: SET_USER_BALANCE,
    payload: data
});