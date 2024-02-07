const Card = (props) => {
  const { image, title, text } = props;
  return (
    <div className={'card-container'}>
      <img alt={`monster ${title}`} className={'card-image'} src={`https://robohash.org/${image}?set=set2`} width={'300'} height={'300'}/>
      <h3 className={'card-title'}>{title}</h3>
      <p className={'card-text'}>{text}</p>
    </div>
  );
}

export default Card;