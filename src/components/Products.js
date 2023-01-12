import React,{useState,useEffect} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import '../styles/Products.css'



function Products() {



    const [post,setPosts]=useState([]);
    const[pageNumber,setPageNumber]=useState(0);

    const usersPerPage=3;
    const pagesVisited=pageNumber*usersPerPage;



    useEffect(()=>{
        const fetchPosts=async()=>{
          const res=await axios.get('https://api.polygon.io/v2/reference/markets?&apiKey=BlOGploRvYdNVI74mqEnH9JJTp8vpQz8')
          //console.log(res)
          console.log(res.data.results)
         
          setPosts(res.data.results)
        }
      
        fetchPosts();
      },[])

      const displayPost=post
               .slice(pagesVisited,pagesVisited+usersPerPage)
               .map((post)=>{
                 return(
              <div key={post.market} className="test">
                 <h3>{post.market}</h3>
                 <p>{post.desc}</p>                       
              </div>
            )
        }

      )
      const pageCount=Math.ceil(post.length/usersPerPage);


      const changePage=({selected})=>{
        setPageNumber(selected);
      }
    return (
        <div className="products">
            <div>
                   <div className="flexContainer">
{/* 
                 <div className="test">
                   <h3 className="heading1">heading 1</h3>
                   <p className="para1">para 1</p>
                 </div>

                 <div className="test">
                   <h3 className="heading1">heading 2</h3>
                   <p className="para1">para 2</p>
                 </div>

                 <div className="test">
                   <h3 className="heading1">heading 3</h3>
                   <p className="para1">para 3</p>
                 </div> */}


                        {displayPost}
                 </div>

                 

                {/* {displayPost} */}



                <ReactPaginate
   
   previousLabel={'previous'}
   nextLabel={'next'}
   pageCount={pageCount} 
   onPageChange={changePage} 
   
   containerClassName={"paginationBttns"}
   previousLinkClassName={"previousBttn"}
   nextLinkClassName={"nextBttn"}
  //  disabledClassName={"paginationDisabled"}
   activeClassName={"paginationActive"}
   
   ></ReactPaginate>


                
            </div>
        </div>
    )
}

export default Products
