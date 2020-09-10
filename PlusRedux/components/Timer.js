import React, { useState, useEffect } from 'react';
import { Modal, Image, View } from 'react-native';
import { ExerciseData }  from '../data/Exercises';
import * as Speech from 'expo-speech';
import * as S from '../styles';
import { set } from 'date-fns';

const Timer = props => {

	const [Current, setCurrent] = useState('Starting...'); //Current Exercise name/interval
	const [SwitchBoolean, setSwitchBoolean] = useState(false); //false = rest, true Exercise Name
	const [FirstRun, setFirstRun] = useState(true);
	const [Running, setRunning] = useState(true);
	const [Counter, setCounter] = useState(props.number.intTime);
	const [Exercises, setExercises] = useState(props.number.ListExercises.length -1);
	const [Prog, setProg] = useState(0);
	const [ProgImage, setProgImage] = useState(0);

	 const StartTimer = () => {
			if (Exercises >=0){
				if (FirstRun == true){
					Speech.speak('Get ready, Next exercise, ', {
						language: 'en-US',
						pitch: 1,
						rate: 1,
						onDone: () => Speech.speak(props.number.ListExercises[Prog], {
							language: 'en-US'
						}),
					});
					setFirstRun(false)
				}
				 if (Counter >0) {
					setCounter(Counter -1)
					if (Counter == 3) setSwitchBoolean(!SwitchBoolean)
					else if (Counter == 1){
						if (SwitchBoolean == true){
							Speech.speak(props.number.ListExercises[Prog], {
								language: 'en-US'
							})
							setCounter(props.number.exTime)
							setCurrent(props.number.ListExercises[Prog])
							setProg(Prog +1)
							setExercises(Exercises - 1)
						}
						if (SwitchBoolean == false){
							Speech.speak('Next exercise, ', {
								language: 'en-US',
								onDone: () => Speech.speak(props.number.ListExercises[Prog], {
									language: 'en-US'
								}),
							})
							setProgImage(ProgImage +1)
							setCurrent('Interval')
							setCounter(props.number.intTime)
						}			
					}
				}
			} else console.log('Finished')
	};

	useEffect(() => {
		if (props.visible == true && Running == true){
			setTimeout(() => {		
				StartTimer();
			}, 1000);
		}
	}, [Counter, props.visible]);

	return (
		<Modal
			transparent={true}
			visible={props.visible} 
			animationType="slide"
		>
			<S.MainContainer >
			{props.visible == true ? (
				//roda quando visível
				<S.UpdateTitle>
					{Exercises} Exercises left
				</S.UpdateTitle>
			) : (
				<S.UpdateTitle>
					invisible
				</S.UpdateTitle>
			)}
				<S.UpdateTitle>
					{Current}
				</S.UpdateTitle>
				<S.UpdateTitle>
					{Counter}
				</S.UpdateTitle>
				<Image source={ExerciseData.Exerciseimage[props.number.ListExercises[ProgImage]]}/>
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
