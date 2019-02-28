import React from 'react';

const Sample = () => <p>StateLess sample</p>;

const SampleWithProps = (props) => <p>StateLess with props: {props.text}</p>;

export default {
  Sample,
  SampleWithProps,
};