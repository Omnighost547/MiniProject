const {google} = require('googleapis');

// https://github.com/googleapis/google-api-nodejs-client#first-example

// Each API may support multiple version. With this sample, we're getting
// v3 of the blogger API, and using an API key to authenticate.
const blogger = google.blogger({
    version: 'v3',
    auth: 'AIzaSyBWH4Rc79qLlk59eD3kX4OzykOUFbG_5JE'
});

const params = {
    blogId: '3213900'
};

// get the blog details
// This link: https://stackoverflow.com/a/47242790/8705827
// Is probably the solution
var getBlog = function (callback) {
    blogger.blogs.get(params, (err, res) => {
        if (err) {
            console.error(err);
            return callback(err);
        }
        console.log(`The blog url is ${res.data.url}`);
        callback(res.data.url);
    });
    callback(null, aThing.toString());
};

module.exports.getBlog = getBlog;
module.exports.params = params;
