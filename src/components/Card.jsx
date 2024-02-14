const Input = ({ label, data, ...props }) => {
    return (
        <div className="input-field">
            <h4>{label}</h4>
            <input value={data}  {...props} disabled />
        </div>
    )
}
export default ({ loading, error, user, reload }) => {

    if (!user) {
        return (
            <div className="card alert">{error ? "Could not Fetch User" : "Loading User data"}</div>
        )
    }

    return (
        <div style={{ "display": "flex", "flexDirection": "column" }}>
            <h1>Meet Random People</h1>
            <div className="card user-card">
                <img src={user[0].picture.large} ></img>
                <div className="user-details">
                    <div className="name">
                        <Input label="FirstName" data={user[0].name.first}></Input>
                        <Input label="LastName" data={user[0].name.last}></Input>

                    </div>
                    <Input label="Gender" data={user[0].gender}></Input>
                    <Input label="Phone" data={user[0].phone}></Input>
                </div>
            </div>
            <button onClick={reload} >Another-One</button>
        </div>
    )
}