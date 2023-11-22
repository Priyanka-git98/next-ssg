import getUsers from "../../../../services/getUsers";


export default async function Page(props){
    const getUserList = getUsers();
    const users = await getUserList;
    const currentId = props.params.userid;
    const userData = users[currentId-1];
    console.log(users[currentId-1]);
    return(
        <div>
            <h3>User Id Page</h3>
            <h2>id: {userData.id}</h2>
            <h2>name: {userData.name}</h2>
            <h2>email: {userData.email}</h2>
        </div>
    )
}

export async function generateStaticParams(){
    const getUserList = getUsers();
    const users = await getUserList;
    return users.map(user =>({
        userid: user.id.toString()
    })) 
}