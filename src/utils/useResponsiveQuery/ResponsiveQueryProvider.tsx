import React from 'react';

type ResponsiveQueryContextType = {
  disableCSSMediaQueries?: boolean;
};

export const ResponsiveQueryContext = React.createContext<ResponsiveQueryContextType>(
  {
    disableCSSMediaQueries: false,
  }
);

export const ResponsiveQueryProvider = (
  props: ResponsiveQueryContextType & { children: React.ReactNode }
) => {
  const value = React.useMemo(
    () => ({
      disableCSSMediaQueries: props.disableCSSMediaQueries,
    }),
    [props.disableCSSMediaQueries]
  );

  return (
    <ResponsiveQueryContext.Provider value={value}>
      {props.children}
    </ResponsiveQueryContext.Provider>
  );
};
