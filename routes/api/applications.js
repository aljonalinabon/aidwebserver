const express = require('express');
const router = express.Router();
const applications = require('../../Applications');
const uuid = require('uuid');

router.get('/', (req, res) => res.json(applications)); 

router.get('/:id', (req, res) => {
  const found =  applications.some(application => application.id == req.params.id);
  if (found) { 
    res.json(applications.filter(application => application.id == req.params.id));
  } else {
    res.status(400).json({msg: `No application with ID ${req.params.id}.`});
  }
})

router.post('/', (req, res) => {
  console.log(req.body);
  // const references = [...req.body.references];

  const newApplication = {
    id: uuid.v4(),
    name: req.body.name,
    project_name: req.body.project_name,
    project_type: req.body.project_type,
    version: req.body.version,
    description: req.body.description,
    sales_company: req.body.sales_company,
    customer_name: req.body.customer_name,
    dev_status: req.body.dev_status,
    dev_remarks: req.body.dev_remarks
  }

  if(!newApplication.name) {
    return res.status(400).json({msg: 'Please include name'});
  }

  applications.push(newApplication);
  res.json(applications);
});

router.put('/:id', (req, res) => {
  const found =  applications.some(application => application.id == req.params.id);
  if (found) { 
    const updateApplication = req.body;
    applications.forEach(application => {
      if(application.id == req.params.id) {
        
        application.name= updateApplication.name ? updateApplication.name : application.name;
        application.project_name= updateApplication.project_name ? updateApplication.project_name : application.project_name;
        application.project_type= updateApplication.project_type ? updateApplication.project_type : application.project_type;
        application.version= updateApplication.version ? updateApplication.version : application.version;
        application.base_application= updateApplication.base_application ? updateApplication.base_application : application.base_application;
        application.sales_company= updateApplication.sales_company ? updateApplication.sales_company : application.sales_company;
        application.customer_name= updateApplication.customer_name ? updateApplication.customer_name : application.customer_name;
        application.dev_status= updateApplication.dev_status ? updateApplication.dev_status : application.dev_status;
        application.dev_remarks= updateApplication.dev_remarks ? updateApplication.dev_remarks : application.dev_remarks;
        application.description= updateApplication.description ? updateApplication.description : application.description;
        application.references= updateApplication.references ? updateApplication.references : application.references;
        application.features= updateApplication.features ? updateApplication.features : application.features;
        application.functions= updateApplication.functions ? updateApplication.functions : application.functions;
        application.target_device= updateApplication.target_device ? updateApplication.target_device : application.target_device;
        application.others= updateApplication.others ? updateApplication.others : application.others;

        res.json({ msg: 'Successfully updated', application});
      }
    });
  } else {
    res.status(400).json({msg: `No application with ID ${req.params.id}.`});
  }
})

router.delete('/:id', (req, res) => {
  const found =  applications.some(application => application.id == req.params.id);
  if (found) { 
    res.json({
      msg: 'Application deleted',
      applications: applications.filter(application => application.id != req.params.id)
    });
  } else {
    res.status(400).json({msg: `No application with ID ${req.params.id}.`});
  }
})


module.exports = router;