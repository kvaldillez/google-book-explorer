import React, { Component } from 'react';

class Gallery extends Component {
    render(){
        let alternate = 'https://image.flaticon.com/icons/svg/15/15934.svg';

        return(
            <div>
                {
                    this.props.items.map(item => {
                        let { title, imageLinks, infoLink } = item.volumeInfo;
                        return (
                            <a 
                                href={infoLink}
                                key={item.id}
                                className="book">
                                <img 
                                    src={imageLinks !== undefined ? imageLinks.thumbnail : alternate }
                                    className="book-img"
                                    alt="book image" />
                                <div className="book-text">
                                    { title }
                                </div>
                            </a>
                        );
                    })
                }
            </div>
        );
    }
}

export default Gallery;