
export interface CatImageProps {
	img: string;
	alt_Text: string;
	licenceType: string;
	licenceUrl: string;
	attributionName?: string;
	attributionUrl?: string;
    id?:string;
}



const CatImage: React.FC<CatImageProps> = ({ img, alt_Text,licenceUrl, licenceType,attributionName, attributionUrl }) => (
	<>
		<img className='card__image' src={img} alt={alt_Text} />
        <p className='card__text__small'>
			Image licenced under <a href={licenceUrl}>{licenceType}</a>
			{attributionName && (
				<>
					&nbsp;by <a href={attributionUrl}>{attributionName}</a>
				</>
			)}
		</p>
	</>
    
);

export default CatImage;