import React from 'react';

const Blog = () => {
    return (
        <div className="p-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* question 1 */}
            <div className="card w-full bg-primary text-primary-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">How will you improve the performance of a React Application?</h2>
                    <div className="text-left text-justify">
                        <p>1. Rendering a parent component re-renders its child components in react. Commonly this won't be an issue for react because react was built keeping this in mind. But as the app grows in size performance issues may appear. One should make good use of dev tools to find these unnecessary re-rendering child and make to local is such a way that they do not render while its parent renders.</p>
                        <br />
                        <p>2. Using different memoization techniques a re-render of a component can be avoided. Memoization techniques caches the component to memory and when a re-render occurs react shallowly compares if the re-render is same to memoized component, if it is same the memoized component is returned. However this must used when necessary.</p>
                        <br />
                        <p>3. Another way of improving performance is to use code-splitting. When a react application renders in browser the application and its necessary files are bundled to a bundler in order to reduce HTTP calls. However as the application becomes larger the files also gets bigger and takes long time to load. By splitting the application in to many different chunks and loading them when needed instead of loading them all at once improves performance.</p>
                    </div>
                </div>
            </div>

            {/* question 2 */}
            <div className="card w-full bg-primary text-primary-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">What are the different ways to manage a state in a React application?</h2>
                    <div className="text-left text-justify">
                        <p>There are four different way of managing states in React. They are discussed below.</p>
                        <br />
                        
                        <p>Local state: Local state meaning when we manage data inside a component. An example of local state is useState() hook. </p>
                        <br />

                        <p>Global state: When we manage data in multiple components across our app, it is known as global state. User authentication service is a global state, where data shown to a particular user is different for another user.</p>
                        <br />

                        <p>Server state: When we fetch data from a server and manage it thoughout the application we call it a server state. React Query is used for server state.</p>
                        <br />

                        <p>URL state: URL state is the data management in the URL section of a browser. It is an important state because sometimes finding something quickly in an website can be done using only URL state.</p>
                        <br />
                    </div>
                </div>
            </div>

            {/* question 3 */}
            <div className="card w-full bg-primary text-primary-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title"> How does prototypical inheritance work?</h2>
                    <p className="text-left text-justify">The prototypical inheritance is a feature of javascript by which an object can inherite the properties and methods of another object. Every object in javascript has an invisible [[prototype]] that can be accessed by another object. 'Object.getPrototypeOf' and 'Object.setPrototypeOf' were traditionaly used to use prototypical inheritance. Presently, __proto__ is used to do the same.</p>
                </div>
            </div>

            {/* question 4 */}
            <div className="card w-full bg-primary text-primary-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                    <p className="text-left text-justify">By using dot operator to access the name of the objects inside the array, inside a loop and comparing that object name to our given name we can find the specific object that we are looking for. By using different sorting and searching algorithm we can reduce the time and space complexity which will improve load time. Using onChange will also show corresponding names in the search result as the user types the name-if a search box functionality is used.</p>
                </div>
            </div>

            {/* question 5 */}
            <div className="card w-full bg-primary text-primary-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">What is a unit test? Why should write unit tests?</h2>
                    <p className="text-left text-justify">Unit test is the testing of the small parts of the application code structure. These parts can be methods, functions, simple logical operations etc. <br /> Unit testing is very important for a software. This testing verifies and validates the correctness of the program. Good unit test can save resources during the beta test phase. It also makes a software work properly. </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;