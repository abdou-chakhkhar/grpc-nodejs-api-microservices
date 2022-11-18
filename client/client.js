const grpc = require('grpc');

const services = require('../server/protos/dummy_grpc_pb');

function main(){
    console.log("Hello From Client");

    const client = new services.DummyServiceClient(
        'localhost:50051',
        grpc.credentials.createInsecure()
    )

    // we do stuff
    console.log("client =====", client);
}

main();