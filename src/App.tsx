import {
  Link,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom'
import Basic from './pages/basic'
import Dialog from './pages/dialog'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Basic />} />
        <Route path="/dialog" element={<Dialog />}/>
      </Route>
    </Routes>
  )
}

function Layout() {
  return (
    <div className="p-10px">
      <h1>Welcome to the app!</h1>
      <nav>
        <Link to="basic">Home</Link> |{' '}
        <Link to="dialog">dialog</Link>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}

export default App
