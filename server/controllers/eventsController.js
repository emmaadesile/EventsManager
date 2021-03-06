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
  static getAllEvents(req, res) {
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

  static getEvent(req, res) {
    for (const event of events) {
      if (event.id === parseInt(req.params.eventId, 10)) {
        return res.status(200).json({
          event
        });
      }
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
   * @returns {json} create event
   * @memberof events
   */

  static createEvent(req, res) {
    if (
      req.body.name &&
      req.body.startDate &&
      req.body.endDate &&
      req.body.time &&
      req.body.description &&
      req.body.center 
    ) {
      // create new event details from req.body
      req.body.id = events.length + 1;
      events.push(req.body);

      return res.status(201).json({
        message: 'Event created successfully'
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
   * @returns {json}update a center
   * @memberof events
   */

  static updateEvent(req, res) {
    for (const event of events) {
      if (event.id === parseInt(req.params.eventId, 10)) {
        event.name        = req.body.name || event.name;
        event.startDate   = req.body.startDate || event.startDate;
        event.endDate     = req.body.endDate || event.endDate;
        event.time        = req.body.time || event.time;  
        event.center      = req.body.center || event.center;
        event.description = req.body.description || event.description;
      }
      return res.status(201).json({
        message: 'Event updated successfully',
        event,
      });
    }
    return res.status(404).json({
      message: 'Event not found'
    });
  }

  /**
   *
   * Delete Event
   * @param {any} req
   * @param {any} res
   * @returns {json}delete an event
   * @memberof events
   */

  static deleteEvent(req, res) {
    for (const event of events) {
      if (event.id === parseInt(req.params.eventId, 10)) {
        events.splice(event, 1);
      }
      return res.status(202).json({
        message: "Event deleted successfully"
      });
    }
    return res.status(400).json({
      message: "Event not found"
    });
  }
}

export default EventsController;
