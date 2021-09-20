export const combineContextAndProps = (context: any, props: any) => {
  return {
    ...context,
    ...props,
  };
};
