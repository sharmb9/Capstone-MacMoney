function Ltext(props) {
    return (
        <a
          className="link-text"
          href={props.link}
          target="_blank">
          {props.text}
        </a>
    );
  }

export default Ltext;