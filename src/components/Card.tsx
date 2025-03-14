import Image from "next/image";
import styles from "./card.module.css"
import InteractiveCard from "./InteractiveCard";
export default function Card({venueName,imgSrc}:{venueName:string,imgSrc:string}){
    return (
        <InteractiveCard contentName={venueName}>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc} alt='Content' fill={true} className='object-cover rounded-t-lg'/>
            </div>
            <div className='w-full h-[15%] p-[10px] text-center text-xl'>
                {venueName}
            </div>
        </InteractiveCard>
    );
}