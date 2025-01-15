const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

const portfolioDir = path.join(__dirname, 'portfolio');

// Serve everything in the 'portfolio' folder
app.use(express.static(portfolioDir));

// Serve the notes.html file when accessing the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(portfolioDir, 'index.html'));
});

// Endpoint to get the TOC for the 'public' folder
app.get('/toc', (req, res) => {
    const publicDir = path.join(portfolioDir, 'public');
    const toc = getTOC(publicDir);
    res.json(toc);
});


function getTOC(dir) {
    let toc = [];

    const items = fs.readdirSync(dir);

    items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stats = fs.statSync(fullPath);

        if (stats.isDirectory()) {
            let folder = {
                name: item,
                files: [],
                subfolders: []
            };

            // Get markdown files directly in this folder
            const files = fs.readdirSync(fullPath);
            files.forEach(file => {
                const filePath = path.join(fullPath, file);
                if (fs.statSync(filePath).isFile() && file.endsWith('.md')) {
                    folder.files.push(file);
                }
            });

            // Don't allow nesting beyond the first level (limit to subfolders)
            const subItems = fs.readdirSync(fullPath);
            subItems.forEach(subItem => {
                const subFullPath = path.join(fullPath, subItem);
                if (fs.statSync(subFullPath).isDirectory()) {
                    // Do not recursively add subfolders beyond the first level
                    folder.subfolders.push({
                        name: subItem,
                        files: [],
                        subfolders: [] // No further nesting allowed
                    });
                }
            });

            toc.push(folder); // Add the folder to TOC
        } else if (item.endsWith('.md')) {
            toc.push({ name: item }); // Add standalone markdown files
        }
    });

    return toc;
}



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
