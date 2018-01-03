import variable from './../variables/platform';

export default (variables = variable) => {
	const subtitleTheme = {
		fontSize: variables.subTitleFontSize,
		fontFamily: variables.titleFontfamily,
		color: variables.subtitleColor,
		textAlign: 'center',
	};

	return subtitleTheme;
};
