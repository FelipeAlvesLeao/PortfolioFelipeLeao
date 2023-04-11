
export default function Footer() { 
    return (

<footer class="bg-secondary m-0 w-full">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-primary sm:text-center ">© 2023 <a href="#home" class="hover:underline">Felipe Leão</a>. Todos os diretos reservados.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-primary sm:mt-0">
        <li>
            <a href="#aboutme" class="mr-4 hover:underline md:mr-6 ">Sobre Mim</a>
        </li>
        <li>
            <a href="#skills" class="mr-4 hover:underline md:mr-6">Habilidades</a>
        </li>
        <li>
            <a href="#projects" class="mr-4 hover:underline md:mr-6">Projetos</a>
        </li>
        <li>
            <a href="#contactme" class="hover:underline">Contato</a>
        </li>
    </ul>
    </div>
       
</footer>

    )
}
