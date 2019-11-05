import React, {Component} from 'react'
import {Title} from '../Components/Title'
import {MoviesList} from '../Components/MoviesList'
import {SearchForm} from '../Components/SearchForm'

export class Home extends Component{
    state={results:[], usedSearch:false}
    _handleResults=(results)=>{
      this.setState({results,usedSearch:true})
    }
  
    _renderResuls()
    {
      return this.state.results.length===0?
        <p>Sorry! Results not found!</p>:
        <MoviesList movies={this.state.results}></MoviesList>
    }
    render()
    {
        return(
            <div>

     <Title>Search Movies</Title>
     <div className="SearchForm-Wrapper">
     <SearchForm onResults={this._handleResults} ></SearchForm>
     </div>
     {this.state.usedSearch?this._renderResuls():<small>Use the form to search a movie</small>} 
           
            </div>
        );
    }
}

