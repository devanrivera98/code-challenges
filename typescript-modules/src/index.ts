import axios from 'axios'

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

axios.get<User[]>('http://jsonplaceholder.typicode.com/users/1')
  .then((res) => {
  console.log('Wooo')
  res.data.forEach(printUser)
})
  .catch((e) => {
    console.log('Error', e)
  })

function printUser(user: User) {
  console.log(user.name)
  console.log(user.email)
}
