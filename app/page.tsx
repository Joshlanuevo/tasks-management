import UserList from "./users/components/UserList";

export default function Home() {
  const DUMMY_USERS = [
    {
      "id": "u1",
      "name": "John Doe",
      "image": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      "tasks": [1, 2, 3]
    },
    {
      "id": "u2",
      "name": "Jane Smith",
      "image": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      "tasks": [1, 2, 3]
    },
    {
      "id": "u3",
      "name": "Bob Johnson",
      "image": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      "tasks": [1, 2, 3]
    },
    {
      "id": "u4",
      "name": "Alice Williams",
      "image": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      "tasks": [1, 2, 3]
    },
    {
      "id": "u5",
      "name": "Charlie Brown",
      "image": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      "tasks": [1, 2, 3]
    }
  ];

  return (
    <main className="pt-20">
      <h1>Hello World</h1>
      <UserList items={DUMMY_USERS}/>
    </main>
  )
}
