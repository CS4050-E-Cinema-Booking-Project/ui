import React, {useEffect, useState} from "react";
import axios from 'axios'
import AdminNavbar from "./AdminNavbar";
import UserBox from "./UserBox";
import '../style/Admin.css'

const AdminUser = () => {

  const api = axios.create({
    baseURL: 'http://localhost:8000'
  })
  
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await api.get('/users/');
    setUsers(response.data)
  }

  useEffect(() => {
    fetchUsers()
  }, []);

  return (
    <div>
        <AdminNavbar />
      <div className="colRight">
        <table>
          <thead>
            <tr>
              <th>Users</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td><UserBox id={user.id} name={user.firstName} email={user.email} role={user.userType}/> </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUser;