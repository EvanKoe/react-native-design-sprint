# Warning !

### This lib is deprecated. It will soon be replaced with [react-native-ready-comps](https://github.com/EvanKoe/react-native-ready-comps.git) which will almost do the same, but from bare react-native (without expo, that caused many problems on react-native-design-sprint). React-native-ready-comps will also be lighter, and it will be easier to contribute (I'll add a set of rules to respect before creating pull requests, add a coding style ...).

# DesignSprint

DesignSprint is a little component library I made while I was learning React Native.

> This library has not been tested on IOS ! I cannot guarantee the result on IOS for the time being !

This react native library offers some components to make mobile coding faster with prebuilt and fully-personnalizable widgets. I'll give you some screenshots to see what are the default components of this lib, but remember that you can **always** (on every component of this lib) add your own style to customize 'em ! This lib has been coded with only the standard react-native components, no external library has been used !

Here is a list of the widgets:

- Avatar (utilisateur) : ![alt text](https://github.com/EvanKoe/react-native-design-sprint/blob/master/assets/Avatar.png "Avatar")
- Clickable (bouton) : ![alt text](https://github.com/EvanKoe/react-native-design-sprint/blob/master/assets/Clickable.png "Clickable")
- colors (a full package of colors),
- DropDown (a button which displays a list on click) : ![alt text](https://github.com/EvanKoe/react-native-design-sprint/blob/main/images/DropDown.jpg "DropDown")
- LoginForm (login form) : ![alt  text](https://github.com/EvanKoe/react-native-design-sprint/blob/master/assets/LoginForm.png "Login Form")
- Input (a text input) : ![alt text](https://github.com/EvanKoe/react-native-design-sprint/blob/main/images/input.jpg "Input")
- Layout (an default app layout),
- Spacer (a horizontal or vertical spacer),
- Title (a very big text) : ![alt text](https://github.com/EvanKoe/react-native-design-sprint/blob/main/images/title.jpg "Title")

Since v1.0.6, this lib adds little functions to make programming easier :

- `log (e: any)` which equals to `console.log(e: any)` : makes it faster to type,
- `toast (e: string)` which equals to a short centered Android toast : it has not been tested on IOS !
- `capitalize (e: string)` which returns a string capitalized like in this example : `capitalize('hello world') ==> 'Hello world'`
- `ftoi (e: number)` which returns the entire part of a float : `ftoi(4.55) ==> 4`

# Installation

To install DesignSprint, just type in your project folder :
For npm :

```
npm i react-native-design-sprint
```

For yarn :

```
yarn add react-native-design-sprint
```

And then, import the components you want to use in your project, as you could have done for react native components :

```javascript
import { Component1, Component2 } from 'react-native-design-sprint';
```

You're done !

# How to use

This lib's components are used the same way than react-native's ones :

```js
import { Avatar, Title } from 'react-native-design-sprint';

const App = () => {
  return (
    <Title> My title </Title>
    <Avatar text='My avatar' />
  )
}

export default App;
```

Next, you'll see a list of every component's options, to understand how they work, and how you can customize them.

# Components' options

## Avatar

| Option          | Mandatory? | Type                      | Description                               | Example                                         | Default |
| --------------- | ---------- | ------------------------- | ----------------------------------------- | ----------------------------------------------- | ------- |
| imageUrl        | no         | string                    | loads an image into the Avatar            | `<Avatar imageUrl="https://www.image.com" />` | 'none'  |
| text            | no         | string                    | displays the first letter into the Avatar | `<Avatar text="Evan" />`                      | 'user'  |
| connected       | no         | string                    | changes the color                         | `<Avatar connected="connected" />`            | 'none'  |
| size            | no         | number                    | Size of the Avatar (in px)                | `<Avatar size={140} />`                       | 100     |
| style           | no         | StyleProp `<ViewStyle>` | style applied to main layout              | `<Avatar style={{ borderRadius: 15 }} />`     | { }     |
| backgroundColor | no         | string                    | background color                          | `<Avatar backgroundColor={colors.red} />`     | 'none'  |

## Clickable

| Option                | Mandatory?              | Type                               | Description                                        | Example                                                                | Default                           |
| --------------------- | ----------------------- | ---------------------------------- | -------------------------------------------------- | ---------------------------------------------------------------------- | --------------------------------- |
| primary               | no                      | boolean                            | loads a primary prebuilt style (with primaryColor) | `<Clickable primary />`                                              | false                             |
| secondary             | no                      | boolean                            | same as primary                                    | `<Clickable secondary />`                                            | false                             |
| disabled              | no                      | boolean                            | disables the button                                | `<Clickable disabled />`                                             | false                             |
| primaryColor          | if primary or secondary | string                             | set a colorbase for prebuilt style                 | `<Clickable primaryColor='#000'`                                     | colors.red700                     |
| onPress               | no                      | (e: GestureResponderEvent) => void | onPress function                                   | `<Clickable onPress={() => function()} />`                           | console.log('You clicked here !') |
| textStyle             | no                      | StyleProp `<TextStyle>`          | applies a style for the button's text              | `<Clickable textStyle={{ color: '#fff' }} />`                        | { }                               |
| style                 | no                      | StyleProp `<ViewStyle>`          | applies a style for the button                     | same as textStyle                                                      | { }                               |
| text                  | no                      | string                             | button text                                        | `<Clickable text='Click here !' />`                                  | 'Click here'                      |
| shadow                | no                      | string                             | displays a cheated bordered shadow                 | `<Clickable shadow='left-top' />`                                    | 'none'                            |
| shadowColor           | no                      | string                             | shadow's color                                     | `<Clickable shadowColor='#000' />`                                   | colors.grey60                     |
| imageUrl              | no                      | string                             | url of an image                                    | `<Clickable imageUrl='https://reactnative.dev/img/tiny_logo.png' />` | ''                                |
| imageHeight           | if imageUrl             | number                             | image height                                       | `<Clickable imageHeight={40} />`                                     | 40                                |
| imageWidth            | if imageUrl             | number                             | image width                                        | same as imageHeight                                                    | 40                                |
| imageStyle            | if imageUrl             | StyleProp `<ImageStyle>`         | image style                                        | `<Clickable imageStyle={{ borderRadius: 15 }} />`                    | { }                               |
| children              | no                      | any                                | any component you want to render                   | `<Clickable> <Text>Button</Text> </Clickable>`                       | { }                               |
| transparentBackground | no                      | boolean                            | removes backgroundColor                            | `<Clickable transparentBackground />`                                | false                             |

> If you want to render icons in front of text, you should use the children prop !

## colors

Its a file where many colors are defined. It is used this way : `colors.COLORNAME`. For example : `colors.red900`. Refer to src/colors.tsx to see the list !

## SlidingPanel

| Option               | Mandatory? | Type                                    | Description                                           | Example                                               | Default  |
| -------------------- | ---------- | --------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | -------- |
| style                | no         | StyleProp `<ViewStyle>`               | your own style                                        | { backgroundColor: '#fff' }                           | { }      |
| size                 | no         | number                                  | size when opened (0 if fullscreen)                    | 500                                                   | 400      |
| initialSize          | no         | number                                  | size when closed                                      | 10                                                    | 20       |
| jumpToMax            | no         | boolean                                 | goes to max/min size on scroll                        | true                                                  | true     |
| topBarDisabled       | no         | boolean                                 | if true, sliding top bar will be disabled             | true                                                  | false    |
| children             | no         | React.ReactChild or React.ReactChild[]  | components rendered in the panel                      | `<SlidingPanel> <Text>Hello</Text> </SlidingPanel>` | <></>    |
| isOpened             | no         | boolean                                 | tells if panel is opened at render                    | true                                                  | true     |
| animationType        | no         | 'timing' or 'spring' or 'none' (string) | animation type on scroll                              | 'spring'                                              | 'timing' |
| animationDuration    | no         | number                                  | if animationType == 'timing', sets animation duration | 500                                                   | 500      |
| disabledRadiusOnFull | no         | boolean                                 | if size == 0, when opened, disable borderRadius       | true                                                  | true     |

> SlidingPanel has no function like _panelRef.open() or _panelRef.close() at the moement. But it is under developpement !

## DropDown

| Option      | Mandatory? | Type                      | Description                                                    | Example                                                           | Default                                               |
| ----------- | ---------- | ------------------------- | -------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------- |
| list        | yes        | any                       | list to be displayed when button clicked                       | `<DropDown list={myList} />`                                    | [ ]                                                   |
| title       | no         | string                    | text on the clickable                                          | `<DropDown title='Click here' />`                               | 'Dropdown'                                            |
| renderItem  | yes        | (item: any) => void       | same as FlatList's renderItem                                  | `<DropDown renderItem={(item) => function(item)} />`            | console.log('Lol you forgot the renderItem function') |
| onOpen      | no         | ( ) => void               | function called when dropdown is opened                        | `<DropDown onOpen={() => console.log('dropdown is open !')} />` | undefined                                             |
| onClose     | no         | ( ) => void               | function called when dropdown is closed                        | same as onOpen                                                    | undefined                                             |
| style       | no         | StyleProp `<ViewStyle>` | general style                                                  | `<DropDown style={{ backgroundColor: '#212121' }} />`           | { }                                                   |
| listStyle   | no         | same as style             | style to be applied generally on the list (not on each item !) | same as style                                                     | { }                                                   |
| buttonStyle | no         | same as style             | style applied on the clickable                                 | same as style                                                     | { }                                                   |
| titleStyle  | no         | same as style             | style applied on the title (clickable's text)                  | same as style                                                     | { }                                                   |
| buttonType  | no         | string                    | primary/secondary/disabled ... see Clickable options           | `<DropDown buttonType='primary' />`                             | 'none'                                                |

> If you want to pass style for each item of the list, do it through your renderItem function !

## LoginForm

| Option                 | Mandatory? | Type                        | Description                                               | Default                                               | Example                                                              |
| ---------------------- | ---------- | --------------------------- | --------------------------------------------------------- | ----------------------------------------------------- | -------------------------------------------------------------------- |
| title                  | no         | string                      | title text                                                | ''                                                    | `<LoginForm title='Login' />`                                      |
| titleStyle             | no         | StyleProp `<TextStyle>`   | style on title                                            | { }                                                   | `<LoginForm titleStyle={{ color: '#000' }} />`                     |
| buttonText             | no         | string                      | text displayed on the button                              | 'SUBMIT'                                              | ``<LoginForm buttonText='Send' />``                                  |
|                        | no         | string                      | color of the button                                       | colors.black                                          | `<LoginForm buttonColor={colors.red400} />`                        |
| buttonType             | no         | string                      | primary/secondary/disabled (linked to clickable)          | 'primary'                                             | `<LoginForm buttonType='secondary' />`                             |
| buttonStyle            | no         | StyleProp `<ViewStyle>`   | style on button                                           | { }                                                   | `<LoginForm buttonStyle={{ backgroundColor: '#fff8' }} />`         |
| buttonSticky           | no         | string                      | left/center.. make the button float to a side             | 'none'                                                | `<LoginForm buttonSticky='right' />`                               |
| buttonShadow           | no         | string                      | none/right-top... displays a cheated shadow using borders | 'none'                                                | `<LoginForm buttonShadow='bottom-right-top' />`                    |
| buttonShadowColor      | no         | string                      | color of the shadow                                       | colors.grey60                                         | `<LoginForm buttonShadowColor={colors.dark} />`                    |
| style                  | no         | StyleProp `<ViewStyle>`   | main style                                                | { }                                                   | `<LoginForm style={{ backgroundColor: '#fff8' }} />`               |
| onSubmit               | no         | (object: any) => void       | function called on submit                                 | console.log('Form callback missing. Please add one.') | `<LoginForm onSubmit={() => console.log('You\'re logged in !')}/>` |
| shadow                 | no         | string                      | left-bottom.. say where the shadow is                     | 'none'                                                | `<LoginForm shadow='left-bottom' />`                               |
| shadowColor            | no         | string                      | color of the shadow                                       | colors.grey60                                         | `<LoginForm shadowColor={colors.dark}/>`                           |
| borderRadius           | no         | number                      | border radius for the layout                              | 15                                                    | `<LoginForm borderRadius={20} />`                                  |
| placeholderTop         | no         | string                      | text displayed in top placeholder                         | 'Email'                                               | `<LoginForm placeholderTop='type your email here' />`              |
| placeholderTopStyle    | no         | StyleProp `<TextStyle>`   | top placeholder style                                     | { }                                                   | `<LoginForm placeholderTopStyle={{ color: colors.white }} />`      |
| placeholderBottom      | no         | string                      | bottom placeholder style                                  | 'Password'                                            | same as placeholderTop                                               |
| placeholderBottomStyle | no         | same as placeholderTopStyle | { }                                                       | same as placeholderTopStyle                           |                                                                      |
| children               | no         | any                         | any component to be rendered inside                       | (<> </>)                                              | `<LoginForm> <Text> Hello World ! </Text> </LoginForm>`            |

## Input

| Option           | Mandatory? | Type                      | Description                                | Default                              | Example                                                  |
| ---------------- | ---------- | ------------------------- | ------------------------------------------ | ------------------------------------ | -------------------------------------------------------- |
| type             | no         | string                    | email ? Password ?                         | 'text'                               | `<Input type='text' />`                                |
| placeholder      | no         | string                    | placeholder                                | 'Input text right here '             | `<Input                                                  |
| placeholderColor | no         | string                    | placeholder color                          | colors.grey200                       | `<Input placeholderColor={colors.transp400}/>`         |
| style            | no         | StyleProp `<ViewStyle>` | style applied on main layout               | { }                                  | `<Input style={{ backgroundcolor: colors.red500 }} />` |
| textStyle        | no         | StyleProp `<TextStyle>` | style applied to the text                  | { }                                  | same as style                                            |
| onFinished       | no         | (e: string) => void       | function called when submitted             | console.log('You typed something !') | `<Input onFinished={(e) => console.log(e)} />`         |
| onCharTyped      | no         | (e: string) => void       | function called when a text is changed     | { }                                  | `<Input onCharTyped={(e) => console.log(e)} />`        |
| required         | no         | boolean                   | tells wether this field is required or not | false                                | `<Input required />`                                   |
| value            | no         | string                    | text that is typed in the entry by default | ''                                   | `<Input value='Hi !'/>`                                |
| placeholderColor | no         | string                    | placeholder's color                        | colors.grey200                       | `<Input placeholderColor={colors.wtransp500} />`       |
| noRegex          | no         | boolean                   | for email only: disables regex             | false                                | `<Input noRegex />`                                    |
| disabled         | no         | boolean                   | disables the entry                         | false                                | `<Input disabled />`                                   |
| onFocus          | no         | ( ) => void               | function when focus gained                 | ( ) => { }                           | `<Input onFocus={() => log('I\'m focused !')}`         |

## Layout

| Option          | Mandatory? | Type                      | Description                   | Default                  | Example                                               |
| --------------- | ---------- | ------------------------- | ----------------------------- | ------------------------ | ----------------------------------------------------- |
| dark            | no         | boolean                   | enables dark background       | false                    | `<Layout dark />`                                   |
| title           | no         | string                    | displays a title              | ''                       | `<Layout title='Welcome !' />`                      |
| titleStyle      | no         | StyleProp `<TextStyle>` | style applied on title        | { }                      | `<Layout titleStyle={{ color: colors.grey700 }} />` |
| titleColor      | no         | string                    | title color                   | colors.black             | `<Layout titleColor={colors.grey700} />`            |
| titleSize       | no         | number                    | size (px) for font title      | 50                       | `<Layout titleSize={42}/>`                          |
| style           | no         | StyleProp `<ViewStyle>` | style applied on main layout  | { }                      | `<Layout style={{ backgroundColor: '#0008' }} />`   |
| scrollable      | no         | boolean                   | makes the layout scrollable   | false                    | `<Layout scrollable />`                             |
| backgroundColor | no         | string                    | set a custom background color | depending on dark option | `<Layout backgroundColor={colors.fadeRedDark} />`   |

## Spacer

| Option     | Mandatory?        | Type    | Description             | Default | Example                   |
| ---------- | ----------------- | ------- | ----------------------- | ------- | ------------------------- |
| vertical   | if not horizontal | boolean | makes spacer vertical   | false   | `<Sapcer vertical />`   |
| horizontal | if not vertical   | boolean | makes spacer horizontal | false   | `<Spacer horizontal />` |
| size       | yes               | number  | size of the spacer (px) | 20      | `<Sapcer size={15} />`  |

## Title

| Option     | Mandatory? | Type                      | Description                 | Default      | Example                                       |
| ---------- | ---------- | ------------------------- | --------------------------- | ------------ | --------------------------------------------- |
| style      | no         | StyleProp `<TextStyle>` | style applied on the text   | { }          | `<Title style={{ color: colors.white }} />` |
| oofsize    | no         | boolean                   | biggest size                | false        | `<Title oofsize />`                         |
| big        | no         | boolean                   | big size                    | false        | `<Title big />`                             |
| medium     | no         | boolean                   | medium size                 | false        | `<Title medium />`                          |
| small      | no         | boolean                   | small size                  | false        | `<Title small />`                           |
| extraSmall | no         | boolean                   | extra small size            | false        | `<Title extraSmall />`                      |
| bold       | no         | boolean                   | bold text                   | false        | `<Title bold />`                            |
| font       | no         | string                    | adds custom font            | undefined    | `<Title font='Comic Sans' />`               |
| size       | no         | number                    | set the text size (px)      | 20           | `<Title size={24} />`                       |
| color      | no         | string                    | set the text color          | colors.black | `<Title color={colors.grey200} />`          |
| right      | no         | boolean                   | makes the title float right | false        | `<Title right />`                           |
| center     | no         | boolean                   | centers the title           | false        | `<Title center />`                          |

# Contribute

Feel free to contribute if you know how to make this lib better !
