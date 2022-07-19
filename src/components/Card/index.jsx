import Card from "react-bootstrap/Card";


export default (props) => {
    return (
        <Card style={{ width: "18rem", margin: "1rem", boxShadow: "2px 2px 5px #222" }}>
            <Card.Body>
                <Card.Title style={{ color: `${props.colortext}` }}>
                    {props.title}
                </Card.Title>
                <Card.Text>{props.text}</Card.Text>
            </Card.Body>
        </Card>
    );
};
