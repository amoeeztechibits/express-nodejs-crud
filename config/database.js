module.exports ={
    HOST:'localhost',
    USER:'root',
    PASSWORD:'resTeam!',
    DB:'UserCrud',
    dialect:'mysql',
    pool: {
        max:5,
        min:0,
        acquire:30000, //millisecond Also skip if want
        idle:10000  //millisecond Also skip if want
    }
}