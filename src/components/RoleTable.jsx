import { useState } from "react";
import RoleCard from "./RoleCard";
import AddRoleModal from "./AddRoleModal";

const RoleTable = ({roles, setRoles, users, setUsers}) => {
    const [addRoleModal, setAddRoleModal] = useState(false);

    const HandleAddRoles = () => {
        setAddRoleModal(true);
    }

    return (
        <div className="bg-slate-800 w-full border-primary p-3 md:p-5">
            {addRoleModal ? <AddRoleModal roles={roles} setRoles={setRoles} setAddRoleModal={setAddRoleModal}/> : <></>}
            <h2 className="bg-slate-800 text-primary text-lg md:text-2xl">Available Roles</h2>
            <p className="bg-slate-800 text-secondary text-[10px] md:text-[12px]">Define and manage user roles to control access and permissions across your platform.</p>

            <div className="bg-slate-800 mt-5 flex flex-col md:flex-row items-center gap-3 md:gap-0">
                <div className="bg-slate-800 w-full md:w-[83%] overflow-scroll flex items-center gap-5">
                    {roles.length > 0 ?
                        roles.map((role) => <RoleCard key={role?.role} roles={roles} setRoles={setRoles} users={users} setUsers={setUsers} role={role} />)
                    :
                        <p className="bg-slate-800 text-secondary">No Roles Available</p>
                    }
                </div>
                <div className="bg-slate-800 ml-5 w-full md:w-auto flex justify-center">
                    <button onClick={HandleAddRoles} className="bg-slate-800 flex items-center gap-1 md:gap-2">
                        <svg viewBox="0 0 512 512" fill="currentColor" className="bg-slate-800 w-5 md:w-7 fill-gray-400">
                            <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm80 224h-64v64a16 16 0 01-32 0v-64h-64a16 16 0 010-32h64v-64a16 16 0 0132 0v64h64a16 16 0 010 32z" />
                        </svg>
                        <p className="bg-slate-800 text-[12px] md:text-lg hover:text-secondary">Add New Roles</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RoleTable
