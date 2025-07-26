
# Portfolio by Basit Ali in React

A sleek, futuristic portfolio template for developers – built with **React** and **Bootstrap 5**.

## Overview

This is a lightweight and fully responsive portfolio template designed to showcase my skills, experience, and projects as a web developer. It includes multi-language support, dark and light theme options, and various components to highlight my work.

### Key Features
- Lightweight and fully responsive, adapting seamlessly to mobile screens.
- Multi-language support for English, Spanish, French, and Korean.
- Dark and light theme options for a personalized look.
- Components to display work experience, education, skills, portfolio, and more.
- Uses **Vite** for fast packaging.
- Contact form powered by **EmailJS** – no backend required!

## Installation

Follow these steps to set up and run the project locally:

1. **Clone the Repository**:
   ```
   git clone https://github.com/basitaliyousafzai/my-portfolio.git
   ```

2. **Navigate to the Project Directory**:
   ```
   cd my-portfolio
   ```

3. **Install Dependencies**:
   - Ensure you have Node.js installed (download from [nodejs.org](https://nodejs.org/) if needed).
   - Run:
     ```
     npm install
     ```

4. **Run in Developer Mode**:
   - Start the development server:
     ```
     npm run dev
     ```
   - Open your browser to `http://localhost:5173` (or the port Vite assigns) to see the portfolio.

5. **Disable Preloader (Optional)**:
   - To skip the preload animation during development, edit `public/data/settings.json`:
     ```json
     "preloader": {
         "enabled": false
     }
     ```

## Functionality

This portfolio includes the following features:
- **About Me**: A brief introduction with contact details (email, GitHub).
- **Resume Download**: A button to view and download my resume as a PDF.
- **Testimonials**: Feedback from team leads and clients about my work.
- **Personal Interests**: A showcase of my physical activities and programming hobbies.
- **Contact Form**: Send messages directly to my Gmail (`basitaliyousafzai786@gmail.com`) via EmailJS.
- **Responsive Design**: Smooth transitions and a tabbed mobile interface with bottom navigation.

## Customization

### 1. Changing Content
- Edit JSON files in `public/data/sections/` (e.g., `cover.json`, `contact.json`) to update text and structure.
- Modify images in `public/images/` if needed.

### 2. Adjusting Colors
- Customize theme colors in `src/styles/_variables.scss` by editing SCSS variables.

### 3. Adding/Removing Languages
- Update `public/data/settings.json` under `supportedLanguages` to add or remove languages (e.g., keep only English to hide the language picker).

### 4. Modifying Sections
- Edit `public/data/structure.json` to add, remove, or reorder sections (e.g., `"about"`, `"contact"`).

### 5. Contact Form Configuration
- Uses EmailJS to send emails without a backend.
- Keys are set in `public/data/settings.json`:
  ```json
  "emailjs": {
      "publicKey": "0gaqaBlrVbiYYMWSh",
      "serviceId": "service_vofk0ie",
      "templateId": "template_njm6cyf"
  }
  ```
- Messages are sent to `basitaliyousafzai786@gmail.com`.

## Deployment

1. **Set Base Directory**:
   - Open `vite.config.js` and adjust the `base` field:
     - For GitHub Pages: `base: '/my-portfolio/'` (matches repo name).
     - For Netlify/custom domain: `base: '/'`.
     ```javascript
     // vite.config.js
     import { defineConfig } from 'vite';
     import react from '@vitejs/plugin-react';

     export default defineConfig({
       base: '/my-portfolio/', // Adjust as needed
       plugins: [react()]
     });
     ```

2. **Build for Production**:
   - Run:
     ```
     npm run build
     ```
   - This creates a `dist/` folder with production-ready files.

3. **Push to GitHub**:
   - Commit and push changes:
     ```
     git add .
     git commit -m "Update portfolio content"
     git push origin main
     ```

4. **Deploy to Netlify**:
   - Log in to [Netlify](https://www.netlify.com/).
   - Click `Add new site` > `Import an existing project`.
   - Connect to GitHub and select `basitaliyousafzai/my-portfolio`.
   - Set:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click `Deploy site`.
   - Once deployed, get your URL (e.g., `https://basit-portfolio.netlify.app`).

## About

This template was created and is maintained by **Basit Ali**. It’s built with:
- **React**: For dynamic UI components.
- **Bootstrap 5**: For responsive styling.
- **Vite**: For fast development and builds.
- **EmailJS**: For client-side email functionality.

Additional libraries:
- **Font Awesome**: For icons.
- **React-Bootstrap**: For layout components.

## License

Released under the [Basit Ali](https://opensource.org/licenses/MIT). Feel free to use and modify it as you wish.

If you find this template helpful, give it a ⭐ on GitHub!

---

### Key Changes Made
1. **Ownership**: Changed all references from Ryan Balieiro to Basit Ali.
2. **Repository**: Updated to `basitaliyousafzai/my-portfolio`.
3. **Screenshots**: Removed all screenshot references and demo links.
4. **Content**: Focused on your specific functionality (e.g., resume button, contact form to your Gmail).
5. **Keys**: Included your EmailJS keys in the contact form section (hardcoded for simplicity—move to `.env` for production).
6. **Simplified**: Kept only instructions to run and deploy, plus core functionality.

### Baby Steps to Use This README
1. **Create README.md**:
   - In your project folder (`my-portfolio`), create a file named `README.md`.
   - Open it in VS Code or a text editor.

2. **Copy-Paste**:
   - Copy the above text and paste it into `README.md`.
   - Save the file.

3. **Commit and Push**:
   - In your terminal:
     ```
     git add README.md
     git commit -m "Add README for my portfolio"
     git push origin main
     ```

4. **Verify**:
   - Check `https://github.com/basitaliyousafzai/my-portfolio`—the README should appear on the main page.

5. **Deploy**:
   - Follow the Netlify steps above to deploy your updated project.

This README now reflects your project, ready for GitHub and Netlify! Let me know if you need more help.