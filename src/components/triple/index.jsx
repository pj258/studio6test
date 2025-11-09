'use client';
import styles from './style.module.scss';
import Image from 'next/image';
import { useRef, useEffect } from 'react'; 

export default function Index({projects}) {

    const firstImage = useRef(null);
    const secondImage = useRef(null);
    const thirdImage = useRef(null);
    let requestAnimationFrameId = null;
    let xPercent = 50;
    let currentXPercent = 50;
    const speed = 0.15;
    
    // Set initial widths on component mount
    useEffect(() => {
        const calculateInitialWidths = () => {
            // Calculate widths for center position (50%)
            const dist1 = Math.abs(50 - 16.67);
            const dist2 = Math.abs(50 - 50);
            const dist3 = Math.abs(50 - 83.33);
            
            const weight1 = Math.max(0, 50 - dist1);
            const weight2 = Math.max(0, 70 - dist2);
            const weight3 = Math.max(0, 50 - dist3);
            
            const totalWeight = weight1 + weight2 + weight3;
            
            const minSize = 18;
            const distributable = 100 - (minSize * 3);
            
            const firstImagePercent = minSize + (weight1 / totalWeight) * distributable;
            const secondImagePercent = minSize + (weight2 / totalWeight) * distributable;
            const thirdImagePercent = minSize + (weight3 / totalWeight) * distributable;
            
            if(firstImage.current && secondImage.current && thirdImage.current) {
                firstImage.current.style.width = `${firstImagePercent}%`;
                secondImage.current.style.width = `${secondImagePercent}%`;
                thirdImage.current.style.width = `${thirdImagePercent}%`;
            }
        };
        
        calculateInitialWidths();
    }, []);
    
    const manageMouseMove = (e) => {
        // Disable animation on mobile and tablet (to preserve 2+1 layout)
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
        
        //Smooth continuous distribution among 3 images based on mouse position
        //Divide screen into 3 zones, each image gets largest when mouse is over it
        
        let firstImagePercent, secondImagePercent, thirdImagePercent;
        
        // Calculate each image's size based on distance from their "center point"
        // First image center at 16.67%, Second at 50%, Third at 83.33%
        
        const dist1 = Math.abs(currentXPercent - 16.67);
        const dist2 = Math.abs(currentXPercent - 50);
        const dist3 = Math.abs(currentXPercent - 83.33);
        
        // Convert distances to weights (closer = larger weight)
        // Use wider influence radius (60) so each image can grow equally large
        const weight1 = Math.max(0, 50 - dist1);
        const weight2 = Math.max(0, 70 - dist2);
        const weight3 = Math.max(0, 50 - dist3);
        
        const totalWeight = weight1 + weight2 + weight3;
        
        // Distribute 100% among the three images based on weights
        // Add minimum of 22% per image, distribute remaining based on weights
        // This creates a more subtle zoom effect suitable for 3 images
        const minSize = 18;
        const distributable = 100 - (minSize * 3);
        
        firstImagePercent = minSize + (weight1 / totalWeight) * distributable;
        secondImagePercent = minSize + (weight2 / totalWeight) * distributable;
        thirdImagePercent = minSize + (weight3 / totalWeight) * distributable;
        
        firstImage.current.style.width = `${firstImagePercent}%`
        secondImage.current.style.width = `${secondImagePercent}%`
        thirdImage.current.style.width = `${thirdImagePercent}%`
        
        if(Math.round(xPercent) == Math.round(currentXPercent)){
            window.cancelAnimationFrame(requestAnimationFrameId);
            requestAnimationFrameId = null;
        }
        else{
            window.requestAnimationFrame(animate)
        }
    }

    return(
      <div onMouseMove={(e) => {manageMouseMove(e)}} className={styles.triple}>
  
        <div ref={firstImage} className={styles.imageContainer}>
          <div className={styles.stretchyWrapper}>
            <Image 
              src={`/images/${projects[0].src}`}
              fill={true}
              alt={"image"}
            />
          </div>
          <div className={styles.body}>
              <h3>{projects[0].name}</h3>
              <p>{projects[0].description}</p>
              <p>{projects[0].year}</p>
          </div>
        </div>
  
        <div ref={secondImage} className={styles.imageContainer}>
          <div className={styles.stretchyWrapper}>
            <Image 
              src={`/images/${projects[1].src}`}
              fill={true}
              alt={"image"}
            />
          </div>
          <div className={styles.body}>
              <h3>{projects[1].name}</h3>
              <p>{projects[1].description}</p>
              <p>{projects[1].year}</p>
          </div>
        </div>

        <div ref={thirdImage} className={styles.imageContainer}>
          <div className={styles.stretchyWrapper}>
            <Image 
              src={`/images/${projects[2].src}`}
              fill={true}
              alt={"image"}
            />
          </div>
          <div className={styles.body}>
              <h3>{projects[2].name}</h3>
              <p>{projects[2].description}</p>
              <p>{projects[2].year}</p>
          </div>
        </div>
  
      </div>
    )
  }

