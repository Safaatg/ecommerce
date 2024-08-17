import "../SocialItem/SocialItem.css"

function SocialItem(props) {
    let cardStyle = {
        backgroundColor: props.email ? 'black' : 'red',
        color: props.job ? 'black' : 'green'
    };

    return (
        <div className="container">
            <div className="card" style={cardStyle}>
                <img src={props.img} />
                <h2>{props.ItemName}</h2>
                <p>{props.job}</p>
                <p>{props.phone}</p>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default SocialItem;