
interface CatCardProps{
    name: string;
    species: string;
    favFoods: Array<string>;
    birthYear: number;
 }

 interface CatObject {
     cat : CatCardProps;
 }

 const CatCardUsingProps : React.FC <CatCardProps>= (prop) =>
        <div className="card">
            <h3 className="card__text card__header">{prop.name}</h3>
            <p className="card__text">Species: {prop.species}</p>
            <p className="card__text">Favourite Food(s): {prop.favFoods}</p>
            <p className="card__text">Birth Year: {prop.birthYear}</p>
        </div>;

 const CatCardUsingObject : React.FC <CatObject>= (catObject) =>
        <div className="card">
            <h3 className="card__text card__header">{catObject.cat.name}</h3>
            <p className="card__text">Species: {catObject.cat.species}</p>
            <p className="card__text">Favourite Food(s): {catObject.cat.favFoods}</p>
            <p className="card__text">Birth Year: {catObject.cat.birthYear}</p>
        </div>;

export default { CatCardUsingObject, CatCardUsingProps };
