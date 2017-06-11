function annualiseByKey(data, years, key){
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
var species_by_year 	= annualiseByKey(data, _.range(1950, 2011), 'species');

console.log(countries_by_year, species_by_year);