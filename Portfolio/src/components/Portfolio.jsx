import ProjectCard from "./ProjectCard"
import { fernanda, cgis } from "../assets"
export default function Portfolio() { 
    return (
        <section id="projects" className="sm:py-[150px] py-[100px] bg-secondary h-full w-full relative">
        <div className="custom-shape-divider-top-1680915384">
<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
</svg>
</div>
<div className="grid place-content-center max-w-[50%] ml-auto mr-auto">
    <h2 className="text-turquoise text-center font-poppins mb-6 text-xl font-normal leading-none tracking-tight md:text-2xl lg:text-3xl">Projetos</h2>
    <ProjectCard title="Website CGIS " desc="Site para uma pós-graduação ofertada pela UFG. Sou o responsável pela manutenção e implementação de novas páginas no site desde novembro de 2022, feito usando Typescript, SASS, React-Router, Context API e Ant Design." image={cgis} link={"https://especializacao.cgis.ufg.br/p/home"}/>
    <ProjectCard title="Website Fernanda Pádua" desc="Site para a profissional veteninária com design moderno e profissional, feito usando Wordpress, Divi e Javascript." image={fernanda} link={"https://fernandapadua.vet.br/"}/>

</div>

    </section>

    )
}
