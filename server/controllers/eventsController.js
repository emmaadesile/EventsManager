import events from '../models/events';


class eventsController {

  /**
   *
   * Get all events
   * @param {any} req
   * @param {any} res
   * @returns {json} gets all events
   * @memberof events
   */
  getAllEvents (req, res){
    res.status(200).json({
      events: events,
      error: false
    });
  }

    /**
   *
   * Get an Event
   * @param {any} req
   * @param {any} res
   * @returns {json} gets all events
   * @memberof events
   */

   getEvent (req, res) {
      for (const event of events){
        if (event.id === parseInt(req.params.id, 10)){
          res.json({
            event: event,
            message: 'success',
            error: false
          })
        };
      }
      res.status(404).json({
        message: 'Event not found',
        error: true
      });
   }

   /**
   *
   * Create Event
   * @param {any} req
   * @param {any} res
   * @returns {json}gets all events
   * @memberof events
   */

   createEvent (req, res) {
     if (!req.body.name || !req.body.center || !request.body.date) {
       return res.status(400).json({
          message: 'Please fill in all required fields',
          error: true
       });
     }
     const Id = events.length + 1;
     events.push(Id);
     events.push(req.body);
     res.json({
       message: 'Success',
       error: false
     });
   }

  /**
   *
   * Update Event
   * @param {any} req
   * @param {any} res
   * @returns {json}gets all events
   * @memberof events
   */

  editEvent(req, res) {    
    for (const event of events) {
      if (event.id === parseInt(req.params.id, 10)){
        event.name = req.body.name;
        event.center = req.body.center;
        event.description = req.body.description;
        event.date = req.body.date;
      }
      return res.json({
        message: 'Event updated successfully',
        error: false
      })
    };
    res.status(404).json({
      message: 'Event no found',
      error: true
    });
  }

   /**
   * 
   * Delete Event
   * @param {any} req
   * @param {any} res
   * @returns {json}gets all events
   * @memberof events
   */
  
  deleteEvent (req, res) {
    for (const event of events) {
      if (event.id === parseInt(req.params.id)) {
        events.splice(event, 1);
      }
      return res.json({
        message: 'Event deleted successfully',
        error: false
      });
    }
    res.json(404).json({
      message: 'Event not found',
      error: true
    });
  }
}

export default eventsController


