import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Componets/Header";
import FeedbackList from "./Componets/FeedbackList";
import FeedbackStats from "./Componets/FeedbackStats";

import FeedbackForm from "./Componets/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>

            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
