import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ChatWindow from "./Components/ChatWindow";
import LoginPage from "./Components/FireAuth/LoginPage";
import SignUp from "./Components/FireAuth/SignUp";
import SignOut from "./Components/FireAuth/SignOut";

const App = () => {
  const [user, setUser] = useState(false);

  return (
    <Router>
      <div className="App">
        {user ? (
          <>
            <SignOut onSignOut={() => setUser(null)} />
            <ChatWindow
              messages={[]}
              onSendMessage={() =>
                console.log("pass function here to call chat api")
              }
            />
          </>
        ) : (
          <Routes>
            <Route
              path="/LoginPage"
              element={<LoginPage onLogin={() => setUser(true)} />}
            />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="*" element={<Navigate to="/LoginPage" />} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;
