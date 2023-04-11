
export default function ProjectCard({title, desc, image, link}) { 

    ProjectCard.defaultProps = {
        title: "Default title",
        text: "Default text",
        image: "https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg",
        link: "https://google.com"
    };

    return (
        <div
  className="block max-w-sm rounded-lg bg-primary shadow-lg mt-[50px]">
  <a href="#!">
    <img
      className="rounded-t-lg"
      src={image}
     />
  </a>
  <div className="p-6">
    <h5
      className="mb-2 text-xl font-medium text-turquoise leading-tight font-poppins">
      {title}
    </h5>
    <p className="mb-4 text-base font-poppins">
        {desc}
    </p>

    <a href={link} target="_blank" className="text-white bg-turquoise hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 mb-2 focus:outline-none">Ir ao site</a>
  </div>
</div>

    )
}
