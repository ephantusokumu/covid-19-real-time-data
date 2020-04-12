
import React, { Component } from 'react';
import {Chart, Cards, CountryPicker} from './components'
import Header from './components/Header/Header';
import styles from './App.module.css';
import {fetchData} from './api';



 class App extends Component {
 state = {
     data: {},
     country:{},
 }


  async componentDidMount(){
      const fetchedData = await fetchData(); 
      this.setState({data: fetchedData});
     // console.log(data);
  }
  handleCountryChange = async (country) =>{
      console.log(country)
    const fetchedData = await fetchData(country);
    this.setState({data: fetchedData, country:country});
    

}


    render() {
        const {data, country} = this.state;
        return (
          
            <div className={styles.container}>
                  <Header style={{ width: 800, height: 200 }}/>
                  <Cards data ={data}/>
                  <CountryPicker handleCountryChange={this.handleCountryChange}/>
                  <Chart data= {data} country={country} />
                
            </div>
        )
    }
}

export default App
