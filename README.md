# dropdown-02-07-2026
Reusable Dropdown component built with **Vanilla JavaScript**. Features open/close behavior, outside click detection, dynamic menu generation, and clean DOM manipulation.

# Dropdown Component

A reusable Dropdown component built with Vanilla JavaScript.

This project demonstrates how to create a dynamic UI component without any framework by generating all HTML elements directly from JavaScript.

## Features

- Reusable dropdown component
- Dynamic menu generation from an array
- Open/close menu
- Close when clicking outside
- Update button label after selection
- Multiple independent dropdowns on the same page
- Clean DOM manipulation
- Simple and reusable architecture

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript (ES6)

## Project Structure

```
project/
│
├── index.html
├── style.css
└── script.js
```

## How it works

The `createDropdown()` function creates a complete dropdown component.

It:

- creates all DOM elements
- generates menu items from an array
- manages its own open/close state
- updates the button text when an item is selected
- closes automatically when the user clicks outside the component

Example:

```javascript
createDropdown(["Menu", "Apple", "Orange", "Banana"]);
```

## Skills Practiced

- DOM creation
- Event handling
- Event propagation (`stopPropagation`)
- State management
- Dynamic rendering
- Reusable components
- CSS positioning
- Component architecture
- Clean JavaScript

## What I learned

During this project I practiced building reusable UI components without using any framework.

I learned how to:

- create DOM elements dynamically
- separate rendering logic from state updates
- manage component state
- detect clicks outside an element
- build independent instances of the same component

This project is part of my Vanilla JavaScript learning journey before moving to React.

## Live Demo

https://nomenaharilazarandria.github.io/dropdown-02-07-2026/

## Author

Created by **Nomena**
