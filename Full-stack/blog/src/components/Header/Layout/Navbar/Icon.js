import React from 'react'

//TODO: Make icon a link?

export default function Icon() {
    return (
        <div className='me-3'>
            <img src="../../Icons/blog-icon-black.png" alt="Blog-Logo" width="50" height="50" className='img-thumbnail bgColor-primaryLight mr-3' />
        </div>
    )
}
/* If the primary background color of the website is a lighter color use blog-icon-black.png,
    if the color is a dark color (ie blue, green, ect), switch from black to primary color (spacific color icons may not exist yet)

    Default color name (ie 'blog-icon-black.png') means there is no fill color in the icon (will be background color), 
    If '-fill' is added before '.png', the inside of icon is filled as solid white (maybe black).
*/