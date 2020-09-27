import React, {Component} from "react";
import User from "./User";

export default class Post extends Component{
    render() {
        return(
            <div className="post">
                <User src="https://instagram.fiev4-1.fna.fbcdn.net/v/t51.2885-19/s320x320/47022444_378079826292047_5567561922506653696_n.jpg?_nc_ht=instagram.fiev4-1.fna.fbcdn.net&_nc_ohc=tFE_EardDyYAX9ILtpv&oh=2e0282641f32e8fffaf5b1ba6e233b8a&oe=5F90F9BE"
                    alt="man"
                    name="gs_ignat"
                    min/>
                <img src={this.props.src} alt={this.props.alt}/>
                <div className="post__name">
                    Tvorg
                </div>
                <div className="post__descr">
                    пацаны, четыре дня назад мне сказали, что у меня будет проект на реакте
                    (к js фреймворками до этого не прикасался) , сегодня созванивался с заказчиком притворялся опытным разрабом,
                    пожелайте удачи гг
                </div>
            </div>
        )
    }

}