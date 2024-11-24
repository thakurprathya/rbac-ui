import { useEffect, useState } from "react";
import RoleTable from "./components/RoleTable"

const App = () => {
    const [roles, setRoles] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
      const storedRoles = localStorage.getItem('roles');
      const storedUsers = localStorage.getItem('users');
      console.log(storedRoles)
      console.log(storedUsers)
      // if(storedRoles) setRoles(JSON.parse(storedRoles));
      // if(storedUsers) setUsers(JSON.parse(storedUsers));
  }, []);

    useEffect(() => {
        localStorage.setItem('roles', JSON.stringify(roles));
    }, [roles]);

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);

    return (
        <div className="flex flex-col items-center p-5 md:p-10">
            <h1 className="font-semibold text-2xl md:text-3xl text-primary text-center">Centralized User Management</h1>
            <p className="mt-2 text-secondary text-left w-[90%] text-[12px] md:text-[14px] md:w-auto">Streamline your workflow with advanced tools for user management, roles, and permissions.</p>
            
            <div className="mt-[3rem] md:mt-[5rem] flex w-[90%] md:w-[70%]">
                <RoleTable roles={roles} setRoles={setRoles} />
            </div>
        </div>
    )
}

export default App
