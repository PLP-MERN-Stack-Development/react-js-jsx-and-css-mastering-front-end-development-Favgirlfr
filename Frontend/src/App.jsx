import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Layout from './components/Layout'
import TaskManager from './components/TaskManager'
import PostList from './components/PostList'
import Privacy from './components/Privacy'
import Terms from './components/Terms'
import Card from './components/Card'
import './App.css'

function Home() {
  return (
    <Card title="Welcome to Task Manager">
      <p>A simple application to manage your tasks and view posts.</p>
    </Card>
  )
}

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskManager />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={
            <Card>
              <h1 className="text-xl font-bold">404 - Page Not Found</h1>
              <p>The page you're looking for doesn't exist.</p>
            </Card>
          } />
        </Routes>
      </Layout>
    </ThemeProvider>
  )
}

export default App
