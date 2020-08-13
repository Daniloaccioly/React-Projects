import React from 'react';
import { Modal } from 'react-native';
import * as S from '../styles';

const Timer = props => {
	
	return (
		<Modal
			transparent={true}
			visible={props.visible} 
			animationType="slide"
		>
			<S.MainContainer >
				<S.UpdateButton 
						onPress={props.onChange.bind(this)}
				>
					<S.UpdateTitle>
						Quit
					</S.UpdateTitle>
				</S.UpdateButton>
			</S.MainContainer>
		</Modal>
	);
};

export default Timer;
