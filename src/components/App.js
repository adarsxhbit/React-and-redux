import React from "react";
import unsplash from '../api/unsplash';
import SearchBar from "./Search";
import ImageList from "./ImageList";

class App extends React.Component {
    state = {images: []};

    onSearchSubmit = async (term) => {
        const res = await unsplash.get('/search/photos', {
            params: {
                query: term
            }
        });

        this.setState({images:[...this.state.images, res.data.results]})
        console.log(this.images)
    }

    render() {
        return <div className="ui container" style={{marginTop: '10px'}}  ><SearchBar onSubmit={this.onSearchSubmit}/>
        <ImageList images={this.state.images}/>
        </div>
    }
}

export default App