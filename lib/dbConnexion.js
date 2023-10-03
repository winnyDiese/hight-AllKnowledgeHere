const { default: mongoose } = require("mongoose")


const dbConnexion = async ()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/NextJS13')
        // console.log('Connexion succefull')
    } catch (error) {
        console.log(error)
    }
}

export default dbConnexion
