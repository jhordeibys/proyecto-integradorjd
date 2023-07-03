import style from "./card.module.css";


export default function Card({id, name, status,species, gender, origin, image, onClose}) {
   return (
      <div className={style.container}>
         <button className={style.hover} onClick={onClose}>X</button>
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{status}</h2>
         <h2>{origin}</h2>
         <img className={style.img} src={image} alt='' />
      </div>
   );
}
