function annualiseByKey(data, years, key){
	return _.mapValues(_.keyBy(years), function(year){ 
		var values = _.uniq(_.map(data, key));
		return _.mapValues(_.keyBy(values), function(value){
			return _.filter(data, [key, value])
				.reduce(function(sum, item){
					return sum + item[year];
				}, 0);
		})
	})
}

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


/*
OLD SYNTAX
//Populate country_by_year and species_by_year
	for (year = 1950 ; year < 2011 ; year++){
		var country_catch = {},
			species_catch = {};

		for (country in countries){
 			var total = _.filter(data, { 'country': country })
				.reduce(function(sum, item){
					return sum + item[year];
				}, 0);
			country_catch[country] = total;
		}
		
		for (specie in species){
			var total = _.filter(data, { 'species': specie })
				.reduce(function(sum, item){
					return sum + item[year];
				}, 0);
			species_catch[specie] = total;
		}
		
		country_by_year[year] = country_catch;
		species_by_year[year] = species_catch;
	}
*/