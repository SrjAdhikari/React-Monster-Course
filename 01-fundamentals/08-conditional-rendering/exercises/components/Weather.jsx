const Weather = ({ temperature }) => {
	if (temperature < 15) {
		return <div>It's cold outside!</div>;
	} else if (temperature >= 15 && temperature <= 25) {
		return <div>It's nice outside!</div>;
	} else {
		return <div>it's hot outside!</div>;
	}
};

export default Weather;
