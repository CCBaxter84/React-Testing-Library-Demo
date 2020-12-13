# React-Testing-Library-Demo
Source Doc Links:
- React Testing Library: https://testing-library.com/docs/react-testing-library/intro/
- Official Tutorial: https://www.robinwieruch.de/react-testing-library
- NPM: https://www.npmjs.com/package/@testing-library/react
- Jest: https://jestjs.io/
- Testing React with Jest and Enzyme: https://www.robinwieruch.de/react-testing-jest-enzyme
- Testing with Mocha and Chai: https://livecodestream.dev/post/testing-in-nodejs-using-mocha-and-chai-part-1/
- Jest-DOM:
	- https://testing-library.com/docs/ecosystem-jest-dom/
	- https://github.com/testing-library/jest-dom
	- https://www.npmjs.com/package/@testing-library/jest-dom

Key Points:
- React Testing Library (RTL) works together with Jest like Chai and Mocha
- Jest is a JS testing framework developed by Facebook
- Jest is compatible with projects utilizing: React, Vue, Angular, Node, Typescript, Babel, and others
- RTL is an alternative to Enzyme, which is a testing library developed by AirBnB
- RTL is included in React by default when using create-react-app
- Jest-dom library works hand-in-hand with RTL through its custom matcher testing functions
- Testing in React:
	- Unit testing: component testing
	- Integration testing: multi-component testing
- RTL treats React Components Like a Black box
- getBy,  findBy, and queryBy
	- getBy: search for text you expect to be on the screen upon render
	- queryBy: search for text you expect not to be on the screen
	- findBy: search for text you expect to be on the screen eventually AKA asynchronous elements
- Interacting with screen: fireEvent
	- fireEvent object has a variety of declaratively-written testing methods
	- E.g., fireEvent.click(screen element) simulates a user clicking an element on the screen
	- E.g., fireEvent.change(screen element) can be used to simulate something like inputing text to a form








