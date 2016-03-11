var express = require('express');
var app = express();
var moment = require('moment');
var path = require('path');

var port = process.env.PORT || 3500;

app.listen(port, function(){
  console.log("Listening on port: " + port);
});

app.use(express.static(path.resolve(__dirname, 'client')));

app.get('/:date', function(req,res) {
	var result;
	var time = moment.utc(req.params.date, 'MMMM DD, YYYY', true);
	
	if (!time.isValid()){
		time = moment.utc(req.params.date, 'X', true);
		if (!time.isValid()){
			result = {
				unix: null,
				natural: null
			}
		} else {
			result = {
				unix : time.format('X'),
				natural: time.format('MMMM DD, YYYY')
			}
		}
	} else {
		result = {
			unix : time.format('X'),
			natural: time.format('MMMM DD, YYYY')
		}
	}

		res.json(result);
});
