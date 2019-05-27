import React from 'react';
import UserDetail from '../../components/UserDetail';
import JPApiServicesUser from './../../services/JsonPApiServicesUsers';

class DetalleUsuario extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      datosUsuario: {},
    }
  }

  async componentDidMount(){
    const { match } = this.props; 
    const { params } = match;
    const { idUser } = params;

    if (idUser.length > 0) { 
		JPApiServicesUser.getUseryId(idUser)
      .then( 
        datosUsuario => {
          this.setState({
            datosUsuario,
          });
        }
      ).catch(
        error => console.log("Ocurrió un error",error)
      );
    }
  }

  render(){
    const { datosUsuario } = this.state;

    return(
      <div className="">
        {
          !datosUsuario 
          ? <h2> No hay datos del usuario</h2>
          : <UserDetail {...datosUsuario} />
        }
      </div>
    );
  }
}

export default DetalleUsuario;