import React, { useState } from "react";
import ProjectCard from "../../../components/common/ProjectCard";

const ProjectsAndSkills = (props) => {
    const [projectAndSkillsData, setProjectAndSkillsData] = useState({})

    const onFieldChange = (event) => {
        event.preventDefault();
        let currentProfileData = projectAndSkillsData
        currentProfileData[event.target.id] = event.target.value
        setProjectAndSkillsData(currentProfileData)
        if (props.getData) {
            props.getData(projectAndSkillsData)
        }
    }

    return (
        <div className="xl:w-4/5 w-full lg:w-4/5 flex flex-col">
            <div className="xl:w-full pt-10 justify-start">
                <div className="flex flex-row justify-between items-center w-11/12 mx-auto">
                    <div className="flex items-center">
                        <p className="text-lg text-gray-800 dark:text-gray-100 font-bold">Projects</p>
                        <div className="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
                                <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
                            </svg>
                        </div>
                    </div>
                    <button className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-sm">Add A Project</button>
                </div>
            </div>
            <div className="w-11/12 mx-auto justify-end">
                <div className="mx-auto xl:mx-0">
                    <ProjectCard startDate="XX/XX/XX" endDate="XX/XX/XX" name="hello kitty" description="Booyeah let's do this. Booyeah let's do this. Booyeah let's do this. Booyeah let's do this." link="https://www.google.com" img="https://i.ibb.co/1m5Q4tf/image.png" skills="React, Node, Lamp" removeable />
                </div>
            </div>
        </div>
    )
}

export default ProjectsAndSkills;