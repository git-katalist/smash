import {StyledHero} from './style'

const Logo = '/logo-hero.svg'
const brand = '/mmmnandi.svg'


const Hero = () => {
return (
	<StyledHero>
		<div>
			<img src={Logo} alt="" />
		</div>
		<div className="brandName" >
			<img src={brand} alt="" />
		</div>
		<div>
NOODLES
		</div>
	</StyledHero>
)
}

export default Hero
