//renders the data in the web page
export function UserComponent({ image, name, dob, summary, edit, delete1 }) {
  return (

    <div className="users">
      <img className="user-pic" src={image} alt={name} />
      <div className="mid">
        <h3 className="name">{name}</h3>
        <p className="born"><b>DOB</b>:{dob}</p>
      </div>
      <p className="summary">{summary}</p>
      <div className="buttons">
      {edit}
      {delete1}
      </div>
    </div>
  );
}
