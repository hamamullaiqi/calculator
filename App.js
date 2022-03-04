import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function App() {

  const buttonNumbers = ["1","2","3","4","5","6","7","8","9",".","0","="]
  const buttonOpr = ["dell","-","+","/", "*", "%" ]

  //hasil
  const [displayCount, setDisplayCount] = useState(" ")
  //display
  const [display, setDisplay] = useState(" ")

  
  const handleCount = (item) => { 

    const lastNumb = display[display.length -1]

    if(lastNumb === "+" || lastNumb === "-" || lastNumb === "*" || lastNumb === "/" || lastNumb === "%"  ) {
      if(lastNumb !== "+" || lastNumb !== "-" || lastNumb !== "*" || lastNumb !== "/" || lastNumb !== "%") {
        const newOpr = display.replace(lastNumb, item)
        return setDisplay(newOpr)
      }
      
      return display
    } else if(item === "dell"){
      setDisplay(" ")
      console.log(display);
       setDisplayCount(" ")

      
    } else if(item === "%") {
      const newOpr = display.replace(lastNumb, "/100")
      return setDisplay(newOpr)


    } else {
      setDisplay(display + item)
    }
    
    
    // return setDisplayCount(eval(display));
  
  } 

  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
      //dispay
      <View style={styles.containerDisplay}>
          <Text style={styles.DisplayNumb}>{displayCount}</Text>
          <Text style={styles.DisplayNumb}>{display}</Text>
          
      </View>
      
    //tombol
      <View style={styles.containerButton}>
        <View style={styles.containerBtnNumb}>
          {buttonNumbers.map((item) => (
          <TouchableOpacity 
            style={styles.buttonNumber}
            onPress={() => setDisplay(prevItem => prevItem + item)}
            key={item}
          >
            <Text style={styles.buttonLabelNumber} key={item}>{item}</Text>
          </TouchableOpacity>

          ))}
        
        </View>

        <View style={styles.containerBtnOpr}>
          {buttonOpr.map((item) => (
          <TouchableOpacity 
            style={styles.buttonOpr}
            // onPress={() => setDisplay(prevItem => prevItem + item)}
            onPress={() => handleCount(item)}

            key={item}
            
            
          >
            <Text style={styles.buttonLabelOpr} key={item}>{item}</Text>
          </TouchableOpacity>

          ))}
        
        </View>
        
          
          
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex:1,
    flexDirection:"column",

  },
  containerDisplay: {
    flex:1,
    maxHeight: "40%",
    backgroundColor: "#ECECEC",
   
    
  },
  DisplayNumb: {
    color: "#930707",
    fontSize: 68,
    textAlign: "right"
  },
  containerButton : {
    flexDirection: "row",
    flexWrap: "wrap",
    flex:1,
    backgroundColor: "#FFA0A0",
    // padding: 16,
    justifyContent: "center",
    alignItems: "center"

  },
  containerBtnNumb: {
    flexDirection: "row",
    flex: 3,
    flexWrap: "wrap"
  },
  containerBtnOpr: {
    flexDirection: "column",
    flex: 1,
    flexWrap: "wrap",
    backgroundColor: "#930707",
    alignItems: "center",
    height: "90%",
    borderRadius: 8,
    marginEnd:10,
    
    
  },
  buttonNumber : {
    margin: 12,
    backgroundColor: "#FF5757",
    width: "25%",
    height: "35%",
    padding: 12,
    borderRadius: 8,
    
  },
  buttonOpr : {
    width: "100%",
    padding: 5
  
    
    
  },
  buttonLabelNumber: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    color: "white"
  },
  buttonLabelOpr: {
    fontSize: 36,
    textAlign: "center",
    color: "white"
  }
})
