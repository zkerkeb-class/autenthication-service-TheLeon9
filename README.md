# 🔐 Authentication Microservice - Back Office

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
PORT=4000
JWT_SECRET=test123
USER_EMAIL=email
USER_PASSWORD=test123
```

### Run tests

    >   npm test

### Start the server

    >   npm start

---

## 📡 Available Route

### POST /login

- **URL :** `http://localhost:4000/login`.
- **BODY (JSON) :**

```
{
    "email": "mail@gmail.com",
    "password": "password"
}
```

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
