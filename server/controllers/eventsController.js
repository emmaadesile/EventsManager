import express from 'express';
const router = express.Router();

global.events = [
  {
    id : 1,
    name: 'Birthday Party',
    center: 'Baywatch Event Center',
    description: 'The best party in 2017'
  }
];

router.get('/', (req, res) => {
  return res.json({
    events: global.events,
    error: false
  })
});

export {events}


