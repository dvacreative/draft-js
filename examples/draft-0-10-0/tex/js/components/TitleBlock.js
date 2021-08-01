 import React from 'react';
 import {
    EditorBlock,
  } from "draft-js";
 
 export default class TitleBlock extends React.Component {
   render() {
    console.log(this.props);
     return (
         
       <h1 className='TitleBlock'>
         <EditorBlock {...this.props} />
       </h1>
     );
   }
}