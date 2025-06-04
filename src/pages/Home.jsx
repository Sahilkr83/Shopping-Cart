import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading,setLoading] = useState(false)
  const [posts, setPost] = useState([])

  async function cartData (){
    setLoading(true)
    try{
      const response = await fetch(API_URL)
      const data = await response.json()
      setPost(data)
      console.log(data)
    }
    catch(error){
      console.error('Error getting Data')
      setPost([])
    }
    setLoading(false)
  } 

  useEffect(() =>{
    cartData()
  },[])
  return( 
    <div >
      {loading ? <Spinner/> :
        posts.length > 0 ? 
        (<div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-x-5 min-h-[80vh]">
          {
            posts.map((post) =>(
            <Product post={post} key = {post.id}/>))
          }
        </div>) : 
        (<div className="flex justify-center items-center">No data Found </div>)
      }
    </div>
  )
};

export default Home;
