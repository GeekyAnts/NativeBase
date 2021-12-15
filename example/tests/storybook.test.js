/**
 * @jest-environment jsdom
 */
import initStoryshots from '@storybook/addon-storyshots';

jest.useFakeTimers();
global.setImmediate = global.setTimeout;
initStoryshots();
