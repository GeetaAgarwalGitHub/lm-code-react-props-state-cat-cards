 


interface DogCardProps{
    name: string;
    species: string;
    favFoods: Array<string>;
    birthYear: number;
    key?:string;
 }



 const DogCardUsingProps : React.FC <DogCardProps>= (props) =>
 {
    const { name, species, favFoods, birthYear} = props;
    return (
		
        <div className="card">
            <h3 className="card__text card__header">{name}</h3>
            <p className="card__text">Species: {species}</p>
            <p className="card__text">Favourite Food(s): { favFoods.join(',')}</p>
            <p className="card__text">Birth Year: {birthYear}</p>
           
        </div>

	);
 };


export default  {DogCardUsingProps} ;
