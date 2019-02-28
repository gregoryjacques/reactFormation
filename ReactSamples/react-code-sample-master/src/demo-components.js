import React from 'react';

import SimpleComponentClass from './creer-un-composant/class/Component';
import SimpleClassMethod from './creer-un-composant/class/Method';
import SimpleStateDemo from './creer-un-composant/state/State';
import ComponentUpdate from './creer-un-composant/class/ComponentUpdate';
import SimpleControlledComponent from './creer-un-composant/state/ControlledComponent';
import ApplicationFeed from './creer-un-composant/application/Feed';
import SimplePropsDemo from './creer-un-composant/props/Props';
import PropTypesDemo from './creer-un-composant/props/PropTypes';
import ReservedProps from './creer-un-composant/props/Reserved';
import ComponentErrors from './creer-un-composant/errors/Errors';
import ApplicationSplitComponentsFeed from './creer-un-composant/application/FeedSplitComponents';

import RenderProps from './notions-avancees/props/RenderProps';
import LogUpdate from './notions-avancees/hoc/LogUpdate';
import LazySuspense from './notions-avancees/lazy/LazySuspense';
import MemoStateLess from './notions-avancees/memo/MemoStateLess';

import SimpleReduxApp from './redux/simple-demo/App';
import ReduxApp from './redux/application/App';
import ReduxCustomMiddleware from './redux/custom-middleware/App';
import ReduxLogger from './redux/logger/App';
import ReduxPersist from './redux/persist/App';
import ReduxThunk from './redux/thunk/App';
import ReduxSelectors from './redux/selectors/Console';

const creerUnComposant = [
  {
    hash: 'creer-un-composant/component',
    render: () => <SimpleComponentClass />,
  },
  {
    hash: 'creer-un-composant/this',
    render: () => <SimpleClassMethod />,
  },
  {
    hash: 'creer-un-composant/state',
    render: () => <SimpleStateDemo />,
  },
  {
    hash: 'creer-un-composant/component-update',
    render: () => <ComponentUpdate />,
  },
  {
    hash: 'creer-un-composant/controlled-component',
    render: () => <SimpleControlledComponent />,
  },
  {
    hash: 'creer-un-composant/application-feed',
    render: () => <ApplicationFeed />,
  },
  {
    hash: 'creer-un-composant/props',
    render: () => <SimplePropsDemo />,
  },
  {
    hash: 'creer-un-composant/prop-types',
    render: () => <PropTypesDemo showTitle={true} />,
  },
  {
    hash: 'creer-un-composant/reserved-props',
    render: () => <ReservedProps />,
  },
  {
    hash: 'creer-un-composant/errors',
    render: () => <ComponentErrors />,
  },
  {
    hash: 'creer-un-composant/application-split-components-feed',
    render: () => <ApplicationSplitComponentsFeed />,
  },
];

const notionsAvancees = [
  {
    hash: '- - - -',
  },
  {
    hash: 'notions-avancees/render-prop',
    render: () => <RenderProps />,
  },
  {
    hash: 'notions-avancees/hoc',
    render: () => <LogUpdate />,
  },
  {
    hash: 'notions-avancees/lazy-suspense',
    render: () => <LazySuspense />,
  },
  {
    hash: 'notions-avancees/memo',
    render: () => <MemoStateLess />,
  },
];

const redux = [
  {
    hash: '- - - - -',
  },
  {
    hash: 'redux/simple-app',
    render: () => <SimpleReduxApp />,
  },
  {
    hash: 'redux/app',
    render: () => <ReduxApp />,
  },
  {
    hash: 'redux/custom-middleware',
    render: () => <ReduxCustomMiddleware />,
  },
  {
    hash: 'redux/logger',
    render: () => <ReduxLogger />,
  },
  {
    hash: 'redux/persist',
    render: () => <ReduxPersist />,
  },
  {
    hash: 'redux/thunk',
    render: () => <ReduxThunk />,
  },
  {
    hash: 'redux/selectors',
    render: () => <ReduxSelectors />,
  },
];

const components = [
  ...creerUnComposant,
  ...notionsAvancees,
  ...redux,
];

export default components;
