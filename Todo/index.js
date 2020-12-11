module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    context.res = {
        status: 202, /* Defaults to 200 */
        // headers: {
            // 'Access-Control-Allow-Origin': '*'
            // 'Access-Control-Allow-Methods': 'GET,POST,PATCH,DELETE,PUT,OPTIONS',
            // 'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, content-type',
            // 'Content-Type': 'application/json'
        //   },
        body: 'Hello Node'
    };
};