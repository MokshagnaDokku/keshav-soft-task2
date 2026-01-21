# Internship Task 2: Keshav Soft (Strict Tech Stack)

![Status](https://img.shields.io/badge/Status-Completed-success)
![Bundler](https://img.shields.io/badge/Bundler-Vite-purple)
![Templating](https://img.shields.io/badge/Templating-Handlebars-orange)

## 📖 Project Overview
This repository contains the **Task 2** submission for the Web Development Internship. [cite_start]The objective was to recreate the "Keshav Soft" corporate website (from Task 1) using a strict **Templating Engine + Bundler** architecture, rather than static HTML[cite: 3].

This project moves away from manual HTML editing and uses **automation** to generate the final website.

**[View Live Website](https://mokshagnadokku.github.io/keshav-soft-task2/dist/index.html)**

---

## 🛠️ Mandatory Tech Stack
[cite_start]As per the internship requirements, I have implemented the following specific stack[cite: 6, 7, 10]:

### 1. Bundler: Vite
* **Why Chosen:** Vite was selected over Gulp for its superior build speed and native ES Module support. [cite_start]It handles the compilation of assets and hot-reloading much faster than traditional task runners[cite: 11].
* **Role:** It compiles the Handlebars templates and assets from `src/` into the final production-ready `dist/` folder.

### 2. Templating Engine: Handlebars
* [cite_start]**Why Chosen:** Chosen for its semantic syntax and ability to create reusable components (Partials) without complex logic[cite: 9].
* **Role:** Used to componentize the **Navbar** and **Footer** so they can be included dynamically on every page (`{{> navbar }}`), adhering to the DRY (Don't Repeat Yourself) principle.

---

## 📂 Project Structure
[cite_start]The project follows the strict folder structure required by the task[cite: 22, 23, 24, 25]:

```text
/keshav-soft-task2
│── package.json         # Project dependencies and scripts
│── vite.config.js       # Configuration for compiling Handlebars
│── src/                 # SOURCE CODE (Development)
│   ├── index.html       # Entry file
│   ├── assets/          # Images and CSS
│   └── templates/       # Handlebars Templates
│       └── partials/    # Reusable components (Navbar, Footer)
│── dist/                # PRODUCTION CODE (The final output)
│   ├── index.html       # Compiled HTML
│   └── assets/          # Optimized assets
2026 Keshav Soft Inc.
Built with Vite + Handlebars.