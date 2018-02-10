module.exports = {
  validEvent: {
    name: 'Wedding Anniversary',
    startDate: '2018-03-30',
    endDate: '2018-03-30',
    time: '10:00',
    description: 'A wedding anniversary',
    center: 1
  },

  invalidEventName: {
    name: '',
    startDate: '2018-03-30',
    endDate: '2018-03-30',
    time: '10:00',
    description: 'A wedding anniversary',
    center: 1
  },

  invalidEventDate: {
    name: 'Wedding Anniversary',
    startDate: '2018-03-30',
    endDate: '',
    time: '10:00',
    description: 'A wedding anniversary',
    center: 1
  },

  invalidStartDate: {
    name: 'Wedding Anniversary',
    startDate: '',
    endDate: '2018-03-30',
    time: '10:00',
    description: 'A wedding anniversary',
    center: 1
  },

  invalidState: {
    name: 'Wedding Anniversary',
    startDate: '2018-03-30',
    endDate: '2018-03-30',
    time: '10:00',
    description: 'A wedding anniversary',
    center: 1
  },

  invalidTimeFormat: {
    name: 'Wedding Anniversary',
    startDate: '2018-03-30',
    endDate: '2018-03-30',
    time: '53:00',
    description: 'A wedding anniversary',
    center: 1
  },

  invalidCenter: {
    name: 'Wedding Anniversary',
    startDate: '2018-03-30',
    endDate: '2018-03-30',
    time: '10:00',
    description: 'A wedding anniversary',
    center: 41
  }
};