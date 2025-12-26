# Preferences & Auth App

React Native application demonstrating state management, authentication flow,
and local persistence using Context API, AsyncStorage, and custom hooks.

---

## Student Information

Student Name: Ece Sevval Mulhan  
Student ID: 210408025  

---

## Project Description

This project was developed as part of Mobile Programming – Lab 12.

The application demonstrates real-world React Native state management patterns such as
authentication flow (login and logout), global state management using Context API,
persistent storage with AsyncStorage, theme preference handling with a custom hook,
and stack-based navigation using React Navigation.

---

## Features

The application includes mock login and logout functionality, a persistent user session
that survives app restarts, global authentication state, a light/dark theme preference
stored locally, a settings screen to toggle the theme, and a clean separation of logic
using custom hooks.

---

## Screens

Login Screen  
Home Screen  
Settings Screen  

---

## Setup Instructions

First, clone the repository and navigate into the project directory:

git clone https://github.com/ecese/PreferencesApp.git  
cd PreferencesApp  

Then install the required dependencies:

npm install  

After installing dependencies, start the application with:

npx expo start  

To run the application, scan the QR code using Expo Go on a physical device,
or run the application on an emulator.

---

## Technologies Used

React Native  
Expo  
React Navigation  
Context API  
AsyncStorage  

---

## Notes

Authentication and theme preferences persist after app restart.
Navigation flow is controlled by authentication state.
UI styling is minimal, with the main focus on state management logic.
