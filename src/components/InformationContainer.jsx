import '../styles/components/informationcontainer.sass'

import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai'

function InformationContainer() {
    return (
        <section id='information'>
            <div className='info_card'>
                <AiFillPhone id='phone_icon' />
                <div>
                    <h3>Telefone</h3>
                    <p>(45)99999-9999</p>
                </div>
            </div>

            <div className='info_card'>
                <AiOutlineMail id='email_icon' />
                <div>
                    <h3>E-mail</h3>
                    <p>1arthurgehlen@gmail.com</p>
                </div>
            </div>

            <div className='info_card'>
                <AiFillEnvironment id='pin_icon' />
                <div>
                    <h3>Localização</h3>
                    <p>Toledo / PR</p>
                </div>
            </div>
        </section>
    )
}

export default InformationContainer