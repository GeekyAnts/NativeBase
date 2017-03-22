import * as React from 'react';
import * as ReactNative from 'react-native';

declare module 'native-base' {
    namespace NativeBase {

        interface Text extends ReactNative.TextProperties {
            note?: boolean
        }

        interface Switch extends ReactNative.SwitchProperties { }

        interface View extends ReactNative.ViewProperties {
            padder?: boolean,
        }

        interface Picker extends ReactNative.PickerProperties {
            iosHeader?: string,
            inlineLabel?: boolean,
        }

        interface H1 extends ReactNative.TextProperties { }
        /**
         * see Widget Text.js
         */
        interface H2 extends ReactNative.TextProperties { }
        /**
         * see Widget Text.js
         */
        interface H3 extends ReactNative.TextProperties { }
        /**
         * see Widget Text.js
         */
        interface Badge extends ReactNative.ViewProperties { }
        /**
         * see Widget CardSwiper.js
         */
        interface CardSwiper { }
        /**
         * see Widget DeckSwiper.js
         */
        interface DeckSwiper {
            /**
             * Array<any>
             */
            dataSource?: Array<any>,
            /**
             * Direction of iteration for elements
             * Default: iterates in backward direction
             */
            onSwipeLeft?: Function,
            /**
             * Direction of iteration for elements
             * Default: iterates in forward direction
             */
            onSwipeRight?: Function,
            /**
             * Takes a data entry from the data source and should return a renderable component to be rendered as the row.
             */
            renderItem?: Function
        }
        /**
         * see Widget Header.js
         */
        interface Header {
            /**
             * Prop to be used with <Header> component to have Search bar onto the Header section of your screen.
             */
            searchBar?: boolean,
            /**
             * Wraps the search bar with predefined border options.
             * Default: regular
             */
            rounded?: boolean,
            style?: ReactNative.ViewStyle,
            /**
             * It is advisable to use hasTabs prop with Header while using Tab
             */
            hasTabs?:boolean
        }

        interface Left{

        }

        interface Body{

        }

        interface Right{

        }

        /**
         * see Widget FooterTab.js
         */
        interface FooterTab {
            style?: ReactNative.ViewStyle
        }
        /**
         * see Widget Footer.js
         */
        interface Footer {
            style?: ReactNative.ViewStyle
        }
        /**
         * see Widget Title.js
         */
        interface Title {
            style?: ReactNative.ViewStyle
        }
        /**
         * see Widget Subtitle/index.js
         */
        interface SubTitle {
            style?: ReactNative.ViewStyle
        }
        /**
         * see Widget Container.js
         */
        interface Container {
            /**
             * The theme prop can be applied to any component of NativeBase.
             */
            theme?: Object,
            style?: ReactNative.ViewStyle
        }
        /**
         * see Widget Content.js
         */
        interface Content {
            /**
             * The theme prop can be applied to any component of NativeBase.
             */
            theme?: Object,
            padder?: boolean,
            style?: ReactNative.ViewStyle
        }
        /**
         * see Widget Button.js
         */
        interface Button extends ReactNative.TouchableOpacityProperties {
            /**
             * Defines button style
             */
            style?: ReactNative.ViewStyle,
            /**
             * Defines button text style
             */
            textStyle?: ReactNative.TextStyle,
            /**
             * Block level button
             */
            block?: boolean,
            primary?: boolean,
            /**
             * Gives you effect of Icon-buttons.
             * To have button with transparent background, include this prop.
             */
            transparent?: boolean,
            success?: boolean,
            danger?: boolean,
            warning?: boolean,
            info?: boolean,
            color?: string,
            /**
             * Applies outline button style.
             */
            bordered?: boolean,
            /**
             * Renders button with slightly round shaped edges.
             */
            rounded?: boolean,
            /**
             * For large size button
             */
            large?: boolean,
            /**
             * For small size button
             */
            small?: boolean,
            /**
             * Used for Icon alignment.
             * Aligns icon to the left in button.
             * By default, icons are aligned to the left in button.
             */
            iconLeft?: boolean,
            /**
             * Used for Icon alignment.
             * Aligns icon to the right in button.
             */
            iconRight?: boolean,
            /**
             * Disables onPress option for button
             */
            disabled?: boolean,
            active?: boolean,
            inputButton?: boolean,
        }
        /**
         * see Widget List.js
         */
        interface List extends ReactListViewProperties{
            listBorderColor?: string,
            listDividerBg?: string,
            listNoteColor?: string,
            listItemPadding?: number,
            listNoteSize?: number,
            listItemHeight?: number,
            inset?: boolean,
            /**
             * Array of data chunks to render iteratively.
             */
            dataArray?: Array<any>,
            renderRow?: ( rowData: any, sectionID: string | number, rowID: string | number, highlightRow?: boolean ) => React.ReactElement<any>,
        }
        /**
         * see Widget ListItem.js
         */
        interface ListItem extends ReactNative.TouchableOpacityProperties {
            header?: boolean,
            /**
             * Aligns icon to the right of ListItem.
             * Default: false
             */
            iconRight?: boolean,
            /**
             * Aligns icon to the left of ListItem.
             * Default: true
             */
            iconLeft?: boolean,
            icon?:boolean,
            button?: boolean,
            /**
             * Helps to organize and group the list items.
             */
            itemDivider?: boolean,
            /**
             * Sub caption for List Item.
             */
            note?: string
        }
        /**
         * see Widget CardItem.js
         */
        interface CardItem extends ReactNative.TouchableOpacityProperties {
            header?: boolean,
            cardBody?: boolean,
            button?: boolean
        }
        /**
         * Override React ListViewProperties
         */
        interface ReactListViewProperties extends ReactNative.ScrollViewProperties, React.Props<ReactNative.ListViewStatic> {
            /**
             * Flag indicating whether empty section headers should be rendered.
             * In the future release empty section headers will be rendered by
             * default, and the flag will be deprecated. If empty sections are not
             * desired to be rendered their indices should be excluded from
             * sectionID object.
             */
            enableEmptySections?: boolean

            /**
             * How many rows to render on initial component mount.  Use this to make
             * it so that the first screen worth of data apears at one time instead of
             * over the course of multiple frames.
             */
            initialListSize?: number

            /**
             * (visibleRows, changedRows) => void
             *
             * Called when the set of visible rows changes.  `visibleRows` maps
             * { sectionID: { rowID: true }} for all the visible rows, and
             * `changedRows` maps { sectionID: { rowID: true | false }} for the rows
             * that have changed their visibility, with true indicating visible, and
             * false indicating the view has moved out of view.
             */
            onChangeVisibleRows?: (visibleRows: Array<{ [sectionId: string]: { [rowID: string]: boolean } }>, changedRows: Array<{ [sectionId: string]: { [rowID: string]: boolean } }>) => void

            /**
             * Called when all rows have been rendered and the list has been scrolled
             * to within onEndReachedThreshold of the bottom.  The native scroll
             * event is provided.
             */
            onEndReached?: () => void

            /**
             * Threshold in pixels for onEndReached.
             */
            onEndReachedThreshold?: number

            /**
             * Number of rows to render per event loop.
             */
            pageSize?: number

            /**
             * A performance optimization for improving scroll perf of
             * large lists, used in conjunction with overflow: 'hidden' on the row
             * containers.  Use at your own risk.
             */
            removeClippedSubviews?: boolean

            /**
             * () => renderable
             *
             * The header and footer are always rendered (if these props are provided)
             * on every render pass.  If they are expensive to re-render, wrap them
             * in StaticContainer or other mechanism as appropriate.  Footer is always
             * at the bottom of the list, and header at the top, on every render pass.
             */
            renderFooter?: () => React.ReactElement<any>

            /**
             * () => renderable
             *
             * The header and footer are always rendered (if these props are provided)
             * on every render pass.  If they are expensive to re-render, wrap them
             * in StaticContainer or other mechanism as appropriate.  Footer is always
             * at the bottom of the list, and header at the top, on every render pass.
             */
            renderHeader?: () => React.ReactElement<any>

            /**
             * (rowData, sectionID, rowID) => renderable
             * Takes a data entry from the data source and its ids and should return
             * a renderable component to be rendered as the row.  By default the data
             * is exactly what was put into the data source, but it's also possible to
             * provide custom extractors.
             */
            renderRow?: (rowData: any, sectionID: string | number, rowID: string | number, highlightRow?: boolean) => React.ReactElement<any>


            /**
             * A function that returns the scrollable component in which the list rows are rendered.
             * Defaults to returning a ScrollView with the given props.
             */
            renderScrollComponent?: (props: ReactNative.ScrollViewProperties) => React.ReactElement<ReactNative.ScrollViewProperties>

            /**
             * (sectionData, sectionID) => renderable
             *
             * If provided, a sticky header is rendered for this section.  The sticky
             * behavior means that it will scroll with the content at the top of the
             * section until it reaches the top of the screen, at which point it will
             * stick to the top until it is pushed off the screen by the next section
             * header.
             */
            renderSectionHeader?: (sectionData: any, sectionId: string | number) => React.ReactElement<any>


            /**
             * (sectionID, rowID, adjacentRowHighlighted) => renderable
             * If provided, a renderable component to be rendered as the separator below each row
             * but not the last row if there is a section header below.
             * Take a sectionID and rowID of the row above and whether its adjacent row is highlighted.
             */
            renderSeparator?: (sectionID: string | number, rowID: string | number, adjacentRowHighlighted?: boolean) => React.ReactElement<any>

            /**
             * How early to start rendering rows before they come on screen, in
             * pixels.
             */
            scrollRenderAheadDistance?: number

            /**
             * An array of child indices determining which children get docked to the
             * top of the screen when scrolling. For example, passing
             * `stickyHeaderIndices={[0]}` will cause the first child to be fixed to the
             * top of the scroll view. This property is not supported in conjunction
             * with `horizontal={true}`.
             * @platform ios
             */
            stickyHeaderIndices?: number[]

            ref?: React.Ref<ReactNative.ListViewStatic & ReactNative.ScrollViewStatic & ReactNative.ViewStatic>
        }
        /**
         * see Widget Card.js
         */
        interface Card extends ReactNative.ViewProperties, ReactListViewProperties {
            dataArray?: Array<any>,
            style?: React.Ref<ReactNative.ViewProperties | ReactNative.ListViewProperties>
            ref?: React.Ref<ReactNative.ViewProperties | ReactListViewProperties>,
        }
        /**
         * react-native-easy-grid
         */
        interface Grid extends ReactNative.ViewProperties { }
        interface Row extends ReactNative.ViewProperties { size?: number }
        interface Col extends ReactNative.ViewProperties { size?: number }
        /**
         * see Widget InputGroup.js
         */
        interface InputGroup extends ReactNative.ViewProperties {
            /**
             * Wraps the textbox with predefined border options.
             * Default: underline
             */
            borderType?: 'rounded' | 'regular' | 'underline',
            toolbar?: boolean,
            atoolbar?: boolean,
            /**
             * If true, the icon in the input text box appears to the right.
             * Default: true
             */
            iconRight?: boolean,
            /**
             * The border color of textbox for valid input.
             */
            success?: boolean,
            /**
             * The border color of textbox for invalid input.
             */
            error?: boolean,
            /**
             * Disables inputting data.
             */
            disabled?: boolean,
        }
        /**
         * see Widget Input.js
         */
        interface Input extends ReactNative.TextInputProperties {
            label?: string,
            /**
             * Label placed to the left of the input element.
             * When the user enters text, the label does not hide.
             * This can also be used along with placeholder.
             */
            inlineLabel?: boolean,
            /**
             * Places the label on top of the input element which appears like a stack.
             * This can also be used along with placeholder.
             */
            stackedLabel?: boolean
        }
        /**
         * see Widget Textarea.js
         */
        interface Textarea extends ReactNative.TextInputProperties {
            rowSpan: number;
        }
        /**
         * see Widget Icon.js
         */
        interface Icon {
            name: string,
            style?: ReactNative.TextStyle,
            active?:boolean
        }
        /**
         * see Widget Icon.js
         */
        interface Thumbnail extends ReactNative.ImageProperties {
            /**
             * Dimension of thumbnail.
             * Default: 30
             */
            size?: number,
            /**
             * Represents shape of thumbnail.
             * By default thumbnail is circle in shape.
             */
            circular?: boolean,
            /**
             * Represents shape of thumbnail.
             * By default thumbnail is circle in shape.
             */
            square?: boolean
        }
        /**
         * see Widget Spinner.js
         */
        interface Spinner extends ReactNative.ActivityIndicatorProperties {
            inverse?: boolean
        }
        /**
         * see Widget CheckBox.js
         */
        interface CheckBox {
            checked?: boolean
        }
        /**
         * see Widget CheckBox.js
         */
        interface Radio {
            selected?: boolean
        }
        /**
         * see Widget ProgressBar.js
         */
        interface ProgressBar {
            progress?: number,
            color?: string,
            inverse?: boolean
        }
        /**
         * vendor react-native-drawer
         */
        interface DrawerStyles {
            drawer?: ReactNative.ViewStyle,
            main?: ReactNative.ViewStyle,
            drawerOverlay?: ReactNative.ViewStyle,
            mainOverlay?: ReactNative.ViewStyle
        }
        interface Drawer {
            acceptDoubleTap?: boolean,
            acceptPan?: boolean,
            acceptTap?: boolean,
            captureGestures?: boolean,
            children?: any,
            open?: boolean,
            closedDrawerOffset?: number,
            content?: any,
            deviceScreen?: ReactNative.ScaledSize,
            disabled?: boolean,
            initializeOpen?: boolean,
            negotiatePan?: boolean,
            onClose?: Function,
            onCloseStart?: Function,
            onOpen?: Function,
            onOpenStart?: Function,
            openDrawerOffset?: number,
            openDrawerThreshold?: number,
            panCloseMask?: number,
            panOpenMask?: number,
            panStartCompensation?: boolean,
            relativeDrag?: boolean,
            side?: 'left' | 'right',
            styles?: DrawerStyles,
            tapToClose?: boolean,
            tweenDuration?: number,
            tweenEasing?: string,
            tweenHandler?: Function,
            type?: 'overlay' | 'static' | 'displace',
        }
        /**
         * see Widget Tabs.js
         */
        interface Tabs {
            tabBarPosition?: 'top' | 'bottom',
            edgeHitWidth?: number,
            springTension?: number,
            springFriction?: number
        }

        interface Tab{
            heading:TabHeading,

        }
        interface TabHeading{
            activeTabStyle?:ReactNative.ViewStyle,
            textStyle?:ReactNative.TextStyle,
            activeTextStyle?:ReactNative.TextStyle
        }
        
        interface Item {
            fixedLabel?:boolean,
            floatingLabel?:boolean,
            inlineLabel?:boolean,
            stackedLabel?:boolean,
            placeholderLabel?:boolean,
            bordered?:boolean,
            underline?:boolean,
            rounded?:boolean,
            disabled?: boolean,
            error?: boolean,
            placeholder?:string,
            secureTextEntry?:boolean,
            success?: boolean,
            last?:boolean,
        }
    }

    // Export definitions
    /**
     * NativeBase.Container
     *
     * Provides its own frame component, named after <Container>.
     * All the components should be included within the Container.
     * Container takes mainly two components: <Header> and <Content>.
     * Container comes with its predefined stylesheet, with an added advantage of accepting user-defined styles.
     * Usage of Container's Header component is very similar to your HTML <head>.
     * The Content component of Container is nothing but the body section of your screen.
     */
    export class Container extends React.Component<NativeBase.Container, any> { }
    /**
     * NativeBase.Header
     *
     * NativeBase component that renders as Header (navbar) for your screen.
     * There can be a single Header component into your Container.
     * To have Header for your screen, include <Header> component within <Container>.
     * NativeBase gives you flexibility to define your Header component anywhere in the bounds of Container.
     * Header takes input as: Button and Title (Text)
     * The components those are defined within <Header> will be rendered in the same order that you define them.
     * Header provides you with stylesheet.
     * User can add custom styles while defining <Header> within their app.
     * Replacing Component: React Native <View>
     */
    export class Header extends React.Component<NativeBase.Header, any> { }
    /**
     * NativeBase.Content
     *
     * This is a NativeBase component which renders as body element of your screen.
     * Each screen can have only one <Content> component and can be defined anywhere within the Container.
     * Content takes in the whole collection of React Native and NativeBase components.
     * Content provides you with stylesheet.
     * User can add custom styles while defining <Content> within their app.
     * Replacing Component: React Native <ScrollView>
     */
    /**
     * NativeBase.Left
     */
    export class Left extends React.Component<NativeBase.Left, any> { }
    /**
     * NativeBase.Right
     */
    export class Right extends React.Component<NativeBase.Right, any> { }
    /**
     * NativeBase.Body
     */
    export class Body extends React.Component<NativeBase.Body, any> { }

    export class Content extends React.Component<NativeBase.Content, any> { }
    /**
     * NativeBase.FooterTab
     */
    export class FooterTab extends React.Component<NativeBase.FooterTab, any> { }
    /**
     * NativeBase.Footer
     */
    export class Footer extends React.Component<NativeBase.Footer, any> { }
    /**
     * NativeBase.Title
     */
    export class Title extends React.Component<NativeBase.Title, any> { }
    /**
     * NativeBase.Button
     *
     * Provides Button component which is readily not available in React Native.
     * Supports React Native app on both iOS and Android devices.
     * Button component takes input such as: Text, Icon, Text with Icon.
     * NativeBase gives you privilege to customize the props of this component.
     * Example: To have custom style for button, include them in style prop of button.
     * Intakes user-defined styles.
     * NativeBase has provided its users with enormous list of props that can be used with Button.
     * Replacing Component: React Native <TouchableOpacity>
     */
    export class Button extends React.Component<NativeBase.Button, any> { }
    /**
     * NativeBase.View
     */
    export class View extends React.Component<NativeBase.View, any> { }
    /**
     * NativeBase.Text
     */
    export class Text extends React.Component<NativeBase.Text, any> { }
    /**
     * NativeBase.Switch
     */
    export class Switch extends React.Component<NativeBase.Switch, any> { }
    /**
     * NativeBase.Picker
     */
    export class Picker extends React.Component<NativeBase.Picker, any> { }
    namespace Picker {
        export class Item extends React.Component<ReactNative.PickerItemProperties, any> { }
    }
    /**
     * NativeBase.List
     *
     * A base component for specifying lists of information. List must contain one or more list elements.
     * Props provide configurability for several features. Provides a number of attributes that follows styling and interaction guidelines for each platform, so that they are intuitive for users to  interact with.
     */
    export class List extends React.Component<NativeBase.List, any> { }
    /**
     * NativeBase.ListItem
     *
     * • This is the child component of List.
     * • Defines a list item.
     * • Adds border at bottom of each ListItem.
     * • List takes any number of ListItem.
     */
    export class ListItem extends React.Component<NativeBase.ListItem, any> { }
    /**
     * NativeBase.H1
     */
    export class H1 extends React.Component<NativeBase.H1, any> { }
    /**
     * NativeBase.H2
     */
    export class H2 extends React.Component<NativeBase.H2, any> { }
    /**
     * NativeBase.H3
     */
    export class H3 extends React.Component<NativeBase.H3, any> { }
    /**
     * NativeBase.Row
     */
    export class Row extends React.Component<NativeBase.Row, any> { }
    /**
     * NativeBase.Col
     */
    export class Col extends React.Component<NativeBase.Col, any> { }
    /**
     * NativeBase.Grid
     */
    export class Grid extends React.Component<NativeBase.Grid, any> { }
    /**
     * NativeBase.InputGroup
     *
     * A foundational component for inputting text into the app via a keyboard.
     * Props provide configurability for several features, such as auto-correction, auto-capitalization, placeholder text, and different keyboard types, such as a numeric keypad.
     * Provides a number of attributes that follows styling and interaction guidelines for each platform, so that they are intuitive for users to interact with.
     */
    export class InputGroup extends React.Component<NativeBase.InputGroup, any> { }
    /**
     * NativeBase.Input
     */
    export class Input extends React.Component<NativeBase.Input, any> { }
    /**
     * NativeBase.Textarea
     */
    export class Textarea extends React.Component<NativeBase.Textarea, any> { }
    /**
     * NativeBase.Icon
     */
    export class Icon extends React.Component<NativeBase.Icon, any> { }
    /**
     * NativeBase.Thumbnail
     *
     * Thumbnail component works very similar to Image.
     * It helps you to showcase an image with variuos dimensions and shapes.
     * By default, Thumbnail renders an image in circular shape.
     */
    export class Thumbnail extends React.Component<NativeBase.Thumbnail, any> { }
    /**
     * NativeBase.Card
     *
     * Card is a flexible and extensible content container.
     * It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.
     * NativeBase Cards support a wide variety of content, including images, text, list groups, links, and more.
     * Mix and match multiple content types to create the card you need.
     */
    export class Card extends React.Component<NativeBase.Card, any> { }
    /**
     * NativeBase.CardItem
     *
     * This is the child component of Card. Works very similar to the list items of list. Card takes any number of CardItem.
     * CardItem component takes input such as: Text, Button, Image, Thumbnail, Icon.
     */
    export class CardItem extends React.Component<NativeBase.CardItem, any> { }
    /**
     * NativeBase.CardSwiper
     *
     * Looking at data one piece at a time is more efficient when you consider people you might want to date, restaurants, streaming music, or local events you might want to check out.
     * NativeBase Card Swiper helps you evaluate one option at a time, instead of selecting from a set of options.
     */
    export class CardSwiper extends React.Component<NativeBase.CardSwiper, any> { }
    /**
     * NativeBase.DeckSwiper
     */
    export class DeckSwiper extends React.Component<NativeBase.DeckSwiper, any> { }
    /**
     * NativeBase.Badge
     *
     * All of us must have seen notification badges somewhere, such as on smart phones or facebook.
     */
    export class Badge extends React.Component<NativeBase.Badge, any> { }
    /**
     * NativeBase.Spinner
     */
    export class Spinner extends React.Component<NativeBase.Spinner, any> { }
    /**
     * NativeBase.CheckBox
     */
    export class CheckBox extends React.Component<NativeBase.CheckBox, any> { }
    /**
     * NativeBase.Radio
     */
    export class Radio extends React.Component<NativeBase.Radio, any> { }
    /**
     * NativeBase.ProgressBar
     */
    export class ProgressBar extends React.Component<NativeBase.ProgressBar, any> { }
    /**
     * NativeBase.Drawer
     */
    export class Drawer extends React.Component<NativeBase.Drawer, any> { }
    /**
     * NativeBase.Tabs
     *
     * Tabs are a horizontal region of buttons or links that allow for a consistent navigation experience between screens.
     * It can contain any combination of text and icons, and is a popular method for enabling mobile navigation.
     */
    export class Tabs extends React.Component<NativeBase.Tabs, any> { }
    /**
     * NativeBase.Tab
     */
    export class Tab extends React.Component<NativeBase.Tab,any>{}

    export class TabHeading extends React.Component<NativeBase.TabHeading,any>{}
    /**
     * NativeBase.Item
     */
    export class Item extends React.Component<NativeBase.Item, any> { }

}
