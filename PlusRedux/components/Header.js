import React from 'react';
import { withNavigation } from 'react-navigation';
import { TouchableNativeFeedback, View } from 'react-native';
import Icon from './Icon';
import SettingsButton from './SettingsButton';
import * as S from '../styles';
import { withTheme } from 'styled-components';
import {Dimensions} from 'react-native';

const { width } = Dimensions.get('window');

const HeaderReloaded = props => {

      return (
            <S.RootHeader>
                   <S.TopBlock></S.TopBlock>
                   <View style= {{ width: width, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: '5%' }}>
                        <Icon
				      name={'menu-8'}
				      family="ArgonExtra"
			      	size={24}
				      onPress={() => props.navigation.openDrawer()}
			      	color={props.theme.COLORS.ICON}
			      />
                        <S.HeaderText style= {{ fontSize: 20 }}>{props.title}</S.HeaderText>
                        <SettingsButton
                              navigation={props.navigation}
				/>
                   </View>
                   <S.HeaderSub >
                        <TouchableNativeFeedback
                              onPress={() => props.navigation.navigate('FirstScreen')}
                        >      
                             <S.IconView>
                                    <Icon
                                          size={20}
							name="dumbbell"
                                          family="MaterialCommunityIcons"
                                          color={props.theme.COLORS.ICON}
                                    />
                                    <S.HeaderText> Exercises</S.HeaderText>
                              </S.IconView>
                        </TouchableNativeFeedback>
                        <S.ButtomBar/>
                        <TouchableNativeFeedback
                              onPress={() => props.navigation.navigate('BfScreen')}
                        >
                              <S.IconView>
                                    <Icon
                                          size={24}
							name="human-male"
							family="MaterialCommunityIcons"
                                          color={props.theme.COLORS.ICON}
                                    />
                                     <S.HeaderText> Body Fat</S.HeaderText>
                              </S.IconView>
                        </TouchableNativeFeedback>
                        <S.ButtomBar/>
                        <TouchableNativeFeedback
                              onPress={() => props.navigation.navigate('Weight')}
                        >
                              <S.IconView>
                                    <Icon
                                          size={20}
                                          name="scale-bathroom"
                                          family="MaterialCommunityIcons"
                                          color={props.theme.COLORS.ICON}
                                    />
                                    <S.HeaderText> Weight</S.HeaderText>
                              </S.IconView>
                        </TouchableNativeFeedback>      
                  </S.HeaderSub>
           </S.RootHeader>
      );
};

export default withTheme(withNavigation(HeaderReloaded));