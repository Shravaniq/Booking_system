import React from 'react'
import Masonry,{ResponsiveMasonry} from 'react-responsive-masonry';
import GalleryImages from './GalleryImages';

const MasonryImangesGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{350:1,768:3,992:4}}>
<Masonry gutter='1rem'>
     {
        GalleryImages.map((item,index)=>(
            <img src={item} key={index} alt='' className='masonary__img'
             style={{width:"100%" , display:"block",borderRadius:"10px"}}
             />
        ))
     }
</Masonry>
    </ResponsiveMasonry>
  )
}

export default MasonryImangesGallery
