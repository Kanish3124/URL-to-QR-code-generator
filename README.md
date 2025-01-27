# URL to QR Code Generator

A simple Node.js application that takes a user-provided URL, generates a QR code from it, and saves the QR code as an image file. Additionally, the input URL is saved to a `.txt` file for reference.

## Features

- Accepts user input (URL) via the command line using `inquirer`.
- Generates QR codes in PNG format using the `qr-image` library.
- Saves the QR code image (`qr-img1.png`) and the URL to a text file (`URL1.txt`).
- Demonstrates the use of popular Node.js modules like `inquirer` and `qr-image`.

---

## Tech Stack

- **Node.js**: JavaScript runtime environment.
- **Inquirer.js**: For interactive command-line prompts.
- **qr-image**: For generating QR codes.
- **File System (fs)**: To write and save files.

---

## Prerequisites

Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (Node Package Manager)

---

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/Kanish3124/URL-to-QR-code-generator.git
   
2. Navigate to the project directory:
    ```bash
    cd URL-to-QR-code-generator

3. Install the required dependencies:
   ```bash
   npm install
   
## Usage

1. Start the application:
   ```bash
   node index.js

2. Enter a URL when prompted.
   
3. The following files will be generated:
      A QR code image saved as qr-img1.png
      The URL saved in a text file named URL1.txt

##  Instructions to Deploy on GitHub

1. Initialize a Git repository (if not already initialized):
   ```bash
   git init

2. Add a .gitignore file to exclude node_modules:
   ```bash
   echo "node_modules/" > .gitignore

3. Add all files to the repository:
   ```bash
   git add .

4. Commit the changes:
   ```bash
   git commit -m "Initial commit"

5. Create a new repository on GitHub (use the same name: URL-to-QR-code-generator).

6. Add the remote repository:
   ```bash
   git remote add origin https://github.com/Kanish3124/URL-to-QR-code-generator.git

7. Push your changes to the main branch:
   ```bash
   git branch -M main
   git push -u origin main

      
   
