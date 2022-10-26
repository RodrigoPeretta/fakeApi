  const mainController = {};

  mainController.random = (req, res) => {
    var resp = {}
    
    if(req.params) resp.id = req.params.id;
    
    var isFinish = Math.random() < 0.1;
    resp.isFinished = isFinish;
    
    res.status(200).json(resp);
  }

  mainController.postNumber = (req, res) => {
    var ramdomID = Math.round(Math.random() * 100);
    var ramdomTimeoutResp = Math.random() * 10000;

    setTimeout(() => {
      res.status(200).json({id: ramdomID, data: req.body});
    }, ramdomTimeoutResp); 
  }


export default mainController;