import styles from './page.module.scss'
import { projects } from '../data';
import Image from 'next/image';
import Double from '../components/double';
import Triple from '../components/triple';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>We use design and technology to create brands and products that perform, delight, and scale.</h1>
      <div className={styles.gallery}>
        <Double projects={[projects[0], projects[1]]}/>
        <Triple projects={[projects[2], projects[3], projects[4]]}/>
        <Double projects={[projects[5], projects[6]]} reversed={true}/>
        <Triple projects={[projects[0], projects[2], projects[7]]}/>
      </div>
    </main>
  )
}

