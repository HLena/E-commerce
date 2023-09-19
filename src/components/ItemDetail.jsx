import { Image, Button } from "react-bootstrap";
import { Counter } from "./Counter";
import '../assets/styles/itemDetail.css';
import { useState } from "react";

export const ItemDetail = ({ data, quantityItem, addItem }) => {

  
  const { 
    name, 
    description,
    details,
    images, 
    price,
    discount,
    id
  } = data;

  const [quantityToIncrement, setQuantityToIncrement] = useState(1);

  const [imageSelected, setImageSelected] = useState({
    image: images[0],
    index: 0
  });

  const onChangeImage = (index) => {
    setImageSelected({
      image: images[index],
      index
    })
  }

  const imagesQuantity = images.length;
  const priceWithDiscount = price - ((price * discount) / 100);
  

  const elementos = [];
    for (const atrr in details) {
      if (details.hasOwnProperty(atrr)) {
        elementos.push(
          <li key={atrr}>
            <strong>{atrr}:</strong>  {details[atrr]}
          </li>
        );
      }
    }

  return (
    <>
      <div className = "item__container item-details__container">
        <div className="item-image__container text-center">
          <Image src={imageSelected.image} style={{ width: '80%', padding: '2rem'}} />
          <div className="image-list__container">
            {
              images.map((img, index) => 
                <Image 
                  src={img}
                  onClick={() => onChangeImage(index)}
                  key={`${id}-img-${index}`}
                  style={{ width: `${100/imagesQuantity}%`, maxWidth: '100px', maxHeight: "100px"}} 
                  className={`border cursor-pointer ${(index == imageSelected.index) ? 'image-selected': ''}`}/>
              )
            }
          </div>
        </div>
        <div className="item-image__description">
          <h4 className="item-name_title">{name}</h4>
          <hr />
          <ul>
            {
              description.map((des, index) => <li key={`${id}-des-${index}`}>{des}</li> )
            }
          </ul>
          <hr />
          <div className = "d-flex align-items-start cart-item__price" >
            <p className="fst-italic fs-4 m-0">
            S/ {Math.ceil(priceWithDiscount)} <small className="discount-text">{-discount}%</small>
            </p>
            <small className="text-body-tertiary text-decoration-line-through fs-5">S/ {price}</small>
          </div>
          <div className="d-flex w-100 align-items-center gap-3" >
            Cantidad:   
            <Counter 
              quantity = {quantityToIncrement}
              setQuantity={ setQuantityToIncrement }
              />
          </div>
          <Button  
            className="my-3 w-100"
            onClick={() => addItem(id, 
              {
                title: name ,
                price,
                image: imageSelected.image,
                discount
              }, quantityToIncrement
            )}
          >
              Agregar al carrito
          </Button>
        </div>
      </div>
      <div className = "item__container">
        <h4>Descripción</h4>
        <hr />
        <ul>
          {
            elementos
          }
        </ul>
       
      </div>

    </>
  )
}
