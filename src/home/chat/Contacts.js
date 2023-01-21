const Contacts = () => {
    return (
        <div className="flex-col w-1/5">

            {[0, 0, 0, 0, 0, 0,0].map((_void,key) => (
                <div key={key} className=" mt-3  flex w-4/5 shadow-xl rounded-l p-4 opacity-80 hover:cursor-pointer hover:opacity-100">
                    <img className="object-center w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:hover:bg-sky-500 m-2.5 cursor-pointer" src="eziv-studio-logo.png" alt="user avatar" />
                    <div className="pl-2 text-left">
                        <p>name</p>
                        <p>latest message</p>
                    </div>
                </div>))}

        </div>
    )
}
export default Contacts