import React, {useState} from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './Gallery.css';

const images = [
  'https://res.cloudinary.com/simplemenu/image/upload/q_auto:low/v1537532077/iStock-486723544_fmtdpp.jpg',
  'https://res.cloudinary.com/simplemenu/image/upload/q_auto:low/v1537532081/iStock-902377778_l9tfhp.jpg',
  'https://res.cloudinary.com/simplemenu/image/upload/q_auto:low/v1537532083/iStock-531705100_w1huaz.jpg',
  'https://res.cloudinary.com/simplemenu/image/upload/q_auto:low/v1537532087/iStock-502384220_liq8mp.jpg',
];

const Gallery = () => {

  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const handleImageClick = (e, index) => {
    setIsOpen(true)
    setPhotoIndex(index)
  }
  return (
    <div className="gallery" id="gallery">
      <h1>Gallery</h1>
      <div className="gallery_img">
        <img src="https://res.cloudinary.com/simplemenu/image/upload/q_auto:low/v1537532077/iStock-486723544_fmtdpp.jpg" onClick={(e) => handleImageClick(e,0)} height="150px" />
        <img src="https://res.cloudinary.com/simplemenu/image/upload/q_auto:low/w_300,c_scale/v1537532081/iStock-902377778_l9tfhp.jpg" onClick={(e) => handleImageClick(e,1)} height="150px"/>  
        <img src="https://res.cloudinary.com/simplemenu/image/upload/q_auto:low/w_300,c_scale/v1537532083/iStock-531705100_w1huaz.jpg" onClick={(e) => handleImageClick(e,2)} height="150px" /> 
        <img src="https://res.cloudinary.com/simplemenu/image/upload/q_auto:low/w_300,c_scale/v1537532087/iStock-502384220_liq8mp.jpg" onClick={(e) => handleImageClick(e,3)} height="150px"/>
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  )
}
export default Gallery
