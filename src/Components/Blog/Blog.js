import React from "react";

const Blog = () => {
  return (
    <div>
      <h1 className="text-4xl text-center font-bold mt-4">
        1.How does React work? Ans.React is a JavaScript library developed by
        Facebook which, among other things, was used to build Instagram.com. Its
        aim is to allow developers to easily create fast user interfaces for
        websites and applications alike. The main concept of React. js is
        virtual DOM
      </h1>
      <h1 className="text-4xl text-center font-bold mt-4">
        2. What's the difference between state and props in React? Ans:Props are
        used to pass data from one component to another. The state is a local
        data storage that is local to the component only and cannot be passed to
        other components.
      </h1>
      <h1 className="text-4xl text-center font-bold mt-4">
        3.What is the use of useEffect Hooks? Ans:The useEffect Hook allows you
        to perform side effects in your components. Some examples of side
        effects are: fetching data, directly updating the DOM, and timers.
      </h1>
    </div>
  );
};

export default Blog;
