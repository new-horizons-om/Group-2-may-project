import { Route, Routes } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import DashboardLayout from "./layouts/DashboardLayout"
import Dashboard from "./pages/Dashboard"
import Clients from "./pages/Clients"
import Payments from "./pages/Payments"
import Team from "./pages/Team"
import Projects from "./pages/Projects"
import Auth from "./layouts/Auth"
import Login from "./components/auth/Login"
import SignUp from "./components/auth/SignUp"

const App = () => {
  return (
    <div>
      <Toaster />
      <Routes>

        <Route element={<Auth/>}>
          <Route path="/" element={<Login/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
        </Route>


        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="projects" element={<Projects />} />
          <Route path="clients" element={<Clients />} />
          <Route path="payments" element={<Payments />} />
          <Route path="team" element={<Team />} />
        </Route>
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </div>
  )
}

export default App
