import RoleTable from "./components/RoleTable"

const App = () => {
    return (
        <div className="flex flex-col items-center p-5 md:p-10">
            <h1 className="font-semibold text-2xl md:text-3xl text-primary text-center">Centralized User Management</h1>
            <p className="mt-2 text-secondary text-left w-[90%] text-[12px] md:text-[14px] md:w-auto">Streamline your workflow with advanced tools for user management, roles, and permissions.</p>
            
            <div className="mt-[3rem] md:mt-[5rem] flex w-[90%] md:w-[70%]">
                <RoleTable />
            </div>
        </div>
    )
}

export default App
