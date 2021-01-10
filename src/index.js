let args = process.argv.slice(2)
let url = "https://api.r34.app/booru/gelbooru/posts?domain=rule34.xxx&limit=" + args[0] + "&pid=0&tags=" + process.argv.slice(3).join("+")


const axios = require("axios").default;
const request = require("request");
const path = require("path");
const fs = require("fs");

const download = async(uri, filename, callback) => {
    await request.head(uri, async(err, res, body) => {
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};

(async() => {
    await axios.get(url).then(r => {
        console.log(url)
        r.data.forEach(img => {
            let split = img.high_res_file.url.split(".")
            let ext = split[3];

            download(img.high_res_file.url, path.join(__dirname, "/../out/" + img.id.toString() + `.${ext}`), function(){
                console.log('done');
            });
        });
    });
})()