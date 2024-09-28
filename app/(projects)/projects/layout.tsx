// Layout for single project

const RootProjectPage = ({ children }: Readonly<{ children: React.ReactNode }>) => (
    <div className="mx-auto flex-1 flex flex-col gap-4 p-6">
        {children}
    </div>
)


export default RootProjectPage;