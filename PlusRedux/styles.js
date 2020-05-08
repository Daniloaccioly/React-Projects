import styled from 'styled-components';
import {Dimensions} from 'react-native';

const { height, width } = Dimensions.get('window');

//FirstScreen
export const FirstView = styled.View`
      backgroundColor: ${props => props.theme.COLORS.BACKGROUND};
      flex: 1;
      flexDirection: row;
      borderRightWidth: 1px;
      paddingVertical: 10px;
      paddingHorizontal: 10px;
      display: flex;
      alignItems: stretch;
      justifyContent: center;
`;

export const GridTitle = styled.Text`
      flex: 4;
      fontSize: 22px;
      color: ${props => props.theme.COLORS.TEXT};
      textAlign: left;
      borderColor: ${props => props.theme.COLORS.SECONDARY};
`;

export const GridContainer = styled.View`
      borderBottomWidth: 2px;
      borderRightWidth: 2px;
      borderColor: ${props => props.theme.COLORS.TEXT};
      padding: 5px;
      height: 90px;
      flexDirection: row;
      backgroundColor: ${props => props.theme.COLORS.SECONDARY};
      alignItems: stretch;
      justifyContent: center;
`;

//BfScreen & Weight
export const UpdateButton = styled.TouchableOpacity`
      backgroundColor: ${props => props.theme.COLORS.PRIMARY};
      borderColor: ${props => props.theme.COLORS.TEXT};
      borderWidth: 2px;
      flexDirection: row;
      borderRadius: 50px;
      alignContent: center;
      height: 50px;
      padding: 1px;
	width: 40%;
`;

export const UpdateTitle = styled.Text`
      color: ${props =>props.theme.COLORS.TEXT};
      flex: 1;
      fontSize: 20px;
      alignSelf: center;
      textAlign: center;
      alignContent: space-around;
`;

export const TitleLeft = styled.Text`
      fontFamily: ${props => props.theme.FONTS.PRIMARY};
      color: ${props =>props.theme.COLORS.TEXT};
      flex: 1;
      fontSize: 24px;
      alignSelf: center;
      textAlign: right;
      alignContent: flex-end;
`;

export const TitleRight = styled.Text`
      fontFamily: ${props => props.theme.FONTS.SECONDARY};
      color: ${props =>props.theme.COLORS.TEXT};
      flex: 1;
      fontSize: 24px;
      alignSelf: center;
      textAlign: left;
      alignContent: flex-end;
`;

export const MainView = styled.View`
      flex: 1;
      backgroundColor: ${props => props.theme.COLORS.BACKGROUND};
`;

export const Imperial = styled.Text`
      flex: 1px;
      color: ${props =>props.theme.COLORS.TEXT};
      width: 10px;
      flexDirection: row;
      fontSize: 24px;
      alignSelf: center;
      padding: 1px;
`;

//Weight
export const ToolTip = styled.Text`
      paddingLeft: 12px;
      fontFamily: ${props => props.theme.FONTS.PRIMARY};
      fontSize: 18px;
      color: ${props =>props.theme.COLORS.TEXT};
      backgroundColor: ${props => props.theme.COLORS.BACKGROUND};
`;

//Header
export const RootHeader = styled.View`
      backgroundColor: ${props => props.theme.COLORS.BACKGROUND};
`;
export const TopBlock = styled.View`
      height: ${height/18}px;
      backgroundColor: ${props => props.theme.COLORS.BACKGROUND};
`;

export const IconView = styled.View`
      flex: 1;
      flexDirection: row;
      alignItems: center;
      justifyContent: center;
`;

export const HeaderSub = styled.View`
      flexDirection: row;
      marginVertical: 2%;
      alignContent: stretch;
      height: 50px; 
      width: ${width}px;
      backgroundColor: ${props => props.theme.COLORS.BACKGROUND};
`;

export const HeaderText = styled.Text`
      fontFamily: ${props => props.theme.FONTS.SECONDARY};
      fontSize: 18px;
      color: ${props =>props.theme.COLORS.ICON};
`;

 export const ButtomBar = styled.View`
      width: 1px;
      height: 40px;
      backgroundColor: ${props =>props.theme.COLORS.ICON};
      alignSelf: center;
 `;

//Settings
export const MainContainer = styled.View`
      backgroundColor: ${props => props.theme.COLORS.BACKGROUND};
      borderColor: ${props =>props.theme.COLORS.TEXT};
      flex: 1;
      flexDirection: column;
      borderRadius: 25px;
      shadowRadius: 25px;
      margin: 20px;
      marginTop: 50px;
      marginBottom: 140px;
      borderWidth: 4px;
      justifyContent: center;
      alignItems: center;
      `;