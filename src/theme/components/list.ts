// const defaultProps = {
//   listStyle: {
//     borderWidth: 1,
//     borderColor: 'gray.300',
//     borderRadius: 'lg',
//   },
//   listItemStyle: {
//     borderBottomWidth: 1,
//     borderColor: 'gray.300',
//   },
//   lastListItemStyle: {
//     borderBottomWidth: 0,
//     borderRadius: 'lg',
//   },
//   listItemNumberingStyle: {
//     mr: 2,
//     fontWeight: 'bold',
//   },
//   listItemTextStyle: {
//     fontWeight: 'bold',
//     flex: 1,
//     pr: 2,
//   },
// };

// export default { defaultProps };

///// New Area
// List
export const List = {
  baseStyle: {
    borderWidth: 1,
    borderColor: 'gray.300',
    borderRadius: 'lg',
  },
};

// ListItem
export const ListItem = {
  baseStyle: {
    borderTopWidth: 1,
    borderColor: 'gray.300',
  },
  defaultProps: {
    start: 1,
  },
};

// ListIcon
export const ListIcon = {};
