# Alchemy Insurance Chatbot – Graduate Hackathon 2023

This project was developed as part of my induction at Alchemy Technology Services during the 2023 Graduate Hackathon. The challenge: build a Minimum Viable Product (MVP) "Quote and Buy" chatbot using Guidewire's Gosu language, capable of collecting customer data, processing insurance rules, and quoting a premium in real time.

---

## About Guidewire & Gosu

[Guidewire](https://guidewire.com) is a leading insurance platform used by major insurers worldwide, providing applications for policy, billing, and claims management. These applications are built using **Gosu**, a statically-typed, object-oriented language that runs on the Java Virtual Machine (JVM) and is fully interoperable with Java libraries.

Gosu is designed for productivity and clarity, with concise syntax, type inference, and strong support for OOP principles. At Alchemy Technology Services, we use **ClaimCenter Studio** for the ClaimCenter application and **PolicyCenter Studio** for the PolicyCenter application. Both are specialized IDEs based on IntelliJ IDEA, tailored for developing with Guidewire’s Gosu language and platform. These are the primary environments for our insurance software development work.

This project was built using “straight Gosu” in a console environment, independent of the full Guidewire application suite. The goal was to demonstrate strong OOP and software engineering skills in Gosu, as preparation for using it within Guidewire’s insurance applications.

---

## Training & Hackathon Context

This project was the culmination of a structured onboarding program at Alchemy Technology Services. The training included:

- **Gosu Fundamentals:** Variables, types, operators, loops, properties, classes, interfaces, collections, exception handling, and more.
- **Hands-on Labs:** Practical exercises to reinforce core concepts.
- **Competitive Hackathon:** On Day 2, we were split into teams and tasked with building a “Quote and Buy” chatbot MVP in Gosu, applying OOP and coding best practices. Bonus points were awarded for creative and well-structured solutions.

I completed this project in my third week at Alchemy, immediately after graduating university, to demonstrate my ability to quickly learn and apply new technologies, and to be a strong technical asset to my team.

---

## 🧑‍💻 Development Environment

This project was developed using **Gosu Lab 1.14.16**, the IDE provided during onboarding. Gosu Lab supports Gosu’s OOP features, project navigation, and bundled example projects. The IDE made it easy to work with multiple classes, follow best practices, and apply the principles learned in training. The environment closely mirrors real-world development with Guidewire and Gosu, providing hands-on experience with statically-typed, Java-based OOP code.

---

## 🚀 Project Overview

**Goal:**  
Create a chatbot for Alchemy Insurance that collects customer, vehicle, and claims information, applies complex business rules, and provides an insurance quote (or declines) based on strict acceptance criteria.

**Context:**  
- Completed in my third week at Alchemy Technology Services, immediately after graduating university
- First exposure to Guidewire and Gosu
- Built under time constraints as part of onboarding
- Two-day competitive hackathon: two teams (4 vs 4), demo to senior developers
- I stepped into a leadership role, organizing the team, delegating tasks based on each member’s strengths, and supporting less experienced teammates
- Our team delivered a complete, working solution—and won the competition

---

## 📝 Business Requirements

- Collect customer info (name, gender, DOB, occupation, license date)
- Collect address (must be in Derry City, BT47/BT48)
- Collect driving and claims history
- Collect vehicle info (only specific makes/models accepted)
- Summarize and confirm all data with the user before quoting
- Apply business rules for acceptance, discounts, and loadings
- Display premium breakdown (including IPT at 12%)
- Minimum premium: £300 + IPT
- Handle all edge cases (declines, special postcodes, tracker requirements, etc.)

---

## ✨ Features

- Interactive chatbot interface
- Real-time validation and business rule application
- Dynamic premium calculation with detailed breakdown
- Handles all acceptance/decline scenarios per brief
- User-friendly summary and confirmation step

---

## 🛠️ Tech Stack

- **Gosu** (Guidewire’s proprietary language)
- Gosu Lab 1.14.16 IDE
- [Guidewire platform, if relevant]

---

## 📦 Project Structure

- `src/main/gosu/scratch/` – Main source code (chatbot, business logic, data models)
- `Hackathon.prj` – Project file

---

## 🖼️ Screenshots

Below is a screenshot of the project open in Gosu Lab 1.14.16, showing the OOP structure and the Vehicle class implementation:

![Gosu Lab IDE with Vehicle.gs](docs/ide-screenshot.png)

*If you are viewing this on GitHub and do not see the image, please check the `docs/` folder or request the screenshot.*

---

## 🔧 Setup & Running

This project was developed and tested using **Gosu 1.14.16**.

### Quickstart

1. Set the `JAVA_HOME` environment variable to your JDK 1.8 installation.
2. Go to the `bin` folder of your Gosu installation and double-click on `gosu.cmd` (or run `gosu` if you are using Linux/Mac).
3. Open the project files in the Gosu shell or, for a better experience, use the [Gosu Plugin for IntelliJ IDEA](http://gosu-lang.org/intellij.html).

> **Note:** The Gosu runtime and installer were provided directly by our trainer. If you need to install Gosu yourself, see the [official documentation](http://www.gosu-lang.org/).

### Documentation

- [Gosu Language Documentation](http://www.gosu-lang.org/)
- [Gosu IntelliJ Plugin Instructions](http://gosu-lang.org/intellij.html)

---

## 💡 What I Learned

- Rapidly learned Gosu and Guidewire basics in my first weeks on the job
- Demonstrated strong OOP and software engineering fundamentals in a new language
- Implemented complex business logic under time pressure
- Leadership and team management under pressure
- Delegating tasks and mentoring less experienced teammates
- Integrating diverse code contributions into a cohesive project
- Communicating technical concepts clearly and efficiently
- Showcased my ability and interest in software engineering as a recent graduate and strong technical asset

---

## 🚀 Future Improvements

- Add automated tests for business rules
- Enhance chatbot with a GUI or web interface
- Integrate with real Guidewire backend for persistence

---

## 📫 Contact

- [LinkedIn](https://linkedin.com/in/conor-clyde-sd/)
- [GitHub Profile](https://github.com/conor-clyde) 