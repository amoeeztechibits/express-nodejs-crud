
const db  = require('../models/index.js')


const User = db?.User;


const index = async (request,response) => {
    let users = await User.findAll({})    
    response.send(users)
}

const store = async (request,response) => {    
    
    let data={
        name:request.body.name,
        email:request.body.email,
        password:request.body.password,
        status:request.body.status

    }
    const store = await User.create(data)
    response.status(200).send(store)
}

const show = async (request,response) => {    
    let id = request.params.id
    const show = await User.findOne({where: {id:id}})
    response.status(200).send(show)
}

const update = async (request,response) => {        
    let data={
        name:request.body.name,
        email:request.body.email,
        password:request.body.password,
        status:request.body.status

    }
    let id = request.params.id;
    const update = await User.update(data,{where: {id:id}})
    response.status(200).send(update)
}

const destroy = async (request,response) => {    
    let id = request.params.id
    await User.destroy({where: {id:id}})
    response.status(200).send(`User id ${id} is deleted successfully`)
}

module.exports ={
    index,
    store,
    show,
    update,
    destroy
}