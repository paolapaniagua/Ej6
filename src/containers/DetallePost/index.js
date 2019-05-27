import React from 'react';
import CardDetail from '../../components/CardDetail';
import JPApiServices from './../../services/JsonPlaceholderApiServices';

class DetallePost extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      post: {},
    }
  }

  async componentDidMount(){
    const { match } = this.props; 
    const { params } = match; 
    const { idPost } = params;

    if (idPost.length > 0) { 
		JPApiServices.getPostById(idPost)
      .then( 
        post => {
          this.setState({
            post,
          });
        }
      ).catch(
        error => console.log("Ocurrió un error",error)
      );  
    }
  }

  render(){
    const { post } = this.state;

    return(
      <div className="">
        {
          !post 
          ? <p> No hay datos aún</p>
          : <CardDetail {...post} />
        }    
      </div>
    );
  }
}

export default DetallePost;