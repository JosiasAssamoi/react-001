return (
    <SafeAreaView style={styles.container} >
      <MyHeader></MyHeader>
      <View style={styles.main}>
      <Text style = {styles.center}>Hello</Text>
      <Image source ={require('./image.png')} style={{width: 200, height: 140}}></Image>
      </View>
     <MyFooter ></MyFooter>
    </SafeAreaView>
    


);