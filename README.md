# 🔐 Authentication Microservice - BackEnd

This microservice handles authentication for a **single user (YOU)** within the back office.  
No database is used — credentials are stored in a `.env` file.

---

## 🚀 How It Works

The service exposes **a single authentication route** that returns a **JWT token** if the credentials are valid.

---

## 📦 Installation & Launch

### Clone the project

    >   git clone <repo-url>

### Navigate to the project folder

    >   cd project-folder-name

### Install dependencies

    >   npm install

### Add environment variables

Create a `.env` file at the root of the project with the following content :

```
PORT=port
JWT_SECRET=yourjwtsecret
USER_EMAIL=youremail
USER_PASSWORD=yourpassword
```

### Run tests

    >   npm test

### Start the server

    >   npm start

---

## 📡 Available Route

### POST /login

- **URL :** `http://localhost:port/login`.
- **BODY (JSON) :**

```
{
    "email": "mail@gmail.com",
    "password": "password"
}
```

---

## 🎴 Technologies Used

- ⚛️[**Express**](https://expressjs.com/): A minimal and flexible Node.js web application framework for building APIs and web applications.
- ⚛️[**bcryptjs**](https://www.npmjs.com/package/bcryptjs): A library to hash passwords securely.
- ⚛️[**jsonwebtoken (JWT)**](https://www.npmjs.com/package/jsonwebtoken): Used to implement secure authentication using JSON Web Tokens.
- ⚛️[**CORS**](https://www.npmjs.com/package/cors): Middleware for enabling Cross-Origin Resource Sharing.
- ⚛️[**dotenv**](https://www.npmjs.com/package/dotenv): Loads environment variables from a `.env` file into process `.env`.

---

## 👤 Single User

_This service handles only one **user**, whose credentials are defined in the`.env` file._

---

## 🔒 Security

_Even though the service is simple, the JWT token is signed with a secret key (`JWT_SECRET`). Make sure to **never** commit your `.env` file to a public repository._

---

## 📬 Notes

This microservice is designed to be used only in a **local Back Office context**.

It simply returns a token if the credentials are correct. Use with care 😄

---

## 🏯 License

This project is licensed under the [MIT License](LICENSE.md) - share, modify, live in peace! ☠️

---

## 🗺️ Contact

For any inquiries, suggestions, or collaboration opportunities, don't hesitate to contact me. 📜

---

## 🧑🏻‍💻 Author

Created by TheLeon 🦁.

> "Creativity is intelligence having fun." - Albert Einstein ☄️

Thanks for visiting my github! 🩵

And as we say in France : Merci ! 💙🤍❤️
