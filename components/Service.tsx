
import Image from 'next/image'

type serviceProps = {
    title:string,
    body:string,
    icon:string
}


const Service =({title,body,icon}:serviceProps) =>{
    return(
        <div className={`flex flex-col items-center sm:items-start  sm:flex-row bg-white shadow-lg border rounded-xl  sm:w-[23rem] p-8 sm:h-44`}>
            <div className='shrink-0 sm:mr-5 mb-4 sm:mb-0'>
                <Image src={icon} alt={title} width='75' height='75' />
            </div>
            <div>
                <h4 className='font-myriad font-bold text-primary-200 text-xl leading-5 mb-3 text-center sm:text-left'>{title}</h4>
                <p  className='font-myriad font-light leading-5 text-center sm:text-left'>{body}</p>
            </div>
        </div>
    )
}

export default Service