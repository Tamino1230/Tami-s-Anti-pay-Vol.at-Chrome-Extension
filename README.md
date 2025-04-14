# Tami's Anti pay (Vol.at) Chrome Extension

## Description
The **Idk Tami** Chrome extension enhances your browsing experience on `vol.at` by removing paywalls, updating premium content to be freely accessible, and adding custom messages to indicate the changes. It also attempts to make comment sections visible without requiring a login.

## Features
- Removes paywall elements and interaction bars.
- Converts premium content to regular content for free access.
- Adds custom messages to indicate modifications.
- Attempts to make comment sections visible without login.
- Logs all actions performed for transparency.

## Installation
1. Clone or download this repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in the top-right corner).
4. Click **Load unpacked** and select the folder containing this extension.

## Usage
1. Navigate to any article on `https://www.vol.at/`.
2. The extension will automatically:
   - Remove paywalls and interaction bars.
   - Update premium content to be freely accessible.
   - Add custom messages to indicate the changes.
3. Check the browser console (`F12` > Console) for logs of the actions performed.

## File Structure
- `manifest.json`: Defines the extension's metadata and permissions.
- `scripts/content.js`: Contains the logic for modifying the webpage.
- `images/`: Contains icons for the extension.

## Notes
- If the comment section is not visible after the first attempt, try reloading the page. It may take multiple tries.
- This extension is designed specifically for `vol.at` and may not work on other websites.

## License
This project is for educational purposes only. Use it responsibly.
