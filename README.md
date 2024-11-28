# **Application de Gestion de Formations**

## **Description**

Cette application permet de gérer des formations à l'aide d'une interface moderne et intuitive. Elle inclut les fonctionnalités suivantes :

- Recherche de formations avec autocomplétion.
- Affichage des détails d'une formation dans une page dédiée.
- Ajout, modification et suppression des formations.
- Architecture basée sur **React** (frontend), **Express** (backend), **MongoDB** (base de données), et **Docker** (containerisation).

---

## **Fonctionnalités**

1. **Frontend (React + Vite)** :

   - Barre de recherche avec autocomplétion.
   - Formulaire pour ajouter une formation.
   - Page de détails avec suppression et modification.
   - Design épuré basé sur le **glass morphisme**.

2. **Backend (Express)** :

   - API REST avec les routes CRUD pour gérer les formations.
   - Intégration avec MongoDB pour le stockage des données.

3. **Containerisation (Docker)** :
   - Services **frontend**, **backend**, et **MongoDB** orchestrés avec Docker Compose.

---

## **Technologies utilisées**

- **Frontend** : React, Vite, React Router.
- **Backend** : Node.js, Express, Mongoose.
- **Base de données** : MongoDB.
- **Containerisation** : Docker, Docker Compose.

---

## **Prérequis**

- **Docker** : [Installer Docker](https://docs.docker.com/get-docker/)
- **Node.js** : Version 16 ou supérieure.
- **npm** ou **yarn** : Gestionnaire de paquets.

---

## **Installation et Exécution**

### **1. Clonez le dépôt**

```bash
git clone <URL_DU_DEPOT>
cd <NOM_DU_PROJET>
```

### **2. Configuration des variables d'environnement**

Créez un fichier `.env` à la racine et dans le dossier backend avec les informations suivantes :

**A la racine :**

```env

# Variables pour MongoDB
MONGO_URI=mongodb://mongo:27017/tutorialsdb

```

**Backend** (backend/.env)

```env
PORT=5000
MONGO_URI=mongodb://mongo:27017/tutorialsdb
```

### **3. Démarrage avec Docker**

1. Lancez tous les services (frontend, backend, MongoDB) :

   ```bash
   docker-compose up --build
   ```

2. Accédez aux services :
   - Frontend : [http://localhost:5173](http://localhost:5173)
   - Backend API : [http://localhost:5000/api/tutorials](http://localhost:5000/api/tutorials)

---

## **Structure du projet**

```plaintext
project-root/
├── backend/
│   ├── Dockerfile            # Dockerfile pour le backend
│   ├── .env                  # Configuration backend
│   ├── package.json          # Dépendances backend
│   ├── server.js             # Point d'entrée backend
│   ├── models/               # Modèles Mongoose
│   └── routes/               # Routes API Express
│
├── frontend/
│   ├── Dockerfile            # Dockerfile pour le frontend
│   ├── vite.config.js        # Configuration de Vite
│   ├── package.json          # Dépendances frontend
│   ├── src/
│   │   ├── components/       # Composants réutilisables
│   │   ├── pages/            # Pages principales
│   │   └── App.jsx           # Point d'entrée React
│
├── docker-compose.yml        # Orchestration des services
└── README.md                 # Documentation du projet
```

---

## API Endpoints

**Base URL :** [http://localhost:5000/api/tutorials](http://localhost:5000/api/tutorials)

### **API Endpoints**

**Base URL** : `http://localhost:5000/api/tutorials`

| Méthode    | Endpoint           | Description                       | Exemple d'entrée                                  |
| ---------- | ------------------ | --------------------------------- | ------------------------------------------------- |
| **GET**    | `/`                | Liste toutes les formations       |                                                   |
| **POST**   | `/`                | Ajoute une formation              | `{ "title": "React", "description": "Frontend" }` |
| **GET**    | `/:id`             | Détails d'une formation           |                                                   |
| **PUT**    | `/:id`             | Modifie une formation             | `{ "title": "React Updated" }`                    |
| **DELETE** | `/:id`             | Supprime une formation            |                                                   |
| **GET**    | `/search?q=motcle` | Recherche de formations par titre |                                                   |

---

## **Commandes utiles**

**Installer les dépendances**
Pour le frontend et le backend, exécutez ces commandes respectivement :

```bash
cd frontend
npm install

cd ../backend
npm install
```

**Démarrer localement sans Docker**

- Backend

```bash
cd backend
npm start
```

- Frontend

  ```bash
  cd backend
  npm start
  ```

---

## **Améliorations possibles**

- Ajouter une gestion utilisateur avec authentification (JWT).
- Pagination et filtres pour la liste des formations.
- Tests unitaires et d'intégration (Jest, React Testing Library).
