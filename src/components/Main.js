import React, { useState, useEffect } from 'react'
import Banner from '../components/Banner'
import Row from './Row';

function Main() {
    const [isMovie, setIsMovie] = useState([]);
    const [isBanner, setIsBanner] = useState([])
    const API_KEY = "https://api.themoviedb.org/3/trending/all/day?api_key=538dc322c0b43d2bcfcc98852172bf3e"
    
    useEffect(() => {
        return () => {
            const fetchMoviePoster = async () => {
                try{
                    const response = await fetch(API_KEY);
                const data =  await response.json();
                setIsMovie(data.results);
                } catch (error) {
                    console.log('error', error)
                }
            }
            fetchMoviePoster();
        };
    }, []);
    useEffect(() => {
        const runOnce = async () => {   
            const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=538dc322c0b43d2bcfcc98852172bf3e&language=en-US&page=1")
            const data = await response.json();
            console.log(data.results)
            
            setIsBanner(
                data.results[Math.floor(Math.random() * data.results.length -1)]
                )
                return data
        
    }
    runOnce();
    },[])
    return(
        <main>
            <Banner bannerMovie={isBanner}/>
            <Row title="POPULAR ON NETFLIX" movieItem={isMovie}/>
            <Row title="TRENDING NOW" movieItem={isMovie}/>
            <Row title="WATCH IT AGAIN" movieItem={isMovie}/>
        </main>
    )
}
export default Main;