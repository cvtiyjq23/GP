import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Store from "./Redux/State";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById('root'));

let Rerender_Entire_Tree = (State) => {
    root.render(
        <React.StrictMode>
            <App State = {Store.Get_State ()} Add_Post = {Store.Add_Post.bind(Store)} />
        </React.StrictMode>
    );
}
Rerender_Entire_Tree (Store.Get_State);
Store.Subscribe (Rerender_Entire_Tree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
