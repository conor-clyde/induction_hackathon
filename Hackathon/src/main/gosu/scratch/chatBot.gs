package scratch

class chatBot {

  var newCustomer = new Customer()
  var newAddress = new Address()
  var newVehicle = new Vehicle()
  var newDrivingHistory = new DrivingHistory()
  var newClaimsHistory = new ClaimsHistory()
  var scanner = new Scanner(System.in)

  function welcome(){
    print("\n" +
        "\n" +
        "Insurance Quote Bot\n" +
        "-----------------------\n" +
        "Please enter the below details to calculate your quote!\n")
  }
  
    function preQualifications():boolean{

      //Pre Qualifications
      print("Before we begin to calculate your quote,\n" +
          "we'll need to ask you a few questions to ensure our\n" +
          "service is applicable to you!")

      print("Is your age between 21-85?(inclusive)(True/False)")
      var validAge = getValidatedBoolean()
      if(!isStatementValid(validAge)){
        return false
      }


      print("Are you a professional gambler?(True/False)")
      var validOccupation = getValidatedBoolean()
      if (!isStatementValid(!validOccupation, false)) {
        print("Sorry, you do not meet the pre-qualifications for our insurance service.")
        return false
      }

      print("Does your postcode begin with either BT47 or BT48?(True/False)")
      var validPostCode = getValidatedBoolean()
      if(!isStatementValid(validPostCode)){
        return false
      }

      print("Do any of the below statements apply to you?;\n " +
          "     I have more than six penalty points\n " +
          "     I have one or more non-motoring convictions\n " +
          "     I have 4 or more non-fault accidents in the past five years\n " +
          "     I have 3 or more fault accidents in the past five years")
      var validStatements = getValidatedBoolean()
      if (!isStatementValid(!validStatements, false)) {
        print("Sorry, you do not meet the pre-qualifications for our insurance service.")
        return false
      }

      return true

  }

  function partOne():Customer{

    var partOneCorrect = true

    //Customer Detials
    print("Name:")
    newCustomer.Name = scanner.nextLine()

    print("Gender:")
    newCustomer.Gender = scanner.nextLine()

    print("Age:")
    newCustomer.Age = scanner.nextInt()

    print("Years Driving:")
    newCustomer.DrivingYears = scanner.nextInt()
    
    scanner.nextLine();

    print("Occupation:")
    newCustomer.Occupation = scanner.nextLine()

    newCustomer.printInfo()

    print("Are these Details Correct? (True/False)")
    partOneCorrect = getValidatedBoolean()

    if (!partOneCorrect){
      partOne()
    }
    return newCustomer
  }

  function partTwo():Address{

    var partTwoCorrect = true

    //Address Details
    print("House No:")
    newAddress.HouseNo = scanner.nextLine()

    print("Street Name:")
    newAddress.Street = scanner.nextLine()

    print("Postcode:")
    newAddress.Postcode = scanner.nextLine()

   print("Are these Details Correct? (True/False)")
    partTwoCorrect = getValidatedBoolean()

    if (!partTwoCorrect){
      partOne()
    }
    return newAddress
  }

  function partThree():Vehicle{

    var partThreeCorrect = true

    //Vehicle Details
    print("Car Make and Model:")
    newVehicle.Make = scanner.nextLine()

//    print("Car Model:")
//    newVehicle.Model = scanner.nextLine()

    print("Car Year:")
    newVehicle.Year = scanner.nextLine()

    print("Car Registration No.:")
    newVehicle.Reg = scanner.nextLine()

    print("Car Value:")
    newVehicle.Value = scanner.nextInt()

    scanner.nextLine()
    print("Does your car have a tracker?(True/False):")
    newVehicle.HasTracker = getValidatedBoolean()

     print("Are these Details Correct? (True/False)")
    partThreeCorrect = getValidatedBoolean()

    if (!partThreeCorrect){
      partOne()
    }

    return newVehicle
  }
  
  function partFour(): DrivingHistory {

    var partFourCorrect = true

    //Vehicle Details
    print("Number of motoring convictions:")
    newDrivingHistory.PenaltyPoints = scanner.nextInt()

    print("Number of non-motoring convictions:")
    newDrivingHistory.NonMotorConvictions = scanner.nextInt()

scanner.nextLine()
     print("Are these Details Correct? (True/False)")
    partFourCorrect = getValidatedBoolean()

    if (!partFourCorrect){
      partOne()
    }

    return newDrivingHistory
  }
  
  function partFive(): ClaimsHistory{

    var partFiveCorrect = true

    //Claims details
    print("Number of accidents caused by you in the last 5 years:")
    newClaimsHistory.FaultAccidents = scanner.nextInt()

    print("Number of accidents caused to you by a third party in the last 5 years:")
    newClaimsHistory.NonFaultAccidents = scanner.nextInt()

scanner.nextLine()
     print("Are these Details Correct? (True/False)")
    partFiveCorrect = getValidatedBoolean()

    if (!partFiveCorrect){
    partOne()
    }

    return newClaimsHistory
    }

  function getValidatedBoolean(): Boolean{
    while (true) {
      var input = scanner.nextLine().trim().toLowerCase()
      if (input == "true") {
        return true
      } else if (input == "false") {
        return false
      } else {
        print("Invalid input. Please enter True or False.")
      }
    }
  }

  function isStatementValid(bool: boolean, stopOnFalse: boolean = true): boolean {
    if (!bool) {
      if (stopOnFalse) {
        print("Sorry, you do not meet the pre-qualifications for our insurance service.")
      }
      return false
    }
    return true
  }

}