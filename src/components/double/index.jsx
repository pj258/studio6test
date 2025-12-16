'use client';
import styles from './style.module.scss';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react'; 

export default function Index({projects, reversed}) {

    const firstImage = useRef(null);
    const secondImage = useRef(null);
    let requestAnimationFrameId = null;
    let xPercent = 50;
    let currentXPercent = 50;
    const speed = 0.15;
    
    // State to track current image index for each project
    const [currentImageIndex1, setCurrentImageIndex1] = useState(0);
    const [currentImageIndex2, setCurrentImageIndex2] = useState(0);
    
    // Refs to store interval IDs
    const interval1Ref = useRef(null);
    const interval2Ref = useRef(null);
    
    // Start image cycling on hover
    const handleMouseEnter1 = () => {
        if(projects[0].images && projects[0].images.length > 1) {
            interval1Ref.current = setInterval(() => {
                setCurrentImageIndex1((prev) => (prev + 1) % projects[0].images.length);
            }, 2000);
        }
    };
    
    const handleMouseLeave1 = () => {
        if(interval1Ref.current) {
            clearInterval(interval1Ref.current);
            interval1Ref.current = null;
        }
    };
    
    const handleMouseEnter2 = () => {
        if(projects[1].images && projects[1].images.length > 1) {
            interval2Ref.current = setInterval(() => {
                setCurrentImageIndex2((prev) => (prev + 1) % projects[1].images.length);
            }, 2000);
        }
    };
    
    const handleMouseLeave2 = () => {
        if(interval2Ref.current) {
            clearInterval(interval2Ref.current);
            interval2Ref.current = null;
        }
    };
    
    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if(interval1Ref.current) clearInterval(interval1Ref.current);
            if(interval2Ref.current) clearInterval(interval2Ref.current);
        };
    }, []);
    
    const manageMouseMove = (e) => {
        // Disable animation on mobile and tablet (no mouse on touch devices)
        if(window.innerWidth <= 1024) return;
        
        const { clientX } = e;
        xPercent = (clientX / window.innerWidth) * 100;
        
        if(!requestAnimationFrameId){
            requestAnimationFrameId = window.requestAnimationFrame(animate);
        }
    }

    const animate = () => {
        //Add easing to the animation
        const xPercentDelta = xPercent - currentXPercent;
        currentXPercent = currentXPercent + (xPercentDelta * speed)
        
        //Symetrická animace: střed je 50/50, rozsah ±8.25% (polovina z původních ±16.5%)
        const variation = (currentXPercent - 50) * 0.165;
        const firstImagePercent = 50 - variation;
        const secondImagePercent = 50 + variation;
        firstImage.current.style.width = `${firstImagePercent}%`
        secondImage.current.style.width = `${secondImagePercent}%`
        
        if(Math.round(xPercent) == Math.round(currentXPercent)){
            window.cancelAnimationFrame(requestAnimationFrameId);
            requestAnimationFrameId = null;
        }
        else{
            window.requestAnimationFrame(animate)
        }
    }

    return(
      <div onMouseMove={(e) => {manageMouseMove(e)}} className={styles.double}>
  
        <div 
          ref={firstImage} 
          className={styles.imageContainer}
          onMouseEnter={handleMouseEnter1}
          onMouseLeave={handleMouseLeave1}
        >
          <div className={styles.stretchyWrapper}>
            {projects[0].images.map((img, idx) => (
              <Image 
                key={`${projects[0].folder}-${idx}`}
                src={`/images/studio/${projects[0].folder}/${img}`}
                fill={true}
                alt={projects[0].name}
                style={{
                  opacity: idx === currentImageIndex1 ? 1 : 0,
                  transition: 'opacity 1.2s ease-in-out',
                  zIndex: idx === currentImageIndex1 ? 2 : 1,
                  pointerEvents: idx === currentImageIndex1 ? 'auto' : 'none'
                }}
              />
            ))}
          </div>
          <div className={styles.body}>
              <h3>{projects[0].name}</h3>
              <p>
                <span className={styles.category}>{projects[0].category}</span>
                {projects[0].description}
              </p>
              <p>{projects[0].year}</p>
          </div>
        </div>
  
        <div 
          ref={secondImage} 
          className={styles.imageContainer}
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
        >
          <div className={styles.stretchyWrapper}>
            {projects[1].images.map((img, idx) => (
              <Image 
                key={`${projects[1].folder}-${idx}`}
                src={`/images/studio/${projects[1].folder}/${img}`}
                fill={true}
                alt={projects[1].name}
                style={{
                  opacity: idx === currentImageIndex2 ? 1 : 0,
                  transition: 'opacity 1.2s ease-in-out',
                  zIndex: idx === currentImageIndex2 ? 2 : 1,
                  pointerEvents: idx === currentImageIndex2 ? 'auto' : 'none'
                }}
              />
            ))}
          </div>
          <div className={styles.body}>
              <h3>{projects[1].name}</h3>
              <p>
                <span className={styles.category}>{projects[1].category}</span>
                {projects[1].description}
              </p>
              <p>{projects[1].year}</p>
          </div>
        </div>
  
      </div>
    )
  }