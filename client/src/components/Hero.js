import { FaCode } from 'react-icons/fa'
import { BsCode, BsCodeSlash } from 'react-icons/bs'
import { RiCodeFill, RiCodeSSlashFill} from 'react-icons/ri'

const Hero = () => {
    return (
        // Hero section
        <section id='hero'>
            {/* Flex Container */}
            <div className="container mx-auto flex flex-col">
                <div className="text-4xl font-bold p-6">
                    <RiCodeFill className='inline-flex items-center py-1'/> 
                    &nbsp;Transforming 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400"> dreams</span>
                    &nbsp;and&nbsp;
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-100">ideas </span> 
                    into real world applications 
                    &nbsp;<RiCodeSSlashFill className='inline-block items-center py-1'/>
                    
                </div>
                
            </div>
        </section>
    )
}

export default Hero