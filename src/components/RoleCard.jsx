import { useState } from "react";
import PermissionModal from "./PermissionModal";

const RoleCard = ({roles, setRoles, role, users, setUsers}) => {
    const [permissionModal, setPermissionModal] = useState(false);

    const HandleSetPermission = (role) =>{
        setPermissionModal(true);
        localStorage.setItem('updating-permissions-for', JSON.stringify(role));
    }

    const HandleDeleteRole = (role) =>{
        const updatedRoles = roles.filter((r) => r.role !== role.role);
        setRoles(updatedRoles);
        localStorage.setItem('roles', JSON.stringify(updatedRoles));

        const updatedUsers = users.map((user) => {
            if(user.role === role.role){
                return { ...user, role: 'Unassigned' };
            }
            return user;
        });
        setUsers(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
    }

    return (
        <div className="bg-gray-700 border-primary min-w-[180px] md:min-w-[250px] p-2 md:p-3 shadow-lg mb-2">
            {permissionModal ? <PermissionModal roles={roles} setRoles={setRoles} role={role} setPermissionModal={setPermissionModal} /> : <></>}
            <div className="bg-gray-700 flex items-center justify-between">
                <h3 className="bg-gray-700 capitalize text-[12px] md:text-[14px]">{role.role}</h3>
                <p className="bg-gray-700 text-[10px] md:text-[12px]">{`${role?.userCount + " ACCOUNTS"}`}</p>
            </div>
            <div className="bg-gray-700 mt-1 flex items-baseline justify-between">
                <button onClick={() => HandleSetPermission(role)} className="text-sky-400 hover:text-sky-500 text-[10px] md:text-[12px]">Set Permissions</button>
                <button onClick={() => HandleDeleteRole(role)}>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="bg-gray-700 w-[14px] md:w-5">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M4 8h16v13a1 1 0 01-1 1H5a1 1 0 01-1-1V8zm3-3V3a1 1 0 011-1h8a1 1 0 011 1v2h5v2H2V5h5zm2-1v1h6V4H9zm0 8v6h2v-6H9zm4 0v6h2v-6h-2z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default RoleCard
