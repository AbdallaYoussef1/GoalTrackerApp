# Goal Tracker App

A simple React Native app for tracking goals. This app allows users to input goals, display them in a list, and delete them by tapping on the goal.

## Features

- Add goals with a text input field.
- Display a list of goals dynamically.
- Delete a goal by tapping on it.

## Screenshots

![Goal Tracker App Screenshot](path_to_screenshot) <!-- You can add screenshots if you like. -->

## Installation

Follow these steps to get a copy of the project and run it locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/goal-tracker-app.git
   cd goal-tracker-app
Install dependencies:

Run the following command to install the necessary dependencies:

bash
Copy code
npm install
Start the app:

Use the following command to start the development server:

bash
Copy code
npm start
You can also run it directly on a mobile device or emulator using:

iOS: npx react-native run-ios
Android: npx react-native run-android
Components
App.js:

Main component that manages state and renders GoalText and GoalItem components.
GoalText.js:

Handles the input and submission of goals.
GoalItem.js:

Renders a list of goals and allows for deletion when a goal is tapped.
How to Use
Enter your goal in the input field.
Press the Add Goal button to add the goal to the list.
Tap on any goal in the list to delete it.
Folder Structure
plaintext
Copy code
├── App.js
├── Components
│   ├── GoalItem.js
│   ├── GoalText.js
├── assets
├── node_modules
├── package.json
└── README.md
Technologies Used
React Native: For building the mobile app.
JavaScript: Core language for React Native.
Expo (Optional): For easier development workflow.
