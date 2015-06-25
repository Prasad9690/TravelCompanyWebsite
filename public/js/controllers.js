'use strict';

/* Controllers */

function AppCtrl($scope, $http) {
$http({
	method:"GET",
	url:"/api/data"
}).success(function(data,status){
	$scope.data =data;
	console.log($scope.data);
}).error(function(){
	console.log("Error occured while ");
});

// $scope.data = [
//     {
//         "id": "001",
//         "section": "section1",
//         "title": "Home",
//         "description": "The journey of K K Travels began in the year 1988 with Kedar S Kasar in the driving seat. He set out with one car but with a drive to succeed in the race.It was a challenge to meet the requirements of the customers with just one car at the disposal. But the sincerity to serve did not go unnoticed and soon the company was associated with corporate clients."
//     },
//     {
//         "id": "002",
//         "section": "section2",
//         "title": "Our Service",
//         "description": "Pune - Mumbai - Nashik - Other Cities Cars / Cabs / Taxis On Hire. Airport Transfer Cab Booking PUNE TO MUMBAI AIRPORT MUMBAI AIRPORT TO PUNE MUMBAI AIRPORT TO NASIK NASIK TO MUMBAI Airport."
//     },
//     {
//         "id": "003",
//         "section": "section3",
//         "title": "Search Airport Cab",
//         "description": ""
//     },
//     {
//         "id": "004",
//         "section": "section4",
//         "title": "Search Private Taxi",
//         "description": ""
//     },
//     {
//         "id": "005",
//         "section": "section5",
//         "title": "Achievements",
//         "description": "Own Offices in three cities. ( Pune, Mumbai  & Nashik ).Interconnected Offices. Own Call Centre Operating 24 Hrs for customer service.Fleet of more than 150 new and maintained cars. Online Bookings with Facility of Payment Gateway on the Net. First Internet Enabled Cab Launched in India on 6-6-2006. Trust And Reliability Developed, Earned and Maintained Since 1988."
//     }
// ];

  // $http({method: 'GET', url: '/api/name'}).
  // success(function(data, status, headers, config) {
  //   $scope.name = data.name;
  // }).
  // error(function(data, status, headers, config) {
  //   $scope.name = 'Error!'
  // });
}

function IndexCtrl($scope,$http){
	$scope.title = "KK Travels";
	$scope.text = "The journey of K K Travels began in the year 1988 with Kedar S Kasar in the driving seat. He set out with one car but with a drive to succeed in the race.It was a challenge to meet the requirements of the customers with just one car at the disposal. But the sincerity to serve did not go unnoticed and soon the company was associated with corporate clients.The journey of K K Travels began in the year 1988 with Kedar S Kasar in the driving seat. He set out with one car but with a drive to succeed in the race.It was a challenge to meet the requirements of the customers with just one car at the disposal. But the sincerity to serve did not go unnoticed and soon the company was associated with corporate clients.Tie-ups with some esteemed multinational & large and small national companies followed and K K Travels became a force to reckon with on the road.The Brand “K K Travels” got recognition and was further developed with sheer hard work. The company’s cars and buses were now hired on call as well as yearly contract basis. What put it ahead in the fiercely competitive marketplace was uncompromising hard work, punctuality, safety, periodic renewal of fleet and excellent friendly back office support.In 1995, the company rolled out air-conditioned buses for Pune – Mumbai (CSIT) airport and Pune airport transfer. The highlight of the service was residence pickup and drop within Pune City and adjoining areas.The strategy was same; starting with a single schedule and one bus and later expanding to hourly to and fro departures between Pune and Chhatrapati Shivaji International Terminal ( Mumbai Airports )and vice versa. The success was repeated in 2006 in Nashik city with pickup and drop facility between residence and airport. It now has daily 12 departures from both sides. That same year in June, the company started providing a bouquet of tours and travel services that included Air Ticketing, Holiday Tours (Domestic & International), Hotel Booking, Passport & Visa Assistance; Currently run under the brand www.kkvacations.com. The next year, the company shifted gears from Bus Service to Hourly Shared Cab Services for Airport transfers to meet the heavy demand for departures at shorter intervals and unfriendly traffic conditions in Pune and Mumbai Cities. The journey so far has taken the company places with a fleet of 100 cabs and own offices in Pune, Mumbai and Nashik . All the offices are operational round-the-clock. The bookings are done online with the Pune, Mumbai and Nashik offices connected with a Server stationed in Pune. Despite the growth, the motto still remains delighting the customers on their journeys, no matter how long or short that be."
}

function OurServiceCtrl($scope,$http) {
	$scope.message = "Our Service";
    $scope.directions =[
        {   
            "id" : "001",
            "Way":"Pune to Mumbai Airport",
            "DailyTrips" : "3 times in a Day"
        },
        {   
            "id" : "002",
            "Way":"Mumbai Airport to Pune",
            "DailyTrips" : "1 time in a Day"
        },
        {   
            "id" : "003",
            "Way":"Pune to Nasik",
            "DailyTrips" : "5 time in a Day"
        },
        {   
            "id" : "004",
            "Way":"Nasik to Pune",
            "DailyTrips" : "2 time in a Day"            
        }
    ];    

}

function SearchAirportCabCtrl($scope,$http) {
	$scope.message = "Airport Cab Page Under Construction";
}

function SearchPrivateTaxiCtrl($scope,$http){
	$scope.message = "Private Taxi Page Under Construction";
}