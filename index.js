import React, { useState } from 'react';
import { Text, Platform } from 'react-native';

const platform = Platform.OS;

const TextResize = ({ fontSize, text, style, numberOfLines }) => {
	const [adjustedFontSize, setCurrentFont ] = useState(fontSize);
	
	if(platform === "ios"){
		return(//text adjustment for iOS, everything is built-in
			<Text
				numberOfLines={numberOfLines}
				adjustsFontSizeToFit //this is for ios
				style={[ style, { fontSize } ]}
			>
				{ text }
			</Text>
		)
	}
	return(//text adjustment for android
		<Text
			style={[ style, { fontSize: adjustedFontSize } ]}
			onTextLayout={ (e)=> {
				if(e.nativeEvent.lines.length > numberOfLines){
					setCurrentFont(adjustedFontSize - 1)
				}
			}}
		>
			{ text }
		</Text>
	)
}

export default TextResize;