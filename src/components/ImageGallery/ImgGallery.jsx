import React from 'react';
import { Gallery } from 'react-grid-gallery';

const gImages =
[{
        src: "https://example.com/path/to/image1.jpg",
        thumbnail: "https://example.com/path/to/thumbnail1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "Image 1"
},
{
        src: "https://example.com/path/to/image2.jpg",
        thumbnail: "https://example.com/path/to/thumbnail2.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "Image 2"
}]
const ImgGallery = () => {

   return (
      <div>
         <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gridGap: "1rem"}}>
            <Gallery images={gImages}/>
        </div>
      </div>
   );
};

export default ImgGallery;