import Image from 'next/image';
import React, { useRef } from 'react'

export default function IsValid() {
    const audioRef = useRef(null);

    const reproducirAudio = () => {
        audioRef.current.play();
    };

    return (
        <div>
            <audio ref={audioRef}>
                <source src="/music.mp3" type="audio/mp3" />
            </audio>
            <Image src='/giphy.gif' alt='dance' width={300} height={300} />
            <button onClick={() => reproducirAudio()}>Hola</button>
        </div>
    )
}
