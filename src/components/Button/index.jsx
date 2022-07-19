import "./style.css";

export default (props) => {
    return (
        <div
            className="container-btn"
            style={{
                minWidth: props.width,
                backgroundColor: props.color,
                maxWidth: "90%",
                minHeight: "50px",
                borderRadius: "5px",
                color: "#fff",
                padding: "10px",
                margin: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center"
            }}
        >
            <a
                href={props.link}
                target="_blank"
                style={{
                    textDecoration: "none",
                    color: "#fff",
                }}
            >
                {props.text}
            </a>
        </div>
    );
};
