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
    { id: 12, url: '../img/12.jpg'},
    { id: 13, url: '../img/13.jpg'},
    { id: 14, url: '../img/14.jpg'},
    { id: 15, url: '../img/15.jpg'},
    { id: 16, url:'../img/16.jpg'},
    { id:17, url:'../img/17.jpg'},
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.9,},
    visible: {
        opacity: 1,
        scale: 1,
        
        transition: { 
            type: "spring",
            stiffness: 60,
            damping: 15,
            duration: 1, },
    },
};

function PhotoPage() {
    
    return (
        
        <motion.div
            className="photo-gallery"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {Photos.map((image) => (
                <motion.div 
                key={image.id}
                className='photo-card'
                variants={imageVariants}
                whileHover={{ scale: 1.05}}
                transition={{ type: 'spring', stiffness: 300}}
                >
                    <img src={image.url} />
                </motion.div>
            ))}
        </motion.div>
    );
}

export default PhotoPage;

