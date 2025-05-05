import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route exact path="/dialogs" element={<Dialogs messages={props.state.messagesPage.messages} dialogs={props.state.messagesPage.dialogs} />}/>
                        <Route exact path="/profile" element={<Profile posts={props.state.profilePage.posts} />}/>
                        <Route exact path="/news" element={<News/>}/>
                        <Route exact path="/music" element={<Music/>}/>
                        <Route exact path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;