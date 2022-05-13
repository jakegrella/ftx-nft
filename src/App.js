import { Routes, Route } from "react-router-dom";
import { Home, CollectionPage } from "./components";

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="collections">
      <Route path=":path" element={<CollectionPage />} />
    </Route>
  </Routes>
);

export default App;
