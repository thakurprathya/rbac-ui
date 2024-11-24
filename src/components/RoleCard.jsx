import { useState } from "react";

const PermissionModal = ({roles, setRoles, role, setPermissionModal}) => {
    const [permissions, setPermissions] = useState(role.permissions);

    const handleChange = (e) => {
        const { name, checked } = e.target;
        setPermissions((prev) => ({ ...prev, [name]: checked }));
    };

    const handleSave = () => {
        const updatedRoles = roles.map((r) =>
            r.role === role.role ? { ...r, permissions } : r
        );
        setRoles(updatedRoles);
        setPermissionModal(false);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded shadow-lg">
                <h3 className="text-lg font-semibold mb-4">Set Permissions for {role.role}</h3>
                <div className="flex flex-col">
                    <label>
                        <input type="checkbox" name="read" checked={permissions.read} onChange={handleChange}/>
                        Read
                    </label>
                    <label>
                        <input type="checkbox" name="edit" checked={permissions.edit} onChange={handleChange}/>
                        Edit
                    </label>
                    <label>
                        <input type="checkbox" name="delete" checked={permissions.delete} onChange={handleChange}/>
                        Delete
                    </label>
                </div>
                <button onClick={handleSave} className="bg-blue-500 text-white p-2 rounded-md">Save</button>
                <button onClick={closeModal} className="bg-red-500 text-white p-2 rounded-md ml-2">Close</button>
            </div>
        </div>
    );
};

const RoleCard = ({roles, setRoles, role}) => {
    const [permissionModal, setPermissionModal] = useState(false);

    const HandleSetPermission = (role) =>{
        setPermissionModal(true);
        localStorage.setItem('updating-permissions-for', JSON.stringify(role));
    }

    return (
        <div className="bg-gray-700 border-primary min-w-[180px] md:min-w-[250px] p-2 md:p-3">
            {permissionModal ? <PermissionModal roles={roles} setRoles={setRoles} role={role} setPermissionModal={setPermissionModal} /> : <></>}
            <div className="bg-gray-700 flex items-center justify-between">
                <h3 className="bg-gray-700 capitalize text-[12px] md:text-[14px]">{role.role}</h3>
                <p className="bg-gray-700 text-[10px] md:text-[12px]">{`${role?.userCount + " ACCOUNTS"}`}</p>
            </div>
            <button onClick={() => HandleSetPermission(role)} className="text-sky-400 hover:text-sky-500 text-[10px] md:text-[12px]">Set Permissions</button>
        </div>
    )
}

export default RoleCard
