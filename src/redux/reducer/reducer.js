import { CONNECT_META_MASK, BUY_COIN, SET_USER_BALANCE } from '../types/types';

import { initialState } from './state';

export const reducer = (state = initialState, action) => {

    const { type, payload } = action;

	switch (type) {

        case CONNECT_META_MASK: {
			const { connection, address, userBalance } = payload; 

			return {
				...state,
				connection,
				address, 
				userBalance
			};
		}

		case SET_USER_BALANCE: {
			const { flag, balance } = payload;

			return {
				...state,
				userBalance: flag ? parseFloat(parseInt(balance) / 1E18).toFixed(1) : balance
			}
		}

		case BUY_COIN: {
			return {
				...state,
				// logic here
			}
		}
        
		default:
			return state;

    }

};