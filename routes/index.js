module.exports = function(app) {
	require('../dishes/index')(app);
	require('../promotions/index')(app);
	require('../leadership/index')(app);
};
