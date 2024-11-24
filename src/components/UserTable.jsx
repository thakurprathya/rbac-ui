import { useEffect, useState } from 'react'

const UserTable = () => {
    const [openUserModal, setOpenUserModal] = useState(false);
    const [newUser, setNewUser] = useState({ name: '', role: '', team: '', onLeave: false });

    const addUser = () => {
        if(newUser.name.trim() === '') return;
        const updatedUsers = [
            ...users,
            { ID: Date.now(), Name: newUser.name, Role: newUser.role, Team: '', Onleave: newUser.onLeave },
        ];
        setUsers(updatedUsers);
        setNewUser({ name: '', role: '', team: '', onLeave: false });
    };

    const openAddUserModal = () => {
        setOpenUserModal(true);
    };

    const closeAddUserModal = () => {
        setOpenUserModal(false);
    };

    return (
        <div>
        
        </div>
    )
}

export default UserTable
