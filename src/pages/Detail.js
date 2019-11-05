import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
const _ApiKey='eaba5c4'

export class Detail extends Component{
    static propTypes={
       match:PropTypes.shape({
           params:PropTypes.object,
           isExact: PropTypes.bool,
           path: PropTypes.string,
           url: PropTypes.string

        })
    }
    state={movie:{}}
    _fetchMovie({id}){
        fetch(`http://www.omdbapi.com/?apikey=${_ApiKey}&i=${id}`).then(res=> res.json()).then(result=>{
        console.log({result})
        this.setState({movie:result})
    })    
    }
    componentDidMount()
    {
        console.log(this.props)
        const{id}=this.props.match.params
        this._fetchMovie({id})
    }
    _goBack()
    {
        window.history.back()
    }
    render(){
        const {Title,Poster,Actors, Metascore,Plot}=
        this.state.movie
           return( 
        <div className="container">
            <Link 
            className="button is-info"
            to="/"
            >
            Volver a la Portada
            </Link>
            <h1>{Title}</h1>
            <img src={Poster} alt=""></img>
            <h3>{Actors}</h3>
           <span>{Metascore}</span>
           <p>{Plot}</p> 
        <p>Pagina de Detalle</p>
        </div>
           )}
}