import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Layout from './pages/admin/Layout'
import Dash from './pages/admin/Dash'
import AddBlog from './pages/admin/AddBlog'
import ListBlog from './pages/admin/ListBlog'
import Comments from './pages/admin/Comments'
import Login from './components/admin/Login'
import 'quill/dist/quill.snow.css'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path = '/' element = {<Home/>} />
        <Route path = '/blog/:id' element = {<Blog/>} />
        <Route path = '/admin' element = {true ? <Layout/> : <Login></Login>}>
        <Route index element = {<Dash/>}/>
        <Route path='addBlog' element = {<AddBlog/>}/>
        <Route path='listBlog' element = {<ListBlog/>}/>
        <Route path='comments' element = {<Comments/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
