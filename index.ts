import express from 'express';

import fs from 'fs'
const PORT: number = 60569;
const app: express.Application = express();

app.use(express.json());

let savePath: string = `/home/faraz/Desktop/cp/input.txt`

app.post('/', (req, res) => {

    const data: any = req.body;
    console.log(`Problem name: ${data.name} Parsed!`);

    const tests: Array<any> = data.tests;

    fs.writeFileSync(savePath, '')
    for (let test of tests) {
        fs.appendFileSync(savePath, test.input)
        fs.appendFileSync(savePath, "\n")
    }
    res.sendStatus(200);

});

try {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
} catch (error: any) {
    console.error(error);
    process.exit(1);
}