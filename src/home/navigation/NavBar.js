import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import TroubleshootOutlinedIcon from '@mui/icons-material/TroubleshootOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ToggleColorMode from '../ToggleColorMode';
import { Link } from 'react-router-dom';
import { Badge } from '@mui/material';

function NavBar() {
    return (
        <div className=" flex place-items-center justify-between bg-slate-inherit content-center ">
            {/*  navigation menu */}
            <div className="flex">
                <Link to="/">
                    <img className="rounded-full object-center max-h-20 max-w-24 m-0 p-0 object-scale-down " src="eziv-studio-logo.png" alt="eziv-studio" />
                </Link>
            </div>

            {/* options */}
            <div className='flex justify-center items-center gap-6 p-3 rounded-md'>
                <Link to="/">
                    <div className="text-2l p-3.5 hover:bg-indigo-200 rounded-md hover:cursor-pointer"><ContactPhoneOutlinedIcon /> Contacts</div>
                </Link>
                <Link to="stats">
                    <h1 className="text-2l p-3.5 hover:bg-indigo-200 rounded-md cursor-pointer"><TroubleshootOutlinedIcon /> Statistic</h1>
                </Link>
                <Link to="chat">
                    <h1 className="text-2l p-3.5 hover:bg-indigo-200 rounded-md cursor-pointer"><ChatOutlinedIcon /> Chat</h1>
                </Link>
                <h1 className="text-2l p-3.5 hover:bg-indigo-200 rounded-md cursor-pointer"><SettingsOutlinedIcon /> Settings</h1>
            </div>


            {/* user notify */}
            <div className="flex space-x-5 ">

                <div className="flex items-center p-3 rounded-xl justify-center gap-x-8" >
                    <ToggleColorMode />
                    <Badge badgeContent={4} color="primary">
                        <acronym className="rounded-md  cursor-pointer hover:bg-indigo-200" title="Call"> <CallOutlinedIcon /> </acronym>
                    </Badge>
                    <Badge badgeContent={6} color="primary">
                        <acronym className='rounded-md  cursor-pointer hover:bg-indigo-200' title={`Notification \n  (0)`}><NotificationsNoneIcon /> </acronym>
                    </Badge>

                </div>

                {/* profile shortcut */}
                <div className="flex items-center gap-x-6  rounded-xl p-3 cursor-pointer">
                    <div className="flex flex-col space-y-0">
                        <p>username</p>
                        <p>mail address</p>
                        {/* <meter value="300" min="0" max="500">300Gb of 500Gb</meter> */}
                        {/* <progress value="50" max="100">50%</progress> */}
                    </div>

                    <img className="object-center w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:hover:bg-sky-500 m-2.5 cursor-pointer" src="eziv-studio-logo.png" alt="user avatar" />
                </div>

            </div>
        </div>
    );
}

export default NavBar;
