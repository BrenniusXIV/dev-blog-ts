export const testUsers = [
    {
        "email": "jaina@njo.org",
        "name": "Jaina Solo",
        "password": "deeztests123"
    }
]

export const testPosts = [
    {
        "title": "Test Post 1",
        "content": "# sql_cms\n\n![MIT](https://img.shields.io/badge/license-MIT-green.svg)\n\n[Repository](https://github.com/BrenniusXIV/sql_cms/)\n\n## Table of Contents\n  1. [sql_cms](#sql_cms)\n\n  2. [Description](#description)\n\n  3. [Installation](#installation)\n\n  4. [Usage](#usage)\n\n  5. [Issues](#issues)\n\n  6. [Contribution](#contribution)\n\n  7. [License](#license)\n\n  8. [Credits](#credits)\n\n  9. [Contact](#contact)\n\n  \n\n## Description\n > This is a Content Management System written with JavaScript, Inquirer, and other packages. It uses a MySQL server as its database.\n\n## Installation\n > Make sure you have installed MySQL and Node.js. 1. Clone the repo. 2. Before anything else, make sure you have root access to your MySQL server. Use the provided .sql files to import the Schema and Seeds. 3. Navigate to the app/ subfolder in the cloned repo, and run `npm i` to install dependencies. 4. Create a file called `config.env` in the app/ subfolder. Assign DB_USER, DB_HOST, and DB_PASS according to your MySQL specifications. e.g. DB_USER=root DB_HOST=localhost DB_PASS=yourpasswordhere 5. Once these are installed, you should be able to run `npm start` from the app/ folder and run the program.\n\n## Usage\n > The app is an inquirer-based command line interface. It will ask questions to which you provide answers. Avoid extra spaces or funky characters; while they may pose no threat to the stability of the app, it may provide unwanted input to your MySQL database.\n\n## Issues\n > Some of the logging to the console within the app is a little strange, because the logs run into the last line of the inquirer list prompt that serves as the main menu of the app. `index.js` contains some empty functions which I plan to add soon. Stay tuned!\n\n## Contribution\n > Feel free to make pull requests if you would like to try your hand at improving the way my app works, or if you find bugs or other issues you wish to have addressed.\n\n## License\n [MIT](https://choosealicense.com/licenses/mit/)\n\n\n    MIT License\n  \n    Copyright (c) [year] [fullname]\n    \n    Permission is hereby granted, free of charge, to any person obtaining a copy\n    of this software and associated documentation files (the \"Software\"), to deal\n    in the Software without restriction, including without limitation the rights\n    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n    copies of the Software, and to permit persons to whom the Software is\n    furnished to do so, subject to the following conditions:\n    \n    The above copyright notice and this permission notice shall be included in all\n    copies or substantial portions of the Software.\n    \n    THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n    SOFTWARE.\n\n## Credits\n > Thank you to all the authors of the packages used in this app. Without you, I could not have figured this out!\n\n## Contact\n > If you have questions about my project, please reach out to me on [GitHub](github.com/BrenniusXIV) or send me an e-mail at brentbaughan1@gmail.com.",
        "authorId": 1
    }
]