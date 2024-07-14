package scratch

class ClaimsHistory {
  var _nonFaultAccidents : int as NonFaultAccidents
  var _faultAccidents : int as FaultAccidents
  
  construct() {
    
  }

  construct (nonFaultAccidents: int, faultAccidents: int)
  {
    _nonFaultAccidents = nonFaultAccidents
    _faultAccidents = faultAccidents
  }

  function valClaimsHistory(): boolean
  {
     return NonFaultAccidents <= 3 && FaultAccidents < 3;
  }

function calcClaimsPenalty(): double{
    if(FaultAccidents == 1)
    {
    return 0.5
    }
    else if(FaultAccidents == 2)
    {
    return 1.0
    }

    return 0;
    }
}