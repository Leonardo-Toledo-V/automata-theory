import Image from 'next/image';
import React, { useEffect, useRef } from 'react'

export default function IsValid() {
    const audioRef = useRef(null);
    useEffect(()=>{
        reproducirAudio();
    },[])

    const reproducirAudio = () => {
        audioRef.current.play();
    };

    return (
        <div>
            <audio ref={audioRef}>
                <source src="/music.mp3" type="audio/mp3" />
            </audio>
            <Image src='/giphy.gif' alt='dance' width={300} height={300} />
            qbuenautomata
        </div>
    )
}
