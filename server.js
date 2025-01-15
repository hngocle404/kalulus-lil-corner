const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 4040;

app.use(express.static(path.join(__dirname))); // Serve static files

// Endpoint to get contents of markdown files
app.get('/api/contents', (req, res) => {
    const notesPath = path.join(__dirname, 'notes');
    const contents = getFilesInDirectory(notesPath);
    res.json(contents);
});

// Function to get all markdown files in the directory
function getFilesInDirectory(dirPath) {
    const files = fs.readdirSync(dirPath);
    const fileList = [];

    files.forEach(file => {
        const fullPath = path.join(dirPath, file);
        const stats = fs.statSync(fullPath);

        if (stats.isDirectory()) {
            const subFiles = getFilesInDirectory(fullPath);
            subFiles.forEach(subFile => {
                fileList.push({
                    name: subFile.name,
                    path: path.join(file, subFile.name)
                });
            });
        } else if (stats.isFile() && file.endsWith('.md')) {
            fileList.push({
                name: file,
                path: path.relative(dirPath, fullPath)
            });
        }
    });

    return fileList;
}

// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
