import { useEffect, useState } from "react"
import Card from "./components/Card";
function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}


export default () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState();
  const [regenerate, setRegenerate] = useState(false);
  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      try {
        const respone = await fetch(`https://randomuser.me/api/?page=1&results=1&seed=${generateRandomString()}`)
        if (!respone.ok) throw new Error({ message: "Error fetching the usere" });
        const User = await respone.json();
        // console.log(User.results)
        setUser(User.results);
      }
      catch (error) {
        setError(error);
      }
      setLoading(false); 
    }
    getUser();
  }, [generateRandomString, regenerate]);
  return (
    <div className="main">
      {!user && loading && <Card loading />}
      {!loading && error && <Card error />}
      {user && <><Card user={user} reload={setRegenerate} /></>}
    </div>
  )
}












