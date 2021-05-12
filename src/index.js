let args = process.argv.slice(2);

let url = "https://api.r34.app/booru/gelbooru/posts?baseEndpoint=" + args[0]  + "&limit=" + args[1] + "&pid=0&tags=" + process.argv.slice(4).join("+") + "&tagsEndpoint=%2Fautocomplete.php&defaultQueryIdentifiersTagsTag=q&defaultQueryIdentifiersTagsTagEnding=";

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
        r.data.forEach(img => {
            let split = img.high_res_file.url.split(".")
            let ext = split[3];

            download(img.high_res_file.url, path.join(__dirname, "/../out/" + img.id.toString() + `.${ext}`), function(){
                console.log('done');
            });
        });
    });
})()
