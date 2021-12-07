# react-lkho3q

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-lkho3q)

# React hools

- React way to adding completx functionality to our component when we create them with JavaScript Functions
- Always starts with "use" naming Convension
- Must be called at the top level of component
- Never be called inside Looks, Condition and Nested Functions, because React use it in the appropriate Render Cycle
- React hools only be called from React Functions / functional component

## useState

- create, store, update component state
- runs asyncronously , component re-render with updated state
- we receive an array of 2 elements
- current value of the state and set of Functions to update the state
- when state change the component that own the state will be re-rendered as well as ite entire child components tree, any component that is a part of the parent component gets re-render
- Important: the inline functions get executed before the view is returned, it may block the rendering of component
- rendering the components should be block by using use useEffect, it is the better way
## useEffect
