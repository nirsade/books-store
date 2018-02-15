import * as React from 'react';
import { hashHistory } from 'react-router';
import { Button, Card } from 'semantic-ui-react';

export class BookDetails extends React.Component {

    handleBackClick() {
        hashHistory.push('/');
    }

    handleBuyBookClick() {
        alert(`You just bought ${this.props.location.state.book.title}`);
        hashHistory.push('/');
    }

    render() {
        let book = this.props.location.state.book;
        return (
            <div>
                <div className='bookCard'>
                    <Card rised centered>
                        <Card.Content>
                            <Card.Header>
                                {book.title}
                            </Card.Header>
                            <Card.Meta>
                                {book.author}
                            </Card.Meta>
                            <Card.Description>
                                {book.description}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <p><b>Publication Date:  </b>{book.publication_date.substring(0, 10)}</p>
                            <p><b>Genre:  </b>{book.genre}</p>
                            <p><b>Price:  </b>{book.price}</p>
                            <p><b>ISBN:  </b>{book.isbn}</p>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='cardButtons'>
                                <Button
                                    onClick={() => this.handleBackClick()}
                                    basic
                                    color='red'
                                >
                                    Back To Store
                            </Button>
                                <Button
                                    onClick={() => this.handleBuyBookClick()}
                                    basic
                                    color='green'
                                >
                                    Buy Book
                            </Button>
                            </div>
                        </Card.Content>
                    </Card>
                </div>
            </div>
        );
    }
}