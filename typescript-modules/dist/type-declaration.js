// import axios from 'axios'
import _ from "lodash";
_.sample(undefined);
axios.get('http://jsonplaceholder.typicode.com/users/1')
    .then((res) => {
    console.log('Wooo');
    res.data.forEach(printUser);
})
    .catch((e) => {
    console.log('Error', e);
});
function printUser(user) {
    console.log(user.name);
    console.log(user.email);
}
