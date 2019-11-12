import React from 'react';
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();

    // TESTING START
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // TESTING END

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});






// import React from "react";
// import ReactDOM from "react-dom";

// document.addEventListener("DOMContentLoaded", () => {
//     const root = document.getElementById("root");
//     ReactDOM.render(<h1>Welcome to ArtWalk</h1>, root);
// });






// document.addEventListener('DOMContentLoaded', () => {
//     // const store = configureStore();
//     const root = document.getElementById('root');

//     // ReactDOM.render(<Root store={store} />, root);
// });