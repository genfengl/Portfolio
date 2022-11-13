import { FaCode } from 'react-icons/fa'
import { BsCode, BsCodeSlash } from 'react-icons/bs'
import { RiCodeFill, RiCodeSSlashFill } from 'react-icons/ri'

const Hero = () => {
    return (
        // Hero section
        <section id='hero'>
            {/* Flex Container */}
            <div className="container mx-auto flex flex-col">
                <div className="text-4xl font-bold px-6 py-16 flex flex-wrap">
                    <RiCodeFill className='inline-flex items-center py-1' />
                    <span>Transforming&nbsp;</span>
                    <span className="animate-gradientAnimation text-transparent bg-clip-text 
                    bg-gradient-to-r 
                    from-pink-300 via-purple-300 to-indigo-400 bg-size-200">dreams</span>
                    &nbsp;and&nbsp;
                    <span className="animate-gradientAnimation text-transparent bg-clip-text 
                    bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-400 bg-size-200">ideas&nbsp;</span>
                    <span>into&nbsp;</span>
                    <span>real&nbsp;</span>
                    <span>world&nbsp;</span>
                    <span>applications&nbsp;</span>  
                    <span className='inline-flex animate-blink opacity-0'>_</span>
                    &nbsp;<RiCodeSSlashFill className='inline-block items-center pt-2' />
                </div>

            </div>
        </section>
    )
}

export default Hero