// This is the searchForm component, taking the input from the user and set the search prop  

var React = require('react');

var SearchForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();
        
        var search = this.refs.search.value;
        
        // If the user set a search input that is not empty then it set the search prop 
        // And invoke the 'onSearch' function
        if(search.length > 0) {
            this.refs.search.value = '';
            this.props.onSearch(search);
        }
    },  
    render: function () {
        // Style for the input in the form
        var inputStyle = {
            fontSize: 20
        };
        
        // Style for the button in the form
        var buttonStyle = {
            fontSize: 20,
            backgroundColor: 'greenyellow'
        };
        
        // Style for the form
        var formStyle = {
            textAlign: 'center'
        };
        return (
           <div>
               <form style={formStyle} onSubmit={this.onFormSubmit}>
                   <input style={inputStyle} type="text" ref="search" placeholder="Write Your Search"/>
                   <button style={buttonStyle}>Get Photos</button>
               </form>
           </div>
       );
   }    
});

module.exports = SearchForm;