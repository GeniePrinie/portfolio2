import { ItemCard } from "../Components/ItemCard";
import { data } from "../data/projects";

export const Projects = () => {
  return (
    <div id="projects" className="pt-5">
      <h2>Projects</h2>
      <p>
        Note: All sites were for my academic coursework at Noroff and were only
        for educational purposes, none of them are real websites.
      </p>
      <section className="py-4 container">
        <div className="row justify-content-center">
          {data.projectData.map((item, index) => {
            return (
              <ItemCard
                image={item.image}
                title={item.title}
                description={item.description}
                projectName={item.projectName}
                website={item.website}
                repository={item.repository}
                key={index}
                item={item}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};
