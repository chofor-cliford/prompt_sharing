<div align="center">
  <img src="https://raw.githubusercontent.com/chofor-cliford/prompt_sharing/5fb2936fc0aa28b0161f71720dd2051e4ffa99f6/public/assets/images/logo.svg" alt="Project Banner" width="150" height="150" style="image-rendering: crisp-edges;" />
  <h2 align="center"><strong>Share Prompt</strong></h2>

  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000" alt="Next.js" />
    <img src="https://img.shields.io/badge/-Mongodb-black?style=for-the-badge&logoColor=white&logo=mongodb&color=47A248" alt="mongodb" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center">An  AI Prompt Sharing App</h3>
  </div>


## 📖 <a name="table">Table of Contents</a>

1. ✏️ [Introduction](#introduction)
2. 💻 [Technologies](#tech)
3. ❇️ [Features](#features)
4. 👨‍💻 [Quick Start](#quick-start)


## <a name="introduction">✏️ Introduction</a>
Build a robust Next.js application that showcases Next.js features while implementing a comprehensive CRUD system for sharing AI prompts. The system should utilize MongoDB for data storage and integrate NextAuth for secure authentication.

## <a name="tech">💻 Technologies</a>

- Next.js
- MongoDB
- NextAuth
- TailwindCSS

## <a name="features">❇️ Features</a>

✅ **Modern Design with Glassmorphism Trend Style**: A modern and visually appealing design, incorporating the glassmorphism trend style for a sleek and contemporary appearance.

✅ **Discover and Share AI Prompts**: Allow users to discover AI prompts shared by the community and create their own prompts to share with the world.

✅ **Edit and Delete Created Prompts**: Users have the ability to edit their created prompts at any time and delete them when needed.

✅ **Profile Page**: Each user gets a dedicated profile page showcasing all the prompts they've created, providing an overview of their contributions.

✅ **View Other People's Profiles**: Users can explore the profiles of other creators to view the prompts they've shared, fostering a sense of community.

✅ **Copy to Clipboard**: Implement a convenient "Copy to Clipboard" functionality for users to easily copy the AI prompts for their use.

✅ **Search Prompts by Specific Tag**: Allow users to search for prompts based on specific tags, making it easier to find prompts related to specific topics.

✅ **Google Authentication using NextAuth**: Enable secure Google authentication using NextAuth, ensuring a streamlined and trustworthy login experience.

✅ **Responsive Website**: Develop a fully responsive website to ensure optimal user experience across various devices, from desktops to smartphones.

and many more, including code architecture and reusability.

## <a name="quick-start">👨‍💻 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/chofor-cliford/prompt_sharing.git
cd prompt_sharing
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
AUTH_SECRET=
AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=

MONGODB_URI=
```

Replace the placeholders with your actual credentials obtained by signing up on the corresponding websites[Google Cloud Console](https://console.cloud.google.com/welcome?rapt=AEjHL4MBaLLneW6OfAHf_zgms1eWZFw1wdy0_KIC4uh1nEqh2m4ojOvrXNlzJ4h7CZTkpiWgcsoHbUvS-FMdCP7WIkaVlPAeU7cnVR6Y0wJHeLMOtU6KAzA&project=promptopia-385410), and [MongoDB](https://www.mongodb.com/). 

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
