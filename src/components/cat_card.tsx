import CatImage from "../components/cat_image";
import  CatDataImages from "../data/catData"
 


interface CatCardProps{
    name: string;
    species: string;
    favFoods: Array<string>;
    birthYear: number;
    catIndex : number;
    id ?: string;
 }

//  interface CatObject {
//      cat : CatCardProps;
//  }


 const CatCardUsingProps : React.FC <CatCardProps>= (props) =>
 {
    const { name, species, favFoods, birthYear, catIndex, id } = props;
   // const foundCatImage = CatDataImages.CatImages.find(image => image.id === id)
    return (
		
        <div className="card">
            <h3 className="card__text card__header">{name}</h3>
            <p className="card__text">Species: {species}</p>
            <p className="card__text">Favourite Food(s): {favFoods}</p>
            <p className="card__text">Birth Year: {birthYear}</p>
            
            {catIndex < CatDataImages.CatImages.length && (
				<CatImage
					img={CatDataImages.CatImages[catIndex].img}
					alt_Text={CatDataImages.CatImages[catIndex].alt_Text}
					licenceType={CatDataImages.CatImages[catIndex].licenceType}
					licenceUrl={CatDataImages.CatImages[catIndex].licenceUrl}
					attributionName={CatDataImages.CatImages[catIndex].attributionName}
					attributionUrl={CatDataImages.CatImages[catIndex].attributionUrl}
				/>
			)}
        </div>

	);
 };

//  const CatCardUsingObject : React.FC <CatObject>= (catObject) =>
//         <div className="card">
//             <h3 className="card__text card__header">{catObject.cat.name}</h3>
//             <p className="card__text">Species: {catObject.cat.species}</p>
//             <p className="card__text">Favourite Food(s): {catObject.cat.favFoods}</p>
//             <p className="card__text">Birth Year: {catObject.cat.birthYear}</p>
//         </div>;

export default  {CatCardUsingProps} ;
