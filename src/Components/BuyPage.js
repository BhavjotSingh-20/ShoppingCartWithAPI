import React,{useState,useEffect} from "react"
import  Axios from "axios"
import {random,commerce} from "faker"
import {Container,Col,Row, Card} from "reactstrap"
import CardItem from "./Card"



const BuyPage = ({addInCart}) => {
    const apiKey = '563492ad6f917000010000011f91aa83c08d422f9c127f2ec56ad003'

const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1"

 const [product,setProduct] = useState([])
 const fetchPhotos = async () => {
     const {data} = await Axios.get(url,{
         headers:{
             Authorization:apiKey
         }
     })
 
 const {photos} =data;
 const allProduct = photos.map(photo=> ({
     smallImage:photo.src.large,
     tinyImage:photo.src.tiny,
     productName:random.word(),
     productPrice:commerce.price(),
     id:random.uuid()

 }))

 setProduct(allProduct)
 }
 useEffect(()=> {fetchPhotos()},[])

 return (
     <Container fluid>
         <h1 className="text-success text-center">Buy Page</h1>
         <Row>{product.map(product => (
             <Col md={4} key={product.id}><CardItem product={product} addInCart={addInCart} /></Col>
         ))}</Row>
     </Container>
 )

}
export default BuyPage