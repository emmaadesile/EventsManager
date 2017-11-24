import express from ('express');
import router from express.Router();


router.use('/events', require('./events'));

router.use('/centers', require('./centers'));


export {router};