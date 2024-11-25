import { useState } from "react";

const AddRoleModal = ({roles, setRoles, setAddRoleModal}) => {
    const [newRole, setNewRole] = useState('');

    const HandleAddRole = () => {
        if(newRole.trim() === '') return;
        const updatedRoles = [
            ...roles,
            { role: newRole, userCount: 0, permissions: { read: false, edit: false, delete: false } },
        ];
        setRoles(updatedRoles);
        localStorage.setItem('roles', JSON.stringify(updatedRoles));
        setNewRole('');
        setAddRoleModal(false);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center">
            <div className="bg-gray-700 p-5 md:p-7 rounded-lg mt-[20rem]">
                <h2 className="bg-gray-700 text-primary text-lg md:text-2xl mb-3">Add New Role</h2>
                <input
                    type="text"
                    className="border-primary border p-2 px-4 mb-3 outline-none text-sm md:text-md w-[300px]"
                    placeholder="Enter role name"
                    value={newRole}
                    onChange={(e) => setNewRole(e.target.value)}
                />
                <div className="w-[70%] mx-auto bg-gray-700 flex justify-between">
                    <button onClick={HandleAddRole} className="bg-blue-600 md:bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg">Add Role</button>
                    <button onClick={() => setAddRoleModal(false)} className="bg-red-600 md:bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg ml-3">Cancel</button>
                </div>
            </div>
        </div>
    )
}


export default AddRoleModal
