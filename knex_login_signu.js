
const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'Pooja@123',
        database: 'knex_login'
    }
  })

//   knex.schema.createTable('login_tables', (table) => {
//     table.increments("id")  
//     table.string('username')
//       table.string('password')
//       table.string("email")
//     }).then(() => console.log("table created"))
//       .catch((err) => { console.log("already created")})


const request=require("readline-sync")
var user=request.question("enter a signup or login : ")
if (user=="signup"){
  var Username = request.question("enter a username :");
  var Password = request.question("enter a password :");
  var Email= request.question("enter a your email :");
  const cars = [
    { username:Username,password:Password ,email:Email},
]

knex('login_tables').insert(cars)
.then(() => console.log("signup successfully ","data inserted"))
    .catch((err) => { console.log("already inserted") })
}
else{
    if(user == "login"){
    var Password = request.question("enter your password :");
    var Email= request.question("enter a your email :");

    knex.from('login_tables').select("*")
    .then((results) => {
      // console.log(results)
      var found=results.find(function(user){     ///find function use for find elements of arry
        if (user.password==Password && user.email==Email ){
            // console.log("login",user)
            return user
        }
      })
        if (found){

          console.log("login successfully")
          // console.log(found)
          }else{
              console.log('User not found')
          }
  })
    .catch((err)=>{
      console.log(err)
    
})
}           
}


