import { Button, Col, Row, Image } from "react-bootstrap";
import { CartControlButtons } from "./CartControlButtons";
import '../assets/styles/itemDetail.css';
import { useState } from "react";

export const ItemDetail = ({ data, quantityItem }) => {

  
  const { 
    name, 
    description,
    details,
    images, 
    price,
    discount,
    id
  } = data;

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

          <h3>{price} $ - {discount}%</h3>
          <div className="d-flex w-100 align-items-center gap-3" >
            Cantidad:   
          <CartControlButtons item = {{
                title: name ,
                price,
                image: imageSelected.image,
                id,
                discount
              }}
              quantityItem = {quantityItem}
              />
          </div>
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
