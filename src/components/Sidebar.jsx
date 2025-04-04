import '../styles/components/sidebar.sass'

import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'

import avatar from '../img/avatar.jpg'

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={avatar} alt="Avatar" height='300px' width='300px' />
            <p className="title">Desenvolvedor</p>
            <SocialNetworks />
            <InformationContainer />
            <a href="#" className="btn">
                Download Currículo
            </a>
        </aside>
    )
}

export default Sidebar