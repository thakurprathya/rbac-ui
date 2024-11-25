import { useEffect, useState } from "react";
import RoleTable from "./components/RoleTable"
import UserTable from "./components/UserTable";

const App = () => {
    const [roles, setRoles] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const storedRoles = localStorage.getItem('roles');
        const storedUsers = localStorage.getItem('users');
        if(storedRoles) setRoles(JSON.parse(storedRoles));
        if(storedUsers) setUsers(JSON.parse(storedUsers));
    }, []);

    return (
        <div className="flex flex-col items-center p-5 md:p-10">
            <h1 className="font-semibold text-2xl md:text-3xl text-primary text-center">Centralized User Management</h1>
            <p className="mt-2 text-secondary text-left w-[90%] text-[12px] md:text-[14px] md:w-auto">Streamline your workflow with advanced tools for user management, roles, and permissions.</p>
            
            <div className="mt-[3rem] md:mt-[5rem] flex flex-col items-center gap-[5rem] w-[90%] md:w-[70%]">
                <RoleTable roles={roles} setRoles={setRoles} users={users} setUsers={setUsers} />
                <UserTable roles={roles} setRoles={setRoles} users={users} setUsers={setUsers} />
            </div>
        </div>
    )
}

export default App
