import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';

export default function ContactList(props) {
  const { contacts, getContactId } = props;
  const deleteContactList = (id) => {
    getContactId(id);
  };

  const renderContactList = contacts.map((contact) => (
    <ContactCard
      contact={contact}
      key={contact.id}
      clickHandler={deleteContactList}
    />
  ));
  return (
    <div className="main">
      <h2>
        联系人列表
        <Link to="/add">
          <button type="button" className="ui button blue right floated">
            添加
          </button>
        </Link>
      </h2>
      <div className="ui relaxed divided list">{renderContactList}</div>
    </div>
  );
}
