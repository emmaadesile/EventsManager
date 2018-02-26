import centers from "../models1/centers";

class CentersController {
  /**
   * Get All Centers
   * @param {obj} req
   * @param {obj} res
   * @returns All the center in db
   * @memberof centerController
   */
  static getAllCenters(req, res) {
    return res.status(200).json({
      centers
    });
  }

  /**
   * @static Get a single center
   * @param {obj} req
   * @param {obj} res
   * @returns A single center
   * @memberof centerController
   */

  static getCenter(req, res) {
    for (const center of centers) {
      if (center.id === parseInt(req.params.centerId, 10)) {
        return res.status(200).json({ center });
      }
    }
    return res.status(404).json({
      message: "Center not Found"
    });
  }

  /**
   * @static Creates a new center
   * @param {obj} req
   * @param {obj} res
   * @returns Success message with the list of centers
   * @memberof centerController
   */

  static createCenter(req, res) {
    if (
      req.body.name &&
      req.body.capacity &&
      req.body.address &&
      req.body.area &&
      req.body.state &&
      req.body.facilities &&
      req.body.amount &&
      req.body.description
    ) {
      req.body.id = centers.length + 1;

      // push event details to events
      centers.push(req.body);

      return res.status(202).json({
        message: "Center created successfully"
      });
    }
    return res.status(400).json({
      message: 'Please fill in all required fields'
    });
  }

  /**
   * @static Update a center
   * @param {obj} req
   * @param {obj} res
   * @returns message and list of centers as the case may be
   * @memberof centerController
   */
  static updateCenter(req, res) {
    for (const center of centers) {
      if (
        center.id === parseInt(req.params.centerId, 10)) {
        center.name = req.body.name || center.name;
        center.capacity = req.body.capacity || center.capacity;
        center.address = req.body.address || center.address;
        center.area = req.body.area || center.area;
        center.state = req.body.state || center.state;
        center.amount = req.body.amount || center.amount;
        center.facilities = req.body.facilities || center.facilities;
        center.description = req.body.description || center.description;

        return res.status(204).json({
          center,
          message: 'Center updated successfully',
        });
      }
    }
    return res.status(404).json({
      message: 'Center not Found'
    });
  }

  /**
   * @static Delete an Event
   * @param {obj} req
   * @param {obj} res
   * @returns
   * @memberof centerController
   */

  static deleteCenter(req, res) {
    for (const center of centers) {
      if (center.id === parseInt(req.params.centerId, 10)) {
        centers.splice(center, 1);
        return res.status(202).json({
          message: 'Center Deleted'
        });
      }
    }
    return res.status(404).json({
      message: "Center not Found"
    });
  }
}

export default CentersController;
