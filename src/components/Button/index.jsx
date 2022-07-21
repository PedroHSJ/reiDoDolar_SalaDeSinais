import "./style.css";

export default (props) => {
    return (
        <div
            className="container-btn"
            style={{
                width: props.width,
                backgroundColor: props.color,
                maxWidth: "90%",
                height: "80px",
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
                    fontSize: "14pt"
                }}
            >
                {props.text}
            </a>
        </div>
    );
};
