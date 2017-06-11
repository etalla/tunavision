function annualiseByKey(data, years, key){
	// years = _.filter(_.keys(data[0]), _.toInteger)	
	return _.mapValues(_.keyBy(years), function(year){
		return _.mapValues(_.keyBy(_.uniq(_.map(data, key))), function(value){
			return _.filter(data, [key, value])
				.reduce(function(sum, item){
					return sum + item[year];
				}, 0);
		})
	})
}

var countries_by_year 	= annualiseByKey(data, _.range(1950, 2011), 'country');
var countries_by_year2 	= annualiseByKey2(data, 'country');

console.log(countries_by_year, countries_by_year2);
