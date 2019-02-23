# Answers

## What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

> PropTypes is an object that allows you to define what props your component requires and what type they should be. This is vitally important in a real world application because it allows you to ensure that the data being passed into your components is either expected or explicitly handled in an error. It also means that future developers on your team can reason about your application better since they now have a well defined data flow.

## Describe a life-cycle event in React?

> A lifecycle event is an event, defined by the React library, that occurs throughout the various "life stages" of a component. These life stages are defined as mounting, updating, and unmounting, and are analagous to birth, life, and death. A specific example of a lifecycle event would be `componentDidMount()` which occurs at the end of the mounting phase and executes as the updating phase begins.

## Explain the details of a Higher Order Component?

> A Higher Order Component, much like a higher order function, is a function that accepts a component and returns a new component that renders the component passed into it with enhanced functionality.

## What are three different ways to style components in React? Explain some of the benefits of each.

> You can style React components in at least 4 different ways that I can think of, but an example of 3 ways to style React compoennts would be: Inline styles, CSS stylesheets, & styled components. 
> 
> The benefit of Inline styles is that if you just need to adjust a couple of styles on the component in a specific context (adding just a touch more padding in location, for example) then you can pass an object to **just** that instance of the component. 
>
> The benefit of using CSS stylesheets is that it separates your design and functionality concerns into separate files and provides you a reusable series of CSS styles that you can pass as `className`'s to various components to bring about the desired styles
>
> Finally, Styled Components provides us with the benefit of defining styles inside of the same file as our react component, which provides us with a "single source of truth" for the component's look and feel and also allows us to have styles that are scoped to **only** apply to that component.