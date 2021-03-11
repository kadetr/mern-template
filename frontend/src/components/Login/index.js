import React from "react";
import {
   Container,
   FormButton,
   FormContent,
   FormH1,
   Form,
   FormInput,
   FormLabel,
   FormWrap,
   Icon,
   Text,
} from "./loginElements";

const Login = () => {
   return (
      <>
         <Container>
            <FormWrap>
               <Icon to="/">dolla</Icon>
               <FormContent>
                  <Form action="#">
                     <FormH1>Sign in to access you account</FormH1>
                     <FormLabel htmlFor="o">Email</FormLabel>
                     <FormInput type="email" required />
                     <FormLabel htmlFor="o">Password</FormLabel>
                     <FormInput type="password" required />
                     <FormButton type="submit">Continue</FormButton>
                     <Text>Forgot Bassword (.)</Text>
                  </Form>
               </FormContent>
            </FormWrap>
         </Container>
      </>
   );
};

export default Login;
