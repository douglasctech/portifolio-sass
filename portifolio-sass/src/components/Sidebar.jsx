import SocialNetworks from './SocialNetworks.jsx'

import Avatar from '../img/84751124.jpeg'

import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer.jsx'

const Sidebar = () =>{
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Douglas Cruz" />
            <p className="title">Desenvolvedor</p>
            <SocialNetworks />
            <InformationContainer />
            <a href="" className="btn">
                Download currículo
            </a>
        </aside>
    )
}

export default Sidebar
            
            
            