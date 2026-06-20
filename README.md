# Notes App Frontend

Frontend for a full-stack Notes Management Application built using React and Vite.

The application allows users to securely create, edit, organize, pin, search, and delete notes through an intuitive and responsive interface.

## Live Demo

Frontend: https://your-vercel-url.vercel.app

## Features

* User Registration & Login
* JWT-Based Authentication
* Create Notes
* Edit Notes
* Delete Notes
* Pin/Unpin Important Notes
* Add Tags to Notes
* Search Notes
* Responsive Design
* Protected Routes

## Tech Stack

* React.js
* Vite
* Axios
* React Router DOM
* CSS

## Project Structure

```bash
src/
├── pages/
│   ├── SignUp/
│   ├── Login/
│   ├── Home/
│   └── Error/
│
├── components/
│   ├── Navbar.jsx
│   ├── Profile.jsx
│   ├── SearchBar.jsx
│   ├── Notescard.jsx
│   ├── Tags.jsx
│   └── Addedit.jsx
│
├── helper/
│   ├── axiosInstance.js
│   ├── constant.js
│   ├── checkEmail.js
│   └── getInitial.js
│
├── App.jsx
├── main.jsx
└── index.css
```

## Installation

Clone the repository:

```bash
git clone <frontend-repository-url>
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

## Environment Variables

Create a `.env` file:

```env
VITE_API_URL=http://localhost:8000
```

## Backend Repository

https://github.com/yourusername/notes-backend

## Future Improvements

* Dark Mode
* Rich Text Editor
* Archive Notes
* Export Notes
* Note Categories

## Author

Nikhil Kumar
