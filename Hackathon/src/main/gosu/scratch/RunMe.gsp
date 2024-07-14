//
// Variables
//

package scratch


var currentQuote = new ArrayList<Object>()
var chatBot = new chatBot()

chatBot.welcome()
//currentQuote.add(chatBot.partOne())
//currentQuote.add(chatBot.partTwo())
//currentQuote.add(chatBot.partThree())

var newQuote = new Quote()
if(chatBot.preQualifications())
{
System.out.println("Enter the following Details to recieve a Quote: ");
newQuote.NewCustomer = chatBot.partOne()
newQuote.NewAddress = chatBot.partTwo()
newQuote.NewVehicle = chatBot.partThree()
newQuote.NewDrivingHistory = chatBot.partFour()
newQuote.NewClaimsHistory = chatBot.partFive()
newQuote.calcPremium();

System.out.println("Insurance Quote: ");
System.out.println("Total Premium: ${newQuote.TotalPremium}");
}




 
				

  
 