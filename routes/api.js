/*
 * Serve JSON to our AngularJS client
 */
var data = [
    {
        "id": "001",
        "section": "section1",
        "title": "Home",
        "description": "The journey of K K Travels began in the year 1988 with Kedar S Kasar in the driving seat. He set out with one car but with a drive to succeed in the race.It was a challenge to meet the requirements of the customers with just one car at the disposal. But the sincerity to serve did not go unnoticed and soon the company was associated with corporate clients."
    },
    {
        "id": "002",
        "section": "section2",
        "title": "Our Service",
        "description": "Pune - Mumbai - Nashik - Other Cities Cars / Cabs / Taxis On Hire. Airport Transfer Cab Booking PUNE TO MUMBAI AIRPORT MUMBAI AIRPORT TO PUNE MUMBAI AIRPORT TO NASIK NASIK TO MUMBAI Airport."
    },
    {
        "id": "003",
        "section": "section3",
        "title": "Search Airport Cab",
        "description": ""
    },
    {
        "id": "004",
        "section": "section4",
        "title": "Search Private Taxi",
        "description": ""
    },
    {
        "id": "005",
        "section": "section5",
        "title": "Achievements",
        "description": "Own Offices in three cities. ( Pune, Mumbai  & Nashik ).Interconnected Offices. Own Call Centre Operating 24 Hrs for customer service.Fleet of more than 150 new and maintained cars. Online Bookings with Facility of Payment Gateway on the Net. First Internet Enabled Cab Launched in India on 6-6-2006. Trust And Reliability Developed, Earned and Maintained Since 1988."
    }
];


exports.data = function (req, res) {
  res.send(data);
};