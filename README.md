# Dev Stack

## Description
Dev Stack is a modern, responsive web application that allows developers to explore various technologies and build their own custom tech stack. The platform features a sleek, two-tone gradient design and provides a curated list of technologies with details like categories, difficulty levels, and ratings. Users can seamlessly add or remove technologies from their personal stack, with real-time notifications enhancing the user experience.

## Technologies Used
- React.js
- Tailwind CSS & DaisyUI
- TypeScript
- React-Toastify
- JSON (for data handling)
- Vite

## Key Features
- **Dynamic Technology Grid:** Browse a responsive grid of technologies loaded dynamically from a JSON file, complete with badges, ratings, and difficulty levels.
- **Interactive "Your Stack" Builder:** Seamlessly add unique technologies to a personal stack, with validation to prevent duplicates and options to remove individual or all items.
- **Beautiful & Responsive UI:** A fully responsive design featuring a sticky navbar, mobile hamburger menu, a stunning gradient brand theme, and loading states.

## React Interview Questions

### What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows developers to write HTML-like code directly inside JavaScript files. It is used in React because it makes it easier to visualize and build the structure of the UI components, and Babel compiles it into standard JavaScript functions (`React.createElement`) behind the scenes.

### What is the difference between props and state?
**Props** (short for properties) are read-only data passed from a parent component to a child component. They are used to configure the child component. 
**State**, on the other hand, is internal data managed within the component itself. State can be updated over time (often in response to user actions), and when it changes, the component re-renders.

### What does the `useState` hook do, and where did you use it in this project?
The `useState` hook is a function that lets you add React state to functional components. It returns an array with two values: the current state and a function to update it. In this project, it was used to manage the list of technologies added to "Your Stack", keeping track of the loading state while fetching JSON data, and managing the state of the mobile hamburger menu.

### What does the `useEffect` hook do, and why did you need it to load the JSON data?
The `useEffect` hook lets you perform side effects in functional components, such as data fetching, setting up subscriptions, or manually changing the DOM. It runs after the component renders. In this project, it was needed to fetch the technology data from the local JSON file exactly once when the component first mounts to the screen, rather than on every single render.

### Why does every item in a `.map()` list need a unique `key` prop?
A unique `key` prop helps React identify which items have changed, been added, or been removed in a list. This allows React to efficiently update and re-render only the modified elements in the DOM rather than re-creating the entire list from scratch, improving performance and avoiding UI bugs.

### What is conditional rendering? Show one place you used it.
Conditional rendering is the practice of rendering different UI elements or components based on certain conditions or states. In this project, it was used in the "Your Stack" section: if the stack array is empty, an empty state message is shown; otherwise, the list of selected technologies is rendered. 
*Example:* `{stack.length === 0 ? <p>Your stack is empty.</p> : <StackList items={stack} />}`

### How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Data is passed from a parent to a child component via **props** (e.g., `<ChildComponent data={myData} />`). 
To send data back from a child to a parent, the parent passes a **callback function** to the child as a prop. The child can then call this function, passing the necessary data as arguments, which executes the function in the parent's scope and updates its state.
