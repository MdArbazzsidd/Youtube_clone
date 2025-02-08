import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Search from './pages/Search/Search'
import Videopage from './pages/Videopage/Videopage'
import Channel from './pages/Channel/Channel'
import Library from './pages/Library/Library'
import Likevideo from './pages/Likedvideo/Likevideo'
import Watchhistory from './pages/Watchhistory/Watchhistory'
import Watchlater from './pages/Watchlater/Watchlater'
import Yourvideo from './pages/Yourvideos/Yourvideo'
const Allroutes = ({setEditCreateChannelBtn, setVideoUploadPage}) => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/search/:Searchquery' element={<Search/>} />
        <Route path='/videopage/:vid' element={<Videopage/>} />
        <Route path='/channel/:cid' element={<Channel setEditCreateChannelBtn={setEditCreateChannelBtn} setVideoUploadPage={setVideoUploadPage} />} />
        <Route path='/Library' element={<Library/>} />
        <Route path='/Likedvideo' element={<Likevideo/>} />
        <Route path='/watchhistory' element={<Watchhistory/>} />
        <Route path='/watchlater' element={<Watchlater/>} />
        <Route path='/Yourvideo' element={<Yourvideo/>} />

    </Routes>
  )
}

export default Allroutes