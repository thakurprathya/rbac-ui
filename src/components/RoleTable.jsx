import { useState } from "react";
import RoleCard from "./RoleCard";

const AddRoleModal = ({roles, setRoles, setAddRoleModal}) => {
    const [newRole, setNewRole] = useState('');

    const addRole = () => {
        if(newRole.trim() === '') return;
        const updatedRoles = [
            ...roles,
            { role: newRole, userCount: 0, permissions: { read: false, edit: false, delete: false } },
        ];
        setRoles(updatedRoles);
        setNewRole('');
        setAddRoleModal(false);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-5 rounded-lg">
                <h2 className="text-primary text-lg md:text-2xl mb-3">Add New Role</h2>
                <input
                    type="text"
                    className="border-primary border p-2 mb-3"
                    placeholder="Enter role name"
                    value={newRole}
                    onChange={(e) => setNewRole(e.target.value)}
                />
                <div className="flex justify-end">
                    <button onClick={addRole} className="bg-primary text-white px-3 py-2 rounded-lg">Add Role</button>
                    <button onClick={() => setAddRoleModal(false)} className="bg-secondary text-white px-3 py-2 rounded-lg ml-3">Cancel</button>
                </div>
            </div>
        </div>
    )
}

const RoleTable = ({roles, setRoles}) => {
    const [addRoleModal, setAddRoleModal] = useState(false);

    const HandleAddRoles = () => {
        setAddRoleModal(true);
    }

    return (
        <div className="w-full border-primary p-3 md:p-5">
            {addRoleModal ? <AddRoleModal roles={roles} setRoles={setRoles} setAddRoleModal={setAddRoleModal}/> : <></>}
            <h2 className="text-primary text-lg md:text-2xl">Available Roles</h2>
            <p className="text-secondary text-[10px] md:text-[12px]">Define and manage user roles to control access and permissions across your platform.</p>

            <div className="mt-5 flex flex-col md:flex-row items-center gap-3 md:gap-0">
                <div className="w-full md:w-[75%] overflow-scroll flex items-center gap-5">
                    {roles.length > 0 ?
                        roles.map((role) => <RoleCard roles={roles} setRoles={setRoles} role={role} />)
                    :
                        <p className="text-secondary">No Roles Available</p>
                    }
                </div>
                <div className="w-full md:w-[25%] flex justify-center">
                    <button onClick={HandleAddRoles} className="flex items-center gap-1 md:gap-2">
                        <svg viewBox="0 0 512 512" fill="currentColor" className="w-5 md:w-7 fill-gray-400">
                            <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm80 224h-64v64a16 16 0 01-32 0v-64h-64a16 16 0 010-32h64v-64a16 16 0 0132 0v64h64a16 16 0 010 32z" />
                        </svg>
                        <p className="text-[12px] md:text-lg hover:text-secondary">Add New Roles</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RoleTable
