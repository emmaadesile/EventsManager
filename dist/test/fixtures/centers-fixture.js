module.exports = {
  validCenter: {
    name: 'Louise Place',
    capacity: 4000,
    address: '8, Sanusi Fafunwa',
    area: 'Victoria Island',
    state: 5,
    facilities: 'Gallery',
    amount: 500000,
    description: 'Center for all kinds of events'
  },

  centerWithoutName: {
    name: '',
    capacity: 4000,
    address: '18, Sanusi Fafunwa',
    area: 'Victoria Island',
    state: 5,
    facilities: 'Gallery',
    amount: 500000,
    description: 'Center for all kinds of events'
  },

  zeroCapacity: {
    name: 'Louise Place',
    capacity: 0,
    address: '18, Sanusi Fafunwa',
    area: 'Victoria Island',
    state: '5',
    facilities: 'Gallery',
    amount: 500000,
    description: 'Center for all kinds of events'
  },

  noAmount: {
    name: 'Louise Place',
    capacity: 4000,
    address: '18, Sanusi Fafunwa',
    area: 'Victoria Island',
    state: 5,
    facilities: 'Gallery',
    amount: '',
    description: 'Center for all kinds of events'
  },

  invalidAmount: {
    name: "Louise Place",
    capacity: "4000",
    address: "18, Sanusi Fafunwa",
    area: "Victoria Island",
    state: "5",
    facilities: "Gallery",
    amount: "50000430#",
    description: "Center for all kinds of events"
  }

};