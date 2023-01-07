import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import TroubleshootOutlinedIcon from '@mui/icons-material/TroubleshootOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ToggleColorMode from './ToggleColorMode';

function NavBar() {
    return (
        <div className=" flex place-items-center justify-between bg-indigo-500 content-center ">

            {/*  navigation menu */}
            <div className="flex">

                <a href="/" type="string" className='transition ease-in-out delay-150 bg-blue-500'>
                    <img className="object-center max-h-20 max-w-24 m-0 p-0 object-scale-down " src="eziv-studio-logo.png" alt="eziv-studio" />
                </a>
            </div>
            <div className='flex gap-6'>

                <h1 className="text-2l p-3.5  rounded-md hover:bg-sky-500 cursor-pointer"><ContactPhoneOutlinedIcon /> Contacts</h1>
                <h1 className="text-2l p-3.5 rounded-md hover:bg-sky-500 cursor-pointer"><TroubleshootOutlinedIcon /> Statistic</h1>
                <h1 className="text-2l p-3.5 rounded-md hover:bg-sky-500 cursor-pointer"><ChatOutlinedIcon /> Chat</h1>
                <h1 className="text-2l p-3.5 rounded-md hover:bg-sky-500 cursor-pointer"><SettingsOutlinedIcon /> Settings</h1>
            </div>


            {/* options */}
            <div className="flex  space-x-5">

                <div className="flex">
                    <ToggleColorMode/>
                    <p><CallOutlinedIcon /></p>
                    <p><NotificationsNoneIcon /></p>
                </div>

                {/* user profile shortcut */}
                <div className="flex items-center">

                    <div className="flex flex-col space-y-1">
                        <p>username</p>
                        <p>mail address</p>
                    </div>

                    <img className="object-center w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 m-2.5 hover:bg-sky-700 cursor-pointer" src="eziv-studio-logo.png" alt="user avatar" />
                </div>

            </div>

        </div>
    );
}

export default NavBar;
