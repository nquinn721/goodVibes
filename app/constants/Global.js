import { Platform } from 'react-native';
import {
  setCustomText,
} from 'react-native-global-props';



setCustomText({
	style: {
		fontFamily: 'sfpro',
		...Platform.select({
			ios: {
				// fontFamily: 'sfpro'
			},
			android: {
			}
		})
	}
});