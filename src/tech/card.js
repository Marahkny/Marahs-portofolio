import React from 'react';
const Card = () => {
    const cards = [
        { id: 1, backgroundColor: '#FFDD00', Text1: 'How might we help the user keep their wishlist items after logging in?', Text2:'By implementing persistent storage mechanisms such as local storage or syncing wishlist data with the users account, we ensure the wishlist is retained after login.' },
        { id: 2, backgroundColor: '#FF00FF', image: 'https://path/to/cat-image2.png' }
    ];

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            {cards.map(card => (
                <div key={card.id} className="position-relative card-stack mx-3">
                    {/* Background Layer */}
                    <div
                        className="position-absolute card-layer"
                        style={{ backgroundColor: card.backgroundColor }}
                    ></div>
                    {/* Main Card */}
                    <div className="card card-main text-center">
                        <div className="card-body">
                            <img src={card.image} alt="Cat Icon" className="cat-image" />
                            <p className="text-muted mt-2">
                                Cat by Chrystina Angeline from NounProject.com
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;
