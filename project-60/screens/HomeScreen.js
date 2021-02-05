import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import db from '../config';
import Header from '../components/header';
import { Card } from 'react-native-paper';

export default class Home extends React.Component {
  attendenceP = (rollNo) => {
    var attendence_ref = db.ref('Students/' + rollNo);

    attendence_ref.update({
      Present: 'yes',
    });
  };

  attendenceA = (rollNo) => {
    var attendence_ref = db.ref('Students/' + rollNo);

    attendence_ref.update({
      Present: 'no',
    });
  };

  goToSummaryScreen = () => {
    this.props.navigation.navigate('s2');
  };
  render() {
    return (
      <View style={{ height: 589, backgroundColor: '#dedcdc' }}>
        <View>
          <Header />
        </View>
        <View style={{ marginTop: 40 }}>
          <Card style={{ height: 220 }}>
            <Text style={styles.name}>1. Ram</Text>
            <Text style={styles.name}>2. Anjali</Text>
          </Card>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => {
              this.attendenceP(1);
            }}>
            <Text style={styles.present1}>PRESENT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.attendenceA(1);
            }}>
            <Text style={styles.absent1}>ABSENT</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => {
              this.attendenceP(2);
            }}>
            <Text style={styles.present2}>PRESENT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.attendenceA(2);
            }}>
            <Text style={styles.absent2}>ABSENT</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => {
              this.goToSummaryScreen();
            }}>
            <Text style={styles.submitAtt}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  name: {
    fontSize: 20,
    marginTop: 60,
    marginLeft: 20,
  },
  present1: {
    color: '#00ff51',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 18,
    marginTop: -155,
    marginLeft: 130,
    backgroundColor: 'green',
    width: 95,
  },
  absent1: {
    color: '#ff0008',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 18,
    marginTop: -155,
    marginLeft: 230,
    backgroundColor: '#a60207',
    width: 95,
    height: 25,
  },
  present2: {
    color: '#00ff51',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 18,
    marginTop: -70,
    marginLeft: 130,
    backgroundColor: 'green',
    width: 95,
  },
  absent2: {
    color: '#ff0008',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 18,
    marginTop: -70,
    marginLeft: 230,
    backgroundColor: '#a60207',
    width: 95,
    height: 25,
  },
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
