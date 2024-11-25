import { useState } from 'react'
import UserModal from './UserModal';

const UserTable = ({ roles, setRoles, users, setUsers }) => {
    const [userModal, setUserModal] = useState(false);
    const [editUser, setEditUser] = useState(null);

    const HandleDeleteUser = (user) => {
        const updatedRoles = roles.map(role => 
            role.role === user.role ? { ...role, userCount: role.userCount - 1 } : role
        );
        const updatedUsers = users.filter(u => u.ID !== user.ID);

        setRoles(updatedRoles);
        setUsers(updatedUsers);

        localStorage.setItem('roles', JSON.stringify(updatedRoles));
        localStorage.setItem('users', JSON.stringify(updatedUsers));
    }

    const capitalize = (str) => {
        return str
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    };

    return (
        <div className='bg-slate-800 w-full border-primary p-3 md:p-5'>
            {userModal ? 
                    (editUser ?
                        <UserModal roles={roles} setRoles={setRoles} users={users} setUsers={setUsers} setUserModal={setUserModal} user={editUser} setEditUser={setEditUser}/> 
                        : 
                        <UserModal roles={roles} setRoles={setRoles} users={users} setUsers={setUsers} setUserModal={setUserModal}/> 
                    )
                :
                    <></>
            }
            <div className='bg-slate-800 flex items-start md:items-center flex-col md:flex-row justify-between gap-2 md:gap-0'>
                <div className='bg-slate-800 flex flex-col items-start'>
                    <h2 className="bg-slate-800 text-primary text-lg md:text-2xl">Users</h2>
                    <p className="bg-slate-800 text-secondary text-[10px] md:text-[12px]">Define and manage users to control access and permissions.</p>
                </div>
                <button onClick={()=>setUserModal(true)} className="bg-slate-800 flex items-center gap-1 md:gap-2">
                    <svg viewBox="0 0 512 512" fill="currentColor" className="bg-slate-800 w-5 md:w-7 fill-gray-400">
                        <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm80 224h-64v64a16 16 0 01-32 0v-64h-64a16 16 0 010-32h64v-64a16 16 0 0132 0v64h64a16 16 0 010 32z" />
                    </svg>
                    <p className="bg-slate-800 text-[12px] md:text-lg hover:text-secondary">Add New Users</p>
                </button>
            </div>

            <div className="mt-5 overflow-x-auto bg-gray-700 rounded-md">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 bg-gray-700 text-left">Name</th>
                            <th scope="col" className="px-6 py-3 bg-gray-700 text-center">Email</th>
                            <th scope="col" className="px-6 py-3 bg-gray-700 text-center">Role</th>
                            <th scope="col" className="px-6 py-3 bg-gray-700 text-center">Is On Leave</th>
                            <th scope="col" className="px-6 py-3 bg-gray-700 text-center">Actions</th>
                        </tr>
                    </thead>
                    {users.length > 0 ?
                        <tbody>
                                {users.map((user) =>
                                    <tr key={user?.ID} className="border-b bg-gray-800 border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-left">{capitalize(user?.name)}</th>
                                        <td className="px-6 py-4 text-center">{user?.email}</td>
                                        <td className="px-6 py-4 text-center">{capitalize(user?.role)}</td>
                                        <td className="px-6 py-4 text-center">{user?.onLeave ? "Yes" : "No"}</td>
                                        <td className="text-center flex justify-center items-center gap-1">
                                            <button className="p-2 rounded-sm my-2" onClick={()=>{
                                                setEditUser(user);
                                                setUserModal(true);
                                            }}>
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" className='fill-blue-600 md:fill-blue-500 hover:fill-blue-600 w-[14px] md:w-5'>
                                                    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                                                    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                                                </svg>
                                            </button>
                                            <button className="p-2 rounded-sm my-2" onClick={()=>HandleDeleteUser(user)}>
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="fill-red-600 md:fill-red-500 hover:fill-red-600 w-[14px] md:w-5">
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M4 8h16v13a1 1 0 01-1 1H5a1 1 0 01-1-1V8zm3-3V3a1 1 0 011-1h8a1 1 0 011 1v2h5v2H2V5h5zm2-1v1h6V4H9zm0 8v6h2v-6H9zm4 0v6h2v-6h-2z" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                )}
                        </tbody>
                    :
                        <tbody>
                            <tr className="bg-gray-800">
                                <td colSpan="5" className="text-secondary p-5 text-center">No Users Available</td>
                            </tr>
                        </tbody>
                    }
                </table>
            </div>
        </div>
    )
}

export default UserTable
