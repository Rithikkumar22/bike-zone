# 🚴‍♂️ Bike Zone

Bike Zone is an online platform for browsing and purchasing bikes. Built with a **React.js frontend** and **Node.js backend**, it provides a seamless experience for users to explore different bike models and manage their wishlist.

---

## 🚀 Features
- 🏍️ Browse different bike brands and models
- 🛒 Add bikes to wishlist/cart
- 🔐 User authentication (login/signup/logout)
- 🛠️ Admin panel for product management (optional)
- 📦 Backend API with MongoDB database
- ⚡ Fast and responsive UI with React.js

---

## 🏗️ Tech Stack
- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MYSQL
- **Authentication:** JWT (JSON Web Tokens)

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Rithikkumar22/bike-zone.git
cd bike-zone
```

### 2️⃣ Install Dependencies
#### For Frontend
\`\`\`bash
cd frontend
npm install
\`\`\`

#### For Backend
\`\`\`bash
cd server
npm install
\`\`\`

### 3️⃣ Set Up Environment Variables
Create a \`.env\` file in the \`server\` folder and add:
\`\`\`env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
\`\`\`

### 4️⃣ Start the Project
#### Start Backend Server
\`\`\`bash
cd server
npm start
\`\`\`

#### Start Frontend
\`\`\`bash
cd frontend
npm start
\`\`\`

Now, the frontend should be running at \`http://localhost:3000\` and the backend at \`http://localhost:5000\`.

---

## 🛠️ API Routes (Backend)
| Method | Endpoint          | Description               |
|--------|------------------|---------------------------|
| GET    | /api/products    | Get all bike products    |
| POST   | /api/auth/signup | Register a new user      |
| POST   | /api/auth/login  | Authenticate user        |
| GET    | /api/wishlist    | Get user's wishlist      |

---

## 📸 Screenshots
(Add screenshots of your app here)

---

## 📌 Contributing
1. Fork the repository
2. Create a new branch (\`git checkout -b feature-branch\`)
3. Commit your changes (\`git commit -m 'Add new feature'\`)
4. Push to the branch (\`git push origin feature-branch\`)
5. Open a pull request

---

## 📜 License
This project is licensed under the MIT License.

---

### ✨ Created by [Rithikkumar22](https://github.com/Rithikkumar22)

