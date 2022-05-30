import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";

const Navigation = () => {
  return <div>I Am Navigation</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<Navigation />} />
      </Route>
    </Routes>
  );
};

export default App;
