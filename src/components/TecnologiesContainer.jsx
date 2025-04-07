import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiPython,
    DiMysql,
    DiReact
} from 'react-icons/di'

import '../styles/components/tecnologiescontainer.sass'

const tecnologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
    { id: "python", name: "Python", icon: <DiPython /> },
    { id: "mysql", name: "MySQL", icon: <DiMysql /> },
    { id: "react", name: "React", icon: <DiReact /> },
]

function TecnologiesContainer() {
    return <section className='tecnologies_container'>
        <h2>Tecnologias</h2>
        <div className="tecnologies_grid">
            {tecnologies.map((tech) => (
                <div className="tecnology_card" id={tech.id} key={tech.id}>
                    {tech.icon}
                    <div className="tecnology_info">
                        <h3>{tech.name}</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </section>
}

export default TecnologiesContainer