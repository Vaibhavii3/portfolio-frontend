import React from 'react';
import { motion } from 'framer-motion';
import "../style/PhotoPage.css";

const Photos = [
    { id: 1, url: '../img/1.jpg'},
    { id: 2, url: '../img/2.jpg'},
    { id: 3, url: '../img/3.jpg'},
    { id: 4, url: '../img/4.jpg'},
    { id: 5, url: '../img/5.jpg'},
    { id: 6, url: '../img/6.jpeg'},
    { id: 7, url: '../img/7.jpg'},
    { id: 8, url: '../img/8.jpg'},
    // { id: 9, url: '../img/9.jpg'},
    // { id: 10, url: '../img/10.jpg'},
    // { id: 11, url: '../img/11.jpg'},
    { id: 12, url: '../img/12.jpg'},
    { id: 13, url: '../img/13.jpg'},
    { id: 14, url: '../img/14.jpg'},
    { id: 15, url: '../img/15.jpg'},
    { id: 16, url:'../img/16.jpg'},
    { id:17, url:'../img/17.jpg'},
];


function PhotoPage() {
    
    return (
        
        <div className='photo-gallery'>
            {Photos.map((image) => (
                <motion.div 
                key={image.id}
                className='photo-card'
                whileHover={{ scale: 1.05}}
                transition={{ type: 'spring', stiffness: 300}}
                >
                    <img src={image.url} />
                </motion.div>
            ))}
        </div>
    );
}

export default PhotoPage;

