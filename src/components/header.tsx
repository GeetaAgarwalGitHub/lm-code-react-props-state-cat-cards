interface HeaderProp {
	NumberOfElements:number;
	Animal :string;
}

const Header: React.FC <HeaderProp> = (props) => {
	const {NumberOfElements, Animal} = props
return(	
	<header className='header__container'>
		<h1 className='header__title header__welcome'>Welcome to React!</h1>
		<h2 className='header__title'>
			There are currently {NumberOfElements} {Animal} in this  App
		</h2>
	</header>
	);
}

export default Header;
