// This is the main component, inside there is two components (form, photoContainer)

var React = require('react');
var SearchForm = require('SearchForm');
var PhotoContainer = require('PhotoContainer');
var FlickrApi = require('FlickrApi');

var Main = React.createClass({
    getInitialState: function () {
        return {
            // this state is 'true' when we wait for the server to response
            // change to 'false' when the request from the server is finished
            isLoading: false
        }
    },
    // This function handle the search
    // Get the search input from the user And set the states for building the PhotoContainer
    handleSearch: function (search) {
        var that = this;
        
        this.setState({isLoading: true});
        
        // call the getPhotos method with the user search input
        FlickrApi.getPhotos(search).then(function (photos) {
            // In case of success response from the server
            that.setState({
                search: search,
                photos: photos,
                isLoading: false
            });
        }, function (errorMessage) {
            // In case of error in the http request
            that.setState({
                isLoading: false
            });
            alert(errorMessage); 
        });
    },
    render: function () {
        var {isLoading, photos, search} = this.state;
        
        function renderPhotoContainer () {
            if (isLoading) {
                // In case we loading content from the server
                // Showen a 'Fetching images...' line while we wait for the server to response
                return <h3 style={{textAlign: 'center'}}>Fetching images...</h3>;
            } else if (photos && search) {
                // In case the search and photos are not empty object
                // Call the PhotoContainer component
                return <PhotoContainer photos={photos}/>;
            }
        }
        
        return (
           <div>
               <h3 className="title">Flickr Search App</h3>
               <SearchForm onSearch={this.handleSearch}/>
                {renderPhotoContainer()}
           </div>
           
       );
   }    
});

module.exports = Main;