import * as React from 'react';
import axios from 'axios';
import * as _ from 'lodash';
import { observable } from "mobx";
import { observer } from "mobx-react";
import { Table } from 'semantic-ui-react';
import { BooksTableRow } from './BooksTableRow';
import { AddBookModal } from './AddBookModal'
import BooksStoreApi from './../api/bookStoreApi'

@observer
export class BooksTable extends React.Component {

    @observable books = [];

    constructor(props) {
        super(props);
        this.getBooks();
    }

    getBooks() {
        BooksStoreApi.getBooks().then(books => {
            this.books = books;
        }).catch(err => { 
            console.log(err) 
        });
    }

    onAddClick(book) {
        BooksStoreApi.addBook(book).then(newBook => {
            console.log('book add success');
            this.books.push(newBook);
        }).catch(err => {
            console.log('book add fail')
        });
    }

    onDeleteClick(id) {
        BooksStoreApi.deleteBook(id).then(res => {
            console.log('delete book success');
            this.books.splice(_.findIndex(this.books, (book) => {
                return book._id === id
            }), 1);
        }).catch(res => {
            console.log('delete book fail');
        });
    }

    render() {
        return (
            <div className='booksTable'>
                <Table celled padded>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell singleLine>Book Name</Table.HeaderCell>
                            <Table.HeaderCell>Genre</Table.HeaderCell>
                            <Table.HeaderCell>Price</Table.HeaderCell>
                            <Table.HeaderCell
                                style={{ backgroundColor: '#f0f8ff' }}
                                textAlign='center'
                                width={1}
                            >
                                <AddBookModal 
                                    handleAddBook={(book) => {this.onAddClick(book)}}
                                    books={this.books}
                                />
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.books.map(book => {
                            return (
                                <BooksTableRow
                                    book={book}
                                    key={book._id}
                                    handleBookDelete={() => this.onDeleteClick(book._id)}
                                />
                            )
                        })}
                    </Table.Body>
                </Table>
            </div>
        )
    }
}