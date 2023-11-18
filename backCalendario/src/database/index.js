const mongoose =  require('mongoose')
let conecta = 'mongodb+srv://jhonprevitera:jhonprevitera@cluster0.kkzzawy.mongodb.net/?retryWrites=true&w=majority'

async function main(){
    mongoose.connect(conecta);
    console.log('concetadoo ;]');
}

main().catch(err=>console.log(err));

mongoose.Promise = global.Promise;

module.exports = mongoose