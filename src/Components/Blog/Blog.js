import React from "react";

const Blog = () => {
  return (
    <div className="bg-slate-300  py-16">
      <div className="flex flex-col gap-5 mx-auto sm:px-8 px-2 lg:w-10/12 xl:w-3/4 md:w-10/12">
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300  text-white bg-gray-800 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            1. How React Work ?
          </div>
          <div className="collapse-content">
            <p>
              ReactJS divides the UI into isolated reusable pieces of code known
              as components. React components work similarly to JavaScript
              functions as they accept arbitrary inputs called properties or
              props.It's possible to have as many components as necessary
              without cluttering your code.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300  text-white bg-gray-800 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            2. what is the Main difference between props and state ?
          </div>
          <div className="collapse-content">
            <p className="pb-4 border-b">
              The state is an updatable structure that is used to contain data
              or information about the component and can change over time. The
              change in state can happen as a response to user action or system
              event. It is the heart of the react component which determines the
              behavior of the component and how it will render. A state must be
              kept as simple as possible. It represents the component's local
              state or information. It can only be accessed or modified inside
              the component or by the component directly.
            </p>
            <p className="pt-4">
              Props are read-only components. It is an object which stores the
              value of attributes of a tag and work similar to the HTML
              attributes. It allows passing data from one component to other
              components. It is similar to function arguments and can be passed
              to the component the same way as arguments passed in a function.
              Props are immutable so we cannot modify the props from inside the
              component.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300  text-white bg-gray-800 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            3. what is exactly useeffect work except api call ?
          </div>
          <div className="collapse-content">
            <h1 className="md:text-2xl text-xl text-semibold inline-block mb-3 border-b-2 ">
              What does useEffect do?
            </h1>
            <p>
              By using this Hook, you tell React that your component needs to do
              something after render. React will remember the function you
              passed (we'll refer to it as our “effect”), and call it later
              after performing the DOM updates. In this effect, we set the
              document title, but we could also perform data fetching or call
              some other imperative API
            </p>
            <h1 className="md:text-2xl text-xl text-semibold pt-4 mb-2 border-b-2 inline-block">
              useEffect work
            </h1>
            <p>
              1.The useEffect Hook allows you to perform side effects in your
              components. <br />
              2.Some examples of side effects are :{" "}
              <b>fetching data, directly updating the DOM, and timers.</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
