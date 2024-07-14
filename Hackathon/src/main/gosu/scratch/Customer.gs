package scratch

class Customer {
   var _name : String as Name
  var _gender : String as Gender
  var _age : int as Age
  var _drivingYears : int as DrivingYears
  var _occupation : String as Occupation

  construct() {

  }

  construct(name : String, gender : String, age : int, drivingYears : int, occupation : String, address : String, motoringConvictions : int, claims : int) {
    _name = name
    _gender = gender
    _age = age
    _drivingYears = drivingYears
    _occupation = occupation
  }

  function printInfo() {
    print("Customer Information: ")
    print("Name: ${Name}")
    print("Gender: ${Gender}")
    print("Age: ${Age}")
    print("Years Driving: ${DrivingYears}")
    print("Occupation: ${Occupation}")
  }

  function validateAge() : boolean {
    if (_age < 21 || _age > 85) {
      print("Sorry, we can't insure you. Age must be between 21 and 85")
    }
    return true
  }

  function validateDrivingYears() : boolean {
    if (_drivingYears <= 0 || _drivingYears > (_age - 17)) {
      print("Invalid years of driving experience.")
      return false
    }
    return true
  }

  function validateOccupation() : boolean {
    if (_occupation == "Professional Gambler") {
      print("Sorry, we can't insure professional gamlers.")
      return false
    }
    return true
  }


  function isValidCustomer() : boolean {
    return validateAge() && validateDrivingYears() && validateOccupation()
  }
}