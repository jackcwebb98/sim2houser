module.exports = {
  getAll: (req, res) => {
    const db = req.app.get('db')

    db.get_all_houses().then(resp => {
      console.log(resp)
      res.status(200).send(resp)
    })
  },
  addHouse: (req, res) => {
    const db = req.app.get('db')
    const {name, address, city, state, zip} = req.body

    db.new_house([name, address, city, state, zip]).then(resp =>{
      res.status(200).send("Property Added!")
    })

  },
  deleteProperty: (req, res) => {
    const db = req.app.get('db')
    const {id} = req.params

    db.delete_property([id]).then(() => {
      db.get_all_houses().then(resp => {
        res.status(200).send(resp)
      })
    })


  }

}