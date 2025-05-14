# 🔐 Microservice d'Authentification - Back Office

Ce microservice permet de gérer l’authentification d’un seul utilisateur (TOI) pour le back office.  
Aucune base de données n’est utilisée : les informations sont stockées dans un fichier `.env`.

---

## 🚀 Fonctionnement

Le service expose **une seule route** d’authentification qui retourne un **token JWT** si les identifiants sont valides.

---

## 📦 Installation & Lancement

### Cloner le projet

    >   git clone <url-du-repo>

### Accéder au dossier du projet

    >   cd nom-du-dossier

### Installer les dépendances

    >   npm install

### Ajouter les variables d’environnement dans un fichier .env

    >   Crée un fichier `.env` à la racine du projet avec les informations suivantes :

```
PORT=4000
JWT_SECRET=test123
USER_EMAIL=email
USER_PASSWORD=test123
```

### Lancer les tests

    >   npm test

### Démarrer le serveur

    >   npm start

---

## 📡 Route disponible

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

## 👤 Utilisateur unique

_Ce service ne gère qu’un utilisateur unique, dont les identifiants sont définis dans `.env`._

---

## 🔒 Sécurité

_Ce service ne gèreMême si le service est simple, le token JWT est signé avec une clé secrète (`JWT_SECRET`). Assurez-vous de ne jamais commit le fichier `.env` dans un repo public._

---

## 📬 Remarques

Ce microservice est pensé pour être utilisé uniquement dans le contexte d'un **Back Office Local.**
Il renvoie simplement un token si les identifiants sont bons. À utiliser avec modération 😄

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
