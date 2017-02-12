// This is the photoContainer component, getting a photos object and generate a 15 'img' object
// with the photos from the Flickr server

var React = require('react');

var PhotoContainer = ({photos}) => {
    
    // In case that there is no photos with that search tag
    if(photos.pages === 0){
        return (
            <h3 style={{textAlign: 'center'}}>There is no photos to show</h3>
        );
    }
    return (
        <div className="photoContainer">
            {photos.photo.map(function(object, i){
                var a = `https://farm${object.farm}.staticflickr.com/${object.server}/${object.id}_${object.secret}_b.jpg`;
                return <img className="photo" src={a} key={i}/>;
            })}
        </div>

    );
};

module.exports = PhotoContainer;