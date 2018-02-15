import * as React from 'react';
import * as _ from 'lodash';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { Modal, Input, Icon, Dropdown , Button } from 'semantic-ui-react';

const genreItems = [
  { text: 'Science Fiction', value: 'Science Fiction' },
  { text: 'Satire', value: 'Satire' },
  { text: 'Drama', value: 'Drama' },
  { text: 'Action', value: 'Action' },
  { text: 'Romance', value: 'Romance' },
  { text: 'Mystery of horor', value: 'Mystery of Horor' }
]

@observer
export class AddBookModal extends React.Component {

  @observable openModal = false;
  book = {};

  handleInputChange (e, data, type) {
    let {value} = data;
    if (value === '') {
      value = null;
    }
    switch (type) {
      case 'title' :
        this.book.title = value;
        break;
      case 'author' :
        this.book.author = value;
        break;
      case 'description' :
        this.book.description = value;
        break;
      case 'date' :
        this.book.date = value;
        break;
      case 'isbn' :
        this.book.isbn = value;
        break;
      case 'price' :
        this.book.price = value;
        break;
      case 'genre' :
        this.book.genre = value;
        break;
    }
  }

  checkValidBook (book) {
    if (_.findIndex(this.props.books, (b) => b.isbn == book.isbn) !== -1) {
        return 'isbn';
    }
    if (_.findIndex(this.props.books, (b) => b.title == book.title) !== -1) {
        if (_.findIndex(this.props.books, (b) => b.title == book.title) !== -1) {
            return 'title & header';
        }
    }
    return null;
}

  handleAddClick () {

    // check that all the book properties are inserted
    for (let property of ['title', 'author', 'description', 'date', 'isbn', 'price', 'genre']) {
      if (this.book[property] == null) {
        alert(`the property ${property} is not defined`);
        return;
      }
    }

    //check that there is no two books with the same ISBN
    //check that there is no two books with the same Title & Author name
    let notValid = this.checkValidBook(this.book);
    if(notValid) {
      alert(`this ${notValid} is already in use`);
      return;
    }

    this.props.handleAddBook(this.book);
    this.openModal = false;
    this.book = {};
  }

  render() {
    return (
      <div 
        className='addBookModal'
        onClick={() => {this.openModal = true}}
      >
        <Modal
          open={this.openModal}
          closeIcon={<Icon name='close' size='large' onClick={() => {this.openModal = false}}/>}
          trigger={<div className='iconContainer'><Icon name='add' size='large' color='green'/></div>}
        >
          <Modal.Header textAlign='center'>Add a Book</Modal.Header>
          <Modal.Content>
            <div className='addBookModalContent'>
              <Input label='Title' onChange={(e, data) => this.handleInputChange(e, data, 'title')}/>
              <br/>
              <Input label='Author' onChange={(e, data) => this.handleInputChange(e, data, 'author')}/>
              <br/>
              <Input label='Description' onChange={(e, data) => this.handleInputChange(e, data, 'description')}/>
              <br/>
              <Input label='Publication Date' type='date' onChange={(e, data) => this.handleInputChange(e, data, 'date')}/>
              <br/>
              <Input label='ISBN' type='number' onChange={(e, data) => this.handleInputChange(e, data, 'isbn')}/>
              <br/>
              <Input label='price' type='number' onChange={(e, data) => this.handleInputChange(e, data, 'price')}/>
              <br/>
              <Dropdown scrolling label='Genre' selection fluid options={genreItems} 
                onChange={(e, data) => this.handleInputChange(e, data, 'genre')}
                placeholder='Choose Genre'/>
              <br/>
              <div style={{textAlign: 'center'}}>
                <Button color='green' onClick={() => this.handleAddClick()}>ADD</Button>
              </div>
            </div>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}