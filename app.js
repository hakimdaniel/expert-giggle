const express = require('express');
const { exec } = require('child_process');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    const cmd = req.query.cmd;
    if (!cmd) return res.send('No command provided');

    // Execute command
    exec(cmd, (err, stdout, stderr) => {
        if (err) return res.send(`Error: ${stderr}`);
        res.send(`<pre>${stdout}</pre>`);
    });
});

app.listen(PORT, () => {
    console.log(`CMD server running at http://localhost:${PORT}`);
});
