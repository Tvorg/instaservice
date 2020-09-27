import React from "react";
import User from "./User";
import Palette from "./Palette";

const Profile = () => {
    return(
        <div className="container profile">
            <User
                src="https://instagram.fiev4-1.fna.fbcdn.net/v/t51.2885-19/s320x320/47022444_378079826292047_5567561922506653696_n.jpg?_nc_ht=instagram.fiev4-1.fna.fbcdn.net&_nc_ohc=tFE_EardDyYAX9ILtpv&oh=2e0282641f32e8fffaf5b1ba6e233b8a&oe=5F90F9BE"
                alt="man"
                name="gs_ignat"/>
            <Palette/>
        </div>
    )
}


export default Profile;