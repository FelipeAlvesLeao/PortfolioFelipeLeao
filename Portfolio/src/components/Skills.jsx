import { wrench, dbicon, htmlicontransparent} from "../assets"

export default function Skills() { 
    return (
        <section id="skills" className="bg-primary relative h-full w-full py-14">

        <div className="grid place-content-center max-w-[50%] ml-auto mr-auto">
        <h2 className="text-secondary text-center font-poppins mb-6 text-xl font-normal leading-none tracking-tight md:text-2xl lg:text-3xl">Habilidades</h2>
        </div>

        <div className="gap-8 row-gap-8 lg:grid-cols-3 max-w-[50%] ml-auto mr-auto mt-10 hidden lg:grid">
            <div className="bg-turquoise/[.5] rounded-full h-16 w-16 max-w-[50%] ml-auto mr-auto">
            <img src={htmlicontransparent} className="icon2 ml-auto mr-auto mt-3"/>
            </div>

            <div className="bg-turquoise/[.5] rounded-full h-16 w-16 max-w-[50%] ml-auto mr-auto">
            <img src={dbicon} className="icon2 ml-auto mr-auto mt-3"/>
            </div>

            <div className="bg-turquoise/[.5] rounded-full h-16 w-16  max-w-[50%] ml-auto mr-auto">
            <img src={wrench} className="icon2 ml-auto mr-auto mt-3"/>
            </div>
    
        </div>

        <div className="grid gap-8 row-gap-8 lg:grid-cols-3 max-w-[50%] ml-auto mr-auto mt-10">
            <div className="text-center">
            <h6 class="mb-2 font-poppins font-semibold leading-5 border-b-2 border-turquoise pb-4">Front-End</h6>
            <p className="font-poppins mt-5">React.JS</p>
            <p className="font-poppins">TailwindCSS</p>
            <p className="font-poppins">Material UI</p>
            <p className="font-poppins">HTML/CSS</p>
            <p className="font-poppins">SASS</p>
            <p className="font-poppins">Typescript</p>

            </div>

            <div className="text-center">
            <h6 class="mb-2 font-poppins font-semibold leading-5 border-b-2 border-turquoise pb-4">Back-End</h6>
            <p className="font-poppins mt-5">Node.js</p>
            <p className="font-poppins">Axios</p>
            <p className="font-poppins">Express</p>
            <p className="font-poppins">MySQL</p>
            <p className="font-poppins">Mongoose</p>
            <p className="font-poppins">NestJS</p>
            </div>

            <div className="text-center">
            <h6 class="mb-2 font-poppins font-semibold	leading-5 border-b-2 border-turquoise pb-4">Ferramentas</h6>
            <p className="font-poppins mt-5">Git</p>
            <p className="font-poppins">Figma</p>
            <p className="font-poppins">Test-Driven Development</p>
            <p className="font-poppins">Cloudflare + Hostinger</p>
            <p className="font-poppins">Postman</p>
            <p className="font-poppins">Scrum</p>
             </div>
    
        </div>
        </section>
    )
}
