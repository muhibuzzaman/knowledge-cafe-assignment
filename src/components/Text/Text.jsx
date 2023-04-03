import React from 'react';
import './Text.css';

const Text = () => {
    return (
        <div>
            <div className='text'>
                <h4>What is the difference between props and state?</h4>
                <p>The difference comes in which component the data are owned. The state is owned locally, and the component itself updates it. Props are owned and read only by a parent. Props can be changed only if an upstream shift is caused by a callback function passed on to the child.</p>
            </div>
            <div className='text'>
                <h4>How does work 'useState' ?</h4>
                <p>useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.</p>
            </div>
            <div className='text'>
                <h4>how many work does 'useEffect' except 'dataload'?</h4>
                <p>With useEffect, you invoke side effects from within functional components, which is an important concept to understand in the React Hooks era. Working with the side effects invoked by the useEffect Hook may seem cumbersome at first, but you’ll eventually everything will make sense.

                    The goal of this article is to gather information about the underlying concepts of useEffect and, in addition, to provide learnings from my own experience with the useEffect Hook. The code snippets provided are part of my companion GitHub project.</p>
            </div>
            <div className='text'>
                <h4>How does react work ?</h4>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
        </div>
    );
};

export default Text;