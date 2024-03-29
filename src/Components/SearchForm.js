import React, {Component} from 'react'

const _ApiKey='eaba5c4'
export class SearchForm extends Component
{
    state=
    {
        inputMovie:'',
 
    }
    _handleChange=(e)=>{
        this.setState({inputMovie:e.target.value})
    }
    _handleSubmit=(e)=>
    {
        e.preventDefault()
        const {inputMovie}=this.state
        fetch(`http://www.omdbapi.com/?apikey=${_ApiKey}&s=${inputMovie}`).then(res=> res.json()).then(result=>{const{Search=[],totalResults="0"}=result
        console.log({Search,totalResults})
        this.setState({loading:false})
      
        this.props.onResults(Search)
    } )
    }
    render()
    {
        
        return(
            <form onSubmit={this._handleSubmit}>

            <div className="field has-addons">
            <div className="control">
                <input 
                className="input" 
                onChange={this._handleChange}
                type="text" 
                placeholder="Movies to search..."/>
            </div>
            <div className="control">
                <button className="button is-info">
                Search
                </button>
            </div>
            </div>
               
                </form>
        )
    }
}