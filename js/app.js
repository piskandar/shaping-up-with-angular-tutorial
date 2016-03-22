(function() {
	var app = angular.module('gemStore', ['gemStore-products']);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller('ReviewController', function(){
		this.review = {};
		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review = {};
		}
	});


	var gems = [
		{
			name: 'Dodecahedron',
			price: 2	,
			description: 'aksdjaasdkaa',
			canPurchase: true,
			images: [
			{
				full:"https://www.fillmurray.com/200/300",
				thumbnail: "https://www.fillmurray.com/100/100"
			}],
			reviews: [
				{
					stars: 5,
					body: "great gem!",
					author: "Jimmy Page"
				}
			]

		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'aksdjaasdkaa',
			canPurchase: false,
			images: [
			{
				full:"https://www.fillmurray.com/200/300",
				thumbnail:	"https://www.fillmurray.com/100/100"
			}],
			reviews:[]

		},
	]
})();
