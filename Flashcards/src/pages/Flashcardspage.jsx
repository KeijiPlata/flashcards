import { useState } from 'react'
import ReactCardFlip from 'react-card-flip';
import FrontCard from '../components/FrontCard';
import BackCard from '../components/BackCard';

export default function Flashcardspage() {
const [flip, setFlip] = useState(false);
  return (
   <div className='bg-red-500 h-screen w-full flex justify-center items-center'>
         <ReactCardFlip isFlipped={flip}
            flipDirection="horizontal">
              <FrontCard setFlip={setFlip} flip={flip}/>
              <BackCard setFlip={setFlip} flip={flip}/>
                
            </ReactCardFlip>
   </div>
  )
}
