import React, {PropTypes} from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

/* 定义参数类型 */
const propTypes = {
	imageSrc: PropTypes.array.isRequired,
	currentIndex: PropTypes.number.isRequired,
	enterDelay: PropTypes.number.isRequired,
	leaveDelay: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	component: PropTypes.string.isRequired
}

/* 轮播图片组件 */
function CarouselImage(props) {
	let {imageSrc, currentIndex, enterDelay, leaveDelay, name, component} = props;

	return (
		<ul className="carousel-image">
			<CSSTransitionGroup
				component={component}
				transitionName={name}
				transitionEnterTimeout={enterDelay}
				transitionLeaveTimeout={leaveDelay}
				className={name}>
				<img 
					src={imageSrc[currentIndex]} 
					key={imageSrc[currentIndex]} 
				/>
			</CSSTransitionGroup>
		</ul>
	);
}	

CarouselImage.propTypes = propTypes;

export default CarouselImage;