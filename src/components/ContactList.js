import ContactCard from './ContactCard';

export default function ContactList(props) {
  const { contacts, getContactId } = props;
  // console.log(contacts);
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
  return <div className="ui relaxed divided list">{renderContactList}</div>;
}
