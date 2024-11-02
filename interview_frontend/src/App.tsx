import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from '@/components/pages/Landing';
import Login from "./components/pages/login";
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <MantineProvider>    
      <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    </MantineProvider>

  );
}

export default App;
