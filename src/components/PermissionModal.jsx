import { useState } from 'react'

const PermissionModal = ({roles, setRoles, role, setPermissionModal}) => {
    const [permissions, setPermissions] = useState(role.permissions);

    const HandleChange = (e) => {
        const { name, checked } = e.target;
        setPermissions((prev) => ({ ...prev, [name]: checked }));
    };

    const HandleUpdatePermission = () => {
        const updatedRoles = roles.map((r) =>
            r.role === role.role ? { ...r, permissions } : r
        );
        setRoles(updatedRoles);
        localStorage.setItem('roles', JSON.stringify(updatedRoles));
        setPermissionModal(false);
        localStorage.setItem('updating-permissions-for', null);
    };

    const capitalize = (str) => {
        return str
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    };
    

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start">
            <div className="bg-gray-700 p-6 rounded-md shadow-lg mt-[20rem]">
                <h3 className="bg-gray-700 text-lg md:text-2xl mb-4">Set Permissions for {capitalize(role.role)}</h3>
                <div className="bg-gray-900 p-3 flex items-center justify-between rounded-md w-full md:w-[300px] mx-auto mb-4">
                    <label className="bg-gray-900 cursor-pointer flex items-center gap-1 md:gap-2 text-sm md:text-md">
                        <input type="checkbox" name="read" checked={permissions.read} onChange={HandleChange} className="cursor-pointer"/>
                        Read
                    </label>
                    <label className="bg-gray-900 cursor-pointer flex items-center gap-1 md:gap-2 text-sm md:text-md">
                        <input type="checkbox" name="edit" checked={permissions.edit} onChange={HandleChange} className="cursor-pointer"/>
                        Edit
                    </label>
                    <label className="bg-gray-900 cursor-pointer flex items-center gap-1 md:gap-2 text-sm md:text-md">
                        <input type="checkbox" name="delete" checked={permissions.delete} onChange={HandleChange} className="cursor-pointer"/>
                        Delete
                    </label>
                </div>
                <div className="bg-gray-700 w-[250px] mx-auto flex items-center justify-between">
                    <button onClick={HandleUpdatePermission} className="bg-blue-600 md:bg-blue-500 hover:bg-blue-600 text-white p-2 px-6 rounded-md">Update</button>
                    <button onClick={()=>{
                            setPermissionModal(false)
                            localStorage.setItem('updating-permissions-for', null);
                        }} 
                        className="bg-red-600 md:bg-red-500 hover:bg-red-600 text-white p-2 px-6 rounded-md ml-2">
                            Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PermissionModal
