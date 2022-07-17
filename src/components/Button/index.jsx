import './style.css'

export default (props) => {
  return (
    <div
      className="checkout-button"
      style={{ margin: "15px 0" }}
    >
      <a
        href={props.link}
        target="_blank"
        style={{
          backgroundColor: props.color,
          textDecoration: "none",
          color: "#fff",
          height: "105px",
          borderRadius: '25px'
        }}
      >
        <button
          id="btn-checkout"
          type="submit"
          className="btn btn-success btn-lg"
          style={{
            backgroundColor: props.color,
            border: "none",
            borderRadius: '25px'
          }}
        >
          {props.text}
        </button>
      </a>
    </div>
  );
};
