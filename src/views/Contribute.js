import React from 'react'
import {
  View,
  StyleSheet,
  Image,
  Text,
  Button
} from 'react-native'

function Separator() {
  return <View style = {styles.separator} />;
}

 class Contribute extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
        <Image
          style = {styles.initimage}
          source = {{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Climate_change_adaptation_icon.png/1200px-Climate_change_adaptation_icon.png'}} />
        <Text style = {styles.heading}>
          LIST OF NONPROFIT ORGANIZATIONS FIGHTING FOR CLIMATE CHANGE FIXES:
        </Text>
        <View>
          <Text style = {styles.title}>
            350.org
          </Text>
        </View>
        <Separator />
        <View>
          <Text style = {styles.title}>
            http://www.sierraclubfoundation.org/ - Sierra Club Foundation
          </Text>
          <Image
            style = {styles.image}
            source = {{uri:'https://cr-rackspace-cloud-files-backups.s3.us-west-1.amazonaws.com/Prod_Large/user_photo5a95ae56f210c.png'}} />
        </View>
        <Separator />
        <View>
          <Text style = {styles.title}>
            http://www.greenpeace.org/usa/en/ - Greenpeace
          </Text>
          <Image
            style = {styles.image}
            source = {{uri:'https://www.greenpeace.org.uk/wp-content/uploads/2019/05/GreenpeaceLogoGreen.jpg'}} />
        </View>
      </View>
      )
  }
}
module.exports={
  Contribute
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  initimage: {
    width: 100,
    height: 100,
    marginTop: 50
  },
  heading: {
    marginTop: 40,
    fontSize: 20,
    textAlign: 'center'
  },
  title: {
    textAlign: 'center',
    marginVertical: 8
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  image: {
    width: 100,
    height: 100
  }
  })
