import React, {Component} from "react";
import InstaService from "../services/instaService";
import ErrorMessage from "./Error";
import LoadingMessage from "./Loading";

export default class Palette extends Component{
    InstaService = new InstaService();
    state = {
        error : false,
        photos: [],
        loading: true
    }

    componentDidMount() {
        this.updatePhotos();
    }

    updatePhotos() {
        this.InstaService.getAllPosts()
            .then(this.onPhotosLoaded)
            .catch(this.onError)
    }

    onError = () => {
        this.setState({
            error: true
        })
    }

    onPhotosLoaded = (photos) => {
        this.setState({
            error: false,
            photos,
            loading: false
        })
    }
    renderItems(arr) {
        return arr.map(item => {
            const {src,alt} = item;

            return(
                <img src = {src} alt = {alt}/>
            )
        })
    }

    render() {
        const {error, photos, loading} = this.state;

        if (loading) {
            return <LoadingMessage/>
        }

        if (error) {
            return <ErrorMessage/>
        }

        const items = this.renderItems(photos);

        return(
            <div className="palette">
                {items}
            </div>
        )
    }
}


