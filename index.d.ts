declare module "native-base" {
	import * as React from "react";
	import * as ReactNative from "react-native";
	import * as RNVIcon from "react-native-vector-icons/Icon";
	import RNDrawer, { DrawerProperties } from "react-native-drawer";
	import { KeyboardAwareScrollViewProps } from "react-native-keyboard-aware-scroll-view";
	import { HeaderBackButton } from "react-navigation";
	export * from 'react-native-easy-grid';

	export namespace NativeBase {
		interface Text extends ReactNative.TextProps {
			note?: boolean;
			uppercase?: boolean;
		}

		interface Switch extends ReactNative.SwitchProps { }

		interface View extends ReactNative.ViewProps {
			padder?: boolean;
		}

		interface PickerButtonRenderConfig {
			onPress(): void;
			text: string;
			picker: Picker;
			selectedItem: any;
		}
		interface Picker extends ReactNative.PickerProps, ReactNative.ViewProps {
			/** ios only */
			iosHeader?: string;
			/** ios only */
			headerBackButtonText?: string;
			/** ios only */
			placeholder?: string;
			/** ios only */
			placeholderStyle?: ReactNative.StyleProp<ReactNative.TextStyle>;
			/** ios only */
			textStyle?: ReactNative.StyleProp<ReactNative.TextStyle>;
			/** ios only */
			iosIcon?: React.ReactElement<NativeBase.Icon>;
			/** ios only */
			note?: boolean;
			/** ios only */
			placeholderIconColor?: string;
			/** ios only */
			itemTextStyle?: ReactNative.StyleProp<ReactNative.TextStyle>;
			/** ios only */
			headerStyle?: ReactNative.StyleProp<ReactNative.ViewStyle>;
			/** ios only */
			headerTitleStyle?: ReactNative.StyleProp<ReactNative.TextStyle>;
			/** ios only */
			headerBackButtonTextStyle?: ReactNative.StyleProp<ReactNative.TextStyle>;
			/** ios only */
			renderHeader?: (backAction: () => void) => React.ReactElement<any>;
			/** ios only */
			renderButton?: (config: PickerButtonRenderConfig) => React.ReactElement<any>;
			/** ios only */
			headerBackButtonStyle?: ReactNative.StyleProp<ReactNative.ViewStyle>;
			/** ios only - for ReactNative.ModalProps */
			supportedOrientations?: (
				| "portrait"
				| "portrait-upside-down"
				| "landscape"
				| "landscape-left"
				| "landscape-right")[];
		}

		interface H1 extends ReactNative.TextProps { }
		/**
		 * see Widget Text.js
		 */
		interface H2 extends ReactNative.TextProps { }
		/**
		 * see Widget Text.js
		 */
		interface H3 extends ReactNative.TextProps { }
		/**
		 * see Widget Text.js
		 */
		interface BsStyle {
			success?: boolean;
			primary?: boolean;
			danger?: boolean;
			warning?: boolean;
			info?: boolean;
		}

		interface Badge extends ReactNative.ViewProps, BsStyle {
			textStyle?: ReactNative.StyleProp<ReactNative.TextStyle>;
		}
		/**
		 * see Widget DeckSwiper.js
		 */
		interface DeckSwiper<RowData = any> extends ReactNative.ViewProps {
			/**
			 * Array<any>
			 */
			dataSource?: Array<RowData>;
			/**
			 * Direction of iteration for elements
			 * Default: iterates in backward direction
			 */
			onSwipeLeft?: (rowData: RowData) => void;
			/**
			 * Direction of iteration for elements
			 * Default: iterates in forward direction
			 */
			onSwipeRight?: (rowData: RowData) => void;
			/**
			 * Takes a data entry from the data source and should return a renderable component to be rendered as the row.
			 */
			renderItem?: (rowData: RowData) => React.ReactElement<any>;
			looping?: boolean;
			onSwiping?: (direction: "left" | "right" | null, distance: number) => void;
			renderEmpty?: () => React.ReactElement<any>;
			renderBottom?: (rowData: RowData) => React.ReactElement<any>;
			renderTop?: (rowData: RowData) => React.ReactElement<any>;
		}
		/**
		 * see Widget Header.js
		 */
		interface Header extends ReactNative.ViewProps {
			/**
			 * Prop to be used with <Header> component to have Search bar onto the Header section of your screen.
			 */
			searchBar?: boolean;
			/**
			 * Wraps the search bar with predefined border options.
			 * Default: regular
			 */
			rounded?: boolean;
			/**
			 * It is advisable to use hasTabs prop with Header while using Tab
			 */
			hasTabs?: boolean;
			noShadow?: boolean;
			hasSubtitle?: boolean;
			span?: boolean;
			androidStatusBarColor?: string;
			iosBarStyle?: ReactNative.StatusBarStyle;
			hasSegment?: boolean;
		}

		interface Left extends ReactNative.ViewProps { }

		interface Body extends ReactNative.ViewProps { }

		interface Right extends ReactNative.ViewProps { }

		/**
		 * see Widget FooterTab.js
		 */
		interface FooterTab extends ReactNative.ViewProps { }
		/**
		 * see Widget Footer.js
		 */
		interface Footer extends ReactNative.ViewProps { }
		/**
		 * see Widget Title.js
		 */
		interface Title extends ReactNative.TextProps { }
		/**
		 * see Widget Subtitle/index.js
		 */
		interface Subtitle extends ReactNative.TextProps { }
		/**
		 * see Widget Container.js
		 */
		interface Container extends ReactNative.ViewProps { }
		/**
		 * see Widget Content.js
		 */
		interface Content extends KeyboardAwareScrollViewProps {
			padder?: boolean;
			disableKBDismissScroll?: boolean;
		}
		/**
		 * see Widget Button.js
		 */
		interface Button extends ReactNative.TouchableOpacityProps, BsStyle {
			/**
			 * Block level button
			 */
			block?: boolean;
			/**
			 * Vertical button (changes flex-direction to column for contents)
			 */
			vertical?: boolean;
			/**
			 * Button with badges (as used in Footer with Badge)
			 */
			badge?: boolean;
			/**
			 * Gives you effect of Icon-buttons.
			 * To have button with transparent background, include this prop.
			 */
			transparent?: boolean;
			color?: string;
			/**
			 * Applies outline button style.
			 */
			bordered?: boolean;
			/**
			 * Renders button with slightly round shaped edges.
			 */
			rounded?: boolean;
			/**
			 * For large size button
			 */
			large?: boolean;
			/**
			 * For small size button
			 */
			small?: boolean;
			/**
			 * Used for Icon alignment.
			 * Aligns icon to the left in button.
			 * By default, icons are aligned to the left in button.
			 */
			iconLeft?: boolean;
			/**
			 * Used for Icon alignment.
			 * Aligns icon to the right in button.
			 */
			iconRight?: boolean;
			/**
			 * Disables onPress option for button
			 */
			disabled?: boolean;
			active?: boolean;
			full?: boolean;
			light?: boolean;
			dark?: boolean;
			/**
			 * [android] colored ripple effect
			 */
			androidRippleColor?: string;
			/**
			 * Used for styling when buttons are part of a Segment
			 */
			first?: boolean;
			last?: boolean;
		}
		/**
		 * see Widget List.js
		 */
		interface List<RowData = any> extends ReactListViewProperties {
			listBorderColor?: string;
			listDividerBg?: string;
			listNoteColor?: string;
			listItemPadding?: number;
			listNoteSize?: number;
			inset?: boolean;
			/**
			 * Array of data chunks to render iteratively.
			 */
			dataArray?: Array<RowData>;
			renderRow?: (
				rowData: RowData,
				sectionID: string | number,
				rowID: string | number,
				highlightRow?: boolean
			) => React.ReactElement<any>;
			dataSource?: ReactNative.ListViewDataSource;
			disableLeftSwipe?: boolean;
			disableRightSwipe?: boolean;
			rightOpenValue?: number;
			leftOpenValue?: number;
			renderRightHiddenRow?: (
				rowData: RowData,
				sectionID: string | number,
				rowID: string | number,
				rowMap?: any
			) => React.ReactElement<any>;
			renderLeftHiddenRow?: (
				rowData: RowData,
				sectionID: string | number,
				rowID: string | number,
				rowMap?: any
			) => React.ReactElement<any>;
			rowHasChanged?: (r1: any, r2: any) => boolean;
			onRowOpen?: (secId: string | number, rowId: string | number, rowMap: { [key: string]: any }) => void;
			onRowClose?: (secId: string | number, rowId: string | number, rowMap: { [key: string]: any }) => void;
			onRowDidOpen?: (secId: string | number, rowId: string | number, rowMap: { [key: string]: any }) => void;
			onRowDidClose?: (secId: string | number, rowId: string | number, rowMap: { [key: string]: any }) => void;
			swipeToOpenPercent?: number;
			closeOnRowBeginSwipe?: boolean;
			closeOnScroll?: boolean;
			closeOnRowPress?: boolean;
			recalculateHiddenLayout?: boolean;
			previewFirstRow?: boolean;
			directionalDistanceChangeThreshold?: number;
			listViewRef?: (ref: ReactNative.ListView | null) => void;
		}
		/**
		 * see Widget ListItem.js
		 */
		interface ListItem extends ReactNative.TouchableHighlightProps {
			header?: boolean;
			noBorder?: boolean;
			/**
			 * Aligns icon to the right of ListItem.
			 * Default: false
			 */
			iconRight?: boolean;
			/**
			 * Aligns icon to the left of ListItem.
			 * Default: true
			 */
			iconLeft?: boolean;
			icon?: boolean;
			avatar?: boolean;
			thumbnail?: boolean;
			button?: boolean;
			/**
			 * Helps to organize and group the list items.
			 */
			itemDivider?: boolean;
			/**
			 * Sub caption for List Item.
			 */

			note?: string;
			itemHeader?: boolean;
			first?: boolean;
			last?: boolean;
			selected?: boolean;
			/**
			 * [android] colored ripple effect
			 */
			androidRippleColor?: string;
			searchBar?: boolean;
		}

		interface Separator extends ReactNative.ViewProps {
			bordered?: boolean;
			noTopBorder?: boolean;
			group?: boolean;
			noBottomBorder?: boolean;
		}

		/**
		 * see Widget CardItem.js
		 */
		interface CardItemSharedProps {
			header?: boolean;
			footer?: boolean;
			cardBody?: boolean;
			bordered?: boolean;
		}
		interface CardItemWithButton extends CardItemSharedProps, ReactNative.TouchableOpacityProps {
			button: true;
		}
		interface CardItemWithoutButton extends CardItemSharedProps, ReactNative.ViewProps {
			button?: false;
		}
		type CardItem = CardItemWithButton | CardItemWithoutButton;

		/**
		 * Override React ListViewProperties
		 */
		interface ReactListViewProperties
			extends ReactNative.ScrollViewProps,
				React.Props<ReactNative.ListView> {
			/**
			 * Flag indicating whether empty section headers should be rendered.
			 * In the future release empty section headers will be rendered by
			 * default, and the flag will be deprecated. If empty sections are not
			 * desired to be rendered their indices should be excluded from
			 * sectionID object.
			 */
			enableEmptySections?: boolean;

			/**
			 * How many rows to render on initial component mount.  Use this to make
			 * it so that the first screen worth of data apears at one time instead of
			 * over the course of multiple frames.
			 */
			initialListSize?: number;

			/**
			 * (visibleRows, changedRows) => void
			 *
			 * Called when the set of visible rows changes.  `visibleRows` maps
			 * { sectionID: { rowID: true }} for all the visible rows, and
			 * `changedRows` maps { sectionID: { rowID: true | false }} for the rows
			 * that have changed their visibility, with true indicating visible, and
			 * false indicating the view has moved out of view.
			 */
			onChangeVisibleRows?: (
				visibleRows: Array<{ [sectionId: string]: { [rowID: string]: boolean } }>,
				changedRows: Array<{ [sectionId: string]: { [rowID: string]: boolean } }>
			) => void;

			/**
			 * Called when all rows have been rendered and the list has been scrolled
			 * to within onEndReachedThreshold of the bottom.  The native scroll
			 * event is provided.
			 */
			onEndReached?: () => void;

			/**
			 * Threshold in pixels for onEndReached.
			 */
			onEndReachedThreshold?: number;

			/**
			 * Number of rows to render per event loop.
			 */
			pageSize?: number;

			/**
			 * A performance optimization for improving scroll perf of
			 * large lists, used in conjunction with overflow: 'hidden' on the row
			 * containers.  Use at your own risk.
			 */
			removeClippedSubviews?: boolean;

			/**
			 * () => renderable
			 *
			 * The header and footer are always rendered (if these props are provided)
			 * on every render pass.  If they are expensive to re-render, wrap them
			 * in StaticContainer or other mechanism as appropriate.  Footer is always
			 * at the bottom of the list, and header at the top, on every render pass.
			 */
			renderFooter?: () => React.ReactElement<any>;

			/**
			 * () => renderable
			 *
			 * The header and footer are always rendered (if these props are provided)
			 * on every render pass.  If they are expensive to re-render, wrap them
			 * in StaticContainer or other mechanism as appropriate.  Footer is always
			 * at the bottom of the list, and header at the top, on every render pass.
			 */
			renderHeader?: () => React.ReactElement<any>;

			/**
			 * (rowData, sectionID, rowID) => renderable
			 * Takes a data entry from the data source and its ids and should return
			 * a renderable component to be rendered as the row.  By default the data
			 * is exactly what was put into the data source, but it's also possible to
			 * provide custom extractors.
			 */
			renderRow?: (
				rowData: any,
				sectionID: string | number,
				rowID: string | number,
				highlightRow?: boolean
			) => React.ReactElement<any>;

			/**
			 * A function that returns the scrollable component in which the list rows are rendered.
			 * Defaults to returning a ScrollView with the given props.
			 */
			renderScrollComponent?: (
				props: ReactNative.ScrollViewProps
			) => React.ReactElement<ReactNative.ScrollViewProps>;

			/**
			 * (sectionData, sectionID) => renderable
			 *
			 * If provided, a sticky header is rendered for this section.  The sticky
			 * behavior means that it will scroll with the content at the top of the
			 * section until it reaches the top of the screen, at which point it will
			 * stick to the top until it is pushed off the screen by the next section
			 * header.
			 */
			renderSectionHeader?: (sectionData: any, sectionId: string | number) => React.ReactElement<any>;

			/**
			 * (sectionID, rowID, adjacentRowHighlighted) => renderable
			 * If provided, a renderable component to be rendered as the separator below each row
			 * but not the last row if there is a section header below.
			 * Take a sectionID and rowID of the row above and whether its adjacent row is highlighted.
			 */
			renderSeparator?: (
				sectionID: string | number,
				rowID: string | number,
				adjacentRowHighlighted?: boolean
			) => React.ReactElement<any>;

			/**
			 * How early to start rendering rows before they come on screen, in
			 * pixels.
			 */
			scrollRenderAheadDistance?: number;

			/**
			 * An array of child indices determining which children get docked to the
			 * top of the screen when scrolling. For example, passing
			 * `stickyHeaderIndices={[0]}` will cause the first child to be fixed to the
			 * top of the scroll view. This property is not supported in conjunction
			 * with `horizontal={true}`.
			 * @platform ios
			 */
			stickyHeaderIndices?: number[];

			ref?: React.Ref<ReactNative.ListView & ReactNative.ScrollView & ReactNative.View>;
		}
		/**
		 * see Widget Card.js
		 */
		interface Card<RowData = any>
			extends Pick<ReactNative.ListViewProps, Exclude<keyof ReactNative.ListViewProps, 'listViewDataSource' | 'renderRow' | 'dataSource'>> {
			dataArray?: Array<RowData>;
			transparent?: boolean;
			noShadow?: boolean;
			renderRow?: (
				rowData: RowData,
				sectionID: string | number,
				rowID: string | number,
				highlightRow?: boolean
			) => React.ReactElement<any>;
		}
		/**
		 * see Widget InputGroup.js
		 */
		interface InputGroup extends ReactNative.ViewProps {
			/**
			 * The border color of textbox for valid input.
			 */
			success?: boolean;
			/**
			 * The border color of textbox for invalid input.
			 */
			error?: boolean;
			/**
			 * Disables inputting data.
			 */
			disabled?: boolean;
			regular?: boolean;
			underline?: boolean;
			rounded?: boolean;
		}
		/**
		 * see Widget Input.js
		 */
		interface Input extends ReactNative.TextInputProps {
			/**
			 * Disables inputting data.
			 */
			disabled?: boolean;
			getRef?: React.Ref<ReactNative.TextInput>;
		}
		/**
		 * see Widget Textarea.js
		 */
		interface Textarea extends ReactNative.TextInputProps {
			rowSpan: number;
			bordered?: boolean;
			underline?: boolean;
		}

		interface Label extends ReactNative.TextProps { }

		type IconType = "Entypo" | "EvilIcons" | "Feather" | "FontAwesome" | "Foundation" | "Ionicons" | "MaterialCommunityIcons" | "MaterialIcons" | "Octicons" | "SimpleLineIcons" | "Zocial";
		interface IconNB extends RNVIcon.IconProps {
			type?: IconType;
		}
		/**
		 * see Widget Icon/index.js
		 */
		type Icon = Pick<RNVIcon.IconProps, Exclude<keyof RNVIcon.IconProps, "name">> & {
			type?: IconType;
			active?: boolean;
			name?: string;
			ios?: string;
			android?: string;
		};

		/**
		 * see Widget Icon.js
		 */
		interface Thumbnail extends ReactNative.ImageProps {
			/**
			 * Dimension of thumbnail.
			 * Default: 30
			 */
			size?: number;
			/**
			 * Represents shape of thumbnail.
			 * By default thumbnail is circle in shape.
			 */
			circular?: boolean;
			/**
			 * Represents shape of thumbnail.
			 * By default thumbnail is circle in shape.
			 */
			square?: boolean;
			small?: boolean;
			large?: boolean;
		}
		/**
		 * see Widget Spinner.js
		 */
		type Spinner = (ReactNative.ActivityIndicatorProps | ReactNative.ActivityIndicatorIOSProps) & {
			/**
			 * Use the inverseSpinnerColor instead of the defaultSpinnerColor
			 */
			inverse?: boolean;
		};
		/**
		 * see Widget CheckBox.js
		 */
		interface CheckBox extends ReactNative.TouchableOpacityProps {
			checked?: boolean;
			color?: string;
		}
		/**
		 * see Widget CheckBox.js
		 */
		interface Radio extends ReactNative.TouchableOpacityProps {
			selected?: boolean;
			standardStyle?: boolean;
		}
		/**
		 * vendor react-native-drawer
		 */
		interface Drawer extends DrawerProperties { }
		interface ScrollableTab {
			goToPage?: (pageNumber: number) => void;
			activeTab?: number;
			tabs?: Array<any>;
			backgroundColor?: string;
			activeTextColor?: string;
			inactiveTextColor?: string;
			scrollOffset?: number;
			style?: ReactNative.StyleProp<ReactNative.ViewStyle>;
			tabStyle?: ReactNative.StyleProp<ReactNative.ViewStyle>[];
			tabsContainerStyle?: ReactNative.StyleProp<ReactNative.ViewStyle>;
			renderTab?: (
				name: string,
				page: number,
				isTabActive: boolean,
				goToPage: ((pageNumber: number) => void) | undefined,
				measureTab: (page: number, event: ReactNative.LayoutChangeEvent) => void,
				tabStyle: ReactNative.StyleProp<ReactNative.ViewStyle>,
				activeTabStyle: ReactNative.StyleProp<ReactNative.ViewStyle>,
				textStyle: ReactNative.StyleProp<ReactNative.TextStyle>,
				activeTextStyle: ReactNative.StyleProp<ReactNative.TextStyle>,
				tabHeaderStyle: ReactNative.StyleProp<ReactNative.ViewStyle>
			) => React.ReactElement<any>;
			underlineStyle?: ReactNative.StyleProp<ReactNative.ViewStyle>;
			onScroll?: (event?: ReactNative.NativeSyntheticEvent<ReactNative.NativeScrollEvent>) => void;
			activeTabStyle?: ReactNative.StyleProp<ReactNative.ViewStyle>[];
			tabHeaderStyle?: ReactNative.StyleProp<ReactNative.ViewStyle>[];
			scrollValue?: ReactNative.Animated.Value;
		}

		interface RenderTabBarProps {
			goToPage: (pageNumber: number) => void;
			/**
			 * Items coming from Tab children
			 */
			tabs: React.ReactChild[];
			tabStyle: ReactNative.StyleProp<ReactNative.ViewStyle>[];
			activeTabStyle: ReactNative.StyleProp<ReactNative.ViewStyle>[];
			textStyle: ReactNative.StyleProp<ReactNative.TextStyle>[];
			activeTextStyle: ReactNative.StyleProp<ReactNative.TextStyle>[];
			tabHeaderStyle: ReactNative.StyleProp<ReactNative.ViewStyle>[];
			activeTab: number;
			scrollValue: ReactNative.Animated.Value;
			containerWidth: number;
		}

		/**
		 * see Widget Tabs.js
		 */
		interface Tabs {
			renderTabBar?: false | ((props: RenderTabBarProps) => React.ReactElement<any>);
			tabBarPosition?: "top" | "bottom" | "overlayTop" | "overlayBottom";
			onChangeTab?: (tab: { i: number; ref: Tab | null; from: number }) => void;
			onScroll?: (value: number) => void;
			locked?: boolean;
			initialPage?: number;
			page?: number;
			tabBarUnderlineStyle?: ReactNative.StyleProp<ReactNative.ViewStyle>;
			tabBarBackgroundColor?: string;
			tabBarActiveTextColor?: string;
			tabBarInactiveTextColor?: string;
			tabBarTextStyle?: ReactNative.StyleProp<ReactNative.TextStyle>;
			tabContainerStyle?: ReactNative.StyleProp<ReactNative.ViewStyle>;
			style?: ReactNative.StyleProp<ReactNative.ViewStyle>;
			contentProps?: ReactNative.ScrollViewProps;
			scrollWithoutAnimation?: boolean;
			prerenderingSiblingsNumber?: number;
		}

		interface Tab extends ReactNative.ViewProps {
			heading: React.ReactChild;
			tabStyle?: ReactNative.StyleProp<ReactNative.ViewStyle>;
			activeTabStyle?: ReactNative.StyleProp<ReactNative.ViewStyle>;
			textStyle?: ReactNative.StyleProp<ReactNative.TextStyle>;
			activeTextStyle?: ReactNative.StyleProp<ReactNative.TextStyle>;
		}

		interface TabHeading extends ReactNative.ViewProps {
			scrollable?: boolean;
			active?: boolean;
		}

		interface TabContainer extends ReactNative.ViewProps { }

		interface DefaultTabBar {
			containerWidth?: number;
			scrollValue: ReactNative.Animated.Value;
			goToPage?: (pageNumber: number) => void;
			activeTab?: number;
			tabs: React.ReactChild[];
			backgroundColor?: string;
			activeTextColor?: string;
			inactiveTextColor?: string;
			tabStyle?: ReactNative.StyleProp<ReactNative.ViewStyle>;
			underlineStyle?: ReactNative.StyleProp<ReactNative.ViewStyle>;
			tabContainerStyle?: ReactNative.StyleProp<ReactNative.ViewStyle>;
			renderTab?: (
				name: string,
				page: number,
				isTabActive: boolean,
				goToPage: ((pageNumber: number) => void) | undefined,
				tabStyle: ReactNative.StyleProp<ReactNative.ViewStyle>,
				activeTabStyle: ReactNative.StyleProp<ReactNative.ViewStyle>,
				textStyle: ReactNative.StyleProp<ReactNative.TextStyle>,
				activeTextStyle: ReactNative.StyleProp<ReactNative.TextStyle>,
				tabHeaderStyle: ReactNative.StyleProp<ReactNative.ViewStyle>
			) => React.ReactElement<any>;
		}

		interface Item extends ReactNative.TouchableOpacityProps {
			fixedLabel?: boolean;
			floatingLabel?: boolean;
			inlineLabel?: boolean;
			stackedLabel?: boolean;
			placeholderLabel?: boolean;
			bordered?: boolean;
			regular?: boolean;
			underline?: boolean;
			rounded?: boolean;
			disabled?: boolean;
			error?: boolean;
			placeholder?: string;
			success?: boolean;
			last?: boolean;
		}

		interface Form extends ReactNative.ViewProps { }

		interface Fab extends Pick<ReactNative.TouchableOpacityProps, Exclude<keyof ReactNative.TouchableOpacityProps, "onPress">> {
			active?: boolean;
			direction?: "down" | "up" | "left" | "right";
			containerStyle?: ReactNative.StyleProp<ReactNative.ViewStyle>;
			onPress?: () => void;
			position?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
		}

		interface Segment extends ReactNative.ViewProps { }

		interface Root extends ReactNative.TextProps { }

		interface StyleProvider {
			/**
			 * This should be the output value from calling getTheme(variables).
			 */
			style?: object;
		}

		/**
		 * from react-native/Animated/TimingAnimationConfig.toValue
		 */
		type SwipeToValue = number | ReactNative.Animated.AnimatedValue | { x: number; y: number } | ReactNative.Animated.AnimatedValueXY;
		interface SwipeRow {
			leftOpenValue?: number;
			rightOpenValue?: number;
			closeOnRowPress?: boolean;
			disableLeftSwipe?: boolean;
			disableRightSwipe?: boolean;
			recalculateHiddenLayout?: boolean;
			preview?: boolean;
			previewDuration?: number;
			directionalDistanceChangeThreshold?: number;
			swipeToOpenPercent?: number;
			stopLeftSwipe?: number;
			stopRightSwipe?: number;
			onRowOpen?: (toValue: SwipeToValue) => void;
			onRowClose?: () => void;
			left?: React.ReactElement<any>;
			body?: React.ReactElement<any>;
			right?: React.ReactElement<any>;
			style?: ReactNative.ViewStyle;
			/**
			 * These additional properties are injected when SwipeRow is inside a List from ListProperties
			 */
			onRowDidClose?: () => void;
			onRowDidOpen?: () => void;
			/**
			 * from react-native/Animated/SpringAnimationConfig
			 */
			friction?: number;
			/**
			 * from react-native/Animated/SpringAnimationConfig
			 */
			tension?: number;
			/**
			 * from react-native/Animated/TimingAnimationConfig.toValue
			 */
			previewOpenValue?: SwipeToValue;
			/**
			 * set false when user is moving horizontally (disable scrolling on the listView parent)
			 * set true when swipe action completed
			 */
			setScrollEnabled?: (enable: boolean) => void;
			swipeGestureBegan?: () => void;
			onRowPress?: () => void;
			closeRow?: () => void;
		}

		interface Variables {
			platformStyle?: string;
			platform: ReactNative.PlatformOSType;

			androidRipple: boolean;
			androidRippleColor: string;
			androidRippleColorDark: string;
			btnUppercaseAndroidText: boolean;

			badgeBg: string;
			badgeColor: string;
			badgePadding: number;

			btnFontFamily: string;
			btnDisabledBg: string;
			buttonPadding: number;
			btnPrimaryBg: string;
			btnPrimaryColor: string;
			btnInfoBg: string;
			btnInfoColor: string;
			btnSuccessBg: string;
			btnSuccessColor: string;
			btnDangerBg: string;
			btnDangerColor: string;
			btnWarningBg: string;
			btnWarningColor: string;
			btnTextSize: number;
			btnTextSizeLarge: number;
			btnTextSizeSmall: number;
			borderRadiusLarge: number;
			iconSizeLarge: number;
			iconSizeSmall: number;

			cardDefaultBg: string;
			cardBorderColor: string;

			CheckboxRadius: number;
			CheckboxBorderWidth: number;
			CheckboxPaddingLeft: number;
			CheckboxPaddingBottom: number;
			CheckboxIconSize: number;
			CheckboxIconMarginTop?: number;
			CheckboxFontSize: number;
			DefaultFontSize: number;
			checkboxBgColor: string;
			checkboxSize: number;
			checkboxTickColor: string;

			brandPrimary: string;
			brandInfo: string;
			brandSuccess: string;
			brandDanger: string;
			brandWarning: string;
			brandDark: string;
			brandLight: string;

			fontFamily: string;
			fontSizeBase: number;
			fontSizeH1: number;
			fontSizeH2: number;
			fontSizeH3: number;

			footerHeight: number;
			footerDefaultBg: string;
			footerPaddingBottom: number;

			tabBarTextColor: string;
			tabBarTextSize: number;
			activeTab: string;
			sTabBarActiveTextColor: string;
			tabBarActiveTextColor: string;
			tabActiveBgColor: string;

			toolbarBtnColor: string;
			toolbarDefaultBg: string;
			toolbarHeight: number;
			toolbarSearchIconSize: number;
			toolbarInputColor: string;
			searchBarHeight: number;
			searchBarInputHeight: number;
			toolbarBtnTextColor: string;
			iosStatusbar: "dark-content" | "light-content";
			toolbarDefaultBorder: string;
			statusBarColor: string;
			darkenHeader: string;

			iconFamily: string;
			iconFontSize: number;
			iconHeaderSize: number;

			inputFontSize: number;
			inputBorderColor: string;
			inputSuccessBorderColor: string;
			inputErrorBorderColor: string;
			inputHeightBase: number;
			inputColor: string;
			inputColorPlaceholder: string;

			btnLineHeight: number;
			lineHeightH1: number;
			lineHeightH2: number;
			lineHeightH3: number;
			lineHeight: number;

			listBg: string;
			listBorderColor: string;
			listDividerBg: string;
			listBtnUnderlayColor: string;
			listItemPadding: number;
			listNoteColor: string;
			listNoteSize: number;

			defaultProgressColor: string;
			inverseProgressColor: string;

			radioBtnSize: number;
			radioSelectedColorAndroid: string;
			radioBtnLineHeight: number;
			radioColor: string;

			segmentBackgroundColor: string;
			segmentActiveBackgroundColor: string;
			segmentTextColor: string;
			segmentActiveTextColor: string;
			segmentBorderColor: string;
			segmentBorderColorMain: string;

			defaultSpinnerColor: string;
			inverseSpinnerColor: string;

			tabDefaultBg: string;
			topTabBarTextColor: string;
			topTabBarActiveTextColor: string;
			topTabBarBorderColor: string;
			topTabBarActiveBorderColor: string;

			tabBgColor: string;
			tabFontSize: number;

			textColor: string;
			inverseTextColor: string;
			noteFontSize: number;
			defaultTextColor: string;

			titleFontfamily: string;
			titleFontSize: number;
			subTitleFontSize: number;
			subtitleColor: string;
			titleFontColor: string;

			borderRadiusBase: number;
			borderWidth: number;
			contentPadding: number;
			dropdownLinkColor: string;
			inputLineHeight: number;
			deviceWidth: number;
			deviceHeight: number;
			isIphoneX: boolean;
			inputGroupRoundedBorderRadius: number;
		}

		interface InjectedStyleProps {
			style: ReactNative.StyleProp<any>;
			styleName: string;
			virtual: boolean;
		}

		interface ConnectStyleOptions {
			virtual?: boolean;
			withRef?: boolean;
		}

		interface ToastProps extends ReactNative.ViewProps { }

		interface ActionSheet extends ReactNative.ViewProps {
			autoHide?: boolean;
			duration?: number;
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
	export class Container extends React.Component<NativeBase.Container, any> {
		public _root: ReactNative.View | null;
	}
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
	export class Header extends React.Component<NativeBase.Header, any> {
		public _root: ReactNative.View | null;
	}
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
	export class Content extends React.Component<NativeBase.Content, any> {
		public _root: ReactNative.View | null;
	}

	/**
	 * NativeBase.Left
	 */
	export class Left extends React.Component<NativeBase.Left, any> {
		public _root: ReactNative.View | null;
	}
	/**
	 * NativeBase.Right
	 */
	export class Right extends React.Component<NativeBase.Right, any> {
		public _root: ReactNative.View | null;
	}
	/**
	 * NativeBase.Body
	 */
	export class Body extends React.Component<NativeBase.Body, any> {
		public _root: ReactNative.View | null;
	}

	export class TabContent extends React.Component<NativeBase.Content, any> {
		public _root: ReactNative.View | null;
	}
	/**
	 * NativeBase.FooterTab
	 */
	export class FooterTab extends React.Component<NativeBase.FooterTab, any> {
		public _root: ReactNative.View | null;
	}
	/**
	 * NativeBase.Footer
	 */
	export class Footer extends React.Component<NativeBase.Footer, any> {
		public _root: ReactNative.View | null;
	}
	/**
	 * NativeBase.Title
	 */
	export class Title extends React.Component<NativeBase.Title, any> {
		public _root: ReactNative.Text | null;
	}

	export class Subtitle extends React.Component<NativeBase.Subtitle, any> {
		public _root: ReactNative.Text | null;
	}

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
	export class Button extends React.Component<NativeBase.Button, any> {
		/** 
		 * (['ios', 'web'].contains(Platform.OS) || !variables.androidRipple || Platform.Version < 21)
		 *   ? ReactNative.TouchableOpacity
		 *   : ReactNative.TouchableNativeFeedback
		*/
		public _root: ReactNative.TouchableOpacity | ReactNative.TouchableNativeFeedback | null;
	}
	/**
	 * NativeBase.View
	 */
	export class View extends React.Component<NativeBase.View, any> {
		public _root: ReactNative.View | null;
	}
	/**
	 * NativeBase.Text
	 */
	export class Text extends React.Component<NativeBase.Text, any> {
		public _root: ReactNative.Text | null;
	}
	/**
	 * NativeBase.Switch
	 */
	export class Switch extends React.Component<NativeBase.Switch, any> {
		public _root: ReactNative.Switch | null;
	}
	/**
	 * NativeBase.Picker
	 */
	export class Picker extends React.Component<NativeBase.Picker, any> {
		public _root: ReactNative.Picker | null;
	}
	export namespace Picker {
		export class Item extends React.Component<ReactNative.PickerItemProps, any> {
			public _root: ReactNative.PickerItem | null;
		}
	}
	/**
	 * NativeBase.List
	 *
	 * A base component for specifying lists of information. List must contain one or more list elements.
	 * Props provide configurability for several features. Provides a number of attributes that follows styling and
	 * interaction guidelines for each platform, so that they are intuitive for users to  interact with.
	 *
	 * @deprecated: List is deprecated. Use of List for dynamic list generation is discouraged. Use Flatlist instead.
	 */
	export class List extends React.Component<NativeBase.List, any> {
		/**
		 * (props.dataArray.length > 0 || props.renderLeftHiddenRow || props.renderRightHiddenRow)
		 *   ? ReactNative.ListView
		 *   : ReactNative.View
		 */
		public _root: ReactNative.ListView | ReactNative.View | null;
		/**
		 * (props.renderLeftHiddenRow || props.renderRightHiddenRow) ? ReactNative.ListView : undefined
		 */
		public _listView?: ReactNative.ListView | null;
	}
	/**
	 * NativeBase.ListItem
	 *
	 * This is the child component of List.
	 * Defines a list item.
	 * Adds border at bottom of each ListItem.
	 * List takes any number of ListItem.
	 */
	export class ListItem extends React.Component<NativeBase.ListItem, any> {
		/** 
		 * (['ios', 'web'].contains(Platform.OS) || !variables.androidRipple || Platform.Version <= 21)
		 *   ? ReactNative.TouchableOpacity
		 *   : ReactNative.TouchableNativeFeedback
		*/
		public _root: ReactNative.TouchableHighlight | ReactNative.TouchableNativeFeedback | null;
	}
	/**
	 * NativeBase.H1
	 */
	export class H1 extends React.Component<NativeBase.H1, any> {
		public _root: ReactNative.Text | null;
	}
	/**
	 * NativeBase.H2
	 */
	export class H2 extends React.Component<NativeBase.H2, any> {
		public _root: ReactNative.Text | null;
	}
	/**
	 * NativeBase.H3
	 */
	export class H3 extends React.Component<NativeBase.H3, any> {
		public _root: ReactNative.Text | null;
	}
	/**
	 * NativeBase.InputGroup
	 *
	 * A foundational component for inputting text into the app via a keyboard.
	 * Props provide configurability for several features, such as auto-correction, auto-capitalization, placeholder text, and different keyboard types, such as a numeric keypad.
	 * Provides a number of attributes that follows styling and interaction guidelines for each platform, so that they are intuitive for users to interact with.
	 */
	export class InputGroup extends React.Component<NativeBase.InputGroup, any> {
		public static propTypes: any;
		public _root: ReactNative.View | null;
	}
	/**
	 * NativeBase.Input
	 */
	export class Input extends React.Component<NativeBase.Input, any> {
		public _root: ReactNative.TextInput | null;
	}
	/**
	 * NativeBase.Textarea
	 */
	export class Textarea extends React.Component<NativeBase.Textarea, any> {
		public _root: ReactNative.TextInput | null;
	}
	/**
	 * Styled NativeBase.Icon
	 */
	export class IconNB extends React.Component<NativeBase.Icon, any> {
		public _root: RNVIcon.Icon | null;
	}
	/**
	 * NativeBase.Icon
	 */
	export class Icon extends React.Component<NativeBase.Icon, any> {
		public _root: IconNB | null;
	}
	/**
	 * NativeBase.Thumbnail
	 *
	 * Thumbnail component works very similar to Image.
	 * It helps you to showcase an image with variuos dimensions and shapes.
	 * By default, Thumbnail renders an image in circular shape.
	 */
	export class Thumbnail extends React.Component<NativeBase.Thumbnail, any> {
		public _root: ReactNative.Image | null;
	}
	/**
	 * NativeBase.Card
	 *
	 * Card is a flexible and extensible content container.
	 * It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.
	 * NativeBase Cards support a wide variety of content, including images, text, list groups, links, and more.
	 * Mix and match multiple content types to create the card you need.
	 */
	export class Card extends React.Component<NativeBase.Card, any> {
		/**
		 * (props.dataArray && props.renderRow) ? undefined : ReactNative.View
		 */
		public _root: ReactNative.View | Card | null;
	}
	/**
	 * NativeBase.CardItem
	 *
	 * This is the child component of Card. Works very similar to the list items of list. Card takes any number of CardItem.
	 * CardItem component takes input such as: Text, Button, Image, Thumbnail, Icon.
	 */
	export class CardItem extends React.Component<NativeBase.CardItem, any> {
		/**
		 * (props.button) ? ReactNative.TouchableOpacity | ReactNative.View
		 */
		public _root: ReactNative.TouchableOpacity | ReactNative.View | null;
	}
	/**
	 * NativeBase.DeckSwiper
	 *
	 * Looking at data one piece at a time is more efficient when you consider people you might want to date, restaurants, streaming music, or local events you might want to check out.
	 * NativeBase Card Swiper helps you evaluate one option at a time, instead of selecting from a set of options.
	 */
	export class DeckSwiper extends React.Component<NativeBase.DeckSwiper, any> {
		public _root: DeckSwiper | null;
		public swipeLeft: () => void;
		public swipeRight: () => void;
	}
	/**
	 * NativeBase.Badge
	 *
	 * All of us must have seen notification badges somewhere, such as on smart phones or facebook.
	 */
	export class Badge extends React.Component<NativeBase.Badge, any> {
		public _root: ReactNative.View | null;
	}
	/**
	 * NativeBase.Spinner
	 */
	export class Spinner extends React.Component<NativeBase.Spinner, any> {
		public _root: ReactNative.ActivityIndicator | ReactNative.ActivityIndicatorIOS | null;
	}
	/**
	 * NativeBase.CheckBox
	 */
	export class CheckBox extends React.Component<NativeBase.CheckBox, any> {
		public _root: ReactNative.TouchableOpacity | null;
	}
	/**
	 * NativeBase.Radio
	 */
	export class Radio extends React.Component<NativeBase.Radio, any> {
		public _root: ReactNative.TouchableOpacity | null;
	}
	/**
	 * NativeBase.Drawer
	 */
	export class Drawer extends React.Component<NativeBase.Drawer, any> {
		public _root: RNDrawer | null;
	}
	/**
	 * NativeBase.ScrollableTab
	 */
	export class ScrollableTab extends React.Component<NativeBase.ScrollableTab, any> {
		public _root: ScrollableTab | null;
		public _scrollView: ReactNative.ScrollView | null;
	}
	/**
	 * NativeBase.Tabs
	 *
	 * Tabs are a horizontal region of buttons or links that allow for a consistent navigation experience between screens.
	 * It can contain any combination of text and icons, and is a popular method for enabling mobile navigation.
	 */
	export class Tabs extends React.Component<NativeBase.Tabs, any> {
		public _root: Tabs | null;
		public scrollView: ReactNative.ScrollView | null;
	}
	/**
	 * NativeBase.Tab
	 */
	export class Tab extends React.Component<NativeBase.Tab, any> {
		public _root: ReactNative.View | null;
	}

	export class TabHeading extends React.Component<NativeBase.TabHeading, any> {
		public _root: ReactNative.View | null;
	}
	/**
	 * NativeBase.Item
	 */
	export class Item extends React.Component<NativeBase.Item, any> {
		public _root: ReactNative.TouchableOpacity | null;
	}
	/**
	 * NativeBase.Form
	 */
	export class Form extends React.Component<NativeBase.Form, any> {
		public _root: ReactNative.View | null;
	}
	/**
	 * NativeBase.Fab
	 */
	export class Fab extends React.Component<NativeBase.Fab, any> {
		public _root: Fab | null;
	}

	export class Separator extends React.Component<NativeBase.Separator, any> {
		public _root: ReactNative.View | null;
	}

	export class Label extends React.Component<NativeBase.Label, any> {
		public _root: ReactNative.Text | null;
	}

	/**
	 * Comes from native-base-shoutem-theme
	 */
	export class StyleProvider extends React.Component<NativeBase.StyleProvider, any> {	}

	/**
	 * Inner container for NativeBase.ActionSheet
	 */
	export class ActionSheetContainer extends React.Component<NativeBase.ActionSheet, any> { }
	/**
	 * NativeBase.ActionSheet
	 */
	export class ActionSheet extends React.Component<NativeBase.ActionSheet, any> {
		static show: (
			configuration: {
				options: string[] | Array<{ text: string, icon?: string, iconColor?: string }>;
				cancelButtonIndex?: number;
				destructiveButtonIndex?: number;
				title?: string;
			},
			onSelect: (index: number) => void
		) => void;
		public _root: ActionSheetContainer | null;
	}

	/**
	 * NativeBase.Segment
	 */
	export class Segment extends React.Component<NativeBase.Segment, any> {
		public _root: ReactNative.View | null;
	}

	/**
	 * NativeBase.Root component (required to wrap Toast or ActionSheet components).
	 */
	export class Root extends React.Component<NativeBase.Root, any> {
		public _root: ReactNative.View | null;
	}

	/**
	 * Inner component for NativeBase.SwipeRow
	 */
	export class SwipeRowBase extends React.Component<NativeBase.SwipeRow, any> {}
	/**
	 * NativeBase.SwipeRow
	 */
	export class SwipeRow extends React.Component<NativeBase.SwipeRow, any> {
		public _root: SwipeRowBase | null;
	}

	/**
	 * NativeBase.ScrollableTabBar
	 */
	export class ScrollableTabBar extends React.Component<NativeBase.ScrollableTab, any> {
		public _root: ReactNative.ScrollView | null;
	}

	/**
	 * NativeBase.TabContainer
	 */
	export class TabContainer extends React.Component<NativeBase.TabContainer, any> {
		public _root: ReactNative.View | null;
	}

	/**
	 * Inner component for NativeBase.DefaultTabBar
	 */
	export class DefaultTabBarBase extends React.Component<NativeBase.DefaultTabBar, any> { }
	/**
	 * NativeBase.DefaultTabBar
	 */
	export class DefaultTabBar extends React.Component<NativeBase.DefaultTabBar, any> {
		public _root: DefaultTabBarBase | null;
	}

	export class Toast extends React.Component<NativeBase.ToastProps, any> {
		public static show(configuration: {
			text: string;
			buttonText?: string;
			position?: "top" | "bottom" | "center";
			type?: "danger" | "success" | "warning";
			duration?: number;
			onClose?: () => void;
			textStyle?: ReactNative.TextStyle;
			buttonTextStyle?: ReactNative.TextStyle;
			buttonStyle?: ReactNative.ViewStyle;
			style?: ReactNative.ViewStyle;
		}): void;
		public _root: ReactNative.View | null;
	}

	/**
	 * Returns the Native Base Theme for the specified variables.
	 */
	export function getTheme(variables: NativeBase.Variables): object;

	export function mapPropsToStyleNames(styleNames: string[], props: { [key: string]: any }): string[];

	export const variables: NativeBase.Variables;

	export function connectStyle<P extends NativeBase.InjectedStyleProps>(
		componentStyleName: string,
		componentStyle?: object,
		mapPropsToStyleNames?: (styleNames: string[], props: { [key: string]: any }) => string[],
		options?: NativeBase.ConnectStyleOptions
	): (component: React.ComponentType<P>) => React.ComponentType<Pick<P, Exclude<keyof P, keyof NativeBase.InjectedStyleProps>>>;
}
