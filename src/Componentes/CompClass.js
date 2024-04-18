import React from 'react';
import Imagenes from './Imagenes/mcdioz.jpg';
import Stylos from './Css/Estilos.css';

class MiComponente extends React.Component {
    render() {
const{nombre,Profesiones,color}=this.props;        
        return (
            <div className='Card back'>
                <div className='Title1' >
                    <h1 style={{color:`${color}`}}> Hola {nombre} mis profesiones son {Profesiones} </h1> 
                </div>
                <div className='Img1'>
                    <img 
                    src={Imagenes}/>
                </div>
            </div>
        );
    }
}

export default MiComponente;