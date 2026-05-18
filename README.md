#  Trade Execution Gateway (React Architecture)

A production-ready trade execution flow simulating a live fintech/brokerage environment. This project demonstrates advanced native React state management, DOM manipulation, and memory optimization without relying on external libraries.

## Core Features & Technical Implementation

* **Global State Management (Context API):** Engineered a centralized financial store to manage user wallet balances and global authentication data, completely avoiding prop-drilling.
* **Live Asset Tracking (useRef Memory):** Built an algorithmic ticker that tracks previous render states using `useRef` to securely compare historical and current asset prices, rendering dynamic market trend indicators (🟢/🔴).
* **Direct DOM Manipulation (useRef):** Developed a frictionless 4-digit OTP security gateway utilizing an array of refs and native `.focus()` methods to create an auto-advancing cursor experience.
* **Memory Leak Prevention (useEffect):** Implemented a secure 30-second countdown timer. The engine interval ID is stored in a silent ref vault to prevent re-render duplication, paired with strict `useEffect` cleanup functions to instantly destroy zombie engines upon component unmount.
* **Pure Styling:** 100% Vanilla CSS architecture. No Tailwind, no external libraries. 

## 💻 Tech Stack
* React 18 (useState, useEffect, useRef, useContext)
* Vanilla CSS
* Pure JavaScript (ES6+)

...... .......