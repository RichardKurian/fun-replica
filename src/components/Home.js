import React from 'react'
import '../styles/Home.css'
import{Link} from 'react-router-dom'

function Home() {
    return (
        <div className='Home' style={{
            // backgroundImage:'url("https://images.cnbctv18.com/wp-content/uploads/2021/06/trending-stocks-1019x573.jpg")',
        //    backgroundImage:'url("https://png.pngtree.com/thumb_back/fh260/background/20191105/pngtree-stock-market-data-k-line-background-image_321110.jpg")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh'
        }}>
            <h1 className='MainHeading'>Get you finance sorted. </h1>
            <h2 className="SubHeading">Join us and make your way to financial freedom,<br/>
             live your life to the fullest.</h2>
               
             <Link to='/products'>
             <button className="exp-btn">Explore Now</button>
             </Link>
        </div>
    )
}

export default Home
