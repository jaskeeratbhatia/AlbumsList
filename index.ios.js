//IOS code file

//Import library
import React from 'react'
import { AppRegistry} from 'react-native'
import Header from './src/components/header'

//Create a component
//Functional Component

const App = () =>{

  return(
        <Header></Header>
  );
};

//Render the component on the screen

AppRegistry.registerComponent("albumsApp", ()=> App)