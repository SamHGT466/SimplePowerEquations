# SimplePowerEquations

A lightweight web application that calculates power equations (base^exponent) using Web Workers for non-blocking computation.

## Features

- **Power Calculation**: Computes base raised to the power of exponent
- **Web Worker Integration**: Offloads calculations to a background thread for smooth UI performance
- **Real-time Updates**: Instantly displays results as you change input values
- **Browser Compatibility Check**: Detects Web Worker support with graceful fallback

## How It Works

1. User enters two numbers: base (x) and exponent (y)
2. Main thread listens for input changes
3. Data is sent to Web Worker via `postMessage()`
4. Worker calculates the power result
5. Result is sent back to main thread and displayed on the page

## Files

- **index.html** - Main HTML structure and UI
- **main.js** - Main thread logic, input handling, and Web Worker initialization
- **worker.js** - Background worker that performs power calculations
- **stili.css** - Styling for the application

## Usage

Open `index.html` in a modern web browser to use the application. Enter a base and exponent value to see the calculated result.
