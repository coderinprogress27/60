import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import db from '../config';
import Header from '../components/header';

export default class Summary extends React.Component {
  
  showAttendance = () =>{
    var classRef = db.ref('/').on('value', data => {
      var all_students = []
      
      var class_a = data.val()

      for(var i in class_a){
        all_students.push(class_a[i])
      }

      all_students.sort(function(a,b){
        return a.roll - b.roll;

      })

      this.setState({all_students:all_students})
    })
  }
  goToHomeScreen = () => {
    this.props.navigation.navigate('s1');

    var dbRef = db.ref('Students/');
    dbRef.update({
      1: {
        Present: '',
        Name: 'Ram',
        Roll: 1,
      },
      2: {
        Present: '',
        Name: 'Anjali',
        Roll: 2,
      },
    });
  };

  render() {
    {this.showAttendance()}
    return (
      <View>
        <View>
          <Header />
        </View>

        <View>
          <TouchableOpacity
            onPress={() => {
              this.goToHomeScreen();
            }}>
            <Text style={styles2.submitAtt}>RESET</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

var styles2 = StyleSheet.create({
  submitAtt: {
    color: '#ffe300',
    borderRadius: 30,
    textAlign: 'center',
    fontSize: 35,
    marginTop: 100,
    alignSelf: 'center',
    backgroundColor: '#a89b32',
    width: 155,
    height: 55,
  },
});
