import { felipe, react, sass, tailwind, htmlicon} from "../assets"
export default function Hero() { 

    return (
        <section id="home" className=" sm:py-[150px] py-[100px] bg-primary h-[80hv] w-full relative">

            <div className="flex md:flex-row flex-col justify-center items-center md:ml-[100px] mb-[50px]"> 
             <div className="max-w-[50%]">
                <h2 className="text-secondary font-poppins mb-6 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl  max-w-[60%]">Desenvolvedor Front-End React</h2>
                <p className="text-secondary text-xl md:text-2xl lg:test-3xl font-poppins leading-6  max-w-[80%]">Sou <span className="text-turquoise">Felipe Leão</span>, um desenvolvedor front-end com foco em React e um ano de experiência construindo páginas web.</p>
                <div className="mt-[30px]">
                <a href="/Curriculo.docx" download className="text-white bg-turquoise hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 mr-[15px] mb-2 focus:outline-none">Currículo</a>
                <a href="#contactme" className="text-white bg-turquoise hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 mb-2 focus:outline-none">Contato</a>
                </div>
             </div>
             <img src={felipe} className="w-[300px] h-[300px] rounded-full ml-[100px] mb-14 hidden md:block"></img>
            </div>


            <div className="flex flex-row justify-center items-center">
                <p className="text-turquoise text-xl md:text-2xl lg:test-3xl font-roboto">Tecnologias principais |</p>
                <img src={react} className="icon"/>
                <img src={tailwind} className="icon"/>
                <img src={sass} className="icon"/>
                <img src={htmlicon} className="icon"/>
            </div>
            
            
            
        </section>
    )
}
