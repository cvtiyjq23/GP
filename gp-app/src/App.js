
import './App.css';
import Header from "./Components/Header/Header";
import Nav_Bar from "./Components/Nav_Bar/Nav_Bar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Store from "./Redux/State";


function App(Props) {

    return (
        <BrowserRouter>
        <div className="App_Wrapper">
            <Header/>
            <Nav_Bar/>
            <div className="content_Wrapper">
                <Routes>
                    <Route path='/profile' element={<Profile Profile_Page ={Props.State.Profile_Page} Dispatch = {Props.Dispatch}/>}/>
                    <Route path='/dialogs/*' element={<Dialogs Dialogs_Page = {Props.State.Dialogs_Page} Dispatch = {Props.Dispatch} />}/>
                </Routes>
            </div>

        </div>
        </BrowserRouter>
    );
}

export default App;
