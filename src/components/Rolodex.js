import Card from './Card';

const Rolodex = (props) => {
  const { data } = props;
  return (
    <div className='rolodex'>
      { data.map( element => <Card image={element.id} title={element.name} text={element.email} />) }
    </div>
  );
}

export default Rolodex;