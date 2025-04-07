import AboutContainer from './AboutContainer'
import ProjectContainer from './ProjectContainer'
import TecnologiesContainer from './TecnologiesContainer'

import '../styles/components/maincontent.sass'

const MainContent = () => {
    return <main id="main_content">
        <AboutContainer />
        <TecnologiesContainer />
        <ProjectContainer />
    </main>
}

export default MainContent