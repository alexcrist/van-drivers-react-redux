import fecha from 'fecha';

const today = fecha.format(new Date(), 'YYYY-MM-DD');

export default {
  currentDate: today,
  selectedDate: today,
  selectedDateRange: 7,
  fetchingDrivers: false,
  successMessage: '',
  failureMessage: '',
  drivers: {}
};