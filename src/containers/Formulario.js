import React,{Fragment} from 'react';
import FlexboxGrid from 'rsuite/FlexboxGrid';

import { Form, Schema } from 'rsuite';
import ButtonToolbar from 'rsuite/ButtonToolbar';
import Button from 'rsuite/Button';

import JSONTree from 'react-json-tree';


const { StringType, NumberType } = Schema.Types;

////************************************************************Validaciones */

const model = Schema.Model({
  name: StringType().isRequired('This field is required.'),
  email: StringType()
    .isEmail('Please enter a valid email address.')
    .isRequired('This field is required.'),
  age: NumberType('Please enter a valid number.').range(
    18,
    30,
    'Please enter a number from 18 to 30'
  ),
  password: StringType().isRequired('This field is required.'),
  verifyPassword: StringType()
    .addRule((value, data) => {
      console.log(data);

      if (value !== data.password) {
        return false;
      }

      return true;
    }, 'The two passwords do not match')
    .isRequired('This field is required.')
});

////************************************************************Validaciones */

////************************************************************Componente TexField */

const TextField = React.forwardRef((props, ref) => {
  const { name, label, accepter, ...rest } = props;
  return (
    <Form.Group controlId={`${name}-4`} ref={ref}>
      <Form.ControlLabel>{label} </Form.ControlLabel>
      <Form.Control name={name} accepter={accepter} {...rest} />
    </Form.Group>
  );
});

////************************************************************Componente TexField */

const Formulario = () => {

  ////************************************************************Declaracion de componente form y propiedades */
  const formRef = React.useRef();
  const [formError, setFormError] = React.useState({});
  const [formValue, setFormValue] = React.useState({
    name: '',
    email: '',
    age: '',
    password: '',
    verifyPassword: ''
  });

  ////************************************************************Declaracion de componente form y propiedades */

  ////************************************************************Accion del botton submit (aceptar, confirmar) */
  const handleSubmit = () => {
    if (!formRef.current.check()) {
      console.error('Form Error');
      return;
    }
    console.log(formValue, 'Form Value');
  };
  ////************************************************************Accion del botton submit (aceptar, confirmar) */

  ////************************************************************Otro botton*/
  const handleCheckEmail = () => {
    formRef.current.checkForField('email', checkResult => {
      console.log(checkResult);
    });
  };
  ////************************************************************Otro botton*/

  return (
    <FlexboxGrid>
      <FlexboxGrid.Item colspan={12}>
        <Form
          ref={formRef}
          onChange={setFormValue}
          onCheck={setFormError}
          formValue={formValue}
          model={model}
        >
          <TextField name="name" label="Username" />
          <TextField name="email" label="Email" />
          <TextField name="age" label="Age" />
          <TextField name="password" label="Password" type="password" autoComplete="off" />
          <TextField
            name="verifyPassword"
            label="Verify password"
            type="password"
            autoComplete="off"
          />

          <ButtonToolbar>
            <Button appearance="primary" onClick={handleSubmit}>
              Submit
            </Button>

            <Button onClick={handleCheckEmail}>Check Email</Button>
          </ButtonToolbar>
        </Form>
      </FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={12}>
  <JSONTree data={formValue} /> 
  <JSONTree data={formError} /> 
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
};

export default Formulario