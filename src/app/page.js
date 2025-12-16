import styles from './page.module.scss'
import { projects } from '../data';
import Image from 'next/image';
import Double from '../components/double';
import Quad from '../components/quad';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className='p-8'>
        <h1>Lidé dnes od značek očekávají více než kdy dříve. Proto inovujeme a tvoříme komunikaci na průsečíku oborů, abychom našim klientům přinesli ta nejlepší možná řešení pro jejich růst říká <span className="text-[#B6483B]">STUDIO 6.15</span></h1>
        <p className="text-xl text-gray-600 mt-8 max-w-4xl">Ogilvy patří k zakladatelům a ikonám reklamního odvětví. Už od našich začátků se věnujeme budování značek. Dosahujeme toho především kombinací expertiz (Advertising, PR, Consulting, Performance, Experience, Social) a kreativitou, která prostupuje všemi disciplínami a slouží jako nástroj růstu prospěšného nejen pro byznys, ale i pro společnost. </p>
      </div>
      <div className={styles.gallery}>
        <Double projects={[projects[11], projects[8]]}/>
        <Double projects={[projects[3], projects[0]]}/>
        <Double projects={[projects[10], projects[1]]}/>
        <Double projects={[projects[7], projects[13]]}/>
        <div className='p-8 border-t'>
          <h2 className='text-4xl pt-16'>Nadpis a úvod do kultovní kategorie</h2>
          <p className="text-xl text-gray-600 mt-8 max-w-4xl">Ogilvy patří k zakladatelům a ikonám reklamního odvětví. Už od našich začátků se věnujeme budování značek. Dosahujeme toho především kombinací expertiz (Advertising, PR, Consulting, Performance, Experience, Social) a kreativitou, která prostupuje všemi disciplínami a slouží jako nástroj růstu prospěšného nejen pro byznys, ale i pro společnost. </p>
        </div>
        <Quad projects={[projects[7], projects[0], projects[12], projects[1]]}/>
        <Quad projects={[projects[4], projects[5], projects[6], projects[2]]}/>
        <Quad projects={[projects[10], projects[11], projects[12], projects[13]]}/>
        
      </div>
    </main>
  )
}

