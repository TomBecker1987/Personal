const express = require( 'express' )
const router = express.Router()
const model = require('../model/Save')
const DataToStore = model.Save;


//**********************************************************

router.post('/save/',function(req,res){
    let data = req.body.value
    let dataToStore = new DataToStore ({
        value: data
    })
    dataToStore.save()
    res.send(dataToStore)
})

router.get('/stored/', async function(req,res){
    let output = await DataToStore.find({})
    res.send(output.value)
})

//**********************************************************


module.exports = router