import React from 'react';
import { useId } from '@react-native-aria/utils';
import omit from 'lodash.omit';
import type { IFormControlProps } from './types';
import { ariaAttr } from '../../../utils';
import { ResponsiveQueryContext } from '../../../utils/useResponsiveQuery/ResponsiveQueryProvider';
import uniqueId from 'lodash.uniqueid';

export type IFormControlContext = Omit<
  ReturnType<typeof useFormControlProvider>,
  'htmlProps'
>;

export const FormControlContext = React.createContext({});

export function useFormControlProvider(props: IFormControlProps) {
  const {
    nativeID: idProp,
    isRequired,
    isInvalid,
    isDisabled,
    isReadOnly,
    ...htmlProps
  } = props;

  let id = uniqueId();
  const responsiveQueryContext = React.useContext(ResponsiveQueryContext);
  const disableCSSMediaQueries = responsiveQueryContext.disableCSSMediaQueries;

  if (!disableCSSMediaQueries) {
    // This if statement technically breaks the rules of hooks, but is safe
    // because the condition never changes after mounting.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    id = useId();
  }

  // const id = '';
  // Generate all the required ids
  const nativeID = idProp || `field-${id}`;

  const labelId = `${nativeID}-label`;
  const feedbackId = `${nativeID}-feedback`;
  const helpTextId = `${nativeID}-helptext`;

  /**
   * Track whether the `FormErrorMessage` has been rendered.
   * We use this to append its id the the `aria-describedby` of the `input`.
   */
  const [hasFeedbackText, setHasFeedbackText] = React.useState(false);

  /**
   * Track whether the `FormHelperText` has been rendered.
   * We use this to append its id the the `aria-describedby` of the `input`.
   */
  const [hasHelpText, setHasHelpText] = React.useState(false);

  const context = {
    isRequired: !!isRequired,
    isInvalid: !!isInvalid,
    isReadOnly: !!isReadOnly,
    isDisabled: !!isDisabled,
    hasFeedbackText,
    setHasFeedbackText,
    hasHelpText,
    setHasHelpText,
    nativeID,
    labelId,
    feedbackId,
    helpTextId,
    htmlProps,
  };

  return context;
}

/**
 * React hook that provides the props that should be spread on to
 * input fields (`input`, `select`, `textarea`, etc.).
 *
 * It provides a convenient way to control a form fields, validation
 * and helper text.
 */
export function useFormControl(props: IFormControlProps) {
  const field = useFormControlContext();
  const describedBy: any[] = [];

  // Error message must be described first in all scenarios.
  if (field?.hasFeedbackText) describedBy.push(field?.feedbackId);
  if (field?.hasHelpText) describedBy.push(field?.helpTextId);
  const ariaDescribedBy = describedBy.join(' ');

  const cleanProps = omit(props, [
    'isInvalid',
    'isDisabled',
    'isReadOnly',
    'isRequired',
  ]);

  let nativeID = props?.nativeID;

  if (!nativeID && field?.nativeID) {
    nativeID = `${field?.nativeID}-input`;
  }

  return {
    ...cleanProps,
    nativeID: nativeID,
    disabled: props.isDisabled || field?.isDisabled,
    readOnly: props.isReadOnly || field?.isReadOnly,
    required: props.isRequired || field?.isRequired,
    accessibilityInvalid: ariaAttr(props.isInvalid || field?.isInvalid),
    accessibilityRequired: ariaAttr(props.isRequired || field?.isRequired),
    accessibilityReadOnly: ariaAttr(props.isReadOnly || field?.isReadOnly),
    accessibilityDescribedBy: ariaDescribedBy || undefined,
  };
}

export const useFormControlContext = () => {
  return (React.useContext(
    FormControlContext
  ) as unknown) as IFormControlContext;
};
