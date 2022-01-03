import { Link } from 'react-router-dom';

const ContactDetail = (props) => {
  const {
    location: {
      state: { name, email, id },
    },
  } = props;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image center aligned">
          <i className="large user circle center  icon" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
      <div className="ui card centered">
        <Link to="/">
          <button
            type="button"
            className="ui button blue center"
            style={{ width: '100%' }}
          >
            返回联系人列表
          </button>
        </Link>
      </div>
    </div>
  );
};
export default ContactDetail;
