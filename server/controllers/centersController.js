import centers from '../models1/centers';

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
      centers,
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
    for(const center of centers){
      if(center.id === parseInt(req.params.centerId, 10)){
        return res.status(202).json({message: center})
      } 
    } 
    return res.status(404).json({
      message: 'Center not Found',
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
    if (req.body.name && req.body.location && req.body.facilities) {
      // create new event details from req.body
      const [newId, name, location, facilities] = [centers.length + 1, ...req.body];
      
      // push event details to events
      centers.push({ id: newId, name, location, facilities });
  
      return res.status(202).json({
        message: 'Centers created successfully',
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
    for (const center of centers){
      if (center.id === parseInt(req.params.centerId, 10)){
        center.name       = req.body.name || center.name;
        center.location   = req.body.location || centers.location;
        center.facilities = req.body.facilities || centers.facilities;
    
        return res.status(202).json({
          center,
          message: "Center updated successfully",
        });        
      } 
    }
    return res.status(404).json({
      message: 'Center not Found',
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
    for (const center of centers){
      if(center.id === parseInt(req.params.centerId, 10)){
        centers.splice(center, 1);
          return res.status(202).json({
            message: 'Center Deleted',
          });  
      }
    }
    return res.status(404).json({
      message: 'Center not Found',
    }); 
  }

}

export default CentersController;