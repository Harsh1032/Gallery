import React, { useState }  from 'react';
import Title from '../comps/Title/Title';
import UploadForm from '../comps/UploadForm/UploadForm';
import ImageGrid from '../comps/ImageGrid/ImageGrid';
import Modal from '../comps/Modal/Modal';
import './index.css';


const Home = () => {

  const [ selectedImg, setSelectedImg ] = useState(null);

  return (
    <div className="App">
        <Title/>
        <UploadForm/>
        <ImageGrid setSelectedImg = {setSelectedImg} />
        {selectedImg && <Modal selectedImg = {selectedImg}  setSelectedImg = {setSelectedImg} />}
    </div>
  )
}

export default Home