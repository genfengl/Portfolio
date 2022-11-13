import { FaGithub, FaLinkedin } from 'react-icons/fa'


const Play = () => {
    return (
        <section id="play">
            <div className='container mx-auto px-6
            grid grid-cols-2 grid-rows-2 col-start-1 col-end-2 row-span-1 gap-3'>
                <a href="" className='group text-l font-bold align-middle py-6'>
                    View Projects
                    <div className='mt-0.5 bg-word h-0.5 w-14 transition-all group-hover:w-[6.6rem] group-hover:translate-x--2'></div>
                </a>

                <div className='flex flex-row gap-3 col-start-1 col-end-1 row-start-2 row-end-3'>
                    <div className='flex items-center text-2xl'><FaGithub /></div>
                    <div className='flex items-center text-2xl'><FaLinkedin /></div>
                </div>
            </div>

        </section>
    )
}

export default Play