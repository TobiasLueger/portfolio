const helpers = {
	ifCond(v1, operator, v2, options) {
		switch (operator) {
			case '==':
				return v1 == v2 ? options.fn(this) : options.inverse(this);
			case '===':
				return v1 === v2 ? options.fn(this) : options.inverse(this);
			case '!=':
				return v1 != v2 ? options.fn(this) : options.inverse(this);
			case '!==':
				return v1 !== v2 ? options.fn(this) : options.inverse(this);
			case '<':
				return v1 < v2 ? options.fn(this) : options.inverse(this);
			case '<=':
				return v1 <= v2 ? options.fn(this) : options.inverse(this);
			case '>':
				return v1 > v2 ? options.fn(this) : options.inverse(this);
			case '>=':
				return v1 >= v2 ? options.fn(this) : options.inverse(this);
			case '&&':
				return v1 && v2 ? options.fn(this) : options.inverse(this);
			case '||':
				return v1 || v2 ? options.fn(this) : options.inverse(this);
			default:
				return options.inverse(this);
		}
	},
	getJsonContext: (data, options) => options.fn(JSON.parse(data)),
	forLoop(from, to, incr, block) {
		let accum = '';
		for (let i = from; i < to; i += incr)
			accum += block.fn(i);
		return accum;
	},
	inc(value, options) {
		return parseInt(value) + 1;
	}
};

module.exports = helpers;
