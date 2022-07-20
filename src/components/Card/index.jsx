import Card from "react-bootstrap/Card";


export default (props) => {
    return (
        <Card>
            <Card.Body>
                <span> {props.icon}</span>
                <Card.Title className='title-card'  style={{ color: `${props.colortext}` }}>
                    {props.title}
                </Card.Title>
                <Card.Text>{props.text}</Card.Text>
            </Card.Body>
        </Card>
    );
};
