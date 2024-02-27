import VizzuPlayer from 'https://cdn.jsdelivr.net/npm/vizzu-story@0.6/dist/vizzu-story.min.js';

const cClean = 'Cleaning';
const cReplace = 'Filter replacing';
const cScaling = 'Scaling';
const cWater = 'Water';
const cMilk = 'Milk';
const cCoffee = 'Coffee';
const cCoffeeDiff = 'Coffee difference';
const cCoffeePerDay = 'Coffee per day';

let data = {
	series: [
		{ name: 'dayOfWeek', type: 'dimension' },
		{ name: 'line', type: 'dimension' },
		{ name: 'stat', type: 'dimension' },
		{ name: 'coffee', type: 'measure' },
		{ name: 'dayOfYear', type: 'measure' },
		{ name: 'addDay', type: 'measure' },
		{ name: 'date', type: 'dimension' }
	],
	records: [
		{ dayOfWeek: 'Mon', line: 'jul.26', stat: cClean, coffee: 0, dayOfYear: 0, addDay: 0, date: 'jul.26' },
		{ dayOfWeek: 'Mon', line: 'jul.26', stat: cReplace, coffee: 0, dayOfYear: 0, addDay: 0, date: 'jul.26' },
		{ dayOfWeek: 'Mon', line: 'jul.26', stat: cScaling, coffee: 0, dayOfYear: 0, addDay: 0, date: 'jul.26' },
		{ dayOfWeek: 'Mon', line: 'jul.26', stat: cWater, coffee: 0, dayOfYear: 0, addDay: 0, date: 'jul.26' },
		{ dayOfWeek: 'Mon', line: 'jul.26', stat: cMilk, coffee: 0, dayOfYear: 0, addDay: 0, date: 'jul.26' },
		{ dayOfWeek: 'Mon', line: 'jul.26', stat: cCoffee, coffee: 21002, dayOfYear: 0, addDay: 0, date: 'jul.26' },
		{ dayOfWeek: 'Mon', line: 'sept.21', stat: cCoffee, coffee: 21494, dayOfYear: 56, addDay: 56, date: 'sept.21' },
		{ dayOfWeek: 'Mon', line: 'jan.14', stat: cCoffee, coffee: 22985, dayOfYear: 172, addDay: 116, date: 'jan.14' },
		{ dayOfWeek: 'Tue', line: 'jan.14', stat: cCoffeeDiff, coffee: 0, dayOfYear: 172, addDay: 116, date: 'jan.14' },
		{ dayOfWeek: 'Wed', line: 'jan.14', stat: cCoffeePerDay, coffee: 25, dayOfYear: 173, addDay: 1, date: 'jan.15' },
		{ dayOfWeek: 'Thu', line: 'jan.14', stat: cCoffeePerDay, coffee: 20, dayOfYear: 174, addDay: 1, date: 'jan.16' },
		{ dayOfWeek: 'Fri', line: 'jan.14', stat: cCoffeePerDay, coffee: 14, dayOfYear: 175, addDay: 1, date: 'jan.17' },
		{ dayOfWeek: 'Sat', line: 'jan.14', stat: cCoffeePerDay, coffee: 0, dayOfYear: 176, addDay: 1, date: 'jan.18' },
		{ dayOfWeek: 'Sun', line: 'jan.14', stat: cCoffeePerDay, coffee: 0, dayOfYear: 177, addDay: 1, date: 'jan.19' },
		{ dayOfWeek: 'Mon', line: 'jan.14', stat: cCoffeePerDay, coffee: 21, dayOfYear: 178, addDay: 1, date: 'jan.20' },
		{ dayOfWeek: 'Tue', line: 'jan.14', stat: cCoffeePerDay, coffee: 25, dayOfYear: 179, addDay: 1, date: 'jan.21' },
		{ dayOfWeek: 'Wed', line: 'jan.14', stat: cCoffeePerDay, coffee: 20, dayOfYear: 180, addDay: 1, date: 'jan.22' },
		{ dayOfWeek: 'Thu', line: 'jan.14', stat: cCoffeePerDay, coffee: 26, dayOfYear: 181, addDay: 1, date: 'jan.23' },
		{ dayOfWeek: 'Fri', line: 'jan.14', stat: cCoffeePerDay, coffee: 15, dayOfYear: 182, addDay: 1, date: 'jan.24' },
		{ dayOfWeek: 'Sat', line: 'jan.14', stat: cCoffeePerDay, coffee: 0, dayOfYear: 183, addDay: 1, date: 'jan.25' },
		{ dayOfWeek: 'Sun', line: 'jan.14', stat: cCoffeePerDay, coffee: 0, dayOfYear: 184, addDay: 1, date: 'jan.26' },
		{ dayOfWeek: 'Mon', line: 'jan.14', stat: cCoffeePerDay, coffee: 22, dayOfYear: 185, addDay: 1, date: 'jan.27' },
		{ dayOfWeek: 'Tue', line: 'jan.14', stat: cCoffeePerDay, coffee: 24, dayOfYear: 186, addDay: 1, date: 'jan.28' },
		{ dayOfWeek: 'Wed', line: 'jan.14', stat: cCoffeePerDay, coffee: 20, dayOfYear: 187, addDay: 1, date: 'jan.29' },
		{ dayOfWeek: 'Thu', line: 'jan.14', stat: cCoffeePerDay, coffee: 26, dayOfYear: 188, addDay: 1, date: 'jan.30' },
		{ dayOfWeek: 'Fri', line: 'jan.14', stat: cCoffeePerDay, coffee: 11, dayOfYear: 189, addDay: 1, date: 'feb.01' },
		{ dayOfWeek: 'Sat', line: 'jan.14', stat: cCoffeePerDay, coffee: 0, dayOfYear: 190, addDay: 1, date: 'feb.02' },
		{ dayOfWeek: 'Sun', line: 'jan.14', stat: cCoffeePerDay, coffee: 0, dayOfYear: 191, addDay: 1, date: 'feb.03' },
		{ dayOfWeek: 'Mon', line: 'jan.14', stat: cCoffeePerDay, coffee: 23, dayOfYear: 192, addDay: 1, date: 'feb.04' },
		{ dayOfWeek: 'Tue', line: 'jan.14', stat: cCoffeePerDay, coffee: 20, dayOfYear: 193, addDay: 1, date: 'feb.05' },
		{ dayOfWeek: 'Wed', line: 'jan.14', stat: cCoffeePerDay, coffee: 17, dayOfYear: 194, addDay: 1, date: 'feb.06' },
		{ dayOfWeek: 'Thu', line: 'jan.14', stat: cCoffeePerDay, coffee: 22, dayOfYear: 195, addDay: 1, date: 'feb.07' },
		{ dayOfWeek: 'Fri', line: 'jan.14', stat: cCoffeePerDay, coffee: 17, dayOfYear: 196, addDay: 1, date: 'feb.08' },
		{ dayOfWeek: 'Sat', line: 'jan.14', stat: cCoffeePerDay, coffee: 0, dayOfYear: 197, addDay: 1, date: 'feb.09' },
		{ dayOfWeek: 'Sun', line: 'jan.14', stat: cCoffeePerDay, coffee: 0, dayOfYear: 198, addDay: 1, date: 'feb.10' },
		{ dayOfWeek: 'Mon', line: 'feb.11', stat: cCoffeePerDay, coffee: 23, dayOfYear: 199, addDay: 1, date: 'feb.11' },
		{ dayOfWeek: 'Mon', line: 'feb.11', stat: cClean, coffee: 2244, dayOfYear: 199, addDay: 27, date: 'feb.11' },
		{ dayOfWeek: 'Mon', line: 'feb.11', stat: cReplace, coffee: 72, dayOfYear: 199, addDay: 27, date: 'feb.11' },
		{ dayOfWeek: 'Mon', line: 'feb.11', stat: cScaling, coffee: 48, dayOfYear: 199, addDay: 27, date: 'feb.11' },
		{ dayOfWeek: 'Mon', line: 'feb.11', stat: cWater, coffee: 3939, dayOfYear: 199, addDay: 27, date: 'feb.11' },
		{ dayOfWeek: 'Mon', line: 'feb.11', stat: cMilk, coffee: 2611, dayOfYear: 199, addDay: 27, date: 'feb.11' },
		{ dayOfWeek: 'Mon', line: 'feb.11', stat: cCoffee, coffee: 23376, dayOfYear: 199, addDay: 27, date: 'feb.11' },
		{ dayOfWeek: 'Mon', line: 'feb.11', stat: cCoffeeDiff, coffee: 23376-22985, dayOfYear: 199, addDay: 27, date: 'feb.11' }
	]
}

let style = {
	backgroundColor: '#ece0d1',
	fontSize: '100%',
	title: {
		paddingTop: '10em',
		color: '#38220f'
	},
	plot: {
		paddingLeft: '20%',
		marker: {
			colorPalette: '#634832 #473C38 #2b2422 #967259 #72605a #38220f #9a867e #dbc1ac',
			label: {
				fontSize: '150%',
				maxFractionDigits: 0,
				format: 'dimensionsFirst'
			},
			rectangleSpacing: 2
		},
		yAxis: {
			color: '#967259',
			label: {
				fontSize: '150%',
				color: '#38220f'
			},
			interlacing: {
				color: '#dbc1ac70'
			},
			title: {
				color: '#38220f00'
			}
		},
		xAxis: {
			color: '#967259',
			label: {
				fontSize: '150%',
				color: '#38220f'
			},
			interlacing: {
				color: '#dbc1ac00'
			},
			title: {
				color: '#38220f00'
			}
		}
	},
	logo: {
		filter: 'color(#ffffff00)'
	}
}

let slides = [
	{
		config: {
			title: 'The Decent Coffee Machine',
		},
		style
	}
];

slides.push([
	{
		filter: (record) => false,
		config: {
			title: 'The Statistics',
			x: { range: { min: '0', max: 50 }, labels: false, title: '' },
			y: { set: 'stat', range: { max: '0.5max', min: -3 }, labels: false, axis: false },
			label: ['stat'],
			orientation: 'vertical',
		},
		animOptions: '0s'
	},
	{
		style: {
			title: {
				paddingTop: null
			}
		},
		filter: record => record.dayOfYear === 199 && record.stat !== cCoffeeDiff && record.stat !== cCoffeePerDay,
		animOptions: '1.2s'
	}
]);

slides.push([{
	config: {
		title: 'State of the Machine',
		x: { set: 'coffee', range: { min: '0', max: '30000' }, title: '' },
		y: { range: { max: '0.5max', min: -3 }, labels: true },
		label: null,
	},
	style: {
		logo: {
			filter: 'color(#634832)'
		}
	},
	animOptions: '1s'
}, {
	config: {
		label: ['coffee']
	},
	animOptions: '0.5s'
}]);

slides.push([
	{
		filter: record => record.dayOfYear === 199 && (record.stat === cCoffee || record.stat === cMilk),
		animOptions: '0.8s',
		config: {
		y: { range: { max: '0.5max', min: -7 }, /*labels: false*/ },
	//		label: 'stat',
			legend: null,
			color: 'stat',
		}
	},
	{
		config: {
			title: 'The Latte Ratio',
			x: { set: ['coffee', 'stat'], range: { min: 'auto', max: 'auto' } },
			y: { set: null, range: { min: 'auto', max: 'auto' } },
			label: 'stat',
			legend: null,
			color: 'stat',
			coordSystem: 'polar',
		},
		style: {
			plot: {
				paddingLeft: '0%',
			}		
		},
		animOptions: '1s'
	}
]);

slides.push([
	{ 
		filter: record => record.dayOfYear === 199 && record.stat === cCoffee,
		config: {
			title: 'The Coffee Count',
			x: { set: 'stat', range: { min: 'auto', max: 'auto' }, title: '', labels: false },
			y: { set: 'coffee', range: { min: 'auto', max: 'auto' } },
			label: 'coffee',
			color: null,
			coordSystem: 'cartesian',
		},
		style: {
			plot: {
				paddingLeft: '20%',
				marker: {
					rectangleSpacing: 4
				},
				yAxis: {
					title: { 
						color: '#38220f',
						fontSize: '150%'
					},
					label: { fontSize: '100%' },
				},
			}		
		},
		animOptions: '1s'
	}
]);

slides.push([
	{
		filter: record => record.stat === cCoffee,
		config: {
			title: 'Last Half a Year in Coffee',
			x: { set: 'line', range: { min: 'auto', max: 'auto' } },
			y: { set: 'coffee', range: { min: 'auto', max: 'auto' }, title: 'coffee' },
			orientation: 'horizontal',
		},
		style: {
			plot: {
				marker: {
					rectangleSpacing: null
				},
				yAxis: {
					title: { 
						color: '#38220f',
						fontSize: '150%'
					},
					label: { fontSize: '100%' },
				},
			}
		},
		animOptions: '1s'
	}
]);

slides.push([
	{
		config: {
			geometry: 'circle',
		},
		animOptions: '0.5s'
	},
	{
		config: {
			title: 'The Trend',
			y: { range: { min: 21000, max: 23500 }, title: 'coffee' },
			x: { set: ['addDay', 'line'], labels: false },
			label: 'line',
			geometry: 'line',
		},
		animOptions: '0.9s'
	}
]);

slides.push([
	{
		filter: record => record.dayOfYear >= 172 && record.stat === cCoffee,
		config: {
			geometry: 'circle',
			x: { set: 'line', range: { min: 'auto', max: 'auto' } },
			y: { set: 'coffee', range: { min: 'auto', max: 'auto' },},
		},
		animOptions: '1s'
	},
	{
		config: {
			title: 'The Last Month',
			geometry: 'rectangle',
			label: ['coffee']
		},
		animOptions: '.75s'
	},
]);

slides.push([
	{
		filter: record => record.dayOfYear >= 172 && record.stat ===  cCoffeeDiff,
		config: {
			x: { labels: false, title: '' },
			y: { range: { min: 0, max: 23400 } },
		},
		animOptions: {
//			delay: '0.5s',
			duration:'1s'
		}
	},
	{
		filter: record => record.dayOfYear > 172 && record.stat ===  cCoffeeDiff,
		config: {
			x: null,
			y: { set: ['coffee'], range: { min: 0, max: 400 } },
		},
		animOptions: { 
			delay: '0.3s', 
			duration: '1s'
		}
	}
]);

slides.push([
	{
		config: {
			label: null
		},
		animOptions: '0.5s'
	},
	{
		filter: record => record.stat === cCoffeePerDay,
		config: {
			title: 'Coffee by Days',
			y: { set: ['coffee', 'date'] },
		},
		animOptions: '0s'
	},
	{
		config: {
			x: { set: 'date', range: { min: 'auto', max: 'auto' } },
			y: { set: 'coffee' },
		},
		style: {
			plot: {
				xAxis: {
					label: { 
						fontSize: '100%',
						angle: '-45deg' 
					},
				},
			}
		},
		animOptions: '1s'
	},
	{
		config: {
			y: { range: { min: 'auto', max: 'auto' } },
		},
		animOptions: {
			delay: '0.2s',
			duration: '0.5s'
		}
	}
]);

slides.push([
	{
		config: {
			title: 'Weekly Coffee',
			x: { set: ['date', 'dayOfWeek'] },
			y: { set: ['coffee'] },	
			legend: null
		},
		animOptions: '0s'
	},
	{
		config: {
			x: { set: ['date'], range: { min: 'auto', max: 'auto' } },
			y: { set: ['coffee','dayOfWeek'] },
			color: 'dayOfWeek',
		},
		animOptions: '0.3s'
	},
	{
		config: {
			y: { set: ['dayOfWeek'] },
			x: { set: 'coffee', labels: false, title: '' },
			orientation: 'vertical',
			reverse: true
		},
		style: {
			plot: {
				xAxis: {
					interlacing: {
						color: '#dbc1ac70'
					},
				},
				yAxis: {
					label: { 
						fontSize: '125%',
					},
				}
			}
		},
		animOptions: '1s'
	},
	{
		config: {
			x: ['mean(coffee)'],
			label: ['mean(coffee)']
		},
		animOptions: '.3s'
	}
]);

slides.push([
	{
		config: {
			title: '',
			x: null,
			y: null,
			label: null,
			color: null,
		},
	},
	{
		config: {
			title: 'Thank you',
		},
		style: {
			title: {
				paddingTop: '10em',
			}
		},
		animOptions: '0.8s'
	},
]);

const story = {
    data: data,
    slides: slides
};

const vp = document.querySelector('vizzu-player');
vp.slides = story;
