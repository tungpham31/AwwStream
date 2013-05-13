
/*
 * GET home page.
 */

exports.index = function(req, res){
	videoId = req.query["videoId"]; // Get the videoId to display
	res.render('index', { title: 'Express', videoId : videoId });
};