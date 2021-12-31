import React,{Fragment} from 'react';
import FlexboxGrid from 'rsuite/FlexboxGrid';

export default function Form(props) {


  return (
    <Fragment>
      <h2>Ejemplo de Formulario</h2> 
      <p>lorem</p>
      <div className="show-grid">
      <FlexboxGrid>
        <FlexboxGrid.Item colspan={12} style={{backgroundColor: 'blue'}}>colspan={12}</FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={12} style={{backgroundColor: 'blueviolet'}}>colspan={12}</FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={6} style={{backgroundColor: 'blue'}}>colspan={6}</FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={6} style={{backgroundColor: 'blueviolet'}}>colspan={6}</FlexboxGrid.Item>
      </FlexboxGrid>
    </div>
    </Fragment>
  );
}