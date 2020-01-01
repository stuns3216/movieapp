import React,{Component} from "react";
import { Input, Rate,  } from "antd";
import Card from "./card";
import MyModal from './modal'
import './home.css'

const films = [
  {
    name: "saw8",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51DJv%2BZyYqL._AC_SY445_.jpg",
    rate: 1
  },
  {
    name: "war",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1xpXNbp1pu8zopquImW4pvBZf53DvNGrNFIn6nTmV6vdFoBgz",
    rate: 2
  },
  {
    name: "drive",
    img:
      "https://img.csfd.cz/files/images/film/posters/158/036/158036329_463c1e.jpg",
    rate: 3
  }
];


export default class Home extends Component {
    state={films,
    rate:0,search:''}

    handleData=(valeur)=>{
    const newArray=this.state.films
    newArray.push(valeur)
   this.setState({films:newArray})
  }
  // fonction pour recuperer Rate
  handleRate=(v)=>{
      this.setState({rate:v})
  }
  // handle the input value with e.target.value
  handleInput =(e)=>{
    this.setState({search:e.target.value})
}
    render() {
        return (
            <div>
                <div className="home">
      <div className="homeheader">
        <Input className="searsh" onChange={this.handleInput}/>
        <Rate onChange={this.handleRate} />
      </div>
      <div className="homebody">
        {this.state.films.filter(el=>(el.rate>=this.state.rate)&&(el.name.includes(this.state.search))).map((el, i) => {
         return <Card name={el.name} img={el.img} rate={el.rate} />;
          
        
        })}
        <MyModal handleData={this.handleData}/> 
      </div>
    </div>
            </div>
        )
    }
}

