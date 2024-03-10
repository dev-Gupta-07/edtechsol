import React from 'react'
import { List,Datagrid,TextField,DateField,DeleteButton,EditButton } from 'react-admin'
const UserList = (props) => {
  return (
    <List {...props}>
     <Datagrid>
        {/* <TextField source='id'/> */}
        <TextField source='name'/>
        <TextField source='username'/>
        <TextField  source='email'/>
       
     </Datagrid>

    </List>
  )
}

export default UserList