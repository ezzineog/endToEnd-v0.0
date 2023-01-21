import { Avatar } from "@mui/material"

/***
 * THE HALL !.
 *  ***/
const Hall = () => {



    return (
        <div className="bg-[url('/public/Hall-background.jpg')] flex justify-around w-4/5">
            <div className=" backdrop-blur-xl backdrop-brightness-300  rounded-md  center w-3/5 h-2/3 ">
                the call
            </div>

            <div className="backdrop-blur-xl w-80">

                <div className=" backdrop-blur-xl bg-white/50 rounded-md mt-10">
                    <Avatar alt="Eziv" src="eziv-studio-logo.png" />
                    <p>
                        Est elit irure aute culpa nisi veniam adipisicing sint officia.
                    </p>

                </div>

            </div>

        </div>
    )
}
export default Hall 