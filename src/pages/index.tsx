import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import {useState} from "react";
import {stat} from "fs";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [status,setStatus]=useState(false);
  const showHide=()=> setStatus(!status);
    const [cislo, setCislo]=useState(0);
    const plus=()=>{setCislo(cislo+1)}
    const minus=()=>{setCislo(cislo-1)}


  return (
      <article>

<button onClick={showHide}>{status ? "Skryt pocitadlo":"Ukazat pocitadlo"
    }
</button>
        <div><h3>{cislo}</h3>
          <button onClick={plus}>plus</button>
          <button onClick={minus}>minus</button>
        </div>


      </article>
  )
}
