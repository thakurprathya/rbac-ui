import { useState } from 'react'

const UserModal = ({ roles, setRoles, users, setUsers, setUserModal, user, setEditUser }) => {
    const [newUser, setNewUser] = useState({ name: user?.name || '', role: user?.role || '', email: user?.email || '', onLeave: user?.onLeave || false });

    const HandleSubmit = () => {
        if(newUser.name.trim() === '' || newUser.email.trim() === '') return;
        if(user){
            const updatedUsers = users.map(u => 
                u.ID === user.ID ? { ...u, ...newUser } : u
            );
            if(user.role !== newUser.role){
                const updatedRoles = roles.map(role => {
                    if(role.role === user.role) return { ...role, userCount: role.userCount - 1 };
                    if(role.role === newUser.role) return { ...role, userCount: role.userCount + 1 };
                    return role;
                });
                setRoles(updatedRoles);
                localStorage.setItem('roles', JSON.stringify(updatedRoles));
            }
            setUsers(updatedUsers);
            localStorage.setItem('users', JSON.stringify(updatedUsers));
            setEditUser(null);
        } 
        else{
            const updatedUsers = [
                ...users,
                { ID: Date.now(), name: newUser.name, role: newUser.role, email: newUser.email, onLeave: newUser.onLeave },
            ];
            const updatedRoles = roles.map(role => 
                role.role === newUser.role ? { ...role, userCount: role.userCount + 1 } : role
            );
            setRoles(updatedRoles);
            setUsers(updatedUsers);
            localStorage.setItem('users', JSON.stringify(updatedUsers));
            localStorage.setItem('roles', JSON.stringify(updatedRoles));
        }
        
        setNewUser({ name: '', role: '', email: '', onLeave: false });
        setUserModal(false);
    };

    const capitalize = (str) => {
        return str
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-gray-700 p-5 md:p-7 rounded-lg">
                <h2 className="bg-gray-700 text-primary text-lg md:text-2xl mb-3">
                    {user ? 'Edit User' : 'Add New User'}
                </h2>
                <div className="flex flex-col p-5 rounded-md"> 
                    <label htmlFor="name" className="text-white mb-1">Name:</label>
                    <input
                        type="text"
                        id="name"
                        className="border-primary border p-2 px-4 mb-3 outline-none text-sm md:text-md w-[300px]"
                        placeholder="Enter name"
                        value={newUser?.name}
                        onChange={(e) => setNewUser({...newUser, name:e.target.value})}
                    />
                    <label htmlFor="email" className="text-white mb-1">Email:</label>
                    <input
                        type="email"
                        id="email"
                        className="border-primary border p-2 px-4 mb-3 outline-none text-sm md:text-md w-[300px]"
                        placeholder="Enter email"
                        value={newUser?.email}
                        onChange={(e) => setNewUser({...newUser, email:e.target.value})}
                    />
                    <label htmlFor="role" className="text-white my-2">Role:</label>
                    <select
                        id="role"
                        className="cursor-pointer border-primary border p-2 px-4 mb-3 outline-none text-sm md:text-md w-[300px]"
                        value={newUser?.role}
                        onChange={(e) => setNewUser({...newUser, role:e.target.value})}
                    >
                        <option value="" className='cursor-pointer' disabled>Select role</option>
                        <option value="Unassigned" className='cursor-pointer'>Unassigned</option>
                        {roles.map((role) => (
                            <option key={role?.role} value={role?.role} className='cursor-pointer'>{capitalize(role?.role)}</option>
                        ))}
                    </select>
                    <label htmlFor="onLeave" className="text-white my-2 cursor-pointer">
                        <input
                            type="checkbox"
                            id="onLeave"
                            className="mr-2"
                            checked={newUser?.onLeave}
                            onChange={(e) => setNewUser({...newUser, onLeave:e.target.checked})}
                        />
                        On Leave
                    </label>
                    <button 
                        className="bg-blue-600 md:bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md mt-4" 
                        onClick={HandleSubmit}
                    >
                        {user ? 'Update User' : 'Add User'}
                    </button>
                    <button className="bg-red-600 md:bg-red-500 hover:bg-red-600 text-white p-2 rounded-md mt-4" onClick={()=>{
                        setUserModal(false)
                        setEditUser(null)
                    }}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default UserModal
