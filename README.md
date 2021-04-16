# react native font autoresize

## npm 
https://www.npmjs.com/package/rn-autoresize-font

## Installation
npm install rn-autoresize-font

## Description
This simple package was created to auto-resize **Text** font size to fit inside parent container, it prevents truncation and wrapping, that may occur on devices that adjust layout depending on various screen sizes. It works by automatically resizing font to fit into Container box (View). This functionality comes pre-built with iOS (https://reactnative.dev/docs/text.html#adjustsfontsizetofit), but for Android it has to be implemented.<br /> 
Use it instead of "react-native" **Text** component.

## Usage/Example
```javascript
import TextResize from "rn-autoresize-font";


<View style={{ width: <desired width> }}>//container

  <TextResize 
    text="hello there"
    numberOfLines={1}
    style={{ color: "#000", textAlign: "center" }}
    fontSize={50}//desired font size 
  />
  
</View>
```
or simply copy TextResize.js component into your project

## Note
The logic designed to downsize the fontSize of Text component on Android, also if there is a big difference between "desired" font and "font that will fit" - the downsizing will be visible. It works great, if let's say you desire fontSize : 20, but based on screen size - it may need to be 18 - the fontSize will seamlessly adjust to fit the outer container and prevent text wrap or trancation;

## HELP
https://stackoverflow.com/questions/38386704/react-native-determine-number-of-lines-of-text-component;
https://stackoverflow.com/questions/48001774/how-to-adjust-font-size-to-fit-view-in-react-native-for-android/58823271#58823271;

Feel free to modify to fit your needs and contribute. Cheers!
