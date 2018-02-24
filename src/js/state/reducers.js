import {
  CHANGE_SELECTED_DATE,
  GET_DRIVERS_SUCCESS,
  GENERAL_SUCCESS,
  GENERAL_FAILURE
} from './actions';

export default (state, action) => {
  switch (action.type) {
    case CHANGE_SELECTED_DATE:
      return {
        ...state,
        fetchingDrivers: true
      };

    case GET_DRIVERS_SUCCESS:
      return {
        ...state,
        fetchingDrivers: false,
        drivers: action.drivers
      };


    case GENERAL_SUCCESS:
      return {
        ...state,
        successMessage: action.message,
        failureMessage: ''
      };
    

    case GENERAL_FAILURE:
      return {
        ...state,
        successMessage: '',
        failureMessage: action.message
      };

    default:
      return state;
  }
}