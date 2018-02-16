/* eslint-disable */
// Generated by AvoCode VERSION 0.0.1, PLEASE EDIT WITH CARE

var amplitude = require('avo-amplitude-js');

var amplitudeDevApiKey = '26aeb7d9e9737f62d9bc9d10f7efdc9a';
var amplitudeProdApiKey = '26aeb7d9e9737f62d9bc9d10f7efdc9a';

if (process.env.NODE_ENV !== 'production') {
  amplitude.init(amplitudeDevApiKey);
} else {
  amplitude.init(amplitudeProdApiKey);
}

var asserts;

if (process.env.NODE_ENV !== 'production') {
  asserts = require('avo-assert-js');
}

function counterIncrement(oldValue, newValue) {
  if (process.env.NODE_ENV !== 'production') {
    assertOldValue(oldValue);
    assertNewValue(newValue);
  }

  amplitude.logEvent('Counter Increment', {
    'Old Value': oldValue,
    'New Value': newValue
  });
}

function counterDecrement(oldValue, newValue) {
  if (process.env.NODE_ENV !== 'production') {
    assertOldValue(oldValue);
    assertNewValue(newValue);
  }

  amplitude.logEvent('Counter Decrement', {
    'Old Value': oldValue,
    'New Value': newValue
  });
}

if (process.env.NODE_ENV !== 'production') {
  var assertOldValue = function(oldValue) {
    asserts.assertInt('Old Value', oldValue);
  };
  var assertNewValue = function(newValue) {
    asserts.assertInt('New Value', newValue);
  };
}

exports.counterIncrement = counterIncrement;
exports.counterDecrement = counterDecrement;
