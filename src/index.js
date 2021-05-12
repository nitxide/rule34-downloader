let args = process.argv.slice(2);

let url = "https://api.r34.app/booru/gelbooru/posts?baseEndpoint=" + args[0]  + "&limit=" + args[1] + "&tags=" + process.argv.slice(4).join("+");

const fetch = require("node-fetch");
const request = require("request");
const path = require("path");
const fs = require("fs");

const download = async(uri, filename, callback) => {
    await request.head(uri, async(err, res, body) => {
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};

(async() => {
    await fetch(url).then(r => {
        r.json().then(data => {
            data.forEach(img => {
                let split = img.high_res_file.url.split(".")
                let ext = split[3];
                console.log(`starting download of file ${img.id.toString()}.${ext}`)
                
                download(img.high_res_file.url, path.join(__dirname, "/../out/" + img.id.toString() + `.${ext}`), function(){
                    console.log(`Downloaded file ${img.id.toString()}.${ext}`);
                });
            })
        })
    });
})()
