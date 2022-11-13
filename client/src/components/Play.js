import { FaGithub } from 'react-icons/fa'


const Play = () => {
    return (
        <section id="play">
            <div className='container mx-auto flex justify-between items-center px-6'>
                <div className=''>
                    <a href="" className='group text-l font-bold align-middle'>
                        View Projects
                        <div className='mt-0.5 bg-word h-0.5 w-14 transition-all group-hover:w-[6.6rem] group-hover:translate-x--2'></div>
                    </a>
                    
                </div>
                <div className='flex gap-2'>
                    <div className='flex items-center text-2xl'><FaGithub /></div>
                    <div className='flex items-center text-2xl'><FaGithub /></div>
                </div>
            </div>

        </section>
    )
}

export default Play