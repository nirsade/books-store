import * as React from 'react';
import { hashHistory } from 'react-router';
import { Table, Header, Icon, Popup, Button } from 'semantic-ui-react';

export class BooksTableRow extends React.Component {
    
    onBookNameClick (book) {
        hashHistory.push({
            pathname: '/book',
            state: {book: book}
        });
    }
    
    render() {
        let { book } = this.props;
        return (
            <Table.Row>
                <Table.Cell>
                    <Header
                        onClick={() => this.onBookNameClick(book)}
                        className='bookNameHeader'
                        as='h3'
                        textAlign='left'
                    >
                        {book.title}
                    </Header>
                </Table.Cell>
                <Table.Cell singleLine>{book.genre}</Table.Cell>
                <Table.Cell singleLine>{book.price}</Table.Cell>
                <Table.Cell
                    style={{ backgroundColor: '#f0f8ff' }}
                    textAlign='center'
                    width={1}
                >
                    <div className='iconContainer'>
                        <Popup
                            trigger={<Icon name='trash' size='large' color='red'/>}
                            content={<Button color='red' content='Confirm delete' onClick={this.props.handleBookDelete}/>}
                            on='click'
                            position='top left'
                        />
                    </div>
                </Table.Cell>
            </Table.Row>
        )
    }
}                               