import React from 'react';
import { FlatList, StyleSheet, View , ScrollView,} from 'react-native';
import HTML from 'react-native-render-html';


const userData =[
  {
    id:'1',
    firstname: 'james',
    lastname: 'Antivo',
    course: 'BSIT',
    yearSection: '3A',
    username: 'jamesAntivo',
    password: 'james1422',
    userType: 'student',
  },
  {
    id:'2',
    firstname: 'James',
    lastname: 'Bucia',
    course: 'BSIT',
    yearSection: '3A',
    username: 'JamesBucia999',
    password: 'SheilomyLove',
    userType: 'student',
  },
  {
    id:'3',
    firstname: 'Shaina',
    lastname: 'Bucia',
    course: 'BSIT',
    yearSection: '3A',
    username: 'ShainaBucia',
    password: 'shaina1422',
    userType: 'student',
  },
  {
    id:'4',
    firstname: 'Mark',
    lastname: 'Prado',
    course: 'BSIT',
    yearSection: '3A',
    username: 'Markko123',
    password: 'gwapoko101',
    userType: 'student',
  },
  {
    id:'5',
    firstname: 'Gemuel',
    lastname: 'Doroy',
    course: 'BSIT ',
    yearSection: '3A',
    username: 'Dodong',
    password: 'Gwapoko923',
    userType: 'student',
  },
  {
    id:'6',
    firstname: 'Jerry',
    lastname: 'Ale',
    course: 'BSIT ',
    yearSection: '3A',
    username: 'JerryAle',
    password: 'ChickenNuggets',
    userType: 'teacher',
  },
  {
    id:'7',
    firstname: 'Renante',
    lastname: 'Tima',
    course: 'BSIT ',
    yearSection: '3A',
    username: 'Renanskie123',
    password: 'Mamaw101',
    userType: 'teacher',
  },
  {
    id:'8',
    firstname: 'Dan Mark',
    lastname: 'Buka',
    course: 'BSIT ',
    yearSection: '3A',
    username: 'Mike2123',
    password: 'Daghankochix123',
    userType: 'student',
  }

];



export default function App() {
  const scrollView = `
  <table style="border: 1px solid black; width: 100%">
  <tr>
    <th>ID</th>
    <th>NAME</th>
    <th>COURSE</th>
    <th>YEAR & SECTION</th>
  </tr>
  ${userData.map(
    (user) => `
      <tr key=${user.id}>
        <td>${user.id}</td>
        <td>${user.firstname} ${user.lastname}</td>
        <td>${user.course}</td>
        <td>${user.yearSection}</td>
      </tr>
    `
  ).join('')}
</table>
`;

const tableHtml = `
<table style="border: 1px solid black; width: 100%">
  <tr>
    <th>ID</th>
    <th>USERNAME</th>
    <th>PASSWORD</th>
    <th>USERTYPE</th>
  </tr>
  ${userData.map(
    (user) => `
      <tr key=${user.id}>
        <td>${user.id}</td>
        <td>${user.username}</td>
        <td>${user.password}</td>
        <td>${user.userType}</td>
      </tr>
    `
  ).join('')}
</table>
`;

  const studentData = userData.filter((user) => user.userType === 'student');

  
  



  return (
    <View style={styles.container}>
    <View style={styles.plainMap}>
      <HTML source={{ html: tableHtml }} />
      </View>
      <ScrollView style={styles.scroolViu}>

        <HTML source={{html:scrollView}}/>
      </ScrollView>
  

      <FlatList
  data={studentData}
  keyExtractor={(student) => student.id}
  renderItem={({ item }) => (
    <HTML
      source={{
        html: `
          <table style="border: 1px solid black; width: 100%">
            <tr>
              <th>ID</th>
              <th>FIRSTNAME</th>
              <th>LASTNAME</th>
            </tr>
            <tr key=${item.id}>
              <td>${item.id}</td>
              <td>${item.firstname}</td>
              <td>${item.lastname}</td>
            </tr>
          </table>
        `,
      }}
    />
  )}
  style={styles.flatLest}
/>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  plainMap: {
    width: '95%',
    margin: 10,
  },
  scroolViu: {
    width: '95%',
    margin: 10,
  },
  
  flatLest: {
    width: '95%',
  },
});

