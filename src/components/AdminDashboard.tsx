
import  React ,{ useEffect, useState } from 'react';
import { Admin, Resource,ListGuesser ,fetchUtils} from 'react-admin';
import UserList from '@/components/UserList'
import axios from 'axios';
const dataProvider = {
    getList: () => {
        return axios.get(`http://localhost:3000/api/getUsers`)
            .then(response => {
                // Check if response.data.allUsers exists and is an array
                if (Array.isArray(response.data.allUsers)) {
                    return {
                        data: response.data.allUsers.map(item => ({
                            id: item._id,
                            ...item,
                        })),
                        total: response.data.allUsers.length,
                    };
                } else {
                    throw new Error("Invalid response format: 'allUsers' is not an array.");
                }
            });
    },
};

const AdminDashboard = () => {
     const [isAdminLoaded, setIsAdminLoaded] = useState(false);
    useEffect(() => {
        import('react-admin').then(({ Admin, Resource }) => {
            setIsAdminLoaded(true);
        }).catch(error => {
            console.error('Error loading React Admin:', error);
        });
    }, []);
    return(
     <>
            {isAdminLoaded && (
                <Admin dataProvider ={dataProvider}>
                    <Resource name="allUsers" list={ListGuesser}/>
                    
                </Admin>
            )}
        </>
    )
    };

export default AdminDashboard;
