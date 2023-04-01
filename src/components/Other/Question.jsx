import React from 'react';

const Question = () => {
    return (
        <div className='mt-16 bg-gray-300 '>
            <div className='text-center'>
                <h1 className='font-bold text-3xl p-3 underline'>Some Question Answer</h1>
            </div>
            <div className='p-8 grid lg:grid-cols-2'>
                <div className='bg-gray-200 m-4 p-4 rounded-lg'>
                    <h1 className='font-bold'>Question-1:Tell me about props and state?</h1>
                    <div className='mb-4'><span className='font-bold'>Props:</span>
                        <p className='pb-2'>Props are immutable. if once set the props cannot be changed, while State is an observable object that is to be used to hold data that may change over time and to control the behavior after each change.</p>
                        <p>While Props are set by the parent component, State is generally updated by event handlers</p>
                        <p className='pb-2'>Props are usually passed from a parent component to a child component. A parent component is a component in which you import another component and pass props inside it.</p>
                    </div>
                    <div><span className='font-bold'>State:</span>
                    <p className='pb-2'>States can be used in Class Components, Functional components with the use of React Hooks (useState and other methods) while Props don't have this limitation.</p>
                        <p className='pb-2'>State allows us to manage changing data in an application. It's defined as an object where we define key-value pairs specifying various data we want to track in the application.In React, all the code we write is defined inside a component.There are mainly two ways of creating a component in React: <br /><br />1. class-based component 2. functional component</p>
                        <p className='pb-2'>To make the state change, React gives us a setState function that allows us to update the value of the state.The setState function has the following <br /> <span className='font-semibold'>syntax: setState(updater, [callback])</span> </p>
                        <p>React components has a built-in state object.The state object is where you store property values that belongs to the component.When the state object changes, the component re-renders.</p>
                    </div>
                </div>
                <div className='bg-gray-200 m-4 p-4 rounded-lg'>
                    <h1 className='font-bold'>Question-2:How dose state works?</h1>
                    <div><span className='font-bold'>Answer:</span>
                    <p className='pb-2'>The React useState Hook allows you to have state variables in functional components. You pass the initial state to this function, and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.</p>
                    <p className='pb-2'><span className='font-bold'>Syntax:</span> The first element is the initial state and the second one is a function that is used for updating the state. <span className='font-semibold'>const [state, setState] = useState(initialstate)</span> We can also pass a function as an argument if the initial state has to be computed. And the value returned by the function will be used as the initial state.
                        </p>
                        <p className='pb-2'>React State holds the data for a component. The component, in turn, returns the data contained within the state to the output.</p>
                    <p>React components has a built-in state object.The state object is where you store property values that belongs to the component.When the state object changes, the component re-renders.</p>
                    </div>
                </div>
                <div className='bg-gray-200 m-4 p-4 rounded-lg'>
                    <h1 className='font-bold'>Question-3:What is the Purpose of useEffect other than fetching data?</h1>
                    <div><span className='font-bold'>Answer:</span>
                        <p className='pb-2'>By using useEffect, you tell React that your component needs to do something after render. React will remember the function you passed, and call it later after performing the DOM updates.</p>
                        <p className='pb-2 font-semibold'>useEffect() calls after the first render and after every update. In your case axios service will call after render and after every update, you can remove useEffect from your call and put axios in componentDidMount()</p>
                        <p>effects run after every completed render, but you can choose to fire them only when certain values have changed. This hook uses an array of "dependencies": variables or states that useEffect listen to for changes. When their values change, the main body of the useEffect hook is executed.</p>
                    </div>
                </div>
                <div className='bg-gray-200 m-4 p-4 rounded-lg'>
                    <h1 className='font-bold'>Question-4: How dose react works?</h1>
                    <div><span className='font-bold'>Answer:</span>
                        <p className='pb-2'>React uses the key to match the virtual DOM node with the actual DOM node. React uses a diffing algorithm to find the changed element. The diffing algorithm is a clever way to figure out which element has changed. React updates the actual DOM by making changes to the DOM nodes and only updates the changed DOM nodes.</p>
                        <p className='pb-2'>Whenever a component's state changes, code is re rendered by DOM, and browser has to repaint each and every element on the screen. This involves a lot of mathematical and other calculations.And thinking at scale, our app would have multiple state changes.So our browser is doing unnecessary cycling of complete DOM whereas only a single elements' state has changed. Thus, More the items to repaint slower the app.</p>
                        <p>And that's the reason why, React has Virtual DOM.It helps in minimizing the actual changes on browser DOM.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;