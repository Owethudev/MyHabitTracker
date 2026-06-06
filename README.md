# MyHabitTracker

A lightweight web app for tracking daily habits, setting weekly targets, and keeping a simple streak count. Built with plain HTML, CSS, and JavaScript for quick habit logging and progress monitoring.

## Live Demo

- Deployed at: https://owethuhabittracker.netlify.app

## Features

- Add a new habit with a name, weekly target, and category
- View a habit list with live summary details
- Mark habits as completed for the day to increase streak count
- Delete habits when no longer needed
- View the current total habit count

## Usage

1. Open the app in your browser.
2. Enter a habit name, choose a category, and set a weekly target (1-7).
3. Click **Add Habit** to add it to the list.
4. Use **Done Today** to increase the habit streak.
5. Use **Delete Habit** to remove a habit from the list.

## Local Setup

To run the app locally:

1. Clone the repository.
2. Open `index.html` in your browser.

No additional dependencies or build steps are required.

## Project Structure

- `index.html` — app layout and form structure
- `styles.css` — styling and responsive layout
- `script.js` — habit management logic and UI rendering

## Notes

- The app currently stores habits in-memory, so habits will reset when the page is refreshed.
- For persistent storage, add localStorage support or connect to a backend service.

