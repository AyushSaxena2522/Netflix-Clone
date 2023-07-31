import React,{useState, useEffect} from 'react'
import { styled } from 'styled-components'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import {FaPlay} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

import TopNav from '../components/TopNav'
import Card from '../components/Card'
import { fetchMovies, getGenres } from '../store'
import SliderContainer from '../components/SliderContainer'

const MyList = () => {

    const [isScrolled, setIsScrolled] = useState(false)

    const navigate = useNavigate()

    const movies = useSelector((state)=> state.netflix.movies);
    const generesLoaded = useSelector((state)=>state.netflix.generesLoaded)


    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getGenres())
    },[]);

    useEffect(()=>{
        if(generesLoaded){
            dispatch(fetchMovies({type: "all"}))
        }
    });



window.onscroll = ()=>{
    setIsScrolled(window.pageYOffset === 0 ? false: true)
    return ()=>(window.onscroll = null)
};


// console.log(movies)


  return (

    <HeroContainer>
      <div className='title'>
        adnjkdnkjn
      </div>
      <div className='title1'>
        My List
      </div>
    <div className='hero'>
        <TopNav isScrolled={isScrolled} />
  
    </div>
    
    </HeroContainer>
  )
}


const HeroContainer = styled.div`
background-color: black;
    .hero{
        position: relative;
        .background-image{
            filter: brightness(40%);
        }
        img{
            height: 70vh;
            width: 100%;
        }
        
    }
    .title{
      background-color: black;
      border: 25px solid black;
      box-sizing: 15px;
    }
    .title1{
      background-color: #080d0d;
      border: 25px solid black;
      color: white;
      text-align: center;
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      font-size: 45px;
      margin: -25px;
      padding: 0;
    
    }
`

export default MyList