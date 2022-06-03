const fs = require(`fs`);

const data = fs.readFileSync(`docs-id-by-name.txt`);

if (!data) {
    throw `Can't find docs file!`
}

const list = JSON.parse(data.toString());

list.forEach((item) => {
    const id = item[0];
    const title = item[1];
    fs.rename(`./folders/${id}`, `./folders/${title}`, (err) => {
        console.log(err);
    })
})