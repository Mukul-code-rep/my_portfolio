import React from 'react';
import ProjectItem from './ProjectItem';
import PeronalProject from './PeronalProject';
const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="sm:text-center lg:text-left text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="sm:text-center lg:text-left py-4">
          Commercial Level Products (Internship)
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Event Simplify"
            backgroundImg="assets/projects/event-simplify.png"
            projectUrl="/event-simplify"
            tech="NEXT JS | Node JS | MongoDB"
          />
          <ProjectItem
            title="MindSetts"
            backgroundImg="assets/projects/mindsetts_cover.png"
            projectUrl="/mindsetts"
            tech="React JS | Node JS | MongoDB"
          />
        </div>
        <h2 className="py-4 mt-10">Personal Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <PeronalProject
            porjectName={'Tinker Stock'}
            link={'https://github.com/nishanprime/TinkerStockAdmin'}
            description={'Stock Management System'}
          />
          <PeronalProject
            porjectName={'IPO Bulk Checker'}
            link={'https://github.com/nishanprime/IPOBulkChecker'}
            description={'Automated System to check IPO status in bulk'}
          />
          <PeronalProject
            porjectName={'Maze Runner'}
            link={'https://github.com/nishanprime/Maze-Game---Matter.JS'}
            description={'Maze Game using Matter JS'}
          />
          <PeronalProject
            porjectName={'T-Mart Shop'}
            link={'https://github.com/nishanprime/T-Mart-Shop'}
            description={'E-Commerce Website made with MERN Stack'}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
