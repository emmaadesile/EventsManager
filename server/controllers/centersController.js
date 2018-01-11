import centers from '../models1/centers';

class centersController {
  /**
   * 
   * 
   * Get All Centers
   * @param {obj} req 
   * @param {obj} res 
   * @returns All the center in db
   * @memberof centerController
   */
  static getAllCenters(req, res) {
    return res.status(200).json({
      centers,
      status: 'success'
    });   
  }
  
  /**
   * 
   * 
   * @static Get a single center
   * @param {obj} req 
   * @param {obj} res 
   * @returns A single center
   * @memberof centerController
   */
  static getSingleCenter(req, res) {
    for (let i=0; i < centers.length; i++){
      if(centers[i].id === parseInt(req.params.id, 10)){
        return res.json({
          message: centers[i],
          error: false 
        });  
      } 
    } 
    return res.status(404).json({
      message: "Center not Found",
      error: true  
    }); 
  }
    ;
  /**
   * 
   * 
   * @static Creates a new center
   * @param {obj} req 
   * @param {obj} res 
   * @returns Success message with the list of centers
   * @memberof centerController
   */
  static postCenter(req, res) {
    if((!req.body.name) || (!req.body.location) || (!req.body.facilities)){
      return res.json({
        message: centers,
        error: true
      });
    }
    const newId = centers.length + 1;
    const name = req.body.name;
    const location = req.body.location;
    const facilities = req.body.facilities;
    const description = req.body.description;

    centers.push({
      id: newId,
      name,
      location,
      facilities,
      description
    });
    return res.json({
      message: "success",
      error: false,
      centers
    }); 
  }

  /**
  * 
  * 
  * @static Update a center
  * @param {obj} req 
  * @param {obj} res 
  * @returns message and list of centers as the case may be
  * @memberof centerController
  */
  static updateCenter(req, res) {
    for (const center of centers){
      if (centers.id === parseInt(req.params.id, 10)){
        center.name = req.body.name || center.name;
        center.location = req.body.location || centers.location;
        center.facilities = req.body.facilities || centers.facilities;
        center.description = req.body.description || center.description;  
    
        return res.json({
          message: "Center updated successfully",
          error: false,
          centers
        });        
      } 
    }
    return res.status(404).json({
      message: "Center not Found",
      error: true
    }); 
  }    
    
  /**
   * 
   * 
   * @static Delete an Event
   * @param {obj} req 
   * @param {obj} res 
   * @returns  
   * @memberof centerController
   */
  static deleteCenter(req, res) {
    for (const center of centers){
      if(centers.id === parseInt(req.params.id, 10)){
        centers.splice(i,1);
          return res.json({
            message: "Center Deleted",
            error: false
          });  
      }
    }
    return res.status(404).json({
      message: "Center not Found",
      error: true
    }); 
  }

}

export default centersController;