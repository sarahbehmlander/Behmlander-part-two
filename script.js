const VirtualPet = ()=>{

  const PetName = prompt("Enter the Name of your pet")
  let EnergyLevels = 0
  let HappinessLevels = 0
  for(var count = 0;count<6;count++ ){

      let ActionToPerform = prompt("Feed or Pet or Walk? Please answer in lowercase.")
      if (ActionToPerform.toLowerCase()=="feed"){
          EnergyLevels=EnergyLevels+2
      }
      else if(ActionToPerform.toLowerCase()=="pet"){
          HappinessLevels++
      }
      else if(ActionToPerform.toLowerCase()=='walk'){
          if(EnergyLevels>0){
              EnergyLevels=EnergyLevels-1
              HappinessLevels=HappinessLevels+1
          }
          else{
              alert("Oh no! Not enough energy to go for a walk!")
          }
      }
  }

  console.log("Pet's Name : "+PetName)
  console.log('Energy Levels : '+EnergyLevels)
  console.log("Happiness Levels : "+HappinessLevels)
  console.log(PetName + " has " + HappinessLevels + " happiness and " + EnergyLevels + " energy!")
}

VirtualPet()