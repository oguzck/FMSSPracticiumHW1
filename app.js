import axios from 'axios';

export default async function getData(userId) {
    const getUsers = (id) =>{
        return new Promise (async (resolve,reject)=>{
            const {data} = await axios(`https://jsonplaceholder.typicode.com/users/${id}`);
            resolve(data);
        });
    }
    const getPosts = (id) =>{
        return new Promise (async (resolve,reject)=>{
            const {data} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
            resolve(data);
        });
    }  
  try {
    const [userData,postData] = await Promise.all([getUsers(userId), getPosts(userId)]);
    const userAndPosts = {
        User :  userData,
        posts : postData
    } 
    return userAndPosts;

  } catch (error) {
    console.error(error);
  }
}
 