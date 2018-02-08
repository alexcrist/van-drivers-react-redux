import axios from 'axios';

// Action types ----------------------------------------------------------------

export const CHANGE_SELECTED_DATE = 'CHANGE_SELECTED_DATE';
export const GET_DRIVERS = 'GET_DRIVERS';
export const GET_DRIVERS_SUCCESS = 'GET_DRIVERS_SUCCESS';
export const CREATE_DRIVER = 'ADD_DRIVER';
export const DELETE_DRIVER = 'DELETE_DRIVER';
export const GENERAL_SUCCESS = 'GENERAL_SUCCESS';
export const GENERAL_FAILURE = 'GENERAL_FAILURE';

// Private actions -------------------------------------------------------------

const getDrivers = (date, range) => {
  return dispatch => {
    dispatch({ GET_DRIVERS, date, range });

    const url = `TODO/${date}/${range}`;
    axios.get(url)
      .then(response => dispatch(getDriversSuccess(response.data)))
      .catch(error => dispatch(generalFailure('Could not get drivers.', error)));
  };
};

const getDriversSuccess = drivers => {
  return { type: GET_DRIVERS_SUCCESS, drivers };
};

const generalSuccess = message => {
  return { type: GENERAL_SUCCESS, message };
};

const generalFailure = (message, error) => {
  console.error(message, error);
  return { type: GENERAL_FAILURE, message };
};

// Public actions --------------------------------------------------------------

export const changeSelectedDate = (date, range) => {
  return dispatch => {
    dispatch({ type: CHANGE_SELECTED_DATE, date });
    dispatch(getDrivers(date, range));
  };
};

export const createDriver = driver => {
  return (dispatch, getState) => {
    dispatch({ type: CREATE_DRIVER, driver });

    const url = `TODO`;
    const { selectedDate: date, selectedRange: range } = getState();
    axios.post(url)
      .then(response => {
        dispatch(generalSuccess('Driver created!'));
        dispatch(getDrivers(date, range));
      })
      .catch(error => generalFailure('Could not create driver.', error));
  };
};

export const deleteDriver = driver => {
  return (dispatch, getState) => {
    dispatch({ type: DELETE_DRIVER, driver });

    const url = `TODO`;
    const { selectedDate: date, selectedRange: range } = getState();
    axios.delete(url)
      .then(response => {
        dispatch(generalSuccess('Driver deleted!'));
        dispatch(getDrivers(date, range));
      })
      .catch(error => generalFailure('Could not delete driver.', error));
  };
};
