import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { COLORS } from '../constants';
import { Image, Text } from 'react-native';
import Animated from 'react-native-reanimated';
import NavBar from '../components/Navbar';

const Interact = ({ drawerAnimatedStyle }) => {
	return (
		<Container style={[drawerAnimatedStyle]}>
			<NavBar/>
			<Image
				source={require('../assets/images/people.jpeg')}
				style={{ width: 250, height: 250, borderRadius: 10, alignSelf:"center"}}
			/>
			<Text
				style={{
					fontSize: 30,
					marginVertical: 20,
					alignSelf:"center"
				}}
			>
				Waiting for you...
			</Text>
		</Container>
	);
};

export default Interact;

//styles
const Container = styled(Animated.View)`
	flex: 1;
	background-color: ${({ theme }) =>
		theme.name === 'dark' ? COLORS.darkPurple : COLORS.white1};
	padding-top: ${Constants.statusBarHeight}px;
`;
