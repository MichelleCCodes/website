import React from 'react';

function CardItem(props) {
  return (
    <>
      <div className='cards__item'>
          <a href={props.link} target="_blank" rel="noreferrer">
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='project'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
          </a>
      </div>
    </>
  );
}

export default CardItem;
