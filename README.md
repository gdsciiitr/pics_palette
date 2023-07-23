# Pics Palette - A Social Mates Place

![picture-book-iiitr vercel app_](https://github.com/noobmaster432/pics_palette/assets/103204431/2c2a4ba3-ca36-4c04-a35f-7daa651a3f07)

Pics Palette is a full-stack social media application built using ReactJS, Redux Toolkit, Bootstrap, Node.js, MongoDB, bcryptjs, Cloudinary, Multer, and Nodemailer. The application allows users to share their experiences by posting pictures along with captivating stories, and other users can interact with these posts by liking and commenting on them. Additionally, Pics Palette provides a search functionality and allows users to categorize posts based on various tags.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

In today's digital world, sharing experiences and memories with others has become a significant part of our lives. Pics Palette aims to provide a platform where users can showcase their favorite moments and engage with the experiences shared by others. Whether it's a breathtaking landscape, a heartwarming family gathering, or an adventurous journey, Pics Palette allows users to connect through the power of visuals and stories.

## Features

- **User Authentication:** Users can sign up, log in, and securely access their accounts to start sharing and interacting with posts.

- **Create and Edit Posts:** Users can create new posts by uploading images, writing stories, and adding relevant tags. They can also edit or delete their existing posts.

- **Interact with Posts:** Other users can like and comment on the posts to show appreciation or share thoughts.

- **Search Posts:** Users can search for specific posts by using keywords or tags.

- **Post Categorization:** Users can categorize their posts based on different tags, making it easier for others to discover relevant content.

- **Cloudinary Integration:** Uploaded images are stored on Cloudinary, ensuring reliable and scalable image hosting.

- **Password Hashing:** User passwords are securely hashed using bcryptjs to safeguard sensitive information.

- **Email Notifications:** Nodemailer is used to send email notifications for account verification and other important updates.

## Technologies Used

- Frontend:
  - ReactJS
  - Redux Toolkit (State Management)
  - Bootstrap (CSS Framework)

- Backend:
  - Node.js (Runtime Environment)
  - Express.js (Web Application Framework)
  - MongoDB (Database)
  - bcryptjs (Password Hashing)
  - Multer (File Uploads)
  - Nodemailer (Email Notifications)

- Cloud Services:
  - Cloudinary (Image Storage)

## Installation

To run Pics Palette locally on your machine, follow these steps:

1. Clone the repository: `git clone <repository_url>`
2. Navigate to the project directory: `cd pics-palette`
3. Install dependencies for both frontend and backend:
   ```
   cd frontend
   npm install
   cd ../backend
   npm install
   ```
4. Create a `.env` file in the `backend` directory and provide the necessary environment variables (e.g., MongoDB connection URL, Cloudinary credentials, email configuration).

## Usage

1. Start the backend server:
   ```
   cd backend
   npm start
   ```

2. Start the frontend development server:
   ```
   cd frontend
   npm start
   ```

3. Open your web browser and access the application at `http://localhost:3000`.

## Contributing

We welcome contributions to enhance the functionality of Pics Palette.

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute the code as per the terms.
