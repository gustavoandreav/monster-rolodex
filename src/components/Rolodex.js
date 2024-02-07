import Card from './Card';

const Rolodex = (props) => {
  const { data } = props;
  return (
    <div className='rolodex'>
      { data.map( element => <Card key={element.id} image={element.id} title={element.name} text={element.email} />) }
    </div>
  );
}

export default Rolodex;