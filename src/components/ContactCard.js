/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
const ContactCard = (props) => {
  const {
    contact: { name, email, id },
    clickHandler,
  } = props;

  return (
    <div className="item">
      <i className="large user circle middle aligned icon" />
      <div className="content">
        <i
          className="large trash alternate outline icon right floated"
          style={{ color: 'red' }}
          onClick={() => {
            clickHandler(id);
          }}
        />
        <h3 className="header">{name}</h3>
        <div>{email}</div>
      </div>
    </div>
  );
};
export default ContactCard;
