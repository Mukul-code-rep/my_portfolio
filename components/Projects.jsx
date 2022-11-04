import React from 'react';
import PeronalProject from './PeronalProject';
const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">

        <h2 className="py-4 mt-10">Personal Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <PeronalProject
            porjectName={'Database Contract'}
            link={'https://github.com/Adiios/adi'}
            description={'Blockchain on-chain Database'}
            isPrivate={true}
          />
          <PeronalProject
            porjectName={'Sudoku Solver'}
            link={'https://github.com/Mukul-code-rep/sudoku-solver'}
            description={'9x9 Sudoku Solver by backtracking'}
          />
          <PeronalProject
            porjectName={'Cafe Database'}
            link={'https://github.com/Mukul-code-rep/cafe-database-api'}
            description={'Database and Rest API'}
          />
          <PeronalProject
            porjectName={'Cookie Clicker'}
            link={'https://github.com/Mukul-code-rep/cookie-clicker'}
            description={'Bot to play the online cookie game'}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
