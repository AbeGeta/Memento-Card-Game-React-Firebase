const Card = ({ image, selected, onClick }) => {

    return (
        <div className={`card ${selected ? 'selected' : ''}`}>
            <img alt="" src={image} className="card-face" />

            <img alt="" src={'/assets/fireship.png'} className="card-back" onClick={onClick} />
        </div>
    );
};

export default Card;