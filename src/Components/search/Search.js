import React from 'react';
import TextField from 'material-ui/TextField';
//import SelectField from 'material-ui/SelectField';
//import MenuItem from '@material-ui/core/MenuItem';
import Items from '../items/Item';
import axios from 'axios';
class Search extends React.Component {
  state = {
    article:[],
    inputText: ''
  }
  onChangeSearch = (e)=>{
    e.preventDefault();
    console.log(e.target.value);
    this.setState({inputText:e.target.value},()=>{
      if(this.state.inputText ==='') {
        alert('please enter the topic');
      }
      else {
        axios.get(`https://newsapi.org/v2/everything?q=${this.state.inputText}&apiKey=0b08992c1da84a4481642db8787e45de`)
        .then(res =>{
          this.setState({article:res.data.articles});
          //console.log('under the axios',this.state.article);
        }  )
        .catch(err=>console.log(err));
        // console.log('article',this.state.article);
      }
    //  console.log('article',this.state.article);
    }
  )
  }
  render() {

    return(
      <div>
      <TextField
      className="searchBar"
      name="searchText"
      value = {this.state.inputText}
      onChange = {this.onChangeSearch}
      floatingLabelText = "search for Images"
      fullWidth = {true}
      />
      {this.state.article.map((item)=>{
        //console.log(item);
      return  <Items item={item}  key={item.publishedAt}/>
        // /console.log("asdfdf");
      })}
      </div>
    );
  }
}

export default Search;
