'use client';
import styles from './style.module.scss';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react'; 

export default function Index({projects}) {

    // State to track current image index for each project
    const [currentImageIndex1, setCurrentImageIndex1] = useState(0);
    const [currentImageIndex2, setCurrentImageIndex2] = useState(0);
    const [currentImageIndex3, setCurrentImageIndex3] = useState(0);
    const [currentImageIndex4, setCurrentImageIndex4] = useState(0);
    
    // Refs to store interval IDs
    const interval1Ref = useRef(null);
    const interval2Ref = useRef(null);
    const interval3Ref = useRef(null);
    const interval4Ref = useRef(null);
    
    // Start image cycling on hover for project 1
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
    
    // Start image cycling on hover for project 2
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
    
    // Start image cycling on hover for project 3
    const handleMouseEnter3 = () => {
        if(projects[2].images && projects[2].images.length > 1) {
            interval3Ref.current = setInterval(() => {
                setCurrentImageIndex3((prev) => (prev + 1) % projects[2].images.length);
            }, 2000);
        }
    };
    
    const handleMouseLeave3 = () => {
        if(interval3Ref.current) {
            clearInterval(interval3Ref.current);
            interval3Ref.current = null;
        }
    };
    
    // Start image cycling on hover for project 4
    const handleMouseEnter4 = () => {
        if(projects[3].images && projects[3].images.length > 1) {
            interval4Ref.current = setInterval(() => {
                setCurrentImageIndex4((prev) => (prev + 1) % projects[3].images.length);
            }, 2000);
        }
    };
    
    const handleMouseLeave4 = () => {
        if(interval4Ref.current) {
            clearInterval(interval4Ref.current);
            interval4Ref.current = null;
        }
    };
    
    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if(interval1Ref.current) clearInterval(interval1Ref.current);
            if(interval2Ref.current) clearInterval(interval2Ref.current);
            if(interval3Ref.current) clearInterval(interval3Ref.current);
            if(interval4Ref.current) clearInterval(interval4Ref.current);
        };
    }, []);

    return(
      <div className={styles.quad}>
  
        <div 
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

        <div 
          className={styles.imageContainer}
          onMouseEnter={handleMouseEnter3}
          onMouseLeave={handleMouseLeave3}
        >
          <div className={styles.stretchyWrapper}>
            {projects[2].images.map((img, idx) => (
              <Image 
                key={`${projects[2].folder}-${idx}`}
                src={`/images/studio/${projects[2].folder}/${img}`}
                fill={true}
                alt={projects[2].name}
                style={{
                  opacity: idx === currentImageIndex3 ? 1 : 0,
                  transition: 'opacity 1.2s ease-in-out',
                  zIndex: idx === currentImageIndex3 ? 2 : 1,
                  pointerEvents: idx === currentImageIndex3 ? 'auto' : 'none'
                }}
              />
            ))}
          </div>
          <div className={styles.body}>
              <h3>{projects[2].name}</h3>
              <p>
                <span className={styles.category}>{projects[2].category}</span>
                {projects[2].description}
              </p>
              <p>{projects[2].year}</p>
          </div>
        </div>

        <div 
          className={styles.imageContainer}
          onMouseEnter={handleMouseEnter4}
          onMouseLeave={handleMouseLeave4}
        >
          <div className={styles.stretchyWrapper}>
            {projects[3].images.map((img, idx) => (
              <Image 
                key={`${projects[3].folder}-${idx}`}
                src={`/images/studio/${projects[3].folder}/${img}`}
                fill={true}
                alt={projects[3].name}
                style={{
                  opacity: idx === currentImageIndex4 ? 1 : 0,
                  transition: 'opacity 1.2s ease-in-out',
                  zIndex: idx === currentImageIndex4 ? 2 : 1,
                  pointerEvents: idx === currentImageIndex4 ? 'auto' : 'none'
                }}
              />
            ))}
          </div>
          <div className={styles.body}>
              <h3>{projects[3].name}</h3>
              <p>
                <span className={styles.category}>{projects[3].category}</span>
                {projects[3].description}
              </p>
              <p>{projects[3].year}</p>
          </div>
        </div>
  
      </div>
    )
  }
