import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'

import '../styles/components/socialnetworks.sass'

const social_networks = [
    { name: "linkedin", icon: <FaLinkedinIn /> },
    { name: "github", icon: <FaGithub /> },
    { name: "instagram", icon: <FaInstagram /> }
]

function SocialNetworks() {
    return (
        <section id='social_networks'>
            {social_networks.map((network) => (
                <a href="" className='social_btn' id={network.name} key={network.name}>
                    {network.icon}
                </a>
            ))}
            </section>
    )
}

export default SocialNetworks