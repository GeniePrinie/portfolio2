import { ItemCard } from "../Components/ItemCard";
import { data } from "../data/projects";

export const Projects = () => {
  return (
    <div id="projects" className="pt-5 projects">
      <h2 className="fs-1 px-3">Projects</h2>
      <p className="px-3 fs-5">
        Note: All sites were for my academic coursework at Noroff and were only
        for educational purposes, none of them are real websites.
      </p>
      <section className="pb-4 pt-0 container">
        <div className="">
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
