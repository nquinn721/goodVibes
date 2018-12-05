import { Platform } from 'react-native';
import {
  setCustomText,
} from 'react-native-global-props';



setCustomText({
	style: {
		...Platform.select({
			ios: {
				fontFamily: 'space-mono'
			},
			android: {
			}
		})
	}
});