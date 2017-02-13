// This file generate the http request and return the photos object from Flickr

var axios = require('axios');

module.exports = {
    getPhotos: function (search) {
        
        // Http Request for 30 photos in Json format
        var requestUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=8955e069ffdba2273dc398e6c796ad29&tags=${search}&per_page=30&format=json&nojsoncallback=1`;        
        return axios.get(requestUrl).then(function (res) {
            if (res.data.message) {
                throw new Error(res.date.message);
            } else {
                // Return the photos array from the server
                return res.data.photos;
            }
        }, function (res) {
            throw new Error(res.date.message);
        });
    }
}