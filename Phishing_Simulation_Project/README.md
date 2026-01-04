# Phishing Awareness Simulation Project

**An ethical cybersecurity simulation designed to measure and improve organizational resilience against social engineering attacks.**

![Project Status](https://img.shields.io/badge/Status-Completed-success)
![License](https://img.shields.io/badge/License-MIT-blue)

## 📌 Project Overview
This project simulates a realistic "Spear Phishing" attack using a custom-built email template and a clone of a corporate login portal. The goal is not to steal data, but to identify awareness gaps and educate users on how to spot "Red Flags" in suspicious communications.

## 📂 Repository Contents
*   **`project.html`**: The main slide deck/presentation used for the project defense.
*   **`email.html`**: A high-fidelity phishing email template (mimicking a "Password Expiry" alert).
*   **`login.html`**: A safe, simulated fake login page (Frontend only, no data storage).
*   **`debrief.html`**: The educational landing page users are redirected to if they "fall" for the simulation.
*   **`REPORT.md`**: The full technical assessment report and findings.

## 🚀 How to Run the Simulation
1.  **Email Phase:** Open `email.html` in a web browser. This represents the email received by the victim.
2.  **Interaction:** Click the "Review & Secure Account" button.
3.  **Attack Phase:** You will be taken to `login.html`. Try entering any dummy credentials.
4.  **Education Phase:** Upon clicking "Sign In", you are redirected to `debrief.html` for an immediate learning moment.

## ⚠️ Ethical Disclaimer
This tool is for **EDUCATIONAL PURPOSES ONLY**.
*   No real credentials are harvested or stored.
*   This code should only be used in controlled environments with informed consent from all participants.
*   The author is not responsible for any misuse of this code.

## 👨‍💻 Author
**[Your Name]**
*Navitech Cybersecurity Internship Project*
