import classes from "./main.module.css";

import imagen1 from '../../assets/imagenes/imagen1.jpg';
import imagen2 from '../../assets/imagenes/imagen2.jpg';
import imagen3 from '../../assets/imagenes/imagen3.jpg';
import imagen4 from '../../assets/imagenes/imagen4.jpg';
import imagen5 from '../../assets/imagenes/imagen5.jpg';
import imagen6 from '../../assets/imagenes/imagen6.jpg';
import casual from '../../assets/mainImg/casuales.jpg'
import cropTop from '../../assets/mainImg/croptop.jpg'
import vestidos from '../../assets/mainImg/vestidos.jpg'
import home from '../../assets/mainImg/Home.png'
import presentacion1 from '../../assets/mainImg/presentacion1.png'
import banner1 from '../../assets/mainImg/baner1.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {useRef, useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";

const products = [
  { id: 1, title: 'Blusa con botones', price: 30.00, img: imagen1, category: 'camisa', color: 'blanco', size: 'M' },
  { id: 2, title: 'Croptop con botones', price: 20.00, img: imagen2, category: 'croptop', color: 'blanco', size: 'S' },
  { id: 3, title: 'Camisa elegante', price: 10.00, img: imagen3, category: 'camisa', color: 'rojo', size: 'L' },
  { id: 4, title: 'Camiseta casual', price: 20.00, img: imagen4, category: 'camisa', color: 'beach', size: 'S' },
  { id: 5, title: 'Camisa clásica', price: 40.00, img: imagen5, category: 'camisa', color: 'blanco', size: 'M' },
  { id: 6, title: 'Blusón con botones', price: 50.00, img: imagen6, category: 'camisa', color: 'rosado', size: 'L' },
  { id: 7, title: 'Blusa con botones', price: 30.00, img: imagen1, category: 'camisa', color: 'blanco', size: 'M' },
  { id: 8, title: 'Croptop con botones', price: 20.00, img: imagen2, category: 'croptop', color: 'blanco', size: 'S' },
  { id: 9, title: 'Camisa elegante', price: 10.00, img: imagen3, category: 'camisa', color: 'rojo', size: 'L' },
  { id: 10, title: 'Camiseta casual', price: 20.00, img: imagen4, category: 'camisa', color: 'beach', size: 'S' },
  { id: 11, title: 'Camisa clásica', price: 40.00, img: imagen5, category: 'camisa', color: 'blanco', size: 'M' },
  { id: 12, title: 'Blusón con botones', price: 50.00, img: imagen6, category: 'camisa', color: 'rosado', size: 'L' }
];

function Index() {
  const navigate = useNavigate(); 
  const prev = useRef(null);
  const next = useRef(null);
  const productRef = useRef(null);

  // Movimiento en los productos section 2
  useEffect(() => {
    const handlePrevClick = () => {
      productRef.current.scrollLeft -= 450;
      productRef.current.style.scrollBehavior = "smooth";
    };
  
    const handleNextClick = () => {
      productRef.current.scrollLeft += 450;
      productRef.current.style.scrollBehavior = "smooth";
    };
  
    prev.current.addEventListener("click", handlePrevClick);
    next.current.addEventListener("click", handleNextClick);

  }, []);


  return (

    <main className={classes.containerMain}>
        
        <section className={classes.mainSectionCarrusel}>
          <div className={classes.carruselContainer}>
            <ul>

            <li className={classes.topMain}>
              <a href="https://www.instagram.com/r.rame_/" target="_blank"><img src={presentacion1} alt="" /></a>
            </li>

              <li className={classes.topMain}>
                <Link to="/catalogo"><img src={home} alt="" /></Link>  
              </li>
            

              <li className={classes.topMain}>
                 <Link to="/catalogo">
                 <img src={banner1} alt="" />
                 </Link>
              </li>
            </ul>
          </div>
        </section>
        
        <section className={classes.containerProducts}>
          <h2 className={classes.titleNewProducts}>Mas recientes</h2>
            
            <div className={classes.productsWrap}>

            <FontAwesomeIcon ref={prev} className={classes.arrowLeft} icon={faChevronLeft} /> 
            <div className={classes.products} ref={productRef}>
              { products.map(product => (
                <div  
                className={classes.product} 
                key={product.id}>
                  <div>
                  <img onClick={() =>
                  navigate(`/product/${product.id}`, { state: { product }})}
                   className={classes.imgProduct} src={product.img} alt={product.title}/>
                  <div className={classes.productDescription}>
                    <h2 className={classes.titleProduct}>{product.title}</h2>
                    <p>{`$${product.price.toFixed(2)} ARS`}</p>
                  </div>
                  </div>
              </div>
              ))}
          </div>
              <FontAwesomeIcon ref={next} className={classes.arrowRight} icon={faChevronRight} />
             
              </div>
        </section>

        <section>
          <h2 className={classes.titleProducts}>Nuestros productos</h2>
          <div id="containerProducts" className={classes.containerImgProducts}>
            <div className={classes.croptop}>
            <Link to="/catalogo"> 
            <img 
            className={classes.croptopImg} src={cropTop} alt="croptops" />
            </Link>  
            
            </div>
            <div className={classes.vestido}>
              <Link to="/catalogo">
              <img className={classes.vestidoImg} src={vestidos} alt="vestidos" />
              </Link>
            </div>
            <div className={classes.casual}>
              <Link to="/catalogo">
              <img 
                className={classes.casualImg} src={casual} alt="camisas casuales" />
              </Link>
            </div>
          </div>
        </section>
    </main>

  );
}

export default Index;