import React, {Component} from "react";
import User from "./User";
import InstaService from "../services/instaService";
import ErrorMessage from "./Error";


export default class Users extends Component {

    InstaService = new InstaService();
    state = {
        users: [],
        error: false
    }
    updateUsers() {
        this.InstaService.getAllUsers()
            .then(this.onUsersLoaded)
            .catch(this.onError);
    }

    onUsersLoaded = (users) => {
        this.setState({
            users,
            error: false
        });
        console.log(this.state.users);
    }
    onError = () => {
        this.setState({
            error: true
        })
    }

    renderUsers(arr) {
        return arr.map(user => {
            const {name, altname, photo, id} = user;

            return (
                <div className="right">
                    <User
                        src={photo}
                        alt={altname}
                        name={name}
                    />
                    <div className="users__block">
                        <User
                            src={photo}
                            alt={altname}
                            name={name}
                            min/>
                    </div>
                </div>
            )
        })
    }

        render()
        {
            const {error, users} = this.state;

            if (error){
                return <ErrorMessage/>
            }

            const user = this.renderItems(users);

            return (
                <div className="right">
                    {user}

                </div>
            )
        }
}