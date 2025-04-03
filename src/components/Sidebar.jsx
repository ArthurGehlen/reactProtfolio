import '../styles/components/sidebar.sass'

import avatar from '../img/avatar.jpg'

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={avatar} alt="Avatar" />
            <p className="title">Desenvolvedor</p>
            <p>Redes Sociais</p>
            <p>Informações de Contato</p>
            <a href="#" className="btn">
                Download Currículo
            </a>
        </aside>
    )
}

export default Sidebar