import React from 'react'
import './Gallery.css'

const Gallery = () => {
	return (
		<div className="gallery" id="gallery">
			<h1>Gallery</h1>
			<div className="gallery_img">
				<img src="https://res.cloudinary.com/simplemenu/image/upload/q_auto:low/v1537532077/iStock-486723544_fmtdpp.jpg" height="120px" />
				<img src="https://res.cloudinary.com/simplemenu/image/upload/q_auto:low/v1537532077/iStock-486723544_fmtdpp.jpg" height="120px"/>	
				<img src="https://res.cloudinary.com/simplemenu/image/upload/q_auto:low/v1537532077/iStock-486723544_fmtdpp.jpg" height="120px" />	
				<img src="https://res.cloudinary.com/simplemenu/image/upload/q_auto:low/v1537532077/iStock-486723544_fmtdpp.jpg" height="120px"/>
			</div>	
		</div>
	)
}
export default Gallery
