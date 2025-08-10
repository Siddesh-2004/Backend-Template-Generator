Backend-Template-Generator
A simple CLI tool to quickly generate a production-ready backend boilerplate with a well-structured folder setup, essential configuration files, and built-in support for MongoDB, file uploads (Multer + Cloudinary), and other backend essentials — so you can focus on core functionalities instead of repetitive setup.

✨ Features
Production-ready folder structure

Pre-configured with:

Express.js

Mongoose

Multer for file uploads

Cloudinary integration

CORS and dotenv support

CLI-based — generate your backend in seconds

Saves time for backend developers

📦 Tech Stack
Node.js

Express.js

Mongoose

Multer

Cloudinary

CORS

dotenv

🔧 Installation
Clone the repository

git clone https://github.com/yourusername/Backend-Template-Generator.git
Navigate to the project folder

cd Backend-Template-Generator
Install dependencies

npm install
⚙️ Environment Variables
Create a .env file in the root directory of your generated backend and add the following:

PORT=
MONGO_URI=
CORSORIGIN=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
🚀 Usage
Run the following command in your terminal:

node index.js <destination-path>
Example:

node index.js ./my-backend
This will create the backend boilerplate in the specified folder.
