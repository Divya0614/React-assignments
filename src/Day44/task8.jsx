export default function Userlist(){
    const users = [
        {id:1, name:"Divya",age:21},
        {id:2,name:"Rahul",age:21},
        {id:3,name:"Anu",age:20}
    ];
    return(
        <div style={{padding:"20px"}}>
            <h2>User list</h2>

            {users.length === 0 ? (
                <p>No users available</p>
            ) : (
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            Name: {user.name},Age:{user.age}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
