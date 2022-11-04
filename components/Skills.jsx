import React from 'react';
import SkillCard from './SkillCard';
const skillsInfo = [
  {
    skillName: 'HTML',
    imgLink:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    skillName: 'JAVASCRIPT',
    imgLink:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    skillName: 'TYPESCRIPT',
    imgLink:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    skillName: 'PYTHON',
    imgLink:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    skillName: 'C',
    imgLink:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
  },
  {
    skillName: 'Solidity',
    imgLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg"
  },
  {
    skillName: 'CSS',
    imgLink:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },

  {
    skillName: 'BASH',
    imgLink:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',
  },
  {
    skillName: 'NodeJS',
    imgLink:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    skillName: 'ExpressJS',
    imgLink:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg',
  },

  {
    skillName: "Flask",
    imgLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
  },
  {skillName: "SQl Alchemy",
  imgLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg"},
  {
    skillName: "Bootstrap",
    imgLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
  },
  {
    skillName: "Jira",
    imgLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"
  },
  {skillName: "LATEX",
imgLink:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg"},
  {
    skillName: 'GIT',
    imgLink:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },

  {
    skillName: "JetBrains",
    imgLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetbrains/jetbrains-original.svg"
  },
  {
    skillName: 'VSCode',
    imgLink:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  },
];
const Skills = () => {
  return (
    <div
      id="skills"
      className="sm:text-center lg:text-left w-full lg:h-screen p-2"
    >
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsInfo.map((skill) => (
            <SkillCard
              imgLink={skill.imgLink}
              skillName={skill.skillName}
              key={skill.imgLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
