# Internship Task 2 - Strict Tech Stack Implementation

![Status](https://img.shields.io/badge/Status-Completed-success)
![Bundler](https://img.shields.io/badge/Bundler-Vite-purple)
![Templating](https://img.shields.io/badge/Templating-Handlebars-orange)

## 📄 Objective
[cite_start]The goal of this task was to recreate the deliverables from Task 1 using a strict **templating engine + bundler** combination, ensuring the final output matches the original design exactly while using professional build tools[cite: 1, 2, 3].

**[View Live Website](https://mokshagnadokku.github.io/keshav-soft-task2/)**

---

## 🛠️ Mandatory Technology Stack
[cite_start]As per the task requirements, I have implemented the following specific stack[cite: 6]:

### [cite_start]1. Bundler: Vite [cite: 11]
* **Selection:** Chosen as the strict bundler requirement.
* **Role:** Vite handles the development server, hot-reloading, and bundles the assets and HTML for production. It is configured to compile the Handlebars templates into the final `dist/` folder.

### [cite_start]2. Templating Engine: Handlebars [cite: 9]
* **Selection:** Chosen as the strict templating engine requirement.
* **Role:** Used to componentize the layout. Standard HTML was replaced with Handlebars templates (e.g., `{{> navbar }}`), adhering to the DRY (Don't Repeat Yourself) principle.

---

## 📂 Project Structure
[cite_start]The project follows the mandatory folder structure outlined in the task document[cite: 22]:

```text
/keshav-soft-task2
│── src/
│   ├── templates/       # [cite: 23] Templates and partials (Navbar, Footer)
│   ├── assets/          # [cite: 24] Images, CSS, and JS files
│   ├── index.html       # Entry point for Vite
│   ├── about.html
│   └── contact.html
│
│── dist/                # [cite: 25] Final compiled HTML output
│── vite.config.js       # Configuration for Vite + Handlebars plugin
│── package.json         # Dependencies and build scripts
└── README.md            # Project documentation
