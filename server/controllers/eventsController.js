import events from '../models1/events';

class EventsController {
  /**
   *
   * Get all events
   * @param {any} req
   * @param {any} res
   * @returns {json} gets all events
   * @memberof events
   */
  static getAllEvents (req, res){
    return res.status(200).json({
      events
    });
  }

    /**
   *
   * Get an Event
   * @param {any} req
   * @param {any} res
   * @returns {json} gets an event
   * @memberof events
   */

   static getEvent (req, res) {
      for (const event of events){
        if (event.id === parseInt(req.params.eventId, 10)){
          return res.status(200).json({
            event,
            message: 'success',
          })
        };
      }
      return res.status(404).json({
        message: 'Event not found',
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

  static createEvent (req, res) {
    const eventDetails = [req.body.name, req.body.center, req.body.date, req.body.description, req.body.facilities]; 
    const validateDetails = eventDetails.every(detail => true);
      if (validateDetails === true) {
        req.body.id = events.length + 1;
        events.push(req.body);
   
        return res.status(202).json({
         message: 'Success',
       });
     }
     return res.status(400).json({
      message: 'Please fill in all required fields'
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

  static updateEvent(req, res) {    
    for (const event of events) {
      if (event.id === parseInt(req.params.eventId, 10)){
        event.name = req.body.name || event.name;
        event.center = req.body.center || event.center;
        event.description = req.body.description || event.description;
        event.date = req.body.date || event.date;
      }
      return res.status(202).json({
        message: 'Event updated successfully'
      })
    };
    return res.status(404).json({
      message: 'Event no found'
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
  
 static deleteEvent (req, res) {
    for (const event of events) {
      if (event.id === parseInt(req.params.eventId)) {
        events.splice(event, 1);
      }
      return res.status(204).json({
        message: 'Event deleted successfully'
      });
    }
    return res.json(404).json({
      message: 'Event not found'
    });
  }
}

export default EventsController;