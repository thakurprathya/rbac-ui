import RoleCard from "./RoleCard"

const RoleTable = () => {
    return (
        <div className="w-full border-primary p-3 md:p-5">
            <h2 className="text-primary text-lg md:text-2xl">Available Roles</h2>
            <p className="text-secondary text-[10px] md:text-[12px]">Define and manage user roles to control access and permissions across your platform.</p>

            <div className="mt-5 flex flex-col md:flex-row items-center gap-3 md:gap-0">
                <div className="w-full md:w-[75%] overflow-scroll flex items-center gap-5">
                    <RoleCard role="admin"/>
                    <RoleCard role="manager"/>
                    <RoleCard role="user"/>
                </div>
                <div className="w-full md:w-[25%] flex justify-center">
                    <button className="flex items-center gap-1 md:gap-2">
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
