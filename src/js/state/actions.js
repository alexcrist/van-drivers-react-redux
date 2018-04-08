import axios from 'axios';
import moment from 'moment';

// Api -------------------------------------------------------------------------

const BASE = 'https://van-drivers.herokuapp.com/drivers';
const API = {
  GET:    `${BASE}/week`,
  CREATE: `${BASE}`,
  DELETE: `${BASE}`
};

// Action types ----------------------------------------------------------------

export const CHANGE_DATE          = 'CHANGE_DATE';
export const GET_DRIVERS          = 'GET_DRIVERS';
export const GET_DRIVERS_SUCCESS  = 'GET_DRIVERS_SUCCESS';
export const CREATE_DRIVER        = 'ADD_DRIVER';
export const DELETE_DRIVER        = 'DELETE_DRIVER';
export const GENERAL_SUCCESS      = 'GENERAL_SUCCESS';
export const GENERAL_FAILURE      = 'GENERAL_FAILURE';

// Private actions -------------------------------------------------------------

const getDrivers = (date, range) => {
  // Note: 'range' is currently unsupported by the API
  return dispatch => {
    dispatch({ type: GET_DRIVERS, date, range });
    axios.get(`${API.GET}/${date}`)
      .then(response => dispatch(getDriversSuccess(response.data, date)))
      .catch(error => dispatch(generalFailure('Could not get drivers.', error)));
  };
};

const transformDrivers = (drivers, date) => {
  const transformedDrivers = {};
  const mondayToThursdayDrivers = drivers.slice(0, 4);
  const numDriversMap = [ 1, 2, 2, 1 ];

  mondayToThursdayDrivers.forEach((content, index) => {
    const key = moment(date, 'MM-DD-YYYY')
      .add(index, 'day')
      .format('MM-DD-YYYY');
    const value = {
      numDrivers: numDriversMap[index],
      drivers: content
    };
    transformedDrivers[key] = value;
  });
  
  return transformedDrivers;
}

const getDriversSuccess = (drivers, date) => {
  const transformedDrivers = transformDrivers(drivers, date);
  return { type: GET_DRIVERS_SUCCESS, drivers: transformedDrivers };
};

const generalSuccess = message => {
  return { type: GENERAL_SUCCESS, message };
};

const generalFailure = (message, error) => {
  console.error(message, error);
  return { type: GENERAL_FAILURE, message };
};

// Public actions --------------------------------------------------------------

export const today = () => {
  const date = moment()
    .startOf('isoweek')
    .format('MM-DD-YYYY');
  return changeDate(date);
}

export const changeDate = (date, range) => {
  return dispatch => {
    dispatch({ type: CHANGE_DATE, date });
    dispatch(getDrivers(date, range));
  };
};

export const createDriver = driver => {
  return (dispatch, getState) => {
    console.log('here we go');
    dispatch({ type: CREATE_DRIVER, driver });

    const { date, range } = getState();
    axios.post(`${API.CREATE}`, driver)
      .then(response => {
        dispatch(generalSuccess(`Scheduled driver, ${driver.name}!`));
        dispatch(getDrivers(date, range));
      })
      .catch(error => generalFailure('Could not create driver.', error));
  };
};

export const deleteDriver = driver => {
  return (dispatch, getState) => {
    dispatch({ type: DELETE_DRIVER, driver });

    const { date, range } = getState();
    axios.delete(`${API.DELETE}/${driver._id}`)
      .then(response => {
        dispatch(generalSuccess(`Removed driver, ${driver.name}.`));
        dispatch(getDrivers(date, range));
      })
      .catch(error => generalFailure('Could not delete driver.', error));
  };
};
