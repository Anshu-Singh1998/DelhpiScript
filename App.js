import React from 'react';

import {
  View,
  SafeAreaView,
  StatusBar,
  Image,
  Text,
  TextInput,
  FlatList,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Search from './Assets/Images/Search.png';
import MapPin from './Assets/Images/MapPoint.png';
import Mic from './Assets/Images/Mic.png';
import Grocery from './Assets/Images/Grocery.png';
import LeftArrow from './Assets/Images/LeftArrow.png';
import DownArrow from './Assets/Images/DownArrow.png';
import LinearGradient from 'react-native-linear-gradient';
import LeafFirst from './Assets/Images/Leaf1.png';
import LeafSecond from './Assets/Images/Leaf2.png';
import LeafThird from './Assets/Images/Leaf3.png';
import LongRed from './Assets/Images/LongRed.png';
import LongGrey from './Assets/Images/LongGrey.png';
import ShortRed from './Assets/Images/ShortRed.png';
import Menu from './Assets/Images/Menu.png';

const Data = [
  {
    id: '1',
    title: 'Nevea Cream',
    img: require('./Assets/Images/BodyLotion.png'),
  },
  {
    id: '2',
    title: 'Mama Earth',
    img: require('./Assets/Images/MamaEarth.png'),
  },
  {
    id: '3',
    title: 'WOW Shampoo',
    img: require('./Assets/Images/WowOil.png'),
  },
];

const BuyAgainData = [
  {
    id: '1',
    title: 'Kellogs masala Ots',
    img: require('./Assets/Images/Kellogs.png'),
    imgnew: require('./Assets/Images/KellogsNew.png'),
    rupee_img: require('./Assets/Images/Rupee.png'),
    clock_img: require('./Assets/Images/ClockS.png'),
    price: '125',
    time: '30',
    favbutton: require('./Assets/Images/FabButton.png'),
  },
  {
    id: '2',
    title: 'Nescafe Premium Gold Coffee',
    img: require('./Assets/Images/NestleCoffee.png'),
    imgnew: require('./Assets/Images/NestleNew.png'),
    rupee_img: require('./Assets/Images/Rupee.png'),
    clock_img: require('./Assets/Images/ClockS.png'),
    price: '125',
    time: '30',
    favbutton: require('./Assets/Images/FabButton.png'),
  },
  {
    id: '3',
    title: 'Nescafe Premium Gold Coffee',
    img: require('./Assets/Images/NestleCoffee.png'),
    imgnew: require('./Assets/Images/NestleNew.png'),
    rupee_img: require('./Assets/Images/Rupee.png'),
    clock_img: require('./Assets/Images/ClockS.png'),
    price: '125',
    time: '30',
    favbutton: require('./Assets/Images/FabButton.png'),
  },
];

const BestSellersData = [
  {
    id: '1',
    title: 'TATA premium tea Desh ki chai',
    img: require('./Assets/Images/TATAPremium.png'),
    rupee_img: require('./Assets/Images/Rupee.png'),
    clock_img: require('./Assets/Images/ClockS.png'),
    price: '79',
    time: '30',
  },
  {
    id: '2',
    title: 'Dawn dishwasher lite liquid gel',
    img: require('./Assets/Images/DawnDishwasher.png'),
    rupee_img: require('./Assets/Images/Rupee.png'),
    clock_img: require('./Assets/Images/ClockS.png'),
    price: '49',
    time: '30',
  },
  {
    id: '3',
    title: 'Fitness wellness Ots and cereal',
    img: require('./Assets/Images/FitnessWellness.png'),
    rupee_img: require('./Assets/Images/Rupee.png'),
    clock_img: require('./Assets/Images/ClockS.png'),
    price: '65',
    time: '30',
  },
  {
    id: '4',
    title: 'Zandu Balm',
    img: require('./Assets/Images/ZanduBalm.png'),
    rupee_img: require('./Assets/Images/Rupee.png'),
    clock_img: require('./Assets/Images/ClockS.png'),
    price: '79',
    time: '30',
  },
  {
    id: '5',
    title: 'SARVOTTAM',
    img: require('./Assets/Images/SARVOTTAM.png'),
    rupee_img: require('./Assets/Images/Rupee.png'),
    clock_img: require('./Assets/Images/ClockS.png'),
    price: '45',
    time: '30',
  },
  {
    id: '6',
    title: 'Chef Antonio Extraordinary Sauce Dippage',
    img: require('./Assets/Images/ChefAntonio.png'),
    rupee_img: require('./Assets/Images/Rupee.png'),
    clock_img: require('./Assets/Images/ClockS.png'),
    price: '69',
    time: '30',
  },
];

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView>
        <View
          style={{
            height: 496,
            width: 393,
            borderBottomLeftRadius: 24,
            borderBottomRightRadius: 24,
            backgroundColor: '#FDCEB5',
          }}>
          <View
            style={{
              height: 56,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingLeft: 10,
              paddingRight: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Image source={LeftArrow} style={{height: 32, width: 32}} />
              </View>
              <View style={{paddingTop: 3, paddingLeft: 10}}>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: '590',
                    color: '#000',
                    textAlign: 'left',
                  }}>
                  Grocery
                </Text>
              </View>
            </View>

            <View>
              <Image source={Grocery} style={{height: 32, width: 32}} />
            </View>
          </View>
          <View style={{paddingTop: 10}}>
            <View
              style={{
                width: 361,
                height: 53,
                right: -15,
                backgroundColor: '#FFF',
                borderRadius: 8,
                flexDirection: 'row',
                padding: 10,
              }}>
              <View>
                <Image source={MapPin} style={{width: 15.6, height: 17.99}} />
              </View>
              <View style={{width: 208, paddingLeft: 10}}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '510',
                    color: '#000',
                    textAlign: 'left',
                  }}>
                  Home
                </Text>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: '400',
                    color: '#000',
                    textAlign: 'left',
                  }}>
                  Jadavpur, Kolkata
                </Text>
              </View>
              <View
                style={{
                  width: 77,
                  height: 28,
                  paddingTop: 4,
                  paddingRight: 8,
                  paddingBottom: 4,
                  paddingLeft: 8,
                  borderColor: '#FA620F',
                  borderWidth: 1,
                  borderRadius: 8,
                  flexDirection: 'row',
                  right: -30,
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: '590',
                    color: '#000',
                    textAlign: 'left',
                    paddingRight: 6,
                  }}>
                  Today
                </Text>
                <Image source={DownArrow} style={{width: 20, height: 20}} />
              </View>
            </View>
          </View>
          <View style={{paddingTop: 10}}>
            <View
              style={{
                width: 361,
                height: 48,
                // paddingTop: 12,
                paddingRight: 16,
                // paddingBottom: 12,
                paddingLeft: 16,
                backgroundColor: '#DDD9D9',
                borderRadius: 8,
                flexDirection: 'row',
                right: -15,
                marginTop: 10,
              }}>
              <View style={{left: -10, bottom: -12}}>
                <Image
                  source={Search}
                  style={{height: 18, width: 18, position: 'absolute'}}
                />
              </View>
              <View
                style={{
                  borderColor: '#DDD9D9',
                  borderWidth: 1,
                }}>
                <TextInput
                  placeholder="Search"
                  placeholderTextColor="#000"
                  style={{
                    color: '#000',
                    paddingLeft: 20,
                    fontSize: 15,
                    fontWeight: '400',
                    textAlign: 'left',
                  }}
                />
              </View>
              <View style={{bottom: -10, right: -140}}>
                <Image
                  source={Mic}
                  style={{height: 24, width: 24, position: 'absolute'}}
                />
              </View>
            </View>
          </View>
          <View>
            <View
              style={{
                justifyContent: 'flex-end',
                flexDirection: 'row',
                paddingTop: 20,
                right: -30,
              }}>
              <View style={{bottom: -30, left: -30}}>
                <Image
                  source={ShortRed}
                  style={{width: 138.58, height: 60.29}}
                />
              </View>
              <View style={{}}>
                <Image
                  source={LeafFirst}
                  style={{
                    width: 153.04,
                    height: 144.13,
                  }}
                />
              </View>
              <View style={{zIndex: 2, left: -60}}>
                <Image
                  source={LeafSecond}
                  style={{width: 86.22, height: 120.93}}
                />
              </View>
            </View>
            <View style={{zIndex: 2, top: -80, right: -50}}>
              <View style={{bottom: -5}}>
                <Image source={LongRed} style={{width: 339, height: 61.79}} />
              </View>
              <View style={{zIndex: 2, top: -50, left: -10}}>
                <Image
                  source={LongGrey}
                  style={{width: 348.63, height: 51.42}}
                />
              </View>
            </View>
            <View style={{zIndex: 2, top: -200, right: -20}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View style={{paddingRight: 10, paddingTop: 10}}>
                  <Text
                    style={{
                      color: '#231F20',
                      fontSize: 14,
                      fontWeight: '400',
                      textAlign: 'left',
                    }}>
                    AUTUMN
                  </Text>
                  <Text
                    style={{
                      color: '#BE1E2D',
                      fontSize: 20,
                      fontWeight: '400',
                      textAlign: 'left',
                    }}>
                    SALE
                  </Text>
                </View>
                <View>
                  <Image
                    source={LeafThird}
                    style={{width: 46.83, height: 76.52}}
                  />
                </View>
                <View style={{paddingLeft: 5}}>
                  <Text
                    style={{
                      color: '#231F20',
                      fontSize: 20,
                      fontWeight: '500',
                      textAlign: 'right',
                    }}>
                    SAVE UP TO 50%
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{zIndex: 2, top: -90}}>
          <FlatList
            horizontal
            data={Data}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <LinearGradient
                colors={['#F58B19', '#F12711']}
                style={{
                  borderRadius: 8,
                  marginVertical: 8,
                  marginHorizontal: 12,
                  width: 96,
                  height: 96,
                }}>
                <View style={{}}>
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                      source={item.img}
                      style={{width: 71, height: 64}}
                      resizeMode="contain"
                    />
                  </View>

                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingTop: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 11,
                        fontWeight: 'bold',
                        color: '#FFF',
                        textAlign: 'left',
                      }}>
                      {item.title}
                    </Text>
                  </View>
                </View>
              </LinearGradient>
            )}
          />
        </View>
        <View style={{top: -70}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingLeft: 10,
              paddingRight: 10,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#000',
                textAlign: 'left',
              }}>
              Buy Again
            </Text>
            <Text
              style={{
                fontSize: 11,
                fontWeight: '400',
                color: '#000',
                textAlign: 'left',
              }}>
              View all
            </Text>
          </View>
          <View style={{top: -5}}>
            <FlatList
              horizontal
              data={BuyAgainData}
              keyExtractor={item => item.id}
              renderItem={({item, index}) => (
                <View
                  style={{
                    width: 164,
                    height: 234,
                    marginVertical: 18,
                    marginHorizontal: 8,
                  }}>
                  <View
                    style={{
                      height: 164,
                      width: 164,
                      backgroundColor: '#fff',
                      padding: 5,
                      borderRadius: 8,
                    }}>
                    <ImageBackground
                      source={item.imgnew}
                      style={{height: 164, width: 164}}
                      resizeMode="contain">
                      <View style={{right: -130}}>
                        <Image
                          source={item.favbutton}
                          style={{height: 32, width: 32}}
                        />
                      </View>
                    </ImageBackground>
                  </View>
                  <View style={{paddingTop: 10}}>
                    <View>
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: 'bold',
                          color: '#000',
                          textAlign: 'left',
                        }}>
                        {item.title}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        paddingTop: 15,
                      }}>
                      <View style={{flexDirection: 'row', paddingRight: 10}}>
                        <View
                          style={{
                            paddingLeft: 10,
                            paddingRight: 5,
                            paddingTop: 5,
                          }}>
                          <Image
                            source={item.rupee_img}
                            style={{width: 9, height: 12}}
                            resizeMode="contain"
                          />
                        </View>
                        <View>
                          <Text
                            style={{
                              fontSize: 13,
                              fontWeight: 'bold',
                              color: '#000',
                              textAlign: 'left',
                            }}>
                            {item.price}
                          </Text>
                        </View>
                      </View>
                      <View style={{flexDirection: 'row', paddingLeft: 10}}>
                        <View
                          style={{
                            paddingRight: 5,
                            paddingLeft: 10,
                            paddingTop: 3,
                          }}>
                          <Image
                            source={item.clock_img}
                            style={{width: 12, height: 12}}
                            resizeMode="contain"
                          />
                        </View>
                        <View>
                          <Text
                            style={{
                              fontSize: 13,
                              fontWeight: 'bold',
                              color: '#000',
                              textAlign: 'left',
                            }}>
                            {item.time} min
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              )}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingLeft: 10,
              paddingRight: 10,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#000',
                textAlign: 'left',
              }}>
              Bestsellers
            </Text>
            <Text
              style={{
                fontSize: 11,
                fontWeight: '400',
                color: '#000',
                textAlign: 'left',
              }}>
              View all
            </Text>
          </View>
          <View style={{}}>
            <FlatList
              data={BestSellersData}
              keyExtractor={item => item.id}
              numColumns={2}
              renderItem={({item, index}) => (
                <View
                  style={{
                    width: 266,
                    flexDirection: 'row',
                    marginVertical: 8,
                    marginHorizontal: 18,
                  }}>
                  <View
                    style={{
                      height: 78,
                      width: 78,
                      backgroundColor: '#fff',
                      padding: 5,
                      borderRadius: 8,
                    }}>
                    <Image
                      source={item.img}
                      style={{height: 72, width: 72}}
                      resizeMode="contain"
                    />
                  </View>
                  <View style={{paddingLeft: 10, paddingTop: 15}}>
                    <View style={{minHeight: 36}}>
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: 'bold',
                          color: '#000',
                          textAlign: 'left',
                        }}>
                        {item.title}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        top: -8,
                      }}>
                      <View style={{flexDirection: 'row', paddingRight: 10}}>
                        <View
                          style={{
                            paddingLeft: 10,
                            paddingRight: 5,
                            paddingTop: 5,
                          }}>
                          <Image
                            source={item.rupee_img}
                            style={{width: 9, height: 12}}
                            resizeMode="contain"
                          />
                        </View>
                        <View>
                          <Text
                            style={{
                              fontSize: 13,
                              fontWeight: 'bold',
                              color: '#000',
                              textAlign: 'left',
                            }}>
                            {item.price}
                          </Text>
                        </View>
                      </View>
                      <View style={{flexDirection: 'row', paddingLeft: 10}}>
                        <View
                          style={{
                            paddingRight: 5,
                            paddingLeft: 10,
                            paddingTop: 3,
                          }}>
                          <Image
                            source={item.clock_img}
                            style={{width: 12, height: 12}}
                            resizeMode="contain"
                          />
                        </View>
                        <View>
                          <Text
                            style={{
                              fontSize: 13,
                              fontWeight: 'bold',
                              color: '#000',
                              textAlign: 'left',
                            }}>
                            {item.time} min
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              )}
            />
          </View>

          <View style={{flexDirection: 'row',paddingTop:20}}>
            <View style={{paddingLeft:80}}>
              <View
                style={{
                  width: 150,
                  height: 44,
                  paddingTop: 10,
                  paddingRight: 24,
                  paddingBottom: 10,
                  paddingLeft: 24,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 8,
                  borderWidth: 1,
                  borderColor: '#FA620F',
                  flexDirection: 'row',
                }}>
                <View>
                  <Image
                    source={Grocery}
                    style={{width: 18.87, height: 24}}
                    resizeMode="contain"
                  />
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: '#181412',
                      textAlign: 'left',
                    }}>
                    My Basket
                  </Text>
                </View>
              </View>
            </View>
            <View style={{paddingLeft:90}}>
              <View>
                <Image source={Menu} style={{height: 48, width: 48}} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
