import { useEffect,useState } from "react"


const Users = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/user/all',{
                    method:"GET"
                });
                if (response.ok) {
                    const jsonData = await response.json();
                    setData(jsonData)
                } else {
                    throw new Error("Request Failed")
                }
            } catch (err) {
                console.error(err)
            }
        }
        fetchData();
    }, [])
    
    return (
        <div>
            <div>
                {data.map((item) => (
                    <p key={item._id}>{item.name}</p>
                ))}
            </div>
        </div>
    )
}

export default Users;