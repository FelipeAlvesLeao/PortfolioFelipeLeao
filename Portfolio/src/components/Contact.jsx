import { whatsapp, mail, linkedin, github } from "../assets"

export default function Contact() { 
    return (
        <section id="contactme" className="bg-primary relative h-full w-full py-14">

        <div className="grid place-content-center max-w-[50%] ml-auto mr-auto">
        <h2 className="text-secondary text-center font-poppins mb-6 text-xl font-normal leading-none tracking-tight md:text-2xl lg:text-3xl">Contatos</h2>
        </div>
        
        <div className="grid gap-8 row-gap-8 lg:grid-cols-4 max-w-[50%] ml-auto mr-auto mt-10">

            <div className="bg-turquoise/[.5] rounded-full h-16 w-16 max-w-[50%] ml-auto mr-auto transform hover:scale-125 duration-300">
            <a target="_blank" href="https://api.whatsapp.com/send?phone=5562984029550"> 
            <img src={whatsapp} className="icon2 ml-auto mr-auto mt-3"/>
            </a>
            </div>

            <div className="bg-turquoise/[.5] rounded-full h-16 w-16 max-w-[50%] ml-auto mr-auto transform hover:scale-125 duration-300">
            <a target="_blank" href="mailto:felipealvesleao4@gmail.com"> 
            <img src={mail} className="icon2 ml-auto mr-auto mt-3"/>
            </a>
            </div>

            <div className="bg-turquoise/[.5] rounded-full h-16 w-16 max-w-[50%] ml-auto mr-auto transform hover:scale-125 duration-300">
            <a target="_blank" href="https://www.linkedin.com/in/felipe-alves-le%C3%A3o-de-ara%C3%BAjo-3b7b7220b/"> 
            <img src={linkedin} className="icon2 ml-auto mr-auto mt-3"/>
            </a>
            </div>

    
            <div className="bg-turquoise/[.5] rounded-full h-16 w-16 max-w-[50%] ml-auto mr-auto transform hover:scale-125 duration-300">
            <a target="_blank" href="https://github.com/FelipeAlvesLeao"> 
            <img src={github} className="icon2 ml-auto mr-auto mt-3"/>
            </a>
            </div>

        </div>

        
        <div className="hidden lg:grid gap-8 row-gap-8 lg:grid-cols-4 max-w-[50%] ml-auto mr-auto mt-10">
            <div className="text-center">
            <h6 class="mb-2 font-poppins font-semibold leading-5 border-y-2	 border-turquoise py-4">Telefone</h6>
            <p className="mb-4 text-base font-poppins">
               (62) 98402-9550
            </p>
            </div>

            <div className="text-center">
            <h6 class="mb-2 font-poppins font-semibold leading-5 border-y-2	 border-turquoise py-4">E-mail</h6>
            <p className="mb-4 text-base font-poppins">
               felipealvesleao4@gmail.com
            </p>
            </div>
            
            <div className="text-center">
            <h6 class="mb-2 font-poppins font-semibold leading-5 border-y-2	 border-turquoise py-4">Linkedin</h6>
            <p className="mb-4 text-base font-poppins">
               Felipe Alves Leão de Araújo
            </p>

            </div>
            
            <div className="text-center">
            <h6 class="mb-2 font-poppins font-semibold leading-5 border-y-2	 border-turquoise py-4">Github</h6>
            <p className="mb-4 text-base font-poppins">
               @FelipeAlvesLeao
            </p>
            </div>

        </div>


        </section>

    )
}
