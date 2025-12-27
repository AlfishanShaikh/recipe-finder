# Recipe Finder 🍽️

Recipe Finder is a simple and interactive web application built with **React** that allows users to discover food recipes from around the world. The app fetches recipe data from **TheMealDB API** and displays recipe names and images in a clean, user-friendly interface.

This project is created as a **learning and practice project** to understand React fundamentals, API integration, component-based architecture, and frontend development workflows.

## 🌐 Live Preview

👉 [Click Here to View Live](https://recipe-finder-site.vercel.app/) 

---

## 📸 Screenshots

> ![Screenshot](https://github.com/AlfishanShaikh/recipe-finder/blob/4b799c3b97eb220365f7a9b84eab8aa1999f5456/public/banner.png)

---

## Overview

The Recipe Finder app helps users explore different meals by searching for recipes or browsing cuisines. It focuses on simplicity and performance, showing only essential details like recipe name and image, making it beginner-friendly and easy to extend in the future.

---

## Features

- Search meals by name
- Browse recipes by cuisine (Indian, Canadian, American, Thai, British, Russian, etc.)
- Display recipe images and titles
- Responsive and clean UI
- Fast data fetching using TheMealDB API
- Simple and readable React code structure

---

## Technologies Used

- React
- React DOM
- JavaScript (ES6+)
- Vite (development server and bundler)
- CSS
- TheMealDB API

---

## API Used

This project uses **TheMealDB**, a free and open API for meal recipes.

API Website: https://www.themealdb.com/

Example endpoints used:
- Search meals by name  
  https://www.themealdb.com/api/json/v1/1/search.php?s=meal_name

- Filter meals by cuisine  
  https://www.themealdb.com/api/json/v1/1/filter.php?a=AreaName

No authentication or API key is required for basic usage.

---

## Project Structure

```
recipe-finder/
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ ├── Search.jsx
│ │ ├── RecipeCard.jsx
│ │ └── Navbar.jsx
│ ├── App.jsx
│ ├── main.jsx
│ ├── App.css
│ └── index.css
├── package.json
├── vite.config.js
└── README.md
```

---

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

Make sure you have the following installed:
- Node.js (v16 or later)
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/AlfishanShaikh/recipe-finder.git
```

Navigate to the project directory:

```bash
cd recipe-finder
```

Install dependencies:

```bash
npm install
```

---

### Running the Project

Start the development server:

```bash
npm run dev
```

Open your browser and visit:

```bash
http://localhost:5173
```

---

## How It Works

The user enters a meal name or selects a cuisine
The app sends a request to TheMealDB API
The API returns a list of meals
React updates the UI and displays recipe cards with images and names

## Future Improvements

Show full recipe details (ingredients and instructions)
Add recipe modal or detail page
Add favorites feature
Improve UI animations
Add loading and error states
Add pagination or infinite scroll

## Deployment

The application is deployed using Vercel and is accessible publicly.

Live URL: https://recipe-finder-site.vercel.app/

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).

---

> If you liked this project, feel free to give it a ⭐ on GitHub.  
> Contributions and feedback are always welcome!


