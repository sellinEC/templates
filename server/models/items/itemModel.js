const mongodb = require('mongoose');
const Item = require('./itemSchema');

//Get all
exports.getItems = (req, res) => {
  Item.find()
  .then(data => res.status(200).json(data))
  .catch(err => res.status(500).json(err))
}

//Get one
exports.getItem = (req, res) => {
  Item.exists({ _id: req.params.id }, (err, result) => {
    if(err) {
      return res.status(400).json(err)
    } else {
      if(result) {
        Item.findById(req.params.id)
        .then(item => res.status(200).json(item))
        .catch(err => res.status(500).json(err))
      } else {
        return res.status(404).json({
          statusCode: 404,
          status: false,
          message: 'Item does not exist'
        })
      }
    }
  })
}

exports.createItem = (req, res) => {
  Item.exists({ name: req.body.name}, (err, result) => {
    if(err) {
      return res.status(500).json(err)
    } else {
      if(result) {
        return res.status(400).json({
          statusCode: 400,
          status: false,
          message: 'Item already exist'
        })
      }
      //byggs utifrån Schema (utan created/updated)
      const newItem = new Item({
        name: req.body.name,
        attribut: req.body.attribut,
        enaEllerAndra: req.body.enaEllerAndra
      })

      newItem.save()
        .then(() => {
          res.status(201).json({
            statusCode: 201,
            status: true,
            message: 'Item created'
          })
        })
        .catch((err) => {
          res.status(500).json({
            statusCode: 500,
            status: false,
            message: 'Item not created'
          })
        })
    }
  })
}

exports.updateItem = (req, res) => {

  Item.exists({ _id: req.params.id }, (err, result) => {
    if(err) {
      return res.status(400).json(err)
    } else {

      if(result) {

        Item.updateOne({ _id: req.params.id }, {
          ...req.body,
          modified: Date.now()
        })
        .then(() => {
          res.status(200).json({
            statusCode: 200,
            status: true,
            message: 'Item updated'
          })
        })
        .catch(() => {
          res.status(500).json({
            statusCode: 500,
            status: false,
            message: 'Item not updated'
          })
        })
      } else {
        return res.status(404).json({
          statusCode: 404,
          status: false,
          message: 'Item doesnt exist'
        })
      }
    }
  })
};

exports.deleteItem = (req, res) => {
  Item.exists({ _id: req.params.id }, (err, result) => {
    if(err) {
      return res.status(400).json(err)
    } else {
      if(result) {
        Item.deleteOne({ _id: req.params.id })
        .then(() => {
          res.status(200).json({
            statusCode: 200,
            status: true,
            message: 'Item deleted'
          })
        })
        .catch(() => {
          res.status(500).json({
            statusCode: 500,
            status: false,
            message: 'Item not deleted'
          })
        })
      } else {
        return res.status(404).json({
          statusCode: 404,
          status: false,
          message: 'Item dont exist'
        })
      }
    }
  })
}