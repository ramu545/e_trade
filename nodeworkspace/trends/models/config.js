const port = 3030;
const host = '127.0.0.1';
//const dburl = 'mongodb://ds139775.mlab.com:39775/trends';
const dbauth = 'trends';
const user = 'trends1';
const pass = 'trends1';
const dburl='mongodb://trends121:trends121@ds139775.mlab.com:39775/trends';
const signature = 'jsonwebtokensignature';
module.exports = {
    port:port,
    host:host,
    dburl:dburl,
    dbauth:dbauth,
    pass:pass,
    user:user,
    signature:signature
}