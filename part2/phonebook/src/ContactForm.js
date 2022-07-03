const ContactForm = ({
  name,
  number,
  onSubmit,
  onNameChange,
  onNumberChange,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        name: <input onChange={onNameChange} value={name} />
        number: <input type="tel" onChange={onNumberChange} value={number} />
      </div>
      <div>
        <button type="submit">Add Person</button>
      </div>
    </form>
  );
};

export default ContactForm;
